let optionsList = {
  statusList : ["Todo", "Pending", "Doing", "Done", "Cancel"]
}

export default function createDropdown(arrayName, todoListItem) {
  let result = "";
  optionsList[`${arrayName}`] && optionsList[`${arrayName}`].map((itemStatus) => {
    result += `<div  class="dropdown-item">${itemStatus}</div>`;
  });
  return result;
}

onclick="updateStatusWork(this, ${todoListItem.id})"