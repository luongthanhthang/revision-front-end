let 
let priorityList = ["Bình thường", "Quan trọng", "Rất quan trọng"];
let statusList = ["Todo", "Pending", "Doing", "Done", "Cancel"];

let optionsList = {
  catalo
}

export default function createOptions(array, valueSelect) {
    let result = "";
    array.map((item) => {
      result += `<option value="${item}" ${item === valueSelect ? "selected" : ""}>${item}</option>`;
    });
    return result;
  }