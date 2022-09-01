const exercise = document.querySelector(".exercise");
const reps = document.querySelector(".reps");
const sets = document.querySelector(".sets");
const time = document.querySelector(".time");
const form = document.querySelector(".make_wrk");
const workoutbtn = document.querySelector(".postworkout");
const workfield = document.querySelector(".workouts");

workoutbtn.addEventListener("click", userdata);
workfield.addEventListener("click", deleteuserdata);

function userdata(e) {
  e.preventDefault();

  const datafield = document.createElement("div");
  datafield.classList.add("datadiv");

  const exercisename = document.createElement("h5");
  exercisename.innerText = exercise.value;
  exercisename.classList.add("workouttitle");
  datafield.appendChild(exercisename);

  const numberreps = document.createElement("p1");
  numberreps.innerText = reps.value;
  const repstitle = document.createElement("p1");
  repstitle.innerHTML = "reps";
  numberreps.appendChild(repstitle);
  numberreps.classList.add("workout-details");
  datafield.appendChild(numberreps);

  const numbersets = document.createElement("p1");
  numbersets.innerText = sets.value;
  const setstitle = document.createElement("p1");
  setstitle.innerHTML = "sets";
  numbersets.appendChild(setstitle);
  numbersets.classList.add("workout-details");
  datafield.appendChild(numbersets);

  const workouttime = document.createElement("p1");
  workouttime.innerText = time.value;
  const timetitle = document.createElement("p1");
  timetitle.innerHTML = "time";
  workouttime.appendChild(timetitle);
  workouttime.classList.add("workout-details");
  datafield.appendChild(workouttime);

  const deletediv = document.createElement("button");
  deletediv.innerText = "X";
  deletediv.classList.add("deletebutton");
  datafield.appendChild(deletediv);

  workfield.appendChild(datafield);
}

function deleteuserdata(e) {
  const item = e.target;
  if (item.classList[0] === "deletebutton") {
    const datadiv = item.parentElement;

    datadiv.remove();
  }
}

//cardio

const cardio1 = document.querySelector(".cardio1");
const addcardo1 = document.querySelector(".add");

addcardo1.addEventListener("click", cardio01);
workfield.addEventListener("click", deletecardio1);

function cardio01(e) {
  e.preventDefault();

  const exercisediv = document.createElement("div");
  exercisediv.classList.add("exercisediv");

  const title = document.createElement("h1");
  title.innerHTML = "Jogging in place";
  title.classList.add("title");
  exercisediv.appendChild(title);
  const duration = document.createElement("p1");
  duration.innerHTML = "01:00 min";
  duration.classList.add("duration");
  exercisediv.appendChild(duration);

  const deletecardio1_btn = document.createElement("button");
  deletecardio1_btn.innerText = "X";
  deletecardio1_btn.classList.add("deletecardio1_btn");
  exercisediv.appendChild(deletecardio1_btn);

  workfield.appendChild(exercisediv);
}

function deletecardio1(e) {
  const item = e.target;
  if (item.classList[0] === "deletecardio1_btn") {
    const exercisediv = item.parentElement;

    exercisediv.remove();
  }
}

const cardio2 = document.querySelector(".cardio2");
const addcardo2 = document.querySelector(".add2");

addcardo2.addEventListener("click", cardio02);
workfield.addEventListener("click", deletecardio2);

function cardio02(e) {
  e.preventDefault();

  const exercisediv = document.createElement("div");
  exercisediv.classList.add("exercisediv");

  const title = document.createElement("h1");
  title.innerHTML = "Plank";
  title.classList.add("title");
  exercisediv.appendChild(title);
  const duration = document.createElement("p1");
  duration.innerHTML = "00:30 min";
  duration.classList.add("duration");
  exercisediv.appendChild(duration);

  const deletecardio2_btn = document.createElement("button");
  deletecardio2_btn.innerText = "X";
  deletecardio2_btn.classList.add("deletecardio1_btn");
  exercisediv.appendChild(deletecardio2_btn);

  workfield.appendChild(exercisediv);
}

function deletecardio2(e) {
  const item = e.target;
  if (item.classList[0] === "deletecardio1_btn") {
    const exercisediv = item.parentElement;

    exercisediv.remove();
  }
}

