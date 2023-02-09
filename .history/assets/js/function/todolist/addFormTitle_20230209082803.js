import renderHtmlFormTitle from "./renderHtmlFormTitle.js";
import updateStatusWork from "./updateStatusWork.js";
import {getTimeSelectEnd} from "./createOptionStartTime.js";

export default function addFormTitle(todoListItem) {
  let formTitle = document.createElement("tr");
  formTitle.setAttribute("class", "add-work");
  formTitle.setAttribute("id", `form-title-${todoListItem.id}`);
  formTitle.innerHTML = renderHtmlFormTitle(todoListItem);
  formTitle.querySelectorAll(".dropdown-item").forEach((item) => {
    item.addEventListener("click", () => {
      updateStatusWork(item, todoListItem.id);
    })
  });
  let options = document.querySelectorAll(`#form-title-${todoListItem.id} .start-time-item`);

  [].forEach.call();
  return formTitle;
}
