import createOptions from "./createOptions.js";
import createDropdown from "./createDropdown.js";
import {createOptionStartTime} from "./createOptionStartTime.js";

export default function renderHtmlFormTitle(todoListItem) {
    return ` <td>
    <input
      class="box-shadow-5px name-work-form"
      type="text"
      placeholder="Nhập tên công việc" value="${todoListItem.nameWorkForm}"/>
  </td>
  <td>
    <div class="work-status box-shadow-5px">
      <select name="" class="category-work-form">
        ${createOptions("categoryList", todoListItem.categoryWorkForm)}
      </select>
    </div>
  </td>
  
  <td>
    <div class="work-status box-shadow-5px">
      <select name="" class="priority-work-form">
      ${createOptions("priorityList", todoListItem.priorityWorkForm)}
      </select>
    </div>
  </td>
  
  <td>
    <div class="work-status box-shadow-5px">
      <select class = "select-time start-time-work-form">
      ${createOptions('timeList',todoListItem.startTimeWorkForm)}
      </select>
    </div>
  </td>
  
  <td>
    <div class="work-status box-shadow-5px">
      <select class = "select-time end-time-work-form">
      ${createOptions('timeList', todoListItem.endTimeWorkForm)}
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
        ${createDropdown('statusList', todoListItem.id)}
        </div>
      </div>
    </div>
  </td>`;
  }