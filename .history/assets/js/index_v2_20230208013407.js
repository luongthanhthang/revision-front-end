import createTimeArray from "./function/todolist/createTimeArray";

let subMenu = document.querySelectorAll(".nav-links li");
subMenu.forEach((item) => {
  item.onclick = () => {
    item.classList.toggle("is-active");
  };
});

function changeSidebar() {
  document.getElementById("sidebar").classList.toggle("sidebar-small");
  setCookie("sidebarChange", document.getElementById("sidebar").className);
}


function getData(sidebarChange) {
  document.getElementById("sidebar").className = getCookie(sidebarChange);
  onloadLocalStorageTodoList();
}

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

// --------------trang todo list-------------------
let sidebarTodoList = document.querySelectorAll(".load-more-member-list");
sidebarTodoList.forEach((item, index) => {
  item.onclick = () => {
    document.querySelectorAll(".list-member")[index].classList.toggle("is-active");
    if (document.querySelectorAll(".list-member")[index].className.indexOf("is-active") > -1) {
      item.innerText = "expand_more";
    } else {
      item.innerText = "chevron_right";
    }
  };
});

document.querySelectorAll(".table-history-todolist .load-more").forEach((item) => {
    item.onclick = () => {
      item.parentElement.parentElement.parentElement
        .querySelectorAll(".title-detail")
        .forEach((itemTitleDetail) => {
          itemTitleDetail.classList.toggle("is-active");
        });
    };
  });

// --------------------CRUD trang todolist-----------
// dữ liệu
let categoryList = ["Kế hoạch", "Đột xuất", "Cấp trên giao"];
let priorityList = ["Bình thường", "Quan trọng", "Rất quan trọng"];
let statusList = ["Todo", "Pending", "Doing", "Done", "Cancel"];
let timeList = createTimeArray(7, 23, 1, 10);


function onloadLocalStorageTodoList() {
  Object.values(localStorage).forEach((item) => {
    
    let viewTitle = addViewTitle
    addView(item);
    checkAdvice();
  });
}

function showFormCreate() {
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
  addForm(todoListItem, id);

  selectOptionTime(id);
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

  // lọc id
  let id;
  do {
    id = Math.floor(Math.random() * 1000);
  } while (Object.keys(localStorage).includes(`${id}`));

  let todoListItem = {
    id,
    nameWorkForm: nameWorkForm,
    categoryWorkForm: categoryWorkForm,
    priorityWorkForm: priorityWorkForm,
    startTimeWorkForm: startTimeWorkForm,
    endTimeWorkForm: endTimeWorkForm,
    detailWorkForm: detailWorkForm,
    resultWorkForm: resultWorkForm,
    statusWorkValue: statusWorkValue,
  };

  localStorage.setItem(id, JSON.stringify(todoListItem));
  let tbodyElement = document.getElementById("view-todolist");
  let viewTitle = document.createElement("tr");
  viewTitle.setAttribute("id", `view-title-${id}`);
  viewTitle.innerHTML = renderHtmlViewTitle(id);

  let viewDetail = document.createElement("tr");
  viewDetail.setAttribute("id", `view-detail-${id}`);
  viewDetail.innerHTML = renderHtmlViewDetail(id);

  tbodyElement.replaceChild(viewTitle, titleElementForm);
  tbodyElement.replaceChild(viewDetail, detailElementForm);

  filterTodoListTable(id);
  checkAdvice();
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