const cardio3 = document.querySelector(".cardio3");
const addcardo3 = document.querySelector(".add3");

addcardo3.addEventListener("click", cardio03);
workfield.addEventListener("click", deletecardio3);

function cardio03(e) {
  e.preventDefault();

  const exercisediv = document.createElement("div");
  exercisediv.classList.add("exercisediv");

  const title = document.createElement("h1");
  title.innerHTML = "Jump rope";
  title.classList.add("title");
  exercisediv.appendChild(title);
  const duration = document.createElement("p1");
  duration.innerHTML = "01:00 min";
  duration.classList.add("duration");
  exercisediv.appendChild(duration);

  const deletecardio3_btn = document.createElement("button");
  deletecardio3_btn.innerText = "X";
  deletecardio3_btn.classList.add("deletecardio1_btn");
  exercisediv.appendChild(deletecardio3_btn);

  workfield.appendChild(exercisediv);
}

function deletecardio3(e) {
  const item = e.target;
  if (item.classList[0] === "deletecardio1_btn") {
    const exercisediv = item.parentElement;

    exercisediv.remove();
  }
}

//legs
const legs1 = document.querySelector(".legs1");
const addlegs1 = document.querySelector(".addlegs1");

addlegs1.addEventListener("click", legs01);
workfield.addEventListener("click", deletelegs1);

function legs01(e) {
  e.preventDefault();

  const exercisediv = document.createElement("div");
  exercisediv.classList.add("exercisediv");

  const title = document.createElement("h1");
  title.innerHTML = "Wall sit";
  title.classList.add("title");
  exercisediv.appendChild(title);
  const duration = document.createElement("p1");
  duration.innerHTML = "00:30 min";
  duration.classList.add("duration");
  exercisediv.appendChild(duration);

  const deletelegs1_btn = document.createElement("button");
  deletelegs1_btn.innerText = "X";
  deletelegs1_btn.classList.add("deletecardio1_btn");
  exercisediv.appendChild(deletelegs1_btn);

  workfield.appendChild(exercisediv);
}

function deletelegs1(e) {
  const item = e.target;
  if (item.classList[0] === "deletecardio1_btn") {
    const exercisediv = item.parentElement;

    exercisediv.remove();
  }
}

const legs2 = document.querySelector(".legs2");
const addlegs2 = document.querySelector(".addlegs2");

addlegs2.addEventListener("click", legs02);
workfield.addEventListener("click", deletelegs2);

function legs02(e) {
  e.preventDefault();

  const exercisediv = document.createElement("div");
  exercisediv.classList.add("exercisediv");

  const title = document.createElement("h1");
  title.innerHTML = "Squats";
  title.classList.add("title");
  exercisediv.appendChild(title);
  const duration = document.createElement("p1");
  duration.innerHTML = "x 15";
  duration.classList.add("duration");
  exercisediv.appendChild(duration);

  const deletelegs2_btn = document.createElement("button");
  deletelegs2_btn.innerText = "X";
  deletelegs2_btn.classList.add("deletecardio1_btn");
  exercisediv.appendChild(deletelegs2_btn);

  workfield.appendChild(exercisediv);
}

function deletelegs2(e) {
  const item = e.target;
  if (item.classList[0] === "deletecardio1_btn") {
    const exercisediv = item.parentElement;

    exercisediv.remove();
  }
}

const legs3 = document.querySelector(".legs3");
const addlegs3 = document.querySelector(".addlegs3");

addlegs3.addEventListener("click", legs03);
workfield.addEventListener("click", deletelegs3);

function legs03(e) {
  e.preventDefault();

  const exercisediv = document.createElement("div");
  exercisediv.classList.add("exercisediv");

  const title = document.createElement("h1");
  title.innerHTML = "Jumping squats";
  title.classList.add("title");
  exercisediv.appendChild(title);
  const duration = document.createElement("p1");
  duration.innerHTML = "x 15";
  duration.classList.add("duration");
  exercisediv.appendChild(duration);

  const deletelegs3_btn = document.createElement("button");
  deletelegs3_btn.innerText = "X";
  deletelegs3_btn.classList.add("deletecardio1_btn");
  exercisediv.appendChild(deletelegs3_btn);

  workfield.appendChild(exercisediv);
}

