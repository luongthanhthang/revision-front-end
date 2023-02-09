import createTimeArray from "./createTimeArray.js";

let timeList = createTimeArray("07:00", "23:00", 10);

export function createOptionStartTime(valueSelect){
    let result = "";
    timeList && timeList.map((item) => {
      result += `<option class="start-time-item" value="${item}" ${item === valueSelect ? "selected" : ""}>${item}</option>`;
    });
    return result;
}

export function getTimeSelectEnd(idElement, indexStartTime){
    let endTimeElement = document.getElementById(`form-title-${idElement}`).querySelector(".end-time-work-form");
    if(indexStartTime > timeList.findIndex(endTimeElement.value)) {
        let result = "";
        timeList && timeList.map((item) => {
            result += `<option value="${item}" ${item === timeList[indexStartTime] ? "selected" : ""}>${item}</option>`;
          });
          endTimeElement.innerHtml = result;
    } else {
        return null;
    }
}