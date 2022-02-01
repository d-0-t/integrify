// "No operation" function to reset the startCount function variable later on
function noop() {}

// The counter function
function counter() {

  let ceiling = 1000000;
  let chunk = 10;
  let i = 0;

  function printCount() {
    document.getElementById("counter").innerHTML = i;
  }

  return function play() {
    startCounter = noop;
    if (i >= ceiling) {
      printCount();
      // Reassign the startCount so the counter can be reused and ran more than once
      // Until the {i} hits this ceiling, the button won't respond and no new cycle will run
      startCounter = counter();
      console.log("Loop reset. Ready to begin.");
      return i;
    }
    if (i === 0) {
      console.log(i);
    }
    setTimeout(play, 0);
    if (i % chunk === 0) {
      printCount();
    }
    i++;
    console.log(i);
  }
}

// Assign return value of function to new variable
// StartCount() will start it and return the function inside
// Without noop() the counter can be ran only once
let startCounter = counter(); 


function toggleTestColor() {
  let element = document.getElementById("testColor");
  if (element.classList[0] === "testColor1") {
    element.classList.remove("testColor1");
    element.classList.add("testColor2");
  } else {
    element.classList.remove("testColor2");
    element.classList.add("testColor1");
  }
  console.log("The test color has been changed.")
}