function deletelegs3(e) {
  const item = e.target;
  if (item.classList[0] === "deletecardio1_btn") {
    const exercisediv = item.parentElement;

    exercisediv.remove();
  }
}

//arms

const arms1 = document.querySelector(".arms1");
const addarms1 = document.querySelector(".addarms1");

addarms1.addEventListener("click", arms01);
workfield.addEventListener("click", deletearms1);

function arms01(e) {
  e.preventDefault();

  const exercisediv = document.createElement("div");
  exercisediv.classList.add("exercisediv");

  const title = document.createElement("h1");
  title.innerHTML = "Decline push-ups";
  title.classList.add("title");
  exercisediv.appendChild(title);
  const duration = document.createElement("p1");
  duration.innerHTML = "x 15";
  duration.classList.add("duration");
  exercisediv.appendChild(duration);

  const deletearms1_btn = document.createElement("button");
  deletearms1_btn.innerText = "X";
  deletearms1_btn.classList.add("deletecardio1_btn");
  exercisediv.appendChild(deletearms1_btn);

  workfield.appendChild(exercisediv);
}

function deletearms1(e) {
  const item = e.target;
  if (item.classList[0] === "deletecardio1_btn") {
    const exercisediv = item.parentElement;

    exercisediv.remove();
  }
}

const arms2 = document.querySelector(".arms2");
const addarms2 = document.querySelector(".addarms2");

addarms2.addEventListener("click", arms02);
workfield.addEventListener("click", deletearms2);

function arms02(e) {
  e.preventDefault();

  const exercisediv = document.createElement("div");
  exercisediv.classList.add("exercisediv");

  const title = document.createElement("h1");
  title.innerHTML = "Diamond push-ups";
  title.classList.add("title");
  exercisediv.appendChild(title);
  const duration = document.createElement("p1");
  duration.innerHTML = "x 15";
  duration.classList.add("duration");
  exercisediv.appendChild(duration);

  const deletearms2_btn = document.createElement("button");
  deletearms2_btn.innerText = "X";
  deletearms2_btn.classList.add("deletecardio1_btn");
  exercisediv.appendChild(deletearms2_btn);

  workfield.appendChild(exercisediv);
}

function deletearms2(e) {
  const item = e.target;
  if (item.classList[0] === "deletecardio1_btn") {
    const exercisediv = item.parentElement;

    exercisediv.remove();
  }
}

const arms3 = document.querySelector(".arms3");
const addarms3 = document.querySelector(".addarms3");

addarms3.addEventListener("click", arms03);
workfield.addEventListener("click", deletearms3);

function arms03(e) {
  e.preventDefault();

  const exercisediv = document.createElement("div");
  exercisediv.classList.add("exercisediv");

  const title = document.createElement("h1");
  title.innerHTML = "Push-ups";
  title.classList.add("title");
  exercisediv.appendChild(title);
  const duration = document.createElement("p1");
  duration.innerHTML = "x 15";
  duration.classList.add("duration");
  exercisediv.appendChild(duration);

  const deletearms3_btn = document.createElement("button");
  deletearms3_btn.innerText = "X";
  deletearms3_btn.classList.add("deletecardio1_btn");
  exercisediv.appendChild(deletearms3_btn);

  workfield.appendChild(exercisediv);
}

function deletearms3(e) {
  const item = e.target;
  if (item.classList[0] === "deletecardio1_btn") {
    const exercisediv = item.parentElement;

    exercisediv.remove();
  }
}

//lose weight

const lose1 = document.querySelector(".lose1");
const addlose1 = document.querySelector(".addlose1");

addlose1.addEventListener("click", lose01);
workfield.addEventListener("click", deletelose1);

function lose01(e) {
  e.preventDefault();

  const exercisediv = document.createElement("div");
  exercisediv.classList.add("exercisediv");

  const title = document.createElement("h1");
  title.innerHTML = "Bodyweight squats";
  title.classList.add("title");
  exercisediv.appendChild(title);
  const duration = document.createElement("p1");
  duration.innerHTML = "x 15";
  duration.classList.add("duration");
  exercisediv.appendChild(duration);

  const deletelose1_btn = document.createElement("button");
  deletelose1_btn.innerText = "X";
  deletelose1_btn.classList.add("deletecardio1_btn");
  exercisediv.appendChild(deletelose1_btn);

  workfield.appendChild(exercisediv);
}

