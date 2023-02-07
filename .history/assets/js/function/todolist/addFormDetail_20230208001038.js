function addFormDetail(todoListItem, keyItem) {
    let formTitle = document.createElement("tr");
    formTitle.setAttribute("class", "add-work");
    formTitle.setAttribute("id", `form-title-${keyItem}`);
    formTitle.innerHTML = renderHtmlFormTitle(todoListItem, keyItem);
  
    let formDetail = document.createElement("tr");
    formDetail.setAttribute("class", "detail-add-work");
    formDetail.setAttribute("id", `form-detail-${keyItem}`);
    formDetail.innerHTML = renderHtmlFormDetail(todoListItem, keyItem);
  
    let result = document.getElementById("view-todolist");
    result.appendChild(formTitle);
    result.appendChild(formDetail);
  }