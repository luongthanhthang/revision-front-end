let optionsList = {
  statusList: ["Todo", "Pending", "Doing", "Done", "Cancel"],
};

export default function createDropdown(arrayName, idElement) {
  let result = "";
  optionsList[`${arrayName}`] &&
    optionsList[`${arrayName}`].map((itemStatus) => {
      result += `<div onclick="updateStatusWork(this, ${idElement.id})" class="dropdown-item">${itemStatus}</div>`;
    });
  return result;
}
