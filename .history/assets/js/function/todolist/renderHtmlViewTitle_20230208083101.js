import createDropdown from "./createDropdown.js";

export default function renderHtmlViewTitle(todoListItem, arrayDropdown) {
    return `<td class="blue-text">${todoListItem.nameWorkForm}</td>
    <td class="category-work">${todoListItem.categoryWorkForm}</td>
    <td class="priority-work">${todoListItem.priorityWorkForm}</td>
    <td>${todoListItem.startTimeWorkForm}</td>
    <td>${todoListItem.endTimeWorkForm}</td>
    <td>
    <div class="dropdown click">
    <div class="dropdown-trigger">
      <span class="status-work-value"> ${todoListItem.statusWorkValue} </span>
      <span class="material-icons material-symbols-outlined">
        arrow_drop_down
      </span>
    </div>
    <div class="dropdown-menu">
      <div class="dropdown-content">
       ${createDropdown(arrayDropdown ,todoListItem)}
      </div>
    </div>
  </div>
    </td>`;
  }
  
  