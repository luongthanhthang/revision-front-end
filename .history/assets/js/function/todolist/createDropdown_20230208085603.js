let optionsList = {
  categoryList : ["Kế hoạch", "Đột xuất", "Cấp trên giao"],
  priorityList : ["Bình thường", "Quan trọng", "Rất quan trọng"],
  statusList : ["Todo", "Pending", "Doing", "Done", "Cancel"],
}

export default function createDropdown(arrayName, todoListItem) {
  let result = "";
  console.log(arr)
  optionsList[`${arrayName}`] && optionsList[`${arrayName}`].map((itemStatus) => {
    result += `<div onclick="updateStatusWork(this, ${todoListItem.id})" class="dropdown-item">${itemStatus}</div>`;
  });
  return result;
}