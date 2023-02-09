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
  if(optionsList['timeList'].findIndex(startTimeWorkFormNode.value) > optionsList['timeList'].findIndex(endTimeWorkFormValueNode.value)) {
    endTimeWorkFormValueNode.value = optionsList['timeList'][timeList.findIndex(startTimeWorkFormNode.value) + 1];
  } else {
      return null;
  }
}
