import renderHtmlViewDetail from "./renderHtmlViewDetail.js";

export default function addViewDetail(itemWorkDo) {
    let viewDetail = document.createElement("tr");
    viewDetail.setAttribute("id", `view-detail-${itemWorkDo.id}`);
    viewDetail.innerHTML = renderHtmlViewDetail(itemWorkDo);
    viewDetail.querySelectorAll(".showFormEdit").forEach((item) => {
      item.addEventListener("click", () => {
        showFormEdit(itemWorkDo.id);
      })
    })
    viewDetail.querySelectorAll(".deleteTodoList").forEach((item) => {
      item.addEventListener("click", () => {
        deleteTodoList(itemWorkDo.id);
      })
    })
    return viewDetail;
  }