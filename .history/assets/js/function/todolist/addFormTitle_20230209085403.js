import renderHtmlFormTitle from "./renderHtmlFormTitle.js";
import updateStatusWork from "./updateStatusWork.js";
// import {getTimeSelectEnd} from "./createOptionStartTime.js";

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
  formTitle.querySelector(".start-time-work-form").value = todoListItem.startTimeWorkForm;
  formTitle.querySelector(".end-time-work-form").value = todoListItem.endTimeWorkForm;
  formTitle.querySelector(".category-work-form").value = todoListItem.categoryWorkForm;
  formTitle.querySelector(".priority-work-form").value = todoListItem.priorityWorkForm;

  formTitle.querySelector(".start-time-work-form")
  return formTitle;
}
