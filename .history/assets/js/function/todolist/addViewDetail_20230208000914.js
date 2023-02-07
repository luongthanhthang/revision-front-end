export default function addViewDetail(item) {
    let itemWorkDo = JSON.parse(item)

    let viewDetail = document.createElement("tr");
    viewDetail.setAttribute("id", `view-detail-${itemWorkDo.id}`);
    viewDetail.innerHTML = renderHtmlViewDetail(itemWorkDo);
    return 
  }