let myForm = document.querySelector("form");
let taskId = document.getElementById("task");
let priorityId = document.getElementById("priority");
let tbody = document.querySelector("tbody");

myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let arr = [];
  let formObj = {
    task: taskId.value,
    priority: priorityId.value,
  };
  arr.push(formObj);
 
  arr.map((ele) => {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    td1.textContent = ele.task;
    td2.textContent = ele.priority;
    tr.append(td1, td2);
    tbody.append(tr);
  });
});
