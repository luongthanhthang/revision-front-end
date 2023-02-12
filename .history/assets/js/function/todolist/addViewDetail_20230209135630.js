import renderHtmlViewDetail from "./renderHtmlViewDetail.js";

export default function addViewDetail(itemWorkDo) {
    let viewDetail = document.createElement("tr");
    viewDetail.setAttribute("id", `view-detail-${itemWorkDo.id}`);
    viewDetail.setAttribute("class", `view-title`);
    viewDetail.innerHTML = renderHtmlViewDetail(itemWorkDo);
    return viewDetail;
  }