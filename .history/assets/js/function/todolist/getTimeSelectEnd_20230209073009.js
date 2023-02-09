export function getTimeSelectEnd(idElement){
    console.log(123);
    let endTimeElement = document.getElementById(`form-title-${idElement}`).querySelector(".end-time-work-form");
    if(indexStartTime > timeList.findIndex(endTimeElement.value)) {
        let result = "";
        timeList && timeList.map((item) => {
            result += `<option value="${item}" ${item === timeList[indexStartTime] ? "selected" : ""}>${item}</option>`;
          });
          endTimeElement.innerHtml = result;
    } else {
        return null;
    }
}