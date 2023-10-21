let myForm = document.querySelector("form");
let tbody = document.querySelector("tbody");

let employeName = document.getElementById("name");
let employeeId = document.getElementById("employeeID");
let empDepartment = document.getElementById("department");
let empExperiance = document.getElementById("exp");
let empNumber = document.getElementById("mbl");
let empEmail = document.getElementById("email");

myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let role;
  if (empExperiance.value > 5) {
    role = "senior";
  } else if (empExperiance.value >= 2 && empExperiance.value <= 5) {
    role = "junior";
  } else {
    role = "fresher";
  }

  let empArr = [];
  let emplyeeObj = {
    employeName: employeName.value,
    employeID: employeeId.value,
    empDepartment: empDepartment.value,
    empExperiance: empExperiance.value,
    empNumber: empNumber.value,
    empEmail: empEmail.value,
    role: role,
  };
  empArr.push(emplyeeObj);

  empArr.map((ele) => {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");
    let td6 = document.createElement("td");
    let td7 = document.createElement("td");

    td1.textContent = ele.employeName;
    td2.textContent = ele.employeID;
    td3.textContent = ele.empDepartment;
    td4.textContent = ele.empExperiance;
    td5.textContent = ele.empNumber;
    td6.textContent = ele.empEmail;
    td7.textContent = ele.role;

    let btn = document.createElement("button");
    btn.textContent = "Delete";
    btn.addEventListener("click", () => {
      tbody.removeChild(tr);
    });

    tr.append(td1, td2, td3, td4, td6, td5, td7, btn);
    tbody.append(tr);
  });
  employeName.value = "";
  employeeId.value = "";
  empDepartment.value = "";
  empExperiance.value = "";
  empNumber.value = "";
  empEmail.value = "";
});
