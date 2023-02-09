import createTimeArray from "./createTimeArray.js";

let timeList = createTimeArray("07:00", "23:00", 10);

export function createOptionStartTime(valueSelect, idElement){
    let result = "";
    timeList && timeList.map((item, index) => {
      result += `<option onclick = `${getTimeSelectEnd(idElement, index)` class="start-time-item" value="${item}" ${item === valueSelect ? "selected" : ""}>${item}</option>`;
    });
    return result;
}

export function getTimeSelectEnd(idElement, indexStartTime){
    console.log(123);
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