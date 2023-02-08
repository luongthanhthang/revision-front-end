

export default function createOptions(array, valueSelect) {
    let result = "";
    array.map((item) => {
      result += `<option value="${item}" ${item === valueSelect ? "selected" : ""}>${item}</option>`;
    });
    return result;
  }