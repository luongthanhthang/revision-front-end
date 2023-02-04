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

function onloadLocalStorageTodoList() {
  let todoLists = localStorage.getItem("todoLists")
    ? JSON.parse(localStorage.getItem("todoLists"))
    : [];
  if (todoLists.length === 0) return false;

  controlTodoList(todoLists);
}

function controlTodoList(todoLists) {
  let result = "";
  todoLists.forEach((item, index) => {
    result += `
                  <tr>
                    <td class="blue-text">${item.nameWorkForm}</td>
                    <td>${item.categoryWorkForm}</td>
                    <td class ="priority-work">${item.priorityWorkForm}</td>
                    <td>${item.startTimeWorkForm}</td>
                    <td>${item.endTimeWorkForm}</td>
                    <td>
                    <div class="dropdown click">
                    <div class="dropdown-trigger">
                      <span class="status-work-value"> ${item.statusWorkValue} </span>
                      <span
                        class="material-icons material-symbols-outlined"
                      >
                        arrow_drop_down
                      </span>
                    </div>
                    <div class="dropdown-menu">
                      <div class="dropdown-content">
                        <div
                          onclick="updateStatusWork(this)"
                          class="dropdown-item"
                        >
                          Todo
                        </div>
                        <div
                          onclick="updateStatusWork(this)"
                          class="dropdown-item"
                        >
                          Pending
                        </div>
                        <div
                          onclick="updateStatusWork(this)"
                          class="dropdown-item"
                        >
                          Doing
                        </div>
                        <div
                          onclick="updateStatusWork(this)"
                          class="dropdown-item"
                        >
                          Done
                        </div>
                        <div
                          onclick="updateStatusWork(this)"
                          class="dropdown-item"
                        >
                          Cancel
                        </div>
                      </div>
                    </div>
                  </div>
                    </td>
                  </tr>

                  <tr>
                    <td colspan="3">
                      <div>
                        <span>Chi tiết:</span>
                        <span class="detail-display">${item.detailWorkForm}</span>
                      </div>
                      <div>
                        <span>Kết quả:</span>
                        <span class="result-display">${item.resultWorkForm}</span>
                      </div>
                    </td>
                    <td colspan="3">
                      <div class="control">
                        <div class="click edit blue-text" onclick="showFormUpdate(${index})">
                          <span
                            class="icon material-icons material-symbols-outlined"
                          >
                            edit
                          </span>
                          <span>Chỉnh sửa</span>
                        </div>

                        <div class="click remove red-text" onclick="deleteTodoList(${index})">
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
  });
  document.getElementById("view-todolist").innerHTML = result;

  // select time
  selectOptionTime();
  // lọc thông tin và màu
  changeColorPriority();
  // ẩn những thứ không nhập
  document.querySelectorAll(".detail-display").forEach((item) => {
    if (item.innerText === "") {
      item.previousElementSibling.style.display = "none";
    }
  });

  document.querySelectorAll(".result-display").forEach((item) => {
    if (item.textContent === "") {
      item.previousElementSibling.style.display = "none";
    }
  });
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

// trang todo list
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

function showFormCreate() {
  document.getElementById("view-todolist").innerHTML += `<tr class="add-work">
  <td>
    <input
      class="box-shadow-5px name-work-form"
      type="text"
      placeholder="Nhập tên công việc"
    />
  </td>
  <td>
    <div class="work-status box-shadow-5px">
      <select name="" class="category-work-form">
        <option value="Kế hoạch" selected>Kế hoạch</option>
        <option value="Cấp trên giao">Cấp trên giao</option>
        <option value="Đột xuất">Đột xuất</option>
      </select>
    </div>
  </td>

  <td>
    <div class="work-status box-shadow-5px">
      <select name="" class="priority-work-form">
        <option value="Bình thường" selected>
          Bình thường
        </option>
        <option value="Quan trọng">Quan trọng</option>
        <option value="Rất quan trọng">Rất quan trọng</option>
      </select>
    </div>
  </td>

  <td>
    <div class="work-status box-shadow-5px">
      <select class = "select-time start-time-work-form">
      </select>
    </div>
  </td>

  <td>
    <div class="work-status box-shadow-5px">
      <select class = "select-time end-time-work-form">
      </select>
    </div>
  </td>

  <td>
    <div class="dropdown click">
      <div class="dropdown-trigger">
        <span class="status-work-value"> Todo </span>
        <span
          class="material-icons material-symbols-outlined"
        >
          arrow_drop_down
        </span>
      </div>
      <div class="dropdown-menu">
        <div class="dropdown-content">
          <div
            onclick="updateStatusWork(this)"
            class="dropdown-item"
          >
            Todo
          </div>
          <div
            onclick="updateStatusWork(this)"
            class="dropdown-item"
          >
            Pending
          </div>
          <div
            onclick="updateStatusWork(this)"
            class="dropdown-item"
          >
            Doing
          </div>
          <div
            onclick="updateStatusWork(this)"
            class="dropdown-item"
          >
            Done
          </div>
          <div
            onclick="updateStatusWork(this)"
            class="dropdown-item">
            Cancel
          </div>
        </div>
      </div>
    </div>
  </td>
</tr>

<tr class="detail-add-work">
  <td colspan="3">
    <div class="add-detail">
      <span class="name">Chi tiết: </span>
      <textarea
        class="detail-work-form"
        rows="2"
        placeholder="Nhập chi tiết công việc..."
      ></textarea>
    </div>
    <div class="add-result">
      <span class="name">Kết quả: </span>
      <textarea
        class="result-work-form"
        rows="2"
        placeholder="Nhập chi tiết công việc..."
      ></textarea>
    </div>
  </td>
  <td colspan="3">
    <div class="control">
      <div onclick="create(this)" class="click edit blue-text">
        <span
          class="icon material-icons material-symbols-outlined"
        >
          update
        </span>
        <span>Cập nhật</span>
      </div>

      <div class="click remove red-text">
        <span
          class="icon material-icons material-symbols-outlined"
        >
          delete
        </span>
        <span>Xoá</span>
      </div>
    </div>
  </td>
</tr>`;
  // select time
  selectOptionTime();
  // lọc thông tin và màu
  changeColorPriority();
}

function create(selectElementCreate) {
  let elementCreateAddWork =
    selectElementCreate.parentElement.parentElement.parentElement
      .previousElementSibling;
  let elementCreateDetailAddWork =
    selectElementCreate.parentElement.parentElement.parentElement;
  console.log(elementCreateAddWork);
  console.log(
    elementCreateAddWork.getElementsByClassName(".start-time-work-form")
  );

  let nameWorkForm = elementCreateAddWork.querySelector(".name-work-form").value;
  let categoryWorkForm = elementCreateAddWork.querySelector(".category-work-form").value;
  let priorityWorkForm = elementCreateAddWork.querySelector(".priority-work-form").value;
  let startTimeWorkForm = elementCreateAddWork.querySelector(".start-time-work-form").value;
  let endTimeWorkForm = elementCreateAddWork.querySelector(".end-time-work-form").value;
  let detailWorkForm = elementCreateDetailAddWork.querySelector(".detail-work-form").value;
  let resultWorkForm = elementCreateDetailAddWork.querySelector(".result-work-form").value;
  let statusWorkValue = elementCreateAddWork.querySelector(".status-work-value").innerText;

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

  todoLists.push(todoListItem);
  localStorage.setItem("todoLists", JSON.stringify(todoLists));

  onloadLocalStorageTodoList();
}

function deleteTodoList(id) {
  let todoLists = localStorage.getItem("todoLists")
    ? JSON.parse(localStorage.getItem("todoLists"))
    : [];
  todoLists.splice(id, 1);
  localStorage.setItem("todoLists", JSON.stringify(todoLists));

  controlTodoList(todoLists);
}

// background-color status-work
function updateStatusWork(elementChange) {
    let parentElement = elementChange.parentElement.parentElement.parentElement;
  parentElement.getElementsByClassName("status-work-value")[0].innerText =
    elementChange.innerText;
  changeColorStatus(parentElement);
}

function changeColorStatus(elementChange) {
  switch (
    elementChange.getElementsByClassName("status-work-value")[0].innerText
  ) {
    case "Todo":
      elementChange.setAttribute("class", "dropdown click todo-status");
      break;
    case "Done":
      elementChange.setAttribute("class", "dropdown click done-status");
      break;
    case "Doing":
      elementChange.setAttribute("class", "dropdown click doing-status");
      break;
    case "Pending":
      elementChange.setAttribute("class", "dropdown click pending-status");
      break;
    case "Cancel":
      elementChange.setAttribute("class", "dropdown click cancel-status");
      break;
  }
}

function changeColorPriority() {
  document.querySelectorAll(".priority-work").forEach((item) => {
    switch (item.innerText) {
      case "Bình thường":
        item.setAttribute("class", "priority-work green-text");
        break;
      case "Quan trọng":
        item.setAttribute("class", "priority-work yellow-text");
        break;
      case "Rất quan trọng":
        item.setAttribute("class", "priority-work red-text");
        break;
    }
  });
}

function selectOptionTime() {
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

  document.querySelectorAll(".add-work .select-time").forEach((item) => {
    item.innerHTML = result;
  });
}
