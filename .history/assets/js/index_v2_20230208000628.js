function changeSidebar() {
  document.getElementById("sidebar").classList.toggle("sidebar-small");
  setCookie("sidebarChange", document.getElementById("sidebar").className);
}

let subMenu = document.querySelectorAll(".nav-links li");
subMenu.forEach((item) => {
  item.onclick = () => {
    item.classList.toggle("is-active");
  };
});

function getCookieSidebar(sidebarChange) {
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

// --------------------CRUD trang todolist-----------
function onloadLocalStorageTodoList() {
  Object.values(localStorage).forEach((item) => {
    addView(item);
    filterTodoListTable(JSON.parse(item));
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

  elementEditAddWork.outerHTML = `
  <tr>
  <td class="blue-text">${todoListItem.nameWorkForm}</td>
  <td class ="category-work">${todoListItem.categoryWorkForm}</td>
  <td class ="priority-work">${todoListItem.priorityWorkForm}</td>
  <td>${todoListItem.startTimeWorkForm}</td>
  <td>${todoListItem.endTimeWorkForm}</td>
  <td>
  <div class="dropdown click">
  <div class="dropdown-trigger">
    <span class="status-work-value"> ${todoListItem.statusWorkValue} </span>
    <span
      class="material-icons material-symbols-outlined"
    >
      arrow_drop_down
    </span>
  </div>
  <div class="dropdown-menu">
    <div class="dropdown-content">
      <div
        onclick="updateStatusWork(this, ${todoLists.length - 1})"
        class="dropdown-item"
      >
        Todo
      </div>
      <div
      onclick="updateStatusWork(this, ${todoLists.length - 1})"
      class="dropdown-item"
      >
        Pending
      </div>
      <div
      onclick="updateStatusWork(this, ${todoLists.length - 1})"
      class="dropdown-item"
      >
        Doing
      </div>
      <div
      onclick="updateStatusWork(this, ${todoLists.length - 1})"
      class="dropdown-item"
      >
        Done
      </div>
      <div
      onclick="updateStatusWork(this, ${todoLists.length - 1})"
      class="dropdown-item"
      >
        Cancel
      </div>
    </div>
  </div>
</div>
  </td>
</tr>
  `;

  elementEditDetailAddWork.outerHTML = `<tr>
  <td colspan="3">
    <div>
      <span>Chi tiết:</span>
      <span class="detail-display">${todoListItem.detailWorkForm}</span>
    </div>
    <div>
      <span>Kết quả:</span>
      <span class="result-display">${todoListItem.resultWorkForm}</span>
    </div>
  </td>
  <td colspan="3">
    <div class="control" >
      <div class="click edit blue-text" onclick ="showFormEdit(this, ${
        todoLists.length - 1
      })">
        <span
          class="icon material-icons material-symbols-outlined"
        >
          edit
        </span>
        <span>Chỉnh sửa</span>
      </div>

      <div class="click remove red-text" onclick="deleteTodoList(this, ${
        todoLists.length - 1
      })">
        <span
          class="icon material-icons material-symbols-outlined"
        >
          delete
        </span>
        <span>Xoá</span>
      </div>
    </div>
  </td>
</tr>
  `;
  filterTodoListTable();
  checkAdvice();
}

// background-color status-work
function updateStatusWork(elementValue, idElement) {
  let value = elementValue.innerText;
  let titleView = document.getElementById(`view-title-${idElement}`);
  let titleForm = document.getElementById(`form-title-${idElement}`);
  if (titleView === null) {
    titleForm.querySelector(".status-work-value").innerText = value;
  } else {
    titleView.querySelector(".status-work-value").innerText = value;
    let update = JSON.parse(localStorage.getItem(idElement));
    update.statusWorkValue = value;
    localStorage.setItem(idElement, JSON.stringify(update));
  }

  changeColorStatus(JSON.parse(localStorage.getItem(idElement)));
  // checkAdvice();
}

function changeColorStatus(idElement) {
  let titleStatus;
  if (document.getElementById(`view-title-${idElement.id}`) === null) {
    titleStatus = document.getElementById(`form-title-${idElement.id}`);
  } else {
    titleStatus = document.getElementById(`view-title-${idElement.id}`);
  }
  let updateElement = titleStatus.querySelector(".dropdown");
  let value = titleStatus.querySelector(".status-work-value").innerText;
  switch (value) {
    case "Todo":
      updateElement.setAttribute("class", "dropdown click todo-status");
      break;
    case "Done":
      updateElement.setAttribute("class", "dropdown click done-status");
      break;
    case "Doing":
      updateElement.setAttribute("class", "dropdown click doing-status");
      break;
    case "Pending":
      updateElement.setAttribute("class", "dropdown click pending-status");
      break;
    case "Cancel":
      updateElement.setAttribute("class", "dropdown click cancel-status");
      break;
  }
}

function changeColorPriority(item) {
  let titleStatus;
  if (document.getElementById(`view-title-${item.id}`) === null) {
    titleStatus = document.getElementById(`form-title-${item.id}`);
  } else {
    titleStatus = document.getElementById(`view-title-${item.id}`);
  }

  let itemChangeColor = titleStatus.querySelector(".priority-work");
  switch (itemChangeColor.innerText) {
    case "Bình thường":
      itemChangeColor.setAttribute("class", "priority-work green-text");
      break;
    case "Quan trọng":
      itemChangeColor.setAttribute("class", "priority-work yellow-text");
      break;
    case "Rất quan trọng":
      itemChangeColor.setAttribute("class", "priority-work red-text");
      break;
  }
}

function changeColorCategory(item) {
  let titleStatus;
  if (document.getElementById(`view-title-${item.id}`) === null) {
    titleStatus = document.getElementById(`form-title-${item.id}`);
  } else {
    titleStatus = document.getElementById(`view-title-${item.id}`);
  }

  let itemChangeColor = titleStatus.querySelector(".category-work");
  switch (itemChangeColor.innerText) {
    case "Kế hoạch":
      itemChangeColor.setAttribute("class", "category-work black-text");
      break;
    case "Cấp trên giao":
      itemChangeColor.setAttribute("class", "category-work blue-text");
      break;
    case "Đột xuất":
      itemChangeColor.setAttribute("class", "category-work red-text");
      break;
  }
}

function selectOptionTime(keyItem) {
  let result = "";
  for (let hour = 7; hour <= 23; hour++) {
    for (let minute = 0; minute <= 50; minute += 10) {
      let hourSelect;
      let minuteSelect;
      if (hour < 10) {
        hourSelect = "0" + hour;
      } else {
        hourSelect = hour;
      }
      if (minute == 0) {
        minuteSelect = "00";
      } else {
        minuteSelect = minute;
      }
      result += `<option value="${hourSelect}:${minuteSelect}">${hourSelect}:${minuteSelect}</option>`;
    }
  }

  document
    .getElementById(`form-title-${keyItem}`)
    .querySelectorAll(".add-work .select-time")
    .forEach((item) => {
      item.innerHTML = result;
    });
}

function filterTodoListTable(idElement) {
  changeColorPriority(idElement);
  changeColorCategory(idElement);
  changeColorStatus(idElement);
  hiddenElementEmpty(idElement);
}

function hiddenElementEmpty(idElement) {
  let elementHidden = document.getElementById(`view-detail-${idElement.id}`);

  let itemDetail = elementHidden.querySelector(".detail-display");
  if (itemDetail.innerText === "") {
    itemDetail.previousElementSibling.style.display = "none";
  }

  let itemResult = elementHidden.querySelector(".result-display");
  if (itemResult.textContent === "") {
    itemResult.previousElementSibling.style.display = "none";
  }
}

function checkAdvice() {
  let keyItems = Object.keys(localStorage);
  if (
    keyItems.every((key) => {
      return JSON.parse(localStorage.getItem(key)).statusWorkValue === "Done";
    })
  ) {
    document.querySelector(".last-detail-todolist .advice").innerText =
      "Quá tuyệt vời, bạn đã hoàn thành Todolist của hôm nay :)";
  } else {
    document.querySelector(".last-detail-todolist .advice").innerText =
      "Tôi biết bạn sẽ làm tốt mà. Hãy hoàn thành thật sớm nhé!";
  }
}

let categoryList = ["Kế hoạch", "Đột xuất", "Cấp trên giao"];
let priorityList = ["Bình thường", "Quan trọng", "Rất quan trọng"];


function addView(item) {
  let itemWorkDo = JSON.parse(item)

  let viewTitle = document.createElement("tr");
  viewTitle.setAttribute("id", `view-title-${itemWorkDo.id}`);
  viewTitle.innerHTML = renderHtmlViewTitle(itemWorkDo);

  let viewDetail = document.createElement("tr");
  viewDetail.setAttribute("id", `view-detail-${itemWorkDo.id}`);
  viewDetail.innerHTML = renderHtmlViewDetail(itemWorkDo);

  let result = document.getElementById("view-todolist");
  result.appendChild(viewTitle);
  result.appendChild(viewDetail);
}




function addForm(todoListItem, keyItem) {
  let formTitle = document.createElement("tr");
  formTitle.setAttribute("class", "add-work");
  formTitle.setAttribute("id", `form-title-${keyItem}`);
  formTitle.innerHTML = renderHtmlFormTitle(todoListItem, keyItem);

  let formDetail = document.createElement("tr");
  formDetail.setAttribute("class", "detail-add-work");
  formDetail.setAttribute("id", `form-detail-${keyItem}`);
  formDetail.innerHTML = renderHtmlFormDetail(todoListItem, keyItem);

  let result = document.getElementById("view-todolist");
  result.appendChild(formTitle);
  result.appendChild(formDetail);
}
