export default function createDropdown(arrayDropdown, item) {
  let todoListItem = JSON.parse(item);
  let result = "";
  arrayDropdown.map((itemStatus) => {
    result += `<div onclick="updateStatusWork(this, ${todoListItem.id})" class="dropdown-item">$</div>`;
  });
  return result;
}