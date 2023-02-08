let 
let 
let statusList = ["Todo", "Pending", "Doing", "Done", "Cancel"];

let optionsList = {
  categoryList : ["Kế hoạch", "Đột xuất", "Cấp trên giao"],

}

export default function createOptions(array, valueSelect) {
    let result = "";
    array.map((item) => {
      result += `<option value="${item}" ${item === valueSelect ? "selected" : ""}>${item}</option>`;
    });
    return result;
  }