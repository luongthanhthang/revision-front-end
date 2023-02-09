import createTimeArray from "./createTimeArray.js";

let timeList = createTimeArray("07:00", "23:00", 10);

export default function createOptionStartTime(valueSelect, thisElement){

    let result = "";
    timeList && timeList.map((item, index) => {
      result += `<option onclick = "${getTimeSelectEnd(thisElement, index)}" value="${item}" ${item === valueSelect ? "selected" : ""}>${item}</option>`;
    });
    return result;
}

function getTimeSelectEnd(thisElement, index){
    let endTimeElement = thisElement.parentNode.parentNode.parentNode.nextSibling;
    if(endTimeElement.value )
}