let categoryList = ["Kế hoạch", "Đột xuất", "Cấp trên giao"];
let priorityList = ["Bình thường", "Quan trọng", "Rất quan trọng"];
let statusList = ["Todo", "Pending", "Doing", "Done", "Cancel"];

let optionsList = {}

export default function createOptions(array, valueSelect) {
    let result = "";
    array.map((item) => {
      result += `<option value="${item}" ${item === valueSelect ? "selected" : ""}>${item}</option>`;
    });
    return result;
  }