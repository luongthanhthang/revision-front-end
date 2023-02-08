import checkAdvice from "./checkAdvice.js";
import changeColorStatus from "./changeColorStatus.js";

export default function updateStatusWork(elementValue, idElement, data = false) {
    let value = elementValue.innerText;
    let titleView = document.getElementById(`view-title-${idElement}`);
    let titleForm = document.getElementById(`form-title-${idElement}`);
    if (titleView && data) {
      titleView.querySelector(".status-work-value").innerText = value;
      let update = JSON.parse(localStorage.getItem(idElement));
      update.statusWorkValue = value;
      localStorage.setItem(idElement, JSON.stringify(update));
    } else if (push){
      titleForm.querySelector(".status-work-value").innerText = value;
    }
    checkAdvice();
  }
  