export default function createDropdown(arrayDropdown, item) {
  let todoListItem = JSON.parse(item);
  let result = "";
  arrayDropdown.map((item) => {
    result += `<div onclick="updateStatusWork(this, ${todoListItem.id})" class="dropdown-item">Todo</div>`;
  });
  return result;
}