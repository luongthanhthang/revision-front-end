export default function changeColorStatus(item) {
    let todoListItem = JSON.parse(item);
    let titleStatus;
    if (document.getElementById(`view-title-${todoListItem.id}`) === null) {
      titleStatus = document.getElementById(`form-title-${todoListItem.id}`);
    } else {
      titleStatus = document.getElementById(`view-title-${todoListItem.id}`);
    }
    let updateElement = titleStatus.querySelector(".dropdown");
    let value = titleStatus.querySelector(".status-work-value").innerText;
    switch (value) {
      case "Todo":
        updateElement.setAttribute("class", "dropdown click todo-status");
        break;
      case "Done":
        updateElement.setAttribute("class", "dropdown click done-status");
        break;
      case "Doing":
        updateElement.setAttribute("class", "dropdown click doing-status");
        break;
      case "Pending":
        updateElement.setAttribute("class", "dropdown click pending-status");
        break;
      case "Cancel":
        updateElement.setAttribute("class", "dropdown click cancel-status");
        break;
    }
  }