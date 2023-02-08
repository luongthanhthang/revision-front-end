import updateStatusWork from "./updateStatusWork.js";
let optionsList = {
  statusList : ["Todo", "Pending", "Doing", "Done", "Cancel"]
}

export default function createDropdown(arrayName, todoListItem) {
  let result = "";
  optionsList[`${arrayName}`] && optionsList[`${arrayName}`].map((itemStatus) => {
    result += `<div onclick="${updateStatusWork(this, ${todoListItem.id}))" class="dropdown-item">${itemStatus}</div>`;
  });
  return result;
}