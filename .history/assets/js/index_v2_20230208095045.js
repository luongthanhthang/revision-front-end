import addViewTitle from "./function/todolist/addViewTitle.js";
import addViewDetail from "./function/todolist/addViewDetail.js";
import checkAdvice from "./function/todolist/checkAdvice.js";
import changeColorStatus from "./function/todolist/changeColorStatus.js";
import changeColorPriority from "./function/todolist/changeColorPriority.js";
import changeColorCategory from "./function/todolist/changeColorCategory.js";
import hiddenElementEmpty from "./function/todolist/hiddenElementEmpty.js";
import addFormTitle from "./function/todolist/addFormTitle.js";
import addFormDetail from "./function/todolist/addFormDetail.js";

function changeSidebar() {
  document.getElementById("sidebar").classList.toggle("sidebar-small");
  setCookie("sidebarChange", document.getElementById("sidebar").className);
}

function getDataClient(sidebarChange) {
  document.getElementById("sidebar").className = getCookie(sidebarChange);
  onloadLocalStorageTodoList();
}

// load khi DOM load xong
window.addEventListener("DOMContentLoaded", () => {
  getDataClient("sidebarChange");
  document
    .getElementById("nav-toggle")
    .addEventListener("click", changeSidebar);
  let subMenu = document.querySelectorAll(".nav-links li");

  // subMenu &&: kiểm tra có tồn tại không
  subMenu &&
    subMenu.forEach((item) => {
      item.onclick = () => {
        item.classList.toggle("is-active");
      };
    });
  // --------------trang todo list-------------------
  let sidebarTodoList = document.querySelectorAll(".load-more-member-list");
  sidebarTodoList.forEach((item, index) => {
    item.onclick = () => {
      document
        .querySelectorAll(".list-member")
        [index].classList.toggle("is-active");
      if (
        document
          .querySelectorAll(".list-member")
          [index].className.indexOf("is-active") > -1
      ) {
        item.innerText = "expand_more";
      } else {
        item.innerText = "chevron_right";
      }
    };
  });

  document
    .querySelectorAll(".table-history-todolist .load-more")
    .forEach((item) => {
      item.onclick = () => {
        item.parentElement.parentElement.parentElement
          .querySelectorAll(".title-detail")
          .forEach((itemTitleDetail) => {
            itemTitleDetail.classList.toggle("is-active");
          });
      };
    });

  document
    .getElementById("showFormCreate")
    .addEventListener("click", showFormCreate);
});

function setCookie(cname, cvalue) {
  const d = new Date();
  d.setMonth(d.getMonth() + 1);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie); // lấy cookie
  let ca = decodedCookie.split(";");
  for (const element of ca) {
    let c = element;
    while (c.charAt(0) == " ") {
      c = c.substring(1); // xoá hết khoảng trống đứng đầu
    }
    if (c.indexOf(name) == 0) {
      // keyName đứng đầu
      return c.substring(name.length, c.length); // lấy giá trị cookie string.substring(start, end)
    }
  }
  return "";
}

// --------------------CRUD trang todolist-----------
// dữ liệu
function onloadLocalStorageTodoList() {
  let todoListTable = document.getElementById("view-todolist");
  Object.values(localStorage).forEach((item) => {
    let viewTitle = addViewTitle(JSON.parse(item));
    let viewDetail = addViewDetail(JSON.parse(item));
    todoListTable.appendChild(viewTitle);
    todoListTable.appendChild(viewDetail);

    changeColorCategory(JSON.parse(item));
    changeColorPriority(JSON.parse(item));
    changeColorStatus(JSON.parse(item));
    hiddenElementEmpty(JSON.parse(item));
    checkAdvice();
  });
}

