import renderHtmlFormDetail from "./renderHtmlFormDetail.js";

export default function addFormDetail(todoListItem) {
  let formDetail = document.createElement("tr");
  formDetail.setAttribute("class", "detail-add-work");
  formDetail.setAttribute("id", `form-detail-${todoListItem.id}`);
  formDetail.innerHTML = renderHtmlFormDetail(todoListItem);
  return formDetail;
}
