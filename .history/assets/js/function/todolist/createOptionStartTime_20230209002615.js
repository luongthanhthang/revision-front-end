import createTimeArray from "./createTimeArray.js";

let timeList = createTimeArray("07:00", "23:00", 10);

export default function createOptionStartTime(valueSelect, thisElement){

    let result = "";
    timeList && timeList.map((item) => {
      result += `<option onclick = "$" value="${item}" ${item === valueSelect ? "selected" : ""}>${item}</option>`;
    });
    return result;
}

function getTimeSelectEnd(){
    let endTimeElement = thisElement.parentNode.parentNode.parentNode.nextSibling;
}