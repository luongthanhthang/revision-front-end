import createTimeArray from "./createTimeArray.js";

let timeList = createTimeArray("07:00", "23:00", 10);

export function createOptionStartTime(valueSelect, idElement){
    let result = "";
    timeList && timeList.map((item, index) => {
      result += `<option class="start-time-item">${item}</option>`;
    });
    return result;
    // value="${item}" ${item === valueSelect ? "selected" : ""}
}

export function getTimeSelectEnd(){
    console.log(123);
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