function showFormCreate() {
  let todoListTable = document.getElementById("view-todolist");
  // lọc id
  let id;
  do {
    id = Math.floor(Math.random() * 1000);
  } while (Object.keys(localStorage).includes(`${id}`));

  // lấy lại dữ liệu đang nhập phía trên
  let todoListItem = {
    id,
    nameWorkForm: "",
    categoryWorkForm: "Kế hoạch",
    priorityWorkForm: "Bình thường",
    startTimeWorkForm: "07:00",
    endTimeWorkForm: "07:00",
    detailWorkForm: "",
    resultWorkForm: "",
    statusWorkValue: "Todo",
  };
  let formTitle = addFormTitle(todoListItem);
  let formDetail = addFormDetail(todoListItem);
  formDetail.querySelector(".createTodolist").addEventListener("click", () => {
    create(id);
  });
  formDetail.querySelector(".deleteTodolist").addEventListener("click", () => {
    deleteTodoList(id);
  });

  todoListTable.appendChild(formTitle);
  todoListTable.appendChild(formDetail);
}

function create(idElement) {
  let titleElementForm = document.getElementById(`form-title-${idElement}`);
  let detailElementForm = document.getElementById(`form-detail-${idElement}`);

  let nameWorkForm = titleElementForm.querySelector(".name-work-form").value;
  let categoryWorkForm = titleElementForm.querySelector(
    ".category-work-form"
  ).value;
  let priorityWorkForm = titleElementForm.querySelector(
    ".priority-work-form"
  ).value;
  let startTimeWorkForm = titleElementForm.querySelector(
    ".start-time-work-form"
  ).value;
  let endTimeWorkForm = titleElementForm.querySelector(
    ".end-time-work-form"
  ).value;
  let detailWorkForm =
    detailElementForm.querySelector(".detail-work-form").value;
  let resultWorkForm =
    detailElementForm.querySelector(".result-work-form").value;
  let statusWorkValue =
    titleElementForm.querySelector(".status-work-value").innerText;

  // validate
  if (nameWorkForm === "") {
    alert("Bạn chưa nhập tên công việc!");
    return;
  }

  let todoListItem = {
    id: idElement,
    nameWorkForm,
    categoryWorkForm,
    priorityWorkForm,
    startTimeWorkForm,
    endTimeWorkForm,
    detailWorkForm,
    resultWorkForm,
    statusWorkValue,
  };

  localStorage.setItem(idElement, JSON.stringify(todoListItem));
  let viewTitle = addViewTitle(todoListItem);
  let viewDetail = addViewDetail(todoListItem);
  let formTitle = document.getElementById(`form-title-${id}`);
  let formDetail = document.getElementById(`form-detail-${id}`);

  let todoListTable = document.getElementById("view-todolist");
  todoListTable.replaceChild(viewTitle, formTitle);
  todoListTable.replaceChild(viewDetail, formDetail);

  // checkAdvice();
}

function deleteTodoList(idElement) {
  let work = JSON.parse(localStorage.getItem(idElement));
  let nameWorkDelete;
  if (work === null) {
    let titleElementForm = document.getElementById(`form-title-${idElement}`);
    let detailElementForm = document.getElementById(`form-detail-${idElement}`);
    nameWorkDelete = titleElementForm.querySelector(".name-work-form").value;
    if (confirm(`Bạn có chắc muốn xóa: ${nameWorkDelete}?`)) {
      titleElementForm.remove();
      detailElementForm.remove();
    }
  } else {
    nameWorkDelete = work.nameWorkForm;
    if (confirm(`Bạn có chắc muốn xóa: ${nameWorkDelete}?`)) {
      if (document.getElementById(`view-title-${idElement}`)) {
        document.getElementById(`view-title-${idElement}`).remove();
        document.getElementById(`view-detail-${idElement}`).remove();
        localStorage.removeItem(idElement);
      } else {
        document.getElementById(`form-title-${idElement}`).remove();
        document.getElementById(`form-detail-${idElement}`).remove();
      }
    }
  }
}

