import checkAdvice from "./checkAdvice.js";
import changeColorStatus from "./changeColorStatus.js";

export default function updateStatusWork(elementValue, idElement, push) {
    let value = elementValue.innerText;
    let titleView = document.getElementById(`view-title-${idElement}`);
    let titleForm = document.getElementById(`form-title-${idElement}`);
    if (titleView) {
      titleForm.querySelector(".status-work-value").innerText = value;
      changeColorStatus(idElement);
    } else {

    }
    checkAdvice();
  }
  