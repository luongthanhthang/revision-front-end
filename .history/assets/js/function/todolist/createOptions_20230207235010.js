export function createOptions(array, 2) {
    let result = "";
    array.map((item) => {
      result += `<option value="${item}" ${item === value ? "selected" : ""}>${item}</option>`;
    });
    return result;
  }