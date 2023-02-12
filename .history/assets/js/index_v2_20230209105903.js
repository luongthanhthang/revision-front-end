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
}

// load khi DOM load xong
window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("check-out").addEventListener("click", () => {
   checkOut(); 
  });
  onloadLocalStorageTodoList();
  getDataClient("sidebarChange");
  document.getElementById("nav-toggle").addEventListener("click", changeSidebar);
  let subMenu = document.querySelectorAll(".nav-links li");

  // subMenu &&: kiểm tra có tồn tại không
  subMenu && subMenu.forEach((item) => {
      item.onclick = () => {
        item.classList.toggle("is-active");
      };
    });
  // --------------trang todo list-------------------
  let sidebarTodoList = document.querySelectorAll(".load-more-member-list");
  sidebarTodoList.forEach((item, index) => {
    item.onclick = () => {
      document.querySelectorAll(".list-member")[index].classList.toggle("is-active");
      if (
        document.querySelectorAll(".list-member")[index].className.indexOf("is-active") > -1
      ) {
        item.innerText = "expand_more";
      } else {
        item.innerText = "chevron_right";
      }
    };
  });

  document.querySelectorAll(".table-history-todolist .load-more")
    .forEach((item) => {
      item.onclick = () => {
        item.parentElement.parentElement.parentElement
          .querySelectorAll(".title-detail")
          .forEach((itemTitleDetail) => {
            itemTitleDetail.classList.toggle("is-active");
          });
      };
    });

  document.getElementById("showFormCreate").addEventListener("click", showFormCreate);
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

  Object.values(localStorage).sort(compare).forEach((item) => {
    let viewTitle = addViewTitle(JSON.parse(item));
    let viewDetail = addViewDetail(JSON.parse(item));
    todoListTable.appendChild(viewTitle);
    todoListTable.appendChild(viewDetail);

    viewDetail.querySelector(".showFormEdit").addEventListener("click", () => {
      showFormEdit(JSON.parse(item).id);
    });
    viewDetail.querySelector(".deleteTodoList").addEventListener("click", () => {
        deleteTodoList(JSON.parse(item).id);
      });

    changeColorCategory(JSON.parse(item));
    changeColorPriority(JSON.parse(item));
    changeColorStatus(JSON.parse(item).id);
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
  let categoryWorkForm = titleElementForm.querySelector(".category-work-form").value;
  let priorityWorkForm = titleElementForm.querySelector(".priority-work-form").value;
  let startTimeWorkForm = titleElementForm.querySelector(".start-time-work-form").value;
  let endTimeWorkForm = titleElementForm.querySelector(".end-time-work-form").value;
  let detailWorkForm = detailElementForm.querySelector(".detail-work-form").value;
  let resultWorkForm = detailElementForm.querySelector(".result-work-form").value;
  let statusWorkValue = titleElementForm.querySelector(".status-work-value").innerText;

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
  let formTitle = document.getElementById(`form-title-${idElement}`);
  let formDetail = document.getElementById(`form-detail-${idElement}`);

  let todoListTable = document.getElementById("view-todolist");
  todoListTable.replaceChild(viewTitle, formTitle);
  todoListTable.replaceChild(viewDetail, formDetail);

  viewDetail.querySelector(".showFormEdit").addEventListener("click", () => {
    showFormEdit(idElement);
  });
  viewDetail.querySelector(".deleteTodoList").addEventListener("click", () => {
    deleteTodoList(idElement);
  });

  sortTodolist(viewTitle, viewDetail);

  changeColorCategory(todoListItem);
  changeColorPriority(todoListItem);
  changeColorStatus(idElement);
  hiddenElementEmpty(todoListItem);
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
        localStorage.removeItem(idElement);
      }
    }
  }
}