function deletelose1(e) {
  const item = e.target;
  if (item.classList[0] === "deletecardio1_btn") {
    const exercisediv = item.parentElement;

    exercisediv.remove();
  }
}

const lose2 = document.querySelector(".lose2");
const addlose2 = document.querySelector(".addlose2");

addlose2.addEventListener("click", lose02);
workfield.addEventListener("click", deletelose2);

function lose02(e) {
  e.preventDefault();

  const exercisediv = document.createElement("div");
  exercisediv.classList.add("exercisediv");

  const title = document.createElement("h1");
  title.innerHTML = "Jump Squat";
  title.classList.add("title");
  exercisediv.appendChild(title);
  const duration = document.createElement("p1");
  duration.innerHTML = "x 15";
  duration.classList.add("duration");
  exercisediv.appendChild(duration);

  const deletelose2_btn = document.createElement("button");
  deletelose2_btn.innerText = "X";
  deletelose2_btn.classList.add("deletecardio1_btn");
  exercisediv.appendChild(deletelose2_btn);

  workfield.appendChild(exercisediv);
}

function deletelose2(e) {
  const item = e.target;
  if (item.classList[0] === "deletecardio1_btn") {
    const exercisediv = item.parentElement;

    exercisediv.remove();
  }
}

const lose3 = document.querySelector(".lose3");
const addlose3 = document.querySelector(".addlose3");

addlose3.addEventListener("click", lose03);
workfield.addEventListener("click", deletelose3);

function lose03(e) {
  e.preventDefault();

  const exercisediv = document.createElement("div");
  exercisediv.classList.add("exercisediv");

  const title = document.createElement("h1");
  title.innerHTML = "Reverse lunge";
  title.classList.add("title");
  exercisediv.appendChild(title);
  const duration = document.createElement("p1");
  duration.innerHTML = "x 10";
  duration.classList.add("duration");
  exercisediv.appendChild(duration);

  const deletelose3_btn = document.createElement("button");
  deletelose3_btn.innerText = "X";
  deletelose3_btn.classList.add("deletecardio1_btn");
  exercisediv.appendChild(deletelose3_btn);

  workfield.appendChild(exercisediv);
}

function deletelose3(e) {
  const item = e.target;
  if (item.classList[0] === "deletecardio1_btn") {
    const exercisediv = item.parentElement;

    exercisediv.remove();
  }
}

//back

const back1 = document.querySelector(".back1");
const addback1 = document.querySelector(".addback1");

addback1.addEventListener("click", back01);
workfield.addEventListener("click", deleteback1);

function back01(e) {
  e.preventDefault();

  const exercisediv = document.createElement("div");
  exercisediv.classList.add("exercisediv");

  const title = document.createElement("h1");
  title.innerHTML = "Triceps Dips";
  title.classList.add("title");
  exercisediv.appendChild(title);
  const duration = document.createElement("p1");
  duration.innerHTML = "x 14";
  duration.classList.add("duration");
  exercisediv.appendChild(duration);

  const deleteback1_btn = document.createElement("button");
  deleteback1_btn.innerText = "X";
  deleteback1_btn.classList.add("deletecardio1_btn");
  exercisediv.appendChild(deleteback1_btn);

  workfield.appendChild(exercisediv);
}

function deleteback1(e) {
  const item = e.target;
  if (item.classList[0] === "deletecardio1_btn") {
    const exercisediv = item.parentElement;

    exercisediv.remove();
  }
}

const back2 = document.querySelector(".back2");
const addback2 = document.querySelector(".addback2");

addback2.addEventListener("click", back02);
workfield.addEventListener("click", deleteback1);

