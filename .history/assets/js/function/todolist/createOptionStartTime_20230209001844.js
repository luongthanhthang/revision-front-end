import createTimeArray from "./createTimeArray.js";

let timeList = createTimeArray("07:00", "23:00", 10);

export default function createOptionStartTime(valueSelect, thisElement){
    let endTimeElement = thisElement.parentNode.parentNode.parentNode.nextSibling;

    let result = "";
    timeList && timeList.map((item) => {
      result += `<option value="${item}" ${item === valueSelect ? "selected" : ""}>${item}</option>`;
    });
    return result;
}