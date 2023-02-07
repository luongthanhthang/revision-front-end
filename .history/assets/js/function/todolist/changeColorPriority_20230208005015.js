export default function changeColorPriority(item) {
    let todoListItem = JSON.parse(item);
    let titleStatus;
    if (document.getElementById(`view-title-${todoListItem.id}`) === null) {
      titleStatus = document.getElementById(`form-title-${itodoListItemtem.id}`);
    } else {
      titleStatus = document.getElementById(`view-title-${todoListItem.id}`);
    }
  
    let itemChangeColor = titleStatus.querySelector(".priority-work");
    switch (itemChangeColor.innerText) {
      case "Bình thường":
        itemChangeColor.setAttribute("class", "priority-work green-text");
        break;
      case "Quan trọng":
        itemChangeColor.setAttribute("class", "priority-work yellow-text");
        break;
      case "Rất quan trọng":
        itemChangeColor.setAttribute("class", "priority-work red-text");
        break;
    }
  }
  