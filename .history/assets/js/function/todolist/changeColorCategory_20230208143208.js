export default function changeColorCategory(todoListItem) {
    let titleStatus;
    if (document.getElementById(`view-title-${todoListItem.id}`) === null) {
      titleStatus = document.getElementById(`form-title-${todoListItem.id}`);
    } else {
      titleStatus = document.getElementById(`view-title-${todoListItem.id}`);
    }
  
    let itemChangeColor = titleStatus.querySelector(".category-work");
    console.log()
    switch (itemChangeColor.innerText) {
      case "Kế hoạch":
        itemChangeColor.setAttribute("class", "category-work black-text");
        break;
      case "Cấp trên giao":
        itemChangeColor.setAttribute("class", "category-work blue-text");
        break;
      case "Đột xuất":
        itemChangeColor.setAttribute("class", "category-work red-text");
        break;
    }
  }