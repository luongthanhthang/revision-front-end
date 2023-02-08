
let optionsList = {
  categoryList : ["Kế hoạch", "Đột xuất", "Cấp trên giao"],
  priorityList : ["Bình thường", "Quan trọng", "Rất quan trọng"],
  statusList : ["Todo", "Pending", "Doing", "Done", "Cancel"],
}

export default function createOptions(array, valueSelect) {
    let result = optionsList[`${arrayName}`];
    optionsList[`${arrayName}`] && optionsList[`${arrayName}`].map((item) => {
      result += `<option value="${item}" ${item === valueSelect ? "selected" : ""}>${item}</option>`;
    });
    return result;
  }