function showFormEdit(idElement) {
  let todoListItem = JSON.parse(localStorage.getItem(idElement));
  let viewTitle = document.getElementById(`view-title-${idElement}`);
  let viewDetail = document.getElementById(`view-detail-${idElement}`);
  let formTitle = addFormTitle(todoListItem);
  let formDetail = addFormDetail(todoListItem);

  let todoListTable = document.getElementById("view-todolist");
  todoListTable.replaceChild(formTitle, viewTitle);
  todoListTable.replaceChild(formDetail, viewDetail);

  formDetail.querySelector(".createTodolist").addEventListener("click", () => {
    update(idElement);
  });
  formDetail.querySelector(".deleteTodolist").addEventListener("click", () => {
    deleteTodoList(idElement);
  });

  changeColorStatus(todoListItem.id);
  checkAdvice();
}

function update(idElement) {
  let contentTitle = document.getElementById(`form-title-${idElement}`);
  let contentDetail = document.getElementById(`form-detail-${idElement}`);
  let nameWorkForm = contentTitle.querySelector(".name-work-form").value;
  let categoryWorkForm = contentTitle.querySelector(".category-work-form").value;
  let priorityWorkForm = contentTitle.querySelector(".priority-work-form").value;
  let startTimeWorkForm = contentTitle.querySelector(".start-time-work-form").value;
  let endTimeWorkForm = contentTitle.querySelector(".end-time-work-form").value;
  let detailWorkForm = contentDetail.querySelector(".detail-work-form").value;
  let resultWorkForm = contentDetail.querySelector(".result-work-form").value;
  let statusWorkValue = contentTitle.querySelector(".status-work-value").innerText;

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
  let formTitle = document.getElementById(`form-title-${idElement}`);
  let formDetail = document.getElementById(`form-detail-${idElement}`);

  let todoListTable = document.getElementById("view-todolist");
  todoListTable.replaceChild(viewTitle, formTitle);
  todoListTable.replaceChild(viewDetail, formDetail);

  viewDetail.querySelector(".showFormEdit").addEventListener("click", () => {
    showFormEdit(idElement);
  });
  viewDetail.querySelector(".deleteTodoList").addEventListener("click", () => {
    deleteTodoList(idElement);
  });

  sortTodolist(viewTitle, viewDetail);


  changeColorCategory(todoListItem);
  changeColorPriority(todoListItem);
  changeColorStatus(idElement);
  hiddenElementEmpty(todoListItem);
  checkAdvice();
}

function sortTodolist(viewTitle, viewDetail){
  let todoListTable = document.getElementById("view-todolist");
  let hourStartHourCurrent = parseInt(viewTitle.querySelector(".start-time").innerText.split(":")[0]);
  let minuteStartHourCurrent = parseInt(viewTitle.querySelector(".start-time").innerText.split(":")[1]);
    // sort
    todoListTable.childNodes.forEach((item, index) => {
      if((index % 2) == 0) {
        let hourStartHourItem = parseInt(item.querySelector(".start-time").innerText.split(":")[0]);
        let minuteStartHourItem = parseInt(item.querySelector(".start-time").innerText.split(":")[1]);
        if((hourStartHourItem > hourStartHourCurrent) 
        || (hourStartHourItem === hourStartHourCurrent && minuteStartHourItem > minuteStartHourCurrent)){
          console.log(123)
          todoListTable.insertBefore(viewDetail, item);
          todoListTable.insertBefore(viewTitle, viewDetail);
        }
      }
    });
}

function compare(a, b){
  let aHour = parseInt(JSON.parse(a).startTimeWorkForm.split(":")[0]);
  let aMinute = parseInt(JSON.parse(a).startTimeWorkForm.split(":")[1]);
  let bHour = parseInt(JSON.parse(b).startTimeWorkForm.split(":")[0]);
  let bMinute = parseInt(JSON.parse(b).startTimeWorkForm.split(":")[1]);

  if((aHour === bHour) && aMinute === bMinute) {
    return 0;
  }  
  if((aHour > bHour) || (aHour === bHour && aMinute > bMinute)) {
    return 1;
  } else {
    return -1;
  }
}

function checkOut() {
  let todoListTable = document.getElementById("view-todolist");
  console.log(todoListTable.querySelectorAll(".add-work"));
}
