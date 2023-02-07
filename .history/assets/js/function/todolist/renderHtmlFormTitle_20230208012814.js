import createOptions from "./createOptions";
import createDropdown from "./createDropdown";

export default function renderHtmlFormTitle(todoListItem, categoryList, priorityList, arrayDropdown, arrayTime) {
    return ` <td>
    <input
      class="box-shadow-5px name-work-form"
      type="text"
      placeholder="Nhập tên công việc" value="${todoListItem.nameWorkForm}"/>
  </td>
  <td>
    <div class="work-status box-shadow-5px">
      <select name="" class="category-work-form" value ="${todoListItem.categoryWorkForm}">
        ${createOptions(categoryList, todoListItem.categoryWorkForm)}
      </select>
    </div>
  </td>
  
  <td>
    <div class="work-status box-shadow-5px">
      <select name="" class="priority-work-form" value ="${todoListItem.priorityWorkForm}">
      ${createOptions(priorityList, todoListItem.priorityWorkForm)}
      </select>
    </div>
  </td>
  
  <td>
    <div class="work-status box-shadow-5px">
      <select class = "select-time start-time-work-form" value ="${todoListItem.startTimeWorkForm}">
      </select>
    </div>
  </td>
  
  <td>
    <div class="work-status box-shadow-5px">
      <select class = "select-time end-time-work-form" value ="${todoListItem.endTimeWorkForm}">
      ${createOptions(arrayTime, todoListItem.endTimeWorkForm)}
      </select>
    </div>
  </td>
  
  <td>
    <div class="dropdown click">
      <div class="dropdown-trigger">
        <span class="status-work-value">${todoListItem.statusWorkValue}</span>
        <span class="material-icons material-symbols-outlined">
          arrow_drop_down
        </span>
      </div>
      <div class="dropdown-menu">
        <div class="dropdown-content">
        ${createDropdown(arrayDropdown ,item)}
        </div>
      </div>
    </div>
  </td>`;
  }