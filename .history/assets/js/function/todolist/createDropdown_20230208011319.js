export default function createDropdown(arrayDropdown, todoListItem) {
  let todoListItem = JSON.parse(item);
  let result = "";
  arrayDropdown.map((itemStatus) => {
    result += `<div onclick="updateStatusWork(this, ${todoListItem.id})" class="dropdown-item">${itemStatus}</div>`;
  });
  return result;
}