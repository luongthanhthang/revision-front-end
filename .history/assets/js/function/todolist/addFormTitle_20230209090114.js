import renderHtmlFormTitle from "./renderHtmlFormTitle.js";
import updateStatusWork from "./updateStatusWork.js";

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
  let startTimeWorkForm = formTitle.querySelector(".start-time-work-form");
  startTimeWorkForm.value = todoListItem.startTimeWorkForm;

  let endTimeWorkForm = formTitle.querySelector(".end-time-work-form");
  endTimeWorkForm.value = todoListItem.endTimeWorkForm;

  formTitle.querySelector(".category-work-form").value = todoListItem.categoryWorkForm;
  formTitle.querySelector(".priority-work-form").value = todoListItem.priorityWorkForm;

  startTimeWorkForm.addEventListener("change", () => {
    getTimeSelectEnd(startTimeWorkForm, endTimeWorkForm);
  });
  return formTitle;
}

function getTimeSelectEnd(startTimeWorkForm, endTimeWorkFormValue){

  // let endTimeElement = document.getElementById(`form-title-${idElement}`).querySelector(".end-time-work-form");
  // if(indexStartTime > timeList.findIndex(endTimeElement.value)) {
  //     let result = "";
  //     timeList && timeList.map((item) => {
  //         result += `<option value="${item}" ${item === timeList[indexStartTime] ? "selected" : ""}>${item}</option>`;
  //       });
  //       endTimeElement.innerHtml = result;
  // } else {
  //     return null;
  // }
}
