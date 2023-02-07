export function createOptions(array, value) {
    let result = "";
    array.map((item) => {
      result += `<option value="${item}" ${item === value ? "selected" : ""}>${item}</option>`;
    });
    return result;
  }