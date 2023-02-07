export default function createDropdown(arrayDropdown, item) {
  let todoListItem = JSON.parse(item);
  let result = "";
  arrayDropdown.map((item) => {
    result += `<div onclick="updateStatusWork(this, ${todoListItem.id})" class="dropdown-item">Todo </div>`;
  });
  return result;
    return `
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
    onclick="updateStatusWork(this, ${todoListItem.id})"
    class="dropdown-item">
    Done
  </div>
  <div
    onclick="updateStatusWork(this, ${todoListItem.id})"
    class="dropdown-item">
    Cancel
  </div>`
}