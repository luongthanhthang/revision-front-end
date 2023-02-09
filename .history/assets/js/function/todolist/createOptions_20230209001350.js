
let optionsList = {
  categoryList: ["Kế hoạch", "Đột xuất", "Cấp trên giao"],
  priorityList: ["Bình thường", "Quan trọng", "Rất quan trọng"],
}

export default function createOptions(arrayName, valueSelect) {
    let result = "";
    optionsList[`${arrayName}`] && optionsList[`${arrayName}`].map((item) => {
      result += `<option onc value="${item}" ${item === valueSelect ? "selected" : ""}>${item}</option>`;
    });
    return result;
  }