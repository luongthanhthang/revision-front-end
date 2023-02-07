export default function createDropdown(array) {

    return `<div
    onclick="updateStatusWork(this, ${todoListItem.id})"
    class="dropdown-item">
    Todo
  </div>
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