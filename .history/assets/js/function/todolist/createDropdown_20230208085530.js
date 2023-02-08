let optionsList = {
  categoryList : ["Kế hoạch", "Đột xuất", "Cấp trên giao"],
  priorityList : ["Bình thường", "Quan trọng", "Rất quan trọng"],
  statusList : ["Todo", "Pending", "Doing", "Done", "Cancel"],
}

export default function createDropdown(arrayDropdown, todoListItem) {
  let result = "";
  arrayDropdown.map((itemStatus) => {
    result += `<div onclick="updateStatusWork(this, ${todoListItem.id})" class="dropdown-item">${itemStatus}</div>`;
  });
  return result;
}