function showFormEdit(idElement) {
  let todoItemEdit = JSON.parse(localStorage.getItem(idElement));
  let viewTitle = document.getElementById(`view-title-${idElement}`);
  let viewDetail = document.getElementById(`view-detail-${idElement}`);

  let formTitle = document.createElement("tr");
  formTitle.setAttribute("class", "add-work");
  formTitle.setAttribute("id", `form-title-${idElement}`);
  formTitle.innerHTML = renderHtmlFormTitle(todoItemEdit, idElement);

  let formDetail = document.createElement("tr");
  formDetail.setAttribute("class", "detail-add-work");
  formDetail.setAttribute("id", `form-detail-${idElement}`);
  formDetail.innerHTML = renderHtmlFormDetail(todoItemEdit, idElement);

  let tableTodoList = document.getElementById("view-todolist");
  tableTodoList.replaceChild(formTitle, viewTitle);
  tableTodoList.replaceChild(formDetail, viewDetail);

  selectOptionTime(idElement);

  let startTimeOption = tableTodoList.querySelector(
    ".start-time-work-form"
  ).children;
  let endTimeOption = tableTodoList.querySelector(
    ".end-time-work-form"
  ).children;
  let length = startTimeOption.length;
  for (let i = 0; i < length; i++) {
    if (startTimeOption[i].value === todoItemEdit.startTimeWorkForm) {
      startTimeOption[i].setAttribute("selected", "selected");
    }
    if (endTimeOption[i].value === todoItemEdit.endTimeWorkForm) {
      endTimeOption[i].setAttribute("selected", "selected");
    }
  }
  changeColorStatus(idElement);
}

function update(elementEdit, index) {
  let elementEditAddWork =
    elementEdit.parentElement.parentElement.parentElement
      .previousElementSibling;
  let elementEditDetailAddWork =
    elementEdit.parentElement.parentElement.parentElement;

  let nameWorkForm = elementEditAddWork.querySelector(".name-work-form").value;
  let categoryWorkForm = elementEditAddWork.querySelector(
    ".category-work-form"
  ).value;
  let priorityWorkForm = elementEditAddWork.querySelector(
    ".priority-work-form"
  ).value;
  let startTimeWorkForm = elementEditAddWork.querySelector(
    ".start-time-work-form"
  ).value;
  let endTimeWorkForm = elementEditAddWork.querySelector(
    ".end-time-work-form"
  ).value;
  let detailWorkForm =
    elementEditDetailAddWork.querySelector(".detail-work-form").value;
  let resultWorkForm =
    elementEditDetailAddWork.querySelector(".result-work-form").value;
  let statusWorkValue =
    elementEditAddWork.querySelector(".status-work-value").innerText;

  // validate
  if (nameWorkForm === "") {
    alert("Bạn chưa nhập tên công việc!");
    return;
  }

  let todoListItem = {
    nameWorkForm: nameWorkForm,
    categoryWorkForm: categoryWorkForm,
    priorityWorkForm: priorityWorkForm,
    startTimeWorkForm: startTimeWorkForm,
    endTimeWorkForm: endTimeWorkForm,
    detailWorkForm: detailWorkForm,
    resultWorkForm: resultWorkForm,
    statusWorkValue: statusWorkValue,
  };

  let todoLists = localStorage.getItem("todoLists")
    ? JSON.parse(localStorage.getItem("todoLists"))
    : [];

  todoLists.splice(index, 1, todoListItem);
  localStorage.setItem("todoLists", JSON.stringify(todoLists));
  checkAdvice();
}

// function addView(item) {
//   let result = document.getElementById("view-todolist");
//   result.appendChild(viewTitle);
//   result.appendChild(viewDetail);
// }

// function addForm(todoListItem, keyItem) {
//   let result = document.getElementById("view-todolist");
//   result.appendChild(formTitle);
//   result.appendChild(formDetail);
// }

