import createTimeArray from "./createTimeArray.js";

let timeList = createTimeArray("07:00", "23:00", 10)
export default function createOptionStartTime(){
    let result = "";
    optionsList[`${arrayName}`] && optionsList[`${arrayName}`].map((item) => {
      result += `<option value="${item}" ${item === valueSelect ? "selected" : ""}>${item}</option>`;
    });
    return result;
}