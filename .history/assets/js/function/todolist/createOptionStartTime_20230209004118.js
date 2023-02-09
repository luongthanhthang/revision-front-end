import createTimeArray from "./createTimeArray.js";

let timeList = createTimeArray("07:00", "23:00", 10);

export default function createOptionStartTime(valueSelect, thisElement){

    let result = "";
    timeList && timeList.map((item, index) => {
      result += `<option onclick = "${getTimeSelectEnd(thisElement, index)}" value="${item}" ${item === valueSelect ? "selected" : ""}>${item}</option>`;
    });
    return result;
}

function getTimeSelectEnd(thisElement, indexStartTime){
    let endTimeElement = thisElement.parentNode.parentNode.parentNode.nextSibling.getElementsByTagName("select");
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