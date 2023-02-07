import

export default function addFormDetail(item) {
  let todoListItem = JSON.parse(item);
  let formDetail = document.createElement("tr");
  formDetail.setAttribute("class", "detail-add-work");
  formDetail.setAttribute("id", `form-detail-${todoListItem.id}`);
  formDetail.innerHTML = renderHtmlFormDetail(todoListItem.id);
  return formDetail;
}