function back02(e) {
  e.preventDefault();

  const exercisediv = document.createElement("div");
  exercisediv.classList.add("exercisediv");

  const title = document.createElement("h1");
  title.innerHTML = "Incline Push-ups";
  title.classList.add("title");
  exercisediv.appendChild(title);
  const duration = document.createElement("p1");
  duration.innerHTML = "x 15";
  duration.classList.add("duration");
  exercisediv.appendChild(duration);

  const deleteback2_btn = document.createElement("button");
  deleteback2_btn.innerText = "X";
  deleteback2_btn.classList.add("deletecardio1_btn");
  exercisediv.appendChild(deleteback2_btn);

  workfield.appendChild(exercisediv);
}

function deleteback2(e) {
  const item = e.target;
  if (item.classList[0] === "deletecardio1_btn") {
    const exercisediv = item.parentElement;

    exercisediv.remove();
  }
}

const back3 = document.querySelector(".back3");
const addback3 = document.querySelector(".addback3");

addback3.addEventListener("click", back03);
workfield.addEventListener("click", deleteback3);

function back03(e) {
  e.preventDefault();

  const exercisediv = document.createElement("div");
  exercisediv.classList.add("exercisediv");

  const title = document.createElement("h1");
  title.innerHTML = "Spine Push-ups";
  title.classList.add("title");
  exercisediv.appendChild(title);
  const duration = document.createElement("p1");
  duration.innerHTML = "x 10";
  duration.classList.add("duration");
  exercisediv.appendChild(duration);

  const deleteback3_btn = document.createElement("button");
  deleteback3_btn.innerText = "X";
  deleteback3_btn.classList.add("deletecardio1_btn");
  exercisediv.appendChild(deleteback3_btn);

  workfield.appendChild(exercisediv);
}

function deleteback3(e) {
  const item = e.target;
  if (item.classList[0] === "deletecardio1_btn") {
    const exercisediv = item.parentElement;

    exercisediv.remove();
  }
}

//Chest

const chest1 = document.querySelector(".chest1");
const addchest1 = document.querySelector(".addchest1");

addchest1.addEventListener("click", chest01);
workfield.addEventListener("click", deletechest1);

function chest01(e) {
  e.preventDefault();

  const exercisediv = document.createElement("div");
  exercisediv.classList.add("exercisediv");

  const title = document.createElement("h1");
  title.innerHTML = "Pull ups";
  title.classList.add("title");
  exercisediv.appendChild(title);
  const duration = document.createElement("p1");
  duration.innerHTML = "x 10";
  duration.classList.add("duration");
  exercisediv.appendChild(duration);

  const deletechest1_btn = document.createElement("button");
  deletechest1_btn.innerText = "X";
  deletechest1_btn.classList.add("deletecardio1_btn");
  exercisediv.appendChild(deletechest1_btn);

  workfield.appendChild(exercisediv);
}

function deletechest1(e) {
  const item = e.target;
  if (item.classList[0] === "deletecardio1_btn") {
    const exercisediv = item.parentElement;

    exercisediv.remove();
  }
}

const chest2 = document.querySelector(".chest2");
const addchest2 = document.querySelector(".addchest2");

addchest2.addEventListener("click", chest02);
workfield.addEventListener("click", deletechest2);

function chest02(e) {
  e.preventDefault();

  const exercisediv = document.createElement("div");
  exercisediv.classList.add("exercisediv");

  const title = document.createElement("h1");
  title.innerHTML = "Bench Press";
  title.classList.add("title");
  exercisediv.appendChild(title);
  const duration = document.createElement("p1");
  duration.innerHTML = "x 15";
  duration.classList.add("duration");
  exercisediv.appendChild(duration);

  const deletechest2_btn = document.createElement("button");
  deletechest2_btn.innerText = "X";
  deletechest2_btn.classList.add("deletecardio1_btn");
  exercisediv.appendChild(deletechest2_btn);

  workfield.appendChild(exercisediv);
}

function deletechest2(e) {
  const item = e.target;
  if (item.classList[0] === "deletecardio1_btn") {
    const exercisediv = item.parentElement;

    exercisediv.remove();
  }
}

const chest3 = document.querySelector(".chest3");
const addchest3 = document.querySelector(".addchest3");

addchest3.addEventListener("click", chest03);
workfield.addEventListener("click", deletechest3);

