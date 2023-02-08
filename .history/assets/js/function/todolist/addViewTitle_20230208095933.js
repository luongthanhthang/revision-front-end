import renderHtmlViewTitle from "./renderHtmlViewTitle.js";

export default function addViewTitle(itemWorkDo) {  
    let viewTitle = document.createElement("tr");
    viewTitle.setAttribute("id", `view-title-${itemWorkDo.id}`);
    viewTitle.innerHTML = renderHtmlViewTitle(itemWorkDo);
    viewDetail.querySelectorAll(".dropdown-item").forEach((item) => {
        item.addEventListener("click", () => {
          updateStatusWork(item, todoListItem.id);
        })
      })
    return viewTitle;
}