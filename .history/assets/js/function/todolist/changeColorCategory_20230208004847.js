export function changeColorCategory(item) {
    let titleStatus;
    if (document.getElementById(`view-title-${item.id}`) === null) {
      titleStatus = document.getElementById(`form-title-${item.id}`);
    } else {
      titleStatus = document.getElementById(`view-title-${item.id}`);
    }
  
    let itemChangeColor = titleStatus.querySelector(".category-work");
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