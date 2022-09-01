import "mapbox-gl/dist/mapbox-gl.css";
import { Map, Marker, NavigationControl } from "mapbox-gl";
import { Geolocation } from "@capacitor/geolocation";

let map, currentPos;

export const start = async () => {
  try {
    const coordinates = await Geolocation.getCurrentPosition({
      enableHighAccuracy: true,
    });
    successlocation(coordinates);
  } catch (error) {
    errorlocation();
  }

  setupMap(currentPos);
  // return Promise.resolve(map);
};

const MAPBOX_TOKEN =
  "pk.eyJ1IjoidmlydXNzYW1hIiwiYSI6ImNsM2lrMmkydDAxYzYzY3V3N29iYmRlM20ifQ.1am40GGQMgv5YmwIrtllzg";

function successlocation(position) {
  console.log("twice");
  // currentPos = correctFormat([9.004349200000004, 7.403816744176722]);
  currentPos = [position.coords.longitude, position.coords.latitude];
}

function errorlocation() {
  // currentPos = [9.0150929, 7.4529475];
}

function setupMap(center) {
  map = new Map({
    accessToken: MAPBOX_TOKEN,
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: center,
    zoom: 15,
  });

  addMarker(center);

  map.addControl(new NavigationControl());

  map.on("load", () => {
    // getRouteTo(center);

    if (map.getSource("point")) return;

    map.addLayer({
      id: "point",
      type: "circle",
      source: {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              properties: {},
              geometry: {
                type: "Point",
                coordinates: center,
              },
            },
          ],
        },
      },
      paint: {
        "circle-radius": 10,
        "circle-color": "#008dff",
      },
    });
  });
}

export function addMarker(position) {
  new Marker().setLngLat(position).addTo(map);
}

export async function getRouteTo(destinationCoords) {
  // make a directions request using cycling profile
  // an arbitrary start will always be the same
  // only the end or destination will change

  addMarker(destinationCoords);

  // for transitioning to the location
  map.fitBounds([destinationCoords, currentPos], {
    padding: 60,
  });

  const query = await fetch(
    `https://api.mapbox.com/directions/v5/mapbox/driving/${currentPos[0]},${currentPos[1]};${destinationCoords[0]},${destinationCoords[1]}?alternatives=true&geometries=geojson&language=en&overview=full&steps=true&access_token=${MAPBOX_TOKEN}`
  );

  const json = await query.json();
  const data = json.routes[0];
  const route = data.geometry.coordinates;
  const geojson = {
    type: "Feature",
    properties: {},
    geometry: {
      type: "LineString",
      coordinates: route,
    },
  };
  // if the route already exists on the map, we'll reset it using setData
  if (map.getSource("route")) {
    map.getSource("route").setData(geojson);
  }
  // otherwise, we'll make a new request
  else {
    map.addLayer({
      id: "route",
      type: "line",
      source: {
        type: "geojson",
        data: geojson,
      },
      layout: {
        "line-join": "round",
        "line-cap": "round",
      },
      paint: {
        "line-color": "#008dff",
        "line-width": 5,
        "line-opacity": 0.75,
      },
    });
  }
}

export function correctFormat(arr) {
  return arr.reverse();
}
