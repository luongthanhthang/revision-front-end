export default function updateStatusWork(elementValue) {
    let todoListItem = JSON.parse(item);

    let value = elementValue.innerText;
    let titleView = document.getElementById(`view-title-${idElement}`);
    let titleForm = document.getElementById(`form-title-${idElement}`);
    if (titleView === null) {
      titleForm.querySelector(".status-work-value").innerText = value;
    } else {
      titleView.querySelector(".status-work-value").innerText = value;
      let update = JSON.parse(localStorage.getItem(idElement));
      update.statusWorkValue = value;
      localStorage.setItem(idElement, JSON.stringify(update));
    }
  
    changeColorStatus(JSON.parse(localStorage.getItem(idElement)));
    // checkAdvice();
  }
  