// function addFormDetail(todoListItem) {
//   let formDetail = document.createElement("tr");
//   formDetail.setAttribute("class", "detail-add-work");
//   formDetail.setAttribute("id", `form-detail-${todoListItem.id}`);
//   formDetail.innerHTML = renderHtmlFormDetail(todoListItem);
//   return formDetail;
// }

// function addFormTitle(todoListItem) {
//   let formTitle = document.createElement("tr");
//   formTitle.setAttribute("class", "add-work");
//   formTitle.setAttribute("id", `form-title-${todoListItem.id}`);
//   formTitle.innerHTML = renderHtmlFormTitle(todoListItem);
//   return formTitle;
// }

// function addViewDetail(itemWorkDo) {
//   let viewDetail = document.createElement("tr");
//   viewDetail.setAttribute("id", `view-detail-${itemWorkDo.id}`);
//   viewDetail.innerHTML = renderHtmlViewDetail(itemWorkDo);
//   return viewDetail;
// }

// function addViewTitle(itemWorkDo) {
//   let viewTitle = document.createElement("tr");
//   viewTitle.setAttribute("id", `view-title-${itemWorkDo.id}`);
//   viewTitle.innerHTML = renderHtmlViewTitle(itemWorkDo);
//   return viewTitle;
// }

// function changeColorCategory(todoListItem) {
//   let titleStatus;
//   if (document.getElementById(`view-title-${todoListItem.id}`) === null) {
//     titleStatus = document.getElementById(`form-title-${todoListItem.id}`);
//   } else {
//     titleStatus = document.getElementById(`view-title-${todoListItem.id}`);
//   }

//   let itemChangeColor = titleStatus.querySelector(".category-work");
//   switch (itemChangeColor.innerText) {
//     case "Kế hoạch":
//       itemChangeColor.setAttribute("class", "category-work black-text");
//       break;
//     case "Cấp trên giao":
//       itemChangeColor.setAttribute("class", "category-work blue-text");
//       break;
//     case "Đột xuất":
//       itemChangeColor.setAttribute("class", "category-work red-text");
//       break;
//   }
// }

// function changeColorPriority(todoListItem) {
//   let titleStatus;
//   if (document.getElementById(`view-title-${todoListItem.id}`) === null) {
//     titleStatus = document.getElementById(`form-title-${todoListItem.id}`);
//   } else {
//     titleStatus = document.getElementById(`view-title-${todoListItem.id}`);
//   }

//   let itemChangeColor = titleStatus.querySelector(".priority-work");
//   switch (itemChangeColor.innerText) {
//     case "Bình thường":
//       itemChangeColor.setAttribute("class", "priority-work green-text");
//       break;
//     case "Quan trọng":
//       itemChangeColor.setAttribute("class", "priority-work yellow-text");
//       break;
//     case "Rất quan trọng":
//       itemChangeColor.setAttribute("class", "priority-work red-text");
//       break;
//   }
// }

// function changeColorStatus(todoListItem) {
//   let titleStatus;
//   if (document.getElementById(`view-title-${todoListItem.id}`) === null) {
//     titleStatus = document.getElementById(`form-title-${todoListItem.id}`);
//   } else {
//     titleStatus = document.getElementById(`view-title-${todoListItem.id}`);
//   }
//   let updateElement = titleStatus.querySelector(".dropdown");
//   let value = titleStatus.querySelector(".status-work-value").innerText;
//   switch (value) {
//     case "Todo":
//       updateElement.setAttribute("class", "dropdown click todo-status");
//       break;
//     case "Done":
//       updateElement.setAttribute("class", "dropdown click done-status");
//       break;
//     case "Doing":
//       updateElement.setAttribute("class", "dropdown click doing-status");
//       break;
//     case "Pending":
//       updateElement.setAttribute("class", "dropdown click pending-status");
//       break;
//     case "Cancel":
//       updateElement.setAttribute("class", "dropdown click cancel-status");
//       break;
//   }
// }

