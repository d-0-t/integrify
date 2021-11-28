/*
Possible improvements:
- introduce sorting (not checked, checked - requires refactoring)
- editing option (slightly complicated, but doable)
*/


// Submit task on pressing enter and clear the field
window.onload=function(){
  document.getElementById("taskText")
  .addEventListener("keyup", function(event) {
    event.preventDefault();
    // both .code and .keyCode needed for compatibility purposes
    // "keyCode" is deprecated, but "code" is not implemented in all browsers yet
    if (event.code === "Enter" || event.keyCode === 13) {
        document.getElementById("submitTask").click();
        document.getElementById('taskText').value = "";
    }
  });
}


// Find out if the id already exists
// The first available ID will be assigned
// This is needed because upon deletion the IDs will be duplicated
function whatIdToAppend() {
  let node = document.getElementById('taskList');
  if (node === null || node.children.length === 0) {
    return "0";
  } 
  let count = 0;
  let nodeIdArray = [];
  for (let i = 0; i < node.children.length; i++) {
    nodeIdArray.push(node.children[i].id);
  }
  while (nodeIdArray.includes("task" + count)) {
    count++;
  }
  return count;
}


function addTask() {
  // Prevent empty/whitespace submission
  if (document.getElementById("taskText").value.trim() == "") {
    return;
  }

  let newId = "task" + whatIdToAppend();

  let checkMark = document.createElement("DIV");
  checkMark.setAttribute("class","checkMark");
  checkMark.setAttribute("onclick","checkThisTask('" + newId + "')");

  let deleteMark = document.createElement("DIV");
  deleteMark.setAttribute("class","deleteMark");
  deleteMark.setAttribute("onclick","removeThisTask('" + newId + "')");

  let newTaskRow = document.createElement("LI");
  newTaskRow.setAttribute("id", newId);
  newTaskRow.setAttribute("class","notChecked");

  let taskSpan = document.createElement("SPAN");
  let taskElem = document.getElementById("taskText");
  let task = document.createTextNode(taskElem.value);
  taskSpan.appendChild(task);
  
  newTaskRow.appendChild(checkMark);
  newTaskRow.appendChild(taskSpan);
  newTaskRow.appendChild(deleteMark);
  
  document.getElementById("taskList").appendChild(newTaskRow);
  document.getElementById('taskText').value = "";
}


function removeThisTask(taskId) {
  let tasksNode = document.getElementById("taskList");
  let nodeToDelete = document.getElementById(taskId);
  tasksNode.removeChild(nodeToDelete);
}


function checkThisTask(taskId) {
  let nodeToCheck = document.getElementById(taskId);
  if (nodeToCheck.classList.value === "notChecked") {
    nodeToCheck.classList.remove('notChecked');
    nodeToCheck.classList.add('isChecked');
  } else {
    nodeToCheck.classList.remove('isChecked');
    nodeToCheck.classList.add('notChecked');
  }
}


function removeCheckedTasks() {
  let node = document.getElementById('taskList');
  for (let i = 0; i < node.children.length; i++) {
    let child = node.children[i];
    if (child.classList.value === "isChecked") {
      node.removeChild(child);
      // the node now has less children, so
      // same index has to be checked again
      i--;
    }
  }
}


// alternatively could remove all using WHILE, repeatedly removing first child.
// or with query selector
// but meh. not today.
function removeAllTasks() {
  let node = document.getElementById('taskList');
  node.innerHTML = "";
}


let toggleCheckState = 0;
// 0 - check all (default)
// 1 - uncheck all (toggled)
function checkAllTasks() {

  document.getElementById('toggleCheckSpan').innerHTML = "Uncheck all";
  let classValue = "notChecked";
  let toggleValue = "isChecked";
  if (toggleCheckState === 1) {
    toggleValue = "notChecked";
    classValue = "isChecked"
    document.getElementById('toggleCheckSpan').innerHTML = "Check all";
  }
  let node = document.querySelectorAll("." + classValue);

  node.forEach(elem => {
    elem.classList.value = toggleValue;
  });
  
  if (toggleCheckState === 1) {
    toggleCheckState = 0;
  } else {
    toggleCheckState++;
  } 
}

/*
// You can have the same function without query selector.
// I'd say it's a bit more simple in this case.

function checkAllTasks() {
  let node = Array.from(document.getElementById('taskList').children);
  let toggleValue = "isChecked";
  if (toggleCheckState === 1) {
    toggleValue = "notChecked";
  }

  node.forEach(elem => {
    elem.classList.value = toggleValue;
  });

  if (toggleCheckState === 1) {
    toggleCheckState = 0;
  } else {
    toggleCheckState++;
  } 
}
*/