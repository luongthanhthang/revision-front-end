import createTimeArray from "./createTimeArray.js";

let timeList = createTimeArray("07:00", "23:00", 10);

export de function createOptionStartTime(valueSelect, idElement){
    let result = "";
    timeList && timeList.map((item, index) => {
      result += `<option class="start-time-item" value="${item}" ${item === valueSelect ? "selected" : ""}>${item}</option>`;
    });
    return result;
}