// function checkAdvice() {
//   let todoList = Object.values(localStorage);
//   if (todoList.every((item) => {return JSON.parse(item).statusWorkValue === "Done";})) {
//     document.querySelector(".last-detail-todolist .advice").innerText =
//       "Quá tuyệt vời, bạn đã hoàn thành Todolist của hôm nay :)";
//   } else {
//     document.querySelector(".last-detail-todolist .advice").innerText =
//       "Tôi biết bạn sẽ làm tốt mà. Hãy hoàn thành thật sớm nhé!";
//   }
// }

// function createDropdown(arrayDropdown, todoListItem) {
//   let result = "";
//   arrayDropdown.map((itemStatus) => {
//     result += `<div onclick="updateStatusWork(this, ${todoListItem.id})" class="dropdown-item">${itemStatus}</div>`;
//   });
//   return result;
// }

// function createOptions(array, valueSelect) {
//   let result = "";
//   array.map((item) => {
//     result += `<option value="${item}" ${item === valueSelect ? "selected" : ""}>${item}</option>`;
//   });
//   return result;
// }

// function createTimeArray(startTime, endTime, hourStep, minuteStep) {
//   let timeArray = [];
//   for (let hour = startTime; hour <= endTime; hour += hourStep) {
//     for (let minute = 0; minute < 60; minute += minuteStep) {
//       let hourSelect;
//       let minuteSelect;
//       if (hour < 10) {
//         hourSelect = "0" + hour;
//       } else {
//         hourSelect = hour;
//       }

//       if (minute == 0) {
//         minuteSelect = "00";
//       } else {
//         minuteSelect = minute;
//       }
//       timeArray.push(`${hourSelect}:${minuteSelect}`);
//     }
//   }
//   return timeArray;
// }

// function hiddenElementEmpty(todoListItem) {
//   let elementHidden = document.getElementById(`view-detail-${todoListItem.id}`);

//   let itemDetail = elementHidden.querySelector(".detail-display");
//   if (itemDetail.innerText === "") {
//     itemDetail.previousElementSibling.style.display = "none";
//   }

//   let itemResult = elementHidden.querySelector(".result-display");
//   if (itemResult.textContent === "") {
//     itemResult.previousElementSibling.style.display = "none";
//   }
// }

// function renderHtmlFormDetail(todoListItem) {
//   return `<td colspan="3">
//   <div class="add-detail">
//     <span class="name">Chi tiết: </span>
//     <textarea
//       class="detail-work-form"
//       rows="2"
//       placeholder="Nhập chi tiết công việc...">${todoListItem.detailWorkForm}</textarea>
//   </div>
//   <div class="add-result">
//     <span class="name">Kết quả: </span>
//     <textarea
//       class="result-work-form"
//       rows="2"
//       placeholder="Nhập chi tiết công việc...">${todoListItem.resultWorkForm}</textarea>
//   </div>
// </td>
// <td colspan="3">
//   <div class="control">
//     <div onclick="create(${todoListItem.id})" class="click edit blue-text">
//       <span class="icon material-icons material-symbols-outlined">
//         update
//       </span>
//       <span>Cập nhật</span>
//     </div>

//     <div onclick="deleteTodoList(${todoListItem.id})" class="click remove red-text">
//       <span class="icon material-icons material-symbols-outlined">
//         delete
//       </span>
//       <span>Xoá</span>
//     </div>
//   </div>
// </td>`;
// }

// function renderHtmlFormTitle(todoListItem) {
//   return ` <td>
//   <input
//     class="box-shadow-5px name-work-form"
//     type="text"
//     placeholder="Nhập tên công việc" value="${todoListItem.nameWorkForm}"/>
// </td>
// <td>
//   <div class="work-status box-shadow-5px">
//     <select name="" class="category-work-form" value ="${todoListItem.categoryWorkForm}">
//       ${createOptions(categoryList, todoListItem.categoryWorkForm)}
//     </select>
//   </div>
// </td>

