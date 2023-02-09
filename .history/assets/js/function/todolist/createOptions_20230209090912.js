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
  let startHour = parseInt(startTimeWorkFormNode.value.split(":")[0]);
  let endHour = parseInt(endTimeWorkFormValueNode.value.split(":")[0]);
  if(startHour > endHour) {
    endTimeWorkFormValueNode.value = (startHour + 1) < 10 ? "0" + (startHour + 1) + ":00" ;
  } else {
      return null;
  }
}
