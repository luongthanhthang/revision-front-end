import renderHtmlViewDetail from "./renderHtmlViewDetail.js";

export default function addViewDetail(itemWorkDo) {
    let viewDetail = document.createElement("tr");
    viewDetail.setAttribute("id", `view-detail-${itemWorkDo.id}`);
    viewDetail.innerHTML = renderHtmlViewDetail(itemWorkDo);
    viewTitle.querySelectorAll(".dropdown-item").forEach((item) => {
      item.addEventListener("click", () => {
        updateStatusWork(item, itemWorkDo.id);
      })
    })
    return viewDetail;
  }