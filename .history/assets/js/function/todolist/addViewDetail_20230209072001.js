import renderHtmlViewDetail from "./renderHtmlViewDetail.js";

export default function addViewDetail(itemWorkDo) {
    let viewDetail = document.createElement("tr");
    viewDetail.setAttribute("id", `view-detail-${itemWorkDo.id}`);
    viewDetail.innerHTML = renderHtmlViewDetail(itemWorkDo);
    viewDetail.querySelector(".showFormEdit").addEventListener("click", () => {
      showFormEdit(idElement);
    });
    viewDetail.querySelector(".deleteTodoList").addEventListener("click", () => {
      deleteTodoList(idElement);
    });
    return viewDetail;
  }