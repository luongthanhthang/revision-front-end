
function renderHtmlViewTitle(keyItem) {
    return `<td class="blue-text">${keyItem.nameWorkForm}</td>
    <td class="category-work">${keyItem.categoryWorkForm}</td>
    <td class="priority-work">${keyItem.priorityWorkForm}</td>
    <td>${keyItem.startTimeWorkForm}</td>
    <td>${keyItem.endTimeWorkForm}</td>
    <td>
    <div class="dropdown click">
    <div class="dropdown-trigger">
      <span class="status-work-value"> ${keyItem.statusWorkValue} </span>
      <span class="material-icons material-symbols-outlined">
        arrow_drop_down
      </span>
    </div>
    <div class="dropdown-menu">
      <div class="dropdown-content">
        <div
          onclick="updateStatusWork(this, ${keyItem.id})"
          class="dropdown-item">
          Todo
        </div>
        <div
        onclick="updateStatusWork(this, ${keyItem.id})"
        class="dropdown-item">
          Pending
        </div>
        <div
        onclick="updateStatusWork(this, ${keyItem.id})"
        class="dropdown-item">
          Doing
        </div>
        <div
        onclick="updateStatusWork(this,${keyItem.id})"
        class="dropdown-item">
          Done
        </div>
        <div
        onclick="updateStatusWork(this, ${keyItem.id})"
        class="dropdown-item">
          Cancel
        </div>
      </div>
    </div>
  </div>
    </td>`;
  }
  
  