// <td>
//   <div class="work-status box-shadow-5px">
//     <select name="" class="priority-work-form" value ="${todoListItem.priorityWorkForm}">
//     ${createOptions(priorityList, todoListItem.priorityWorkForm)}
//     </select>
//   </div>
// </td>

// <td>
//   <div class="work-status box-shadow-5px">
//     <select class = "select-time start-time-work-form" value ="${todoListItem.startTimeWorkForm}">
//     ${createOptions(timeList, todoListItem.startTimeWorkForm)}
//     </select>
//   </div>
// </td>

// <td>
//   <div class="work-status box-shadow-5px">
//     <select class = "select-time end-time-work-form" value ="${todoListItem.endTimeWorkForm}">
//     ${createOptions(timeList, todoListItem.endTimeWorkForm)}
//     </select>
//   </div>
// </td>

// <td>
//   <div class="dropdown click">
//     <div class="dropdown-trigger">
//       <span class="status-work-value">${todoListItem.statusWorkValue}</span>
//       <span class="material-icons material-symbols-outlined">
//         arrow_drop_down
//       </span>
//     </div>
//     <div class="dropdown-menu">
//       <div class="dropdown-content">
//       ${createDropdown(statusList ,todoListItem)}
//       </div>
//     </div>
//   </div>
// </td>`;
// }

// function renderHtmlViewDetail(todoListItem) {
//   return `<td colspan="3">
//   <div>
//     <span>Chi tiết:</span>
//     <span class="detail-display">${todoListItem.detailWorkForm}</span>
//   </div>
//   <div>
//     <span>Kết quả:</span>
//     <span class="result-display">${todoListItem.resultWorkForm}</span>
//   </div>
// </td>
// <td colspan="3">
//   <div class="control" >
//     <div class="click edit blue-text" onclick ="showFormEdit(${todoListItem.id})">
//       <span class="icon material-icons material-symbols-outlined">
//         edit
//       </span>
//       <span>Chỉnh sửa</span>
//     </div>

//     <div class="click remove red-text" onclick="deleteTodoList(${todoListItem.id})">
//       <span class="icon material-icons material-symbols-outlined">
//         delete
//       </span>
//       <span>Xoá</span>
//     </div>
//   </div>
// </td>`;
// }

// function renderHtmlViewTitle(todoListItem) {
//   return `<td class="blue-text">${todoListItem.nameWorkForm}</td>
//   <td class="category-work">${todoListItem.categoryWorkForm}</td>
//   <td class="priority-work">${todoListItem.priorityWorkForm}</td>
//   <td>${todoListItem.startTimeWorkForm}</td>
//   <td>${todoListItem.endTimeWorkForm}</td>
//   <td>
//   <div class="dropdown click">
//   <div class="dropdown-trigger">
//     <span class="status-work-value"> ${todoListItem.statusWorkValue} </span>
//     <span class="material-icons material-symbols-outlined">
//       arrow_drop_down
//     </span>
//   </div>
//   <div class="dropdown-menu">
//     <div class="dropdown-content">
//      ${createDropdown(statusList ,todoListItem)}
//     </div>
//   </div>
// </div>
//   </td>`;
// }

// function updateStatusWork(elementValue, idElement) {
//   let value = elementValue.innerText;
//   let titleView = document.getElementById(`view-title-${idElement}`);
//   let titleForm = document.getElementById(`form-title-${idElement}`);
//   if (titleView === null) {
//     titleForm.querySelector(".status-work-value").innerText = value;
//   } else {
//     titleView.querySelector(".status-work-value").innerText = value;
//     let update = JSON.parse(localStorage.getItem(idElement));
//     update.statusWorkValue = value;
//     localStorage.setItem(idElement, JSON.stringify(update));
//   }

//   changeColorStatus(localStorage.getItem(idElement));
//   checkAdvice();
// }
