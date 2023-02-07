export default function addView(item) {
    let itemWorkDo = JSON.parse(item)
  
    let viewTitle = document.createElement("tr");
    viewTitle.setAttribute("id", `view-title-${itemWorkDo.id}`);
    viewTitle.innerHTML = renderHtmlViewTitle(itemWorkDo);
  
    let viewDetail = document.createElement("tr");
    viewDetail.setAttribute("id", `view-detail-${itemWorkDo.id}`);
    viewDetail.innerHTML = renderHtmlViewDetail(itemWorkDo);
  
    let result = document.getElementById("view-todolist");
    result.appendChild(viewTitle);
    result.appendChild(viewDetail);
  }