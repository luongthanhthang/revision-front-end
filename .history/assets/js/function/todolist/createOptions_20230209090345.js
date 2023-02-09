import createTimeArray from "./createTimeArray.js";

let optionsList = {
  categoryList: ["Kế hoạch", "Đột xuất", "Cấp trên giao"],
  priorityList: ["Bình thường", "Quan trọng", "Rất quan trọng"],
  timeList: createTimeArray("07:00", "23:00", 10)
}

export function createOptions(arrayName) {
    let result = "";
    optionsList[`${arrayName}`] && optionsList[`${arrayName}`].map((item) => {
      result += `<option value="${item}">${item}</option>`;
    });
    return result;
  }

  // export default function createOptions(arrayName, valueSelect) {
  //   let result = "";
  //   optionsList[`${arrayName}`] && optionsList[`${arrayName}`].map((item) => {
  //     result += `<option value="${item}" ${item === valueSelect ? "selected" : ""}>${item}</option>`;
  //   });
  //   return result;
  // }  

  
export function getTimeSelectEnd(startTimeWorkFormNode, endTimeWorkFormValueNode){
  // let endTimeElement = document.getElementById(`form-title-${idElement}`).querySelector(".end-time-work-form");
  if(timeList.findIndex(indexStartTime > timeList.findIndex(endTimeElement.value)) {
      let result = "";
      timeList && timeList.map((item) => {
          result += `<option value="${item}" ${item === timeList[indexStartTime] ? "selected" : ""}>${item}</option>`;
        });
        endTimeElement.innerHtml = result;
  } else {
      return null;
  }
}
