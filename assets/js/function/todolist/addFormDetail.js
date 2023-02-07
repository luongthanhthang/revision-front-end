import renderHtmlFormDetail from "./renderHtmlFormDetail";

export default function addFormDetail(todoListItem) {
  let formDetail = document.createElement("tr");
  formDetail.setAttribute("class", "detail-add-work");
  formDetail.setAttribute("id", `form-detail-${todoListItem.id}`);
  formDetail.innerHTML = renderHtmlFormDetail(todoListItem.id);
  return formDetail;
}
