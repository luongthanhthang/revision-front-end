export default function changeColorStatus(idElement) {
    let titleStatus;
    if (document.getElementById(`view-title-${idElement.id}`) === null) {
      titleStatus = document.getElementById(`form-title-${idElement.id}`);
    } else {
      titleStatus = document.getElementById(`view-title-${idElement.id}`);
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