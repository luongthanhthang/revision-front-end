let 
let 
let  = ["Todo", "Pending", "Doing", "Done", "Cancel"];

let optionsList = {
  categoryList : ["Kế hoạch", "Đột xuất", "Cấp trên giao"],
  priorityList : ["Bình thường", "Quan trọng", "Rất quan trọng"],
  statusList : 
}

export default function createOptions(array, valueSelect) {
    let result = "";
    array.map((item) => {
      result += `<option value="${item}" ${item === valueSelect ? "selected" : ""}>${item}</option>`;
    });
    return result;
  }