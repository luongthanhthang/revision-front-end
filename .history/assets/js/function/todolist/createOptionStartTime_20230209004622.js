import createTimeArray from "./createTimeArray.js";

let timeList = createTimeArray("07:00", "23:00", 10);

export default function createOptionStartTime(valueSelect, idElement){
    console.log(thisElement);
    let result = "";
    timeList && timeList.map((item, index) => {
      result += `<option onclick = "${getTimeSelectEnd(thisElement, index)}" value="${item}" ${item === valueSelect ? "selected" : ""}>${item}</option>`;
    });
    return result;
}

function getTimeSelectEnd(thisElement, indexStartTime){
    let endTimeElement = thisElement.parentElement.parentElement.parentElement.nextElementSibling.getElementsByTagName("select");
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