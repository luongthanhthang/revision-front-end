export default function hiddenElementEmpty(todoListItem) {
    let elementHidden = document.getElementById(`view-detail-${todoListItem.id}`);
  
    let itemDetail = elementHidden.querySelector(".detail-display");
    if (itemDetail.innerText === "") {
      itemDetail.previousElementSibling.style.display = "none";
    }
  
    let itemResult = elementHidden.querySelector(".result-display");
    if (itemResult.textContent === "") {
      itemResult.previousElementSibling.style.display = "none";
    }
  }