import renderHtmlViewTitle from "./renderHtmlViewTitle";

export default function addViewTitle(itemWorkDo) {  
    let viewTitle = document.createElement("tr");
    viewTitle.setAttribute("id", `view-title-${itemWorkDo.id}`);
    viewTitle.innerHTML = renderHtmlViewTitle(itemWorkDo);
    return viewTitle;
}