export default function addFormDetail(todoListItem, keyItem) {
    let formDetail = document.createElement("tr");
    formDetail.setAttribute("class", "detail-add-work");
    formDetail.setAttribute("id", `form-detail-${keyItem}`);
    formDetail.innerHTML = renderHtmlFormDetail(todoListItem, keyItem);
    return formDetail;
  }