import render

export default function addViewTitle(item) {
    let itemWorkDo = JSON.parse(item)
  
    let viewTitle = document.createElement("tr");
    viewTitle.setAttribute("id", `view-title-${itemWorkDo.id}`);
    viewTitle.innerHTML = renderHtmlViewTitle(itemWorkDo);
    return viewTitle;
}