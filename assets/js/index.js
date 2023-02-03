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

  // ẩn những thứ không nhập
  document.querySelectorAll(".detail-display").forEach((item) => {
    if (item.textContent === "") {
      item.previousElementSibling.style.display = "none";
    }
  });

  document.querySelectorAll(".result-display").forEach((item) => {
    if (item.textContent === "") {
      item.previousElementSibling.style.display = "none";
    }
  });
}

function controlTodoList(todoLists) {
  let result = "";
  todoLists.forEach((item, index) => {
    result += `
                  <tr>
                    <td class="blue-text">${item.nameWorkForm}</td>
                    <td>${item.categoryWorkForm}</td>
                    <td>${item.priorityWorkForm}</td>
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
                          onclick="this.parentElement.parentElement.parentElement.getElementsByClassName('status-work-value')[0].innerText = 'Todo'"
                          class="dropdown-item"
                        >
                          Todo
                        </div>
                        <div
                          onclick="this.parentElement.parentElement.parentElement.getElementsByClassName('status-work-value')[0].innerText = 'Pending'"
                          class="dropdown-item"
                        >
                          Pending
                        </div>
                        <div
                          onclick="this.parentElement.parentElement.parentElement.getElementsByClassName('status-work-value')[0].innerText = 'Doing'"
                          class="dropdown-item"
                        >
                          Doing
                        </div>
                        <div
                          onclick="this.parentElement.parentElement.parentElement.getElementsByClassName('status-work-value')[0].innerText = 'Done'"
                          class="dropdown-item"
                        >
                          Done
                        </div>
                        <div
                          onclick="this.parentElement.parentElement.parentElement.getElementsByClassName('status-work-value')[0].innerText = 'Cancel'"
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
                        <div class="edit blue-text">
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

  result += `<tr class="add-work">
  <td>
    <input
      id="name-work-form"
      class="box-shadow-5px"
      type="text"
      placeholder="Nhập tên công việc"
    />
  </td>
  <td>
    <div class="work-status box-shadow-5px">
      <select name="" id="category-work-form">
        <option value="Kế hoạch" selected>Kế hoạch</option>
        <option value="Cấp trên giao">Cấp trên giao</option>
        <option value="Đột xuất">Đột xuất</option>
      </select>
    </div>
  </td>

  <td>
    <div class="work-status box-shadow-5px">
      <select name="" id="priority-work-form">
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
      <select id="start-time-work-form">
        <option value="07:00">07:00</option>
        <option value="07:10">07:10</option>
        <option value="07:20">07:20</option>
        <option value="07:30">07:30</option>
        <option value="07:40">07:40</option>
        <option value="07:50">07:50</option>
        <option value="08:00">08:00</option>
        <option value="08:10">08:10</option>
        <option value="08:20">08:20</option>
        <option value="08:30">08:30</option>
        <option value="08:40">08:40</option>
        <option value="08:50">08:50</option>
        <option value="09:00">09:00</option>
        <option value="09:10">09:10</option>
        <option value="09:20">09:20</option>
        <option value="09:30">09:30</option>
        <option value="09:40">09:40</option>
        <option value="09:50">09:50</option>
        <option value="10:00">10:00</option>
        <option value="10:10">10:10</option>
        <option value="10:20">10:20</option>
        <option value="10:30" selected="">10:30</option>
        <option value="10:40">10:40</option>
        <option value="10:50">10:50</option>
        <option value="11:00">11:00</option>
        <option value="11:10">11:10</option>
        <option value="11:20">11:20</option>
        <option value="11:30">11:30</option>
        <option value="11:40">11:40</option>
        <option value="11:50">11:50</option>
        <option value="12:00">12:00</option>
        <option value="12:10">12:10</option>
        <option value="12:20">12:20</option>
        <option value="12:30">12:30</option>
        <option value="12:40">12:40</option>
        <option value="12:50">12:50</option>
        <option value="13:00">13:00</option>
        <option value="13:10">13:10</option>
        <option value="13:20">13:20</option>
        <option value="13:30">13:30</option>
        <option value="13:40">13:40</option>
        <option value="13:50">13:50</option>
        <option value="14:00">14:00</option>
        <option value="14:10">14:10</option>
        <option value="14:20">14:20</option>
        <option value="14:30">14:30</option>
        <option value="14:40">14:40</option>
        <option value="14:50">14:50</option>
        <option value="15:00">15:00</option>
        <option value="15:10">15:10</option>
        <option value="15:20">15:20</option>
        <option value="15:30">15:30</option>
        <option value="15:40">15:40</option>
        <option value="15:50">15:50</option>
        <option value="16:00">16:00</option>
        <option value="16:10">16:10</option>
        <option value="16:20">16:20</option>
        <option value="16:30">16:30</option>
        <option value="16:40">16:40</option>
        <option value="16:50">16:50</option>
        <option value="17:00">17:00</option>
        <option value="17:10">17:10</option>
        <option value="17:20">17:20</option>
        <option value="17:30">17:30</option>
        <option value="17:40">17:40</option>
        <option value="17:50">17:50</option>
        <option value="18:00">18:00</option>
        <option value="18:10">18:10</option>
        <option value="18:20">18:20</option>
        <option value="18:30">18:30</option>
        <option value="18:40">18:40</option>
        <option value="18:50">18:50</option>
        <option value="19:00">19:00</option>
        <option value="19:10">19:10</option>
        <option value="19:20">19:20</option>
        <option value="19:30">19:30</option>
        <option value="19:40">19:40</option>
        <option value="19:50">19:50</option>
        <option value="20:00">20:00</option>
        <option value="20:10">20:10</option>
        <option value="20:20">20:20</option>
        <option value="20:30">20:30</option>
        <option value="20:40">20:40</option>
        <option value="20:50">20:50</option>
        <option value="21:00">21:00</option>
        <option value="21:10">21:10</option>
        <option value="21:20">21:20</option>
        <option value="21:30">21:30</option>
        <option value="21:40">21:40</option>
        <option value="21:50">21:50</option>
        <option value="22:00">22:00</option>
        <option value="22:10">22:10</option>
        <option value="22:20">22:20</option>
        <option value="22:30">22:30</option>
        <option value="22:40">22:40</option>
        <option value="22:50">22:50</option>
        <option value="23:00">23:00</option>
        <option value="23:10">23:10</option>
        <option value="23:20">23:20</option>
        <option value="23:30">23:30</option>
        <option value="23:40">23:40</option>
        <option value="23:50">23:50</option>
      </select>
    </div>
  </td>

  <td>
    <div class="work-status box-shadow-5px">
      <select id="end-time-work-form">
        <option value="07:00">07:00</option>
        <option value="07:10">07:10</option>
        <option value="07:20">07:20</option>
        <option value="07:30">07:30</option>
        <option value="07:40">07:40</option>
        <option value="07:50">07:50</option>
        <option value="08:00">08:00</option>
        <option value="08:10">08:10</option>
        <option value="08:20">08:20</option>
        <option value="08:30">08:30</option>
        <option value="08:40">08:40</option>
        <option value="08:50">08:50</option>
        <option value="09:00">09:00</option>
        <option value="09:10">09:10</option>
        <option value="09:20">09:20</option>
        <option value="09:30">09:30</option>
        <option value="09:40">09:40</option>
        <option value="09:50">09:50</option>
        <option value="10:00">10:00</option>
        <option value="10:10">10:10</option>
        <option value="10:20">10:20</option>
        <option value="10:30" selected="">10:30</option>
        <option value="10:40">10:40</option>
        <option value="10:50">10:50</option>
        <option value="11:00">11:00</option>
        <option value="11:10">11:10</option>
        <option value="11:20">11:20</option>
        <option value="11:30">11:30</option>
        <option value="11:40">11:40</option>
        <option value="11:50">11:50</option>
        <option value="12:00">12:00</option>
        <option value="12:10">12:10</option>
        <option value="12:20">12:20</option>
        <option value="12:30">12:30</option>
        <option value="12:40">12:40</option>
        <option value="12:50">12:50</option>
        <option value="13:00">13:00</option>
        <option value="13:10">13:10</option>
        <option value="13:20">13:20</option>
        <option value="13:30">13:30</option>
        <option value="13:40">13:40</option>
        <option value="13:50">13:50</option>
        <option value="14:00">14:00</option>
        <option value="14:10">14:10</option>
        <option value="14:20">14:20</option>
        <option value="14:30">14:30</option>
        <option value="14:40">14:40</option>
        <option value="14:50">14:50</option>
        <option value="15:00">15:00</option>
        <option value="15:10">15:10</option>
        <option value="15:20">15:20</option>
        <option value="15:30">15:30</option>
        <option value="15:40">15:40</option>
        <option value="15:50">15:50</option>
        <option value="16:00">16:00</option>
        <option value="16:10">16:10</option>
        <option value="16:20">16:20</option>
        <option value="16:30">16:30</option>
        <option value="16:40">16:40</option>
        <option value="16:50">16:50</option>
        <option value="17:00">17:00</option>
        <option value="17:10">17:10</option>
        <option value="17:20">17:20</option>
        <option value="17:30">17:30</option>
        <option value="17:40">17:40</option>
        <option value="17:50">17:50</option>
        <option value="18:00">18:00</option>
        <option value="18:10">18:10</option>
        <option value="18:20">18:20</option>
        <option value="18:30">18:30</option>
        <option value="18:40">18:40</option>
        <option value="18:50">18:50</option>
        <option value="19:00">19:00</option>
        <option value="19:10">19:10</option>
        <option value="19:20">19:20</option>
        <option value="19:30">19:30</option>
        <option value="19:40">19:40</option>
        <option value="19:50">19:50</option>
        <option value="20:00">20:00</option>
        <option value="20:10">20:10</option>
        <option value="20:20">20:20</option>
        <option value="20:30">20:30</option>
        <option value="20:40">20:40</option>
        <option value="20:50">20:50</option>
        <option value="21:00">21:00</option>
        <option value="21:10">21:10</option>
        <option value="21:20">21:20</option>
        <option value="21:30">21:30</option>
        <option value="21:40">21:40</option>
        <option value="21:50">21:50</option>
        <option value="22:00">22:00</option>
        <option value="22:10">22:10</option>
        <option value="22:20">22:20</option>
        <option value="22:30">22:30</option>
        <option value="22:40">22:40</option>
        <option value="22:50">22:50</option>
        <option value="23:00">23:00</option>
        <option value="23:10">23:10</option>
        <option value="23:20">23:20</option>
        <option value="23:30">23:30</option>
        <option value="23:40">23:40</option>
        <option value="23:50">23:50</option>
      </select>
    </div>
  </td>

  <td>
    <div class="dropdown click">
      <div class="dropdown-trigger">
        <span id="status-work-value"> Todo </span>
        <span
          class="material-icons material-symbols-outlined"
        >
          arrow_drop_down
        </span>
      </div>
      <div class="dropdown-menu">
        <div class="dropdown-content">
          <div
            onclick="document.getElementById('status-work-value').innerText = 'Todo'"
            class="dropdown-item"
          >
            Todo
          </div>
          <div
            onclick="document.getElementById('status-work-value').innerText = 'Pending'"
            class="dropdown-item"
          >
            Pending
          </div>
          <div
            onclick="document.getElementById('status-work-value').innerText = 'Doing'"
            class="dropdown-item"
          >
            Doing
          </div>
          <div
            onclick="document.getElementById('status-work-value').innerText = 'Done'"
            class="dropdown-item"
          >
            Done
          </div>
          <div
            onclick="document.getElementById('status-work-value').innerText = 'Cancel'"
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
        id="detail-work-form"
        class=""
        rows="2"
        placeholder="Nhập chi tiết công việc..."
      ></textarea>
    </div>
    <div class="add-result">
      <span class="name">Kết quả: </span>
      <textarea
        id="result-work-form"
        class=""
        rows="2"
        placeholder="Nhập chi tiết công việc..."
      ></textarea>
    </div>
  </td>
  <td colspan="3">
    <div class="control">
      <div onclick="update()" class="click edit blue-text">
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
  document.getElementById("view-todolist").innerHTML = result;
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

function update() {
  let nameWorkForm = document.getElementById("name-work-form").value;
  let categoryWorkForm = document.getElementById("category-work-form").value;
  let priorityWorkForm = document.getElementById("priority-work-form").value;
  let startTimeWorkForm = document.getElementById("start-time-work-form").value;
  let endTimeWorkForm = document.getElementById("end-time-work-form").value;
  let detailWorkForm = document.getElementById("detail-work-form").value;
  let resultWorkForm = document.getElementById("result-work-form").value;
  let statusWorkValue =
    document.getElementsByClassName("status-work-value")[0].textContent;

  // validate
  if (nameWorkForm === "") {
    alert("Bạn chưa nhập tên công việc!");
    return;
  }

  if (detailWorkForm === "") {
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
function changeColorStatusWork(elementChange) {
  console.log(elementChange);
  // this.parentElement.parentElement.parentElement.getElementsByClassName('status-work-value')[0].innerText = 'Todo'
  let colorStatusWork = document
    .getElementById("view-todolist")
    .querySelectorAll(".dropdown");    
}

changeColorStatusWork();