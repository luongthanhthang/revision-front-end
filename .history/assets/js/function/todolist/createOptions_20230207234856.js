export function createOptions(array, name) {
    let result = "";
    array.map((item) => {
      result += `<option value="${item}" ${item === name ? "selected" : ""
      }>${item}</option>`;
    });
    return result;
  }