function chest03(e) {
  e.preventDefault();

  const exercisediv = document.createElement("div");
  exercisediv.classList.add("exercisediv");

  const title = document.createElement("h1");
  title.innerHTML = "Dumbbell Pullover";
  title.classList.add("title");
  exercisediv.appendChild(title);
  const duration = document.createElement("p1");
  duration.innerHTML = "x 15";
  duration.classList.add("duration");
  exercisediv.appendChild(duration);

  const deletechest3_btn = document.createElement("button");
  deletechest3_btn.innerText = "X";
  deletechest3_btn.classList.add("deletecardio1_btn");
  exercisediv.appendChild(deletechest3_btn);

  workfield.appendChild(exercisediv);
}

function deletechest3(e) {
  const item = e.target;
  if (item.classList[0] === "deletecardio1_btn") {
    const exercisediv = item.parentElement;

    exercisediv.remove();
  }
}
// const exercisename = document.querySelector(".exercise");
// const reps = document.querySelector(".reps");
// const sets = document.querySelector(".sets");
// const time = document.querySelector(".time");
// const workoutbtn = document.querySelector(".postworkout");
// const workspace = document.querySelector(".workouts");
// const form = document.querySelector(".make_wrk");

// form.addEventListener("submit", addworkout);
// workoutbtn.addEventListener("click", deletecontent);
// // workspace.addEventListener("click", deletelist);
// //console.log(workoutbtn);

// function addworkout(event) {
//   event.preventDefault();
//   //

//   const allworkdiv = document.createElement("div");
//   allworkdiv.classList.add("allworkdiv");

//   const workdiv = document.createElement("div");
//   workdiv.classList.add("newwork");

//   const workdetails = document.createElement("div");
//   workdetails.classList.add("detailswork");

//   const workoutname = document.createElement("h5");
//   workoutname.innerText = exercisename.value;
//   workoutname.classList.add("workout-items");
//   workdiv.appendChild(workoutname);

//   const noreps = document.createElement("h4");
//   noreps.innerText = reps.value;
//   const para = document.createElement("p");
//   para.innerHTML = "Reps";
//   noreps.classList.add("workout-items");
//   noreps.appendChild(para);
//   workdetails.appendChild(noreps);

//   const nosets = document.createElement("h4");
//   nosets.innerText = sets.value;
//   const para1 = document.createElement("p");
//   para1.innerHTML = "Sets";
//   nosets.classList.add("workout-items");
//   nosets.appendChild(para1);
//   workdetails.appendChild(nosets);

//   const worktime = document.createElement("h4");
//   worktime.innerText = time.value;
//   const para3 = document.createElement("p");
//   para3.innerHTML = "Min";
//   worktime.classList.add("workout-items");
//   worktime.appendChild(para3);
//   workdetails.appendChild(worktime);

//   const trashButton = document.createElement("button");
//   trashButton.innerHTML = "";
//   trashButton.classList.add("trash-btn");
//   workdetails.appendChild(trashButton);

//   allworkdiv.appendChild(workdiv);
//   allworkdiv.appendChild(workdetails);

//   workspace.appendChild(allworkdiv);
// }

// function deletecontent(e) {
//   const cont = document.querySelector(workspace);
//   cont.remove();
// }
// // function deletelist(e) {
// //   //   const item = e.target;

// //   //const allworkdiv = item.parentElement;
// //   //const
// //   const workelement = document.querySelector(".allworkdiv");
// //   workelement.remove();
// //   //post.classList.add("nomo");
// //   //allworkdiv.addEventListener("transitionend", function () {});
// // }

// //First cardio workout

// const cardio1 = document.querySelector(".cardio1");
// const add_btn = document.querySelector(".add");
// //const workspace = document.querySelector(".workouts");

// add_btn.addEventListener("click", addwrk);
// // workspace.addEventListener("click", deletelistdiv);

// function addwrk(e) {
//   e.preventDefault();

//   const adddiv = document.createElement("div");
//   adddiv.classList.add("adddiv");

//   const para = document.createElement("p");
//   para.classList.add("styleint");
//   para.innerHTML = "Jogging in Places";
//   adddiv.appendChild(para);

//   const para1 = document.createElement("p");
//   para1.classList.add("styleint");
//   para1.innerHTML = "01:00 min";
//   adddiv.appendChild(para1);

//   const trashButton = document.createElement("button");
//   trashButton.innerHTML = "";
//   trashButton.classList.add("trash-btn");
//   adddiv.appendChild(trashButton);

//   workspace.appendChild(adddiv);
// }

// //second cardio workout

// const add_btn2 = document.querySelector(".add2");
// //const workspace = document.querySelector(".workouts");

// add_btn2.addEventListener("click", addwrk2);
// // workspace.addEventListener("click", deletelistdiv);

// function addwrk2(e) {
//   e.preventDefault();

//   const adddiv = document.createElement("div");
//   adddiv.classList.add("adddiv");

//   const para = document.createElement("p");
//   para.classList.add("styleint");
//   para.innerHTML = "Plank";
//   adddiv.appendChild(para);

//   const para1 = document.createElement("p");
//   para1.classList.add("styleint");
//   para1.innerHTML = "00:30 min";
//   adddiv.appendChild(para1);

//   const trashButton = document.createElement("button");
//   trashButton.innerHTML = "";
//   trashButton.classList.add("trash-btn");
//   adddiv.appendChild(trashButton);

//   workspace.appendChild(adddiv);
// }

// //third cardio workout

// const add_btn3 = document.querySelector(".add3");
// //const workspace = document.querySelector(".workouts");

// add_btn3.addEventListener("click", addwrk3);
// // workspace.addEventListener("click", deletelist);

// function addwrk3(e) {
//   e.preventDefault();

//   const adddiv = document.createElement("div");
//   adddiv.classList.add("adddiv");

//   const para = document.createElement("p");
//   para.classList.add("styleint");
//   para.innerHTML = "Jump rope";
//   adddiv.appendChild(para);

//   const para1 = document.createElement("p");
//   para1.classList.add("styleint");
//   para1.innerHTML = "01:00 min";
//   adddiv.appendChild(para1);

//   const trashButton = document.createElement("button");
//   trashButton.innerHTML = "";
//   trashButton.classList.add("trash-btn");
//   adddiv.appendChild(trashButton);

//   workspace.appendChild(adddiv);
// }

// // function deletelistdiv(e) {
// //   const item = e.target;

// //   if (item.classList[0] === "trash-btn") {
// //     //     //const allworkdiv = item.parentElement;
// //     //     //const
// //     const premadediv = document.querySelector(".adddiv");
// //     premadediv.remove();
// //     //post.classList.add("nomo");
// //     //allworkdiv.addEventListener("transitionend", function () {});
// //   }
// // }

// //legs divs

// const legs1 = document.querySelector(".legs1");
// const addlegs1 = document.querySelector(".addlegs1");

// addlegs1.addEventListener("click", addleg1);
// // workspace.addEventListener("click", deletelegs);

// function addleg1(e) {
//   e.preventDefault();

//   const adddiv = document.createElement("div");
//   adddiv.classList.add("adddiv");

//   const para = document.createElement("p");
//   para.classList.add("styleint");
//   para.innerHTML = "Wall sit";
//   adddiv.appendChild(para);

//   const para1 = document.createElement("p");
//   para1.classList.add("styleint");
//   para1.innerHTML = "00:30 min";
//   adddiv.appendChild(para1);

//   const trashButton = document.createElement("button");
//   trashButton.innerHTML = "";
//   trashButton.classList.add("trash-btn");
//   adddiv.appendChild(trashButton);

//   workspace.appendChild(adddiv);
// }

// const legs2 = document.querySelector(".legs2");
// const addlegs2 = document.querySelector(".addlegs2");

// addlegs2.addEventListener("click", addleg2);
// workspace.addEventListener("click", deletelegs);

// function addleg2() {
//   //   console.log("food");
//   const adddiv = document.createElement("div");
//   adddiv.classList.add("adddiv");

//   const para = document.createElement("p");
//   para.classList.add("styleint");
//   para.innerHTML = "Squats";
//   adddiv.appendChild(para);

//   const para1 = document.createElement("p");
//   para1.classList.add("styleint");
//   para1.innerHTML = "x 15";
//   adddiv.appendChild(para1);

//   const trashButton = document.createElement("button");
//   trashButton.innerHTML = "";
//   trashButton.classList.add("trash-btn");
//   adddiv.appendChild(trashButton);

//   workspace.appendChild(adddiv);
// }
