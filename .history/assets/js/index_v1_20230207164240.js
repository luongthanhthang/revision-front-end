

function changeSidebar1() {
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
    let result = "";
    todoLists.forEach((item, index) => {
      result += `
                      <tr>
                        <td class="blue-text">${item.nameWorkForm}</td>
                        <td  class ="category-work">${item.categoryWorkForm}</td>
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
                              onclick="updateStatusWork(this, ${index})"
                              class="dropdown-item"
                            >
                              Todo
                            </div>
                            <div
                            onclick="updateStatusWork(this, ${index})"
                            class="dropdown-item"
                            >
                              Pending
                            </div>
                            <div
                            onclick="updateStatusWork(this, ${index})"
                            class="dropdown-item"
                            >
                              Doing
                            </div>
                            <div
                            onclick="updateStatusWork(this, ${index})"
                            class="dropdown-item"
                            >
                              Done
                            </div>
                            <div
                            onclick="updateStatusWork(this, ${index})"
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
                          <div class="control" >
                            <div class="click edit blue-text" onclick ="showFormEdit(this, ${index})">
                              <span
                                class="icon material-icons material-symbols-outlined"
                              >
                                edit
                              </span>
                              <span>Chỉnh sửa</span>
                            </div>
    
                            <div class="click remove red-text" onclick="deleteTodoList(this, ${index})">
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
    filterTodoListTable();
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
    // lấy lại dữ liệu đang nhập phía trên
    let dataFormTable = document.getElementById("view-todolist");
  
    let nameWorkForm = dataFormTable.querySelectorAll(".name-work-form");
    let categoryWorkForm = dataFormTable.querySelectorAll(".category-work-form");
    let priorityWorkForm = dataFormTable.querySelectorAll(".priority-work-form");
    let startTimeWorkForm = dataFormTable.querySelectorAll(
      ".start-time-work-form"
    );
    let endTimeWorkForm = dataFormTable.querySelectorAll(".end-time-work-form");
    let detailWorkForm = dataFormTable.querySelectorAll(".detail-work-form");
    let resultWorkForm = dataFormTable.querySelectorAll(".result-work-form");
    let statusWorkValue = dataFormTable.querySelectorAll(".status-work-value");
  
    // thêm mới form
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
          <option value="Kế hoạch">Kế hoạch</option>
          <option value="Cấp trên giao">Cấp trên giao</option>
          <option value="Đột xuất">Đột xuất</option>
        </select>
      </div>
    </td>
  
    <td>
      <div class="work-status box-shadow-5px">
        <select name="" class="priority-work-form">
          <option value="Bình thường">
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
  
        <div onclick="deleteFormCreate(this)" class="click remove red-text">
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
    // giá trị đã nhập nhưng chưa cập nhật
    nameWorkForm.forEach((item, index) => {
      dataFormTable.querySelectorAll(".name-work-form")[index].value = item.value;
    });
    categoryWorkForm.forEach((item, index) => {
      dataFormTable.querySelectorAll(".category-work-form")[index].value =
        item.value;
    });
    priorityWorkForm.forEach((item, index) => {
      dataFormTable.querySelectorAll(".priority-work-form")[index].value =
        item.value;
    });
    startTimeWorkForm.forEach((item, index) => {
      dataFormTable.querySelectorAll(".start-time-work-form")[index].value =
        item.value;
    });
  
    endTimeWorkForm.forEach((item, index) => {
      // cách 2:
      // let optionElementList = dataFormTable.querySelectorAll(
      //   ".end-time-work-form"
      // )[index].children;
      // for (const element of optionElementList) {
      //   if (element.value === item.value) {
      //     element.setAttribute("selected", "selected");
      //   }
      // }
      dataFormTable.querySelectorAll(".end-time-work-form")[index].value =
        item.value;
    });
    resultWorkForm.forEach((item, index) => {
      dataFormTable.querySelectorAll(".result-work-form")[index].value =
        item.value;
    });
    detailWorkForm.forEach((item, index) => {
      dataFormTable.querySelectorAll(".detail-work-form")[index].value =
        item.value;
    });
    statusWorkValue.forEach((item, index) => {
      dataFormTable.querySelectorAll(".status-work-value")[index].innerText =
        item.innerText;
    });
    filterTodoListTable();
  }
  
  function create(selectElementCreate) {
    let elementCreateAddWork =
      selectElementCreate.parentElement.parentElement.parentElement
        .previousElementSibling;
    let elementCreateDetailAddWork =
      selectElementCreate.parentElement.parentElement.parentElement;
  
    let nameWorkForm =
      elementCreateAddWork.querySelector(".name-work-form").value;
    let categoryWorkForm = elementCreateAddWork.querySelector(
      ".category-work-form"
    ).value;
    let priorityWorkForm = elementCreateAddWork.querySelector(
      ".priority-work-form"
    ).value;
    let startTimeWorkForm = elementCreateAddWork.querySelector(
      ".start-time-work-form"
    ).value;
    let endTimeWorkForm = elementCreateAddWork.querySelector(
      ".end-time-work-form"
    ).value;
    let detailWorkForm =
      elementCreateDetailAddWork.querySelector(".detail-work-form").value;
    let resultWorkForm =
      elementCreateDetailAddWork.querySelector(".result-work-form").value;
    let statusWorkValue =
      elementCreateAddWork.querySelector(".status-work-value").innerText;
  
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
  
    elementCreateAddWork.outerHTML = `
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
  
    elementCreateDetailAddWork.outerHTML = `<tr>
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
      <div class="control">
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
  
  function deleteFormCreate(elementDelete) {
    if (
      confirm(
        `Bạn có chắc muốn xóa: ${
          elementDelete.parentElement.parentElement.parentElement.previousElementSibling.querySelector(
            ".name-work-form"
          ).value
        }?`
      )
    ) {
      elementDelete.parentElement.parentElement.parentElement.previousElementSibling.remove();
      elementDelete.parentElement.parentElement.parentElement.remove();
    }
  }
  
  function deleteTodoList(elementDelete, id) {
    let todoLists = localStorage.getItem("todoLists")
      ? JSON.parse(localStorage.getItem("todoLists"))
      : [];
    if (confirm(`Bạn có chắc muốn xóa: ${todoLists[id].nameWorkForm}?`)) {
      todoLists.splice(id, 1);
      localStorage.setItem("todoLists", JSON.stringify(todoLists));
      elementDelete.parentElement.parentElement.parentElement.previousElementSibling.remove();
      elementDelete.parentElement.parentElement.parentElement.remove();
    } else {
      return;
    }
  }
  
  function showFormEdit(elementEdit, index) {
    let todoLists = localStorage.getItem("todoLists")
      ? JSON.parse(localStorage.getItem("todoLists"))
      : [];
    let todoItem = todoLists[index];
  
    let elementCreateAddWork =
      elementEdit.parentElement.parentElement.parentElement
        .previousElementSibling;
    let elementCreateDetailAddWork =
      elementEdit.parentElement.parentElement.parentElement;
  
    let elementPrevious = elementCreateAddWork.previousElementSibling;
    elementCreateAddWork.outerHTML = ` 
    <tr class="add-work">
    <td>
      <input
        class="box-shadow-5px name-work-form"
        type="text"
        placeholder="Nhập tên công việc"
        value = "${todoItem.nameWorkForm}"
      />
    </td>
    <td>
      <div class="work-status box-shadow-5px">
        <select name="" class="category-work-form" value = "${todoItem.categoryWorkForm}">
          <option value="Kế hoạch">Kế hoạch</option>
          <option value="Cấp trên giao">Cấp trên giao</option>
          <option value="Đột xuất">Đột xuất</option>
        </select>
      </div>
    </td>
  
    <td>
      <div class="work-status box-shadow-5px">
        <select name="" class="priority-work-form" value = "${todoItem.priorityWorkForm}">
          <option value="Bình thường">
            Bình thường
          </option>
          <option value="Quan trọng">Quan trọng</option>
          <option value="Rất quan trọng">Rất quan trọng</option>
        </select>
      </div>
    </td>
  
    <td>
      <div class="work-status box-shadow-5px">
        <select class = "select-time start-time-work-form" value = "${todoItem.startTimeWorkForm}">
        </select>
      </div>
    </td>
  
    <td>
      <div class="work-status box-shadow-5px">
        <select class = "select-time end-time-work-form" value = "${todoItem.endTimeWorkForm}">
        </select>
      </div>
    </td>
  
    <td>
      <div class="dropdown click">
        <div class="dropdown-trigger">
          <span class="status-work-value">${todoItem.statusWorkValue}</span>
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
    `;
  
    elementCreateDetailAddWork.outerHTML = `
    <tr class="detail-add-work">
    <td colspan="3">
      <div class="add-detail">
        <span class="name">Chi tiết: </span>
        <textarea
          class="detail-work-form"
          rows="2"
          placeholder="Nhập chi tiết công việc..."
        >${todoItem.detailWorkForm}</textarea>
      </div>
      <div class="add-result">
        <span class="name">Kết quả: </span>
        <textarea
          class="result-work-form"
          rows="2"
          placeholder="Nhập chi tiết công việc..."
        >${todoItem.resultWorkForm}</textarea>
      </div>
    </td>
    <td colspan="3">
      <div class="control">
        <div onclick="update(this, ${index})" class="click edit blue-text">
          <span
            class="icon material-icons material-symbols-outlined"
          >
            update
          </span>
          <span>Cập nhật</span>
        </div>
  
        <div onclick="deleteTodoList(this, ${index})" class="click remove red-text">
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
  
    // lấy lại giá trị form chưa cập nhật
    let dataFormTable = document.getElementById("view-todolist");
    let categoryWorkForm = dataFormTable.querySelectorAll(".category-work-form");
    let priorityWorkForm = dataFormTable.querySelectorAll(".priority-work-form");
    let startTimeWorkForm = dataFormTable.querySelectorAll(
      ".start-time-work-form"
    );
    let endTimeWorkForm = dataFormTable.querySelectorAll(".end-time-work-form");
    let startTimeArray = [];
    startTimeWorkForm.forEach((item) => {
      startTimeArray.push(item.value);
    });
  
    let endTimeArray = [];
    endTimeWorkForm.forEach((item) => {
      endTimeArray.push(item.value);
    });
  
    // console.log(startTimeWorkForm[0].value);
    // console.log(startTimeWorkForm[1].value);
    selectOptionTime();
    // console.log(startTimeWorkForm[0].value);
    // console.log(startTimeWorkForm[1].value);
  
    categoryWorkForm.forEach((item, index) => {
      dataFormTable.querySelectorAll(".category-work-form")[index].value =
        item.value;
    });
    priorityWorkForm.forEach((item, index) => {
      dataFormTable.querySelectorAll(".priority-work-form")[index].value =
        item.value;
    });
    startTimeWorkForm.forEach((item, index) => {
      if (item.value === null) {
        dataFormTable.querySelectorAll(".start-time-work-form")[index].value =
          item.getAttribute("value");
      } else {
        dataFormTable.querySelectorAll(".start-time-work-form")[index].value =
          startTimeArray[index];
      }
    });
  
    endTimeWorkForm.forEach((item, index) => {
      if (item.value === null) {
        dataFormTable.querySelectorAll(".end-time-work-form")[index].value =
          item.getAttribute("value");
      } else {
        dataFormTable.querySelectorAll(".end-time-work-form")[index].value =
          endTimeArray[index];
      }
    });
  
    // cập nhật show form mới
    if (elementPrevious == null) {
      dataFormTable.querySelector(".category-work-form").value =
        todoItem.categoryWorkForm;
      dataFormTable.querySelector(".priority-work-form").value =
        todoItem.priorityWorkForm;
      dataFormTable.querySelector(".start-time-work-form").value =
        todoItem.startTimeWorkForm;
      dataFormTable.querySelector(".end-time-work-form").value =
        todoItem.endTimeWorkForm;
    } else {
      elementPrevious.nextElementSibling.querySelector(
        ".category-work-form"
      ).value = todoItem.categoryWorkForm;
      elementPrevious.nextElementSibling.querySelector(
        ".priority-work-form"
      ).value = todoItem.priorityWorkForm;
      elementPrevious.nextElementSibling.querySelector(
        ".start-time-work-form"
      ).value = todoItem.startTimeWorkForm;
      elementPrevious.nextElementSibling.querySelector(
        ".end-time-work-form"
      ).value = todoItem.endTimeWorkForm;
    }
  
    filterTodoListTable();
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
  function updateStatusWork(elementChange, idElement = -1) {
    let todoLists = localStorage.getItem("todoLists")
      ? JSON.parse(localStorage.getItem("todoLists"))
      : [];
  
    if (idElement != -1) {
      todoLists[idElement].statusWorkValue = elementChange.innerText;
      localStorage.setItem("todoLists", JSON.stringify(todoLists));
      elementChange.parentElement.parentElement.parentElement.querySelector(
        ".status-work-value"
      ).innerText = elementChange.innerText;
      changeColorStatus();
    } else {
      elementChange.parentElement.parentElement.parentElement.querySelector(
        ".status-work-value"
      ).innerText = elementChange.innerText;
      changeColorStatus();
    }
    checkAdvice();
  }
  
  function changeColorStatus() {
    document
      .getElementById("view-todolist")
      .querySelectorAll(".status-work-value")
      .forEach((item) => {
        switch (item.innerText) {
          case "Todo":
            item.parentElement.parentElement.setAttribute(
              "class",
              "dropdown click todo-status"
            );
            break;
          case "Done":
            item.parentElement.parentElement.setAttribute(
              "class",
              "dropdown click done-status"
            );
            break;
          case "Doing":
            item.parentElement.parentElement.setAttribute(
              "class",
              "dropdown click doing-status"
            );
            break;
          case "Pending":
            item.parentElement.parentElement.setAttribute(
              "class",
              "dropdown click pending-status"
            );
            break;
          case "Cancel":
            item.parentElement.parentElement.setAttribute(
              "class",
              "dropdown click cancel-status"
            );
            break;
        }
      });
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
  
  function changeColorCategory() {
    document.querySelectorAll(".category-work").forEach((item) => {
      switch (item.innerText) {
        case "Kế hoạch":
          item.setAttribute("class", "category-work black-text");
          break;
        case "Cấp trên giao":
          item.setAttribute("class", "category-work blue-text");
          break;
        case "Đột xuất":
          item.setAttribute("class", "category-work red-text");
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
  
  function filterTodoListTable() {
    // lọc thông tin và màu
    changeColorPriority();
    changeColorCategory();
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
    changeColorStatus();
  }
  
  function checkAdvice() {
    let todoLists = localStorage.getItem("todoLists")
      ? JSON.parse(localStorage.getItem("todoLists"))
      : [];
    if (
      todoLists.every((item) => {
        return item.statusWorkValue === "Done";
      })
    ) {
      document.querySelector(".last-detail-todolist .advice").innerText =
        "Quá tuyệt vời, bạn đã hoàn thành Todolist của hôm nay :)";
    } else {
      document.querySelector(".last-detail-todolist .advice").innerText =
        "Tôi biết bạn sẽ làm tốt mà. Hãy hoàn thành thật sớm nhé!";
    }
  }