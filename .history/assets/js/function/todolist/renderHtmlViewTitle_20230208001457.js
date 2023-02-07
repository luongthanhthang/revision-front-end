export default function renderHtmlViewTitle(item) {
  let itemWorkDo = JSON.parse(item)
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
        <div
          onclick="updateStatusWork(this, ${todoListItem.id})"
          class="dropdown-item">
          Todo
        </div>
        <div
        onclick="updateStatusWork(this, ${todoListItem.id})"
        class="dropdown-item">
          Pending
        </div>
        <div
        onclick="updateStatusWork(this, ${todoListItem.id})"
        class="dropdown-item">
          Doing
        </div>
        <div
        onclick="updateStatusWork(this,${todoListItem.id})"
        class="dropdown-item">
          Done
        </div>
        <div
        onclick="updateStatusWork(this, ${todoListItem.id})"
        class="dropdown-item">
          Cancel
        </div>
      </div>
    </div>
  </div>
    </td>`;
  }
  
  