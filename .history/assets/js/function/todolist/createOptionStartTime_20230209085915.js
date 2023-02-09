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

