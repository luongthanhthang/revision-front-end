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

export function changeSelectTimeEnd(startTimeWorkFormNode, endTimeWorkFormValueNode){
  let startHour = parseInt(startTimeWorkFormNode.value.split(":")[0]);
  let endHour = parseInt(endTimeWorkFormValueNode.value.split(":")[0]);
  let startMinute = parseInt(startTimeWorkFormNode.value.split(":")[1]);
  let endMinute = parseInt(endTimeWorkFormValueNode.value.split(":")[1]);
  if(startHour > endHour || (startHour === endHour && startMinute >= endMinute)) {
    endTimeWorkFormValueNode.value = (startHour + 1) < 10 
    ? "0" + (startHour + 1) + ":00" 
    : (startHour + 1) + ":00";
  } else {
      return null;
  }
}

export function changeSelectTimeStart(startTimeWorkFormNode, endTimeWorkFormValueNode){
  let startHour = parseInt(startTimeWorkFormNode.value.split(":")[0]);
  let endHour = parseInt(endTimeWorkFormValueNode.value.split(":")[0]);
  let startMinute = parseInt(startTimeWorkFormNode.value.split(":")[1]);
  let endMinute = parseInt(endTimeWorkFormValueNode.value.split(":")[1]);
  if(startHour > endHour) {
    startTimeWorkFormNode.value = (endHour - 1) < 10 
    ? "0" + (endHour - 1) + ":00" 
    : (endHour - 1) + ":00";
  }

  if(startHour === endHour && startMinute >= endMinute) {
    startTimeWorkFormNode.value = (endHour) < 10 
    ? "0" + (endHour) + ":00" 
    : (endHour) + ":00";
  }
}

  cachs
  export default function createOptions2(arrayName, valueSelect) {
    let result = "";
    optionsList[`${arrayName}`] && optionsList[`${arrayName}`].map((item) => {
      result += `<option value="${item}" ${item === valueSelect ? "selected" : ""}>${item}</option>`;
    });
    return result;
  }  

  

