export default function createDropdown(arrayDropdown, todoListItem) {
  let result = "";
  arrayDropdown.map((itemStatus) => {
    result += `<div onclick="updateStatusWork(this, ${todoListItem.id})" class="dropdown-item">${itemStatus}</div>`;
  });
  return result;
}