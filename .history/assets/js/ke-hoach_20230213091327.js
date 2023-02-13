class WorkPlan{
    constructor(nameWork, periodStatus, startDate, endDate, priority, memberList, workStatus, subWork) {
        this.nameWork = nameWork;
        this.periodStatus = periodStatus;
        this.startDate = startDate;
        this.endDate = endDate;
        this.priority = priority;
        this.memberList = memberList;
        this.workStatus = workStatus;
        this.subWork = subWork;
    }
}

class WeekPlan {
    constructor(week, startDate, endDate, workList) {
        this.week = week;
        this.startDate = startDate;
        this.endDate = endDate;
        this.workList = workList;
    }
}

let memberList = [["Nguyễn Hữu Học", "https://work.conando.vn/upload/220223/637812349690327647.jpg"]
, ["Trần Thị Diệp Anh", "https://avatars.dicebear.com/api/adventurer-neutral/BB5F999408.svg"]
, ["Hoàng Thị Phương Thảo", "https://avatars.dicebear.com/api/adventurer-neutral/226M40DC04.svg"]
, ["Lê Quang Huy", "https://work.conando.vn/upload/220916/229G2E120D.jpg"]];

let periodStatus = [["Sắp hết hạn", "#4a4a4a"], ["Trễ hạn", "#4a4a4a"]];
let priorityList = [["Thấp", "#8990A5"], ["Trung bình", "#6B8FE0"], ["Quan trọng", "#BCB51F"], ["Khẩn cấp", "#FF5449"]];
let labelList = [["Dự án", "#1f81b2"], ["Vận hành", "#d34a51"], ["Khác", "#3aa51d"], ["Marketing", "#5f8e25"], ["HR", "#c207c5"]];
let workStatusList = [["Todo", "#4a4a4a"], ["Doing", "#4a4a4a"], ["Review", "#4a4a4a"], ["Done", "#4a4a4a"], ["Cancel", "#4a4a4a"]];

let periodTagList = [["Sắp hết hạn", "#4a4a4a", "#FF544930"], ["Trễ hạn", "#555", "#FF544930"]];
let priorityTagList = [["Thấp", "#8990A5", "#e9eaee"], ["Trung bình", "#6B8FE0", "#e3eaf9"], ["Quan trọng", "#BCB51F", "#f2f1d5"], ["Khẩn cấp", "#FF5449", "#ffdfdd"]];
let statusWorkTagList = [["Todo", "#4a4a4a", "#c0c6dc"], ["Doing", "#fff", "#355caa"], ["Review", "#fff", "#4a4a4a"], 
["Done", "#fff", "#48c78e"], ["Cancel", "#fff", "#5c6669"]];

let filterList = [["Thành viên", memberList], ["Thời hạn", periodStatus], ["Trạng thái", workStatusList], 
["Độ ưu tiên", priorityList], ["Nhãn dán", labelList]];

let workPlanListWeek5 = [
    new WorkPlan("Check in OKRs", periodTagList[1], "03/02", "03/02", priorityTagList[2], [memberList[0], memberList[1]], statusWorkTagList[0], []),
    new WorkPlan("abc", periodTagList[1], "03/02", "10/02", [], [memberList[0], memberList[2]], statusWorkTagList[0], 
      [new WorkPlan("Check in OKRs", periodTagList[1], "03/02", "03/02", priorityTagList[2], [memberList[0], memberList[1]], statusWorkTagList[0], []), 
      new WorkPlan("Check in OKRs", periodTagList[1], "03/02", "03/02", priorityTagList[2], [memberList[0], memberList[1]], statusWorkTagList[0], []), 
      new WorkPlan("Check in OKRs", periodTagList[1], "03/02", "03/02", priorityTagList[2], [memberList[0], memberList[1]], statusWorkTagList[0], []), 
      new WorkPlan("Check in OKRs", periodTagList[1], "03/02", "03/02", priorityTagList[2], [memberList[0], memberList[1]], statusWorkTagList[0], [])]),
    new WorkPlan("HRM v2 Hộp thư", periodTagList[1], "30/01", "04/02", priorityTagList[2], [memberList[0], memberList[1]], statusWorkTagList[0], []),
    new WorkPlan("Check in OKRs", periodTagList[1], "03/02", "03/02", priorityTagList[2], [memberList[0], memberList[1]], statusWorkTagList[0], 
      [new WorkPlan("Check in OKRs", periodTagList[1], "03/02", "03/02", priorityTagList[2], [memberList[0], memberList[1]], statusWorkTagList[0], []), 
      new WorkPlan("Check in OKRs", periodTagList[1], "03/02", "03/02", priorityTagList[2], [memberList[0], memberList[1]], statusWorkTagList[0], []), 
      new WorkPlan("Check in OKRs", periodTagList[1], "03/02", "03/02", priorityTagList[2], [memberList[0], memberList[1]], statusWorkTagList[0], []), 
      new WorkPlan("Check in OKRs", periodTagList[1], "03/02", "03/02", priorityTagList[2], [memberList[0], memberList[1]], statusWorkTagList[0], [])]),
    new WorkPlan("abc", periodTagList[1], "03/02", "10/02", [], [memberList[0], memberList[2]], statusWorkTagList[0], []),
    new WorkPlan("HRM v2 Hộp thư", periodTagList[1], "30/01", "04/02", priorityTagList[2], [memberList[0], memberList[1]], statusWorkTagList[0], [])
];

let workPlanListWeek2 = [
    new WorkPlan("Xậy dựng và chốt OKRs các cá nhân", periodTagList[0], "12/01", "12/01", priorityTagList[2], [memberList[0], memberList[3]], statusWorkTagList[3], 
      [new WorkPlan("Follow Hi-fi", [], "10/01", "13/01", priorityTagList[0], [memberList[0], memberList[3]], statusWorkTagList[4], []), 
      new WorkPlan("Follow Hi-fi", [], "10/01", "13/01", priorityTagList[0], [memberList[0], memberList[3]], statusWorkTagList[4], [])]),
    new WorkPlan("Follow Hi-fi", [], "10/01", "13/01", priorityTagList[0], [memberList[0], memberList[3]], statusWorkTagList[4], []),
    new WorkPlan("Xây dựng plan tuần", [], "13/01", "13/01", priorityTagList[2], [memberList[0], memberList[3]], statusWorkTagList[3], 
      [new WorkPlan("Follow Hi-fi", [], "10/01", "13/01", priorityTagList[0], [memberList[0], memberList[3]], statusWorkTagList[4], []), 
      new WorkPlan("Follow Hi-fi", [], "10/01", "13/01", priorityTagList[0], [memberList[0], memberList[3]], statusWorkTagList[4], [])]),
    new WorkPlan("Xậy dựng và chốt OKRs các cá nhân", periodTagList[0], "12/01", "12/01", priorityTagList[2], [memberList[0], memberList[3]], statusWorkTagList[3], []),
    new WorkPlan("Follow Hi-fi", [], "10/01", "13/01", priorityTagList[0], [memberList[0], memberList[3]], statusWorkTagList[4], []),
    new WorkPlan("Xây dựng plan tuần", [], "13/01", "13/01", priorityTagList[2], [memberList[0], memberList[3]], statusWorkTagList[3], [])
];

let weekPlanList = [
    new WeekPlan(5, "30/01", "05/02", workPlanListWeek5),
    new WeekPlan(2, "09/01", "14/01", workPlanListWeek2)
];

window.addEventListener("DOMContentLoaded", () => {
    let mainContent = document.getElementById("plan-main-content");
    let planFilterContent = document.createElement("ul");
    planFilterContent.setAttribute("class", "filter-content columns is-gapless is-align-items-center");
    planFilterContent.setAttribute("id", "plan-filter-content");
    planFilterContent.innerHTML = addViewPlanFilterContent(filterList);

    let planDetailContent = document.createElement("div");
    planDetailContent.setAttribute("class", "main-plan-content");
    planDetailContent.setAttribute("id", "main-plan-content");
    planDetailContent.innerHTML = addViewPlanDetailContent(weekPlanList);

    mainContent.appendChild(planFilterContent);
    // mainContent.appendChild(planDetailContent);
})

function addViewPlanFilterContent(filterList) {
    return `
    ${addDropdownFilter(filterList)}
    <li class="column is-narrow" style="width: 100px;">
        <div name="daterange">
            <a class="icon-text is-align-items-center">
                <span class="icon">
                    <span class="material-icons material-icons-outlined is-size-7">calendar_today</span>
                </span>
                <span class="is-size-7">Thời gian</span>
            </a>
        </span>
      </span>
        </div>
    </li>
    <li class="column">
      <div class="field" style="width: 100%">
        <p class="control has-icons-left has-icons-right">
          <input class="input is-rounded is-small" type="text" placeholder="Tiêu đề làm việc">
          <span class="icon is-small is-left">
            <span class="material-icons material-icons-outlined">search</span>
          </span>
        </p>
      </div>
    </li>
    `;
}

function addDropdownFilter(dropdownList) {
    let result = "";
    for(let i = 0; i < dropdownList.length; i++) {
            result += `
        <li class="column is-narrow" style="width: 100px;">
          <div class="dropdown is-hoverable is-size-7">
            <div class="dropdown-trigger">
              <span class="icon-text">
                <span>${dropdownList[i][0]}</span>
                <span class="material-icons material-icons-outlined">arrow_drop_down</span>
               </span>
            </div>
            <div class="dropdown-menu" role="menu">
              <div class="dropdown-content is-inline-block">
                <div class="dropdown-item">
                  <a class="has-text-weight-semibold has-text-black">${i === 0 ? "Tất cả thành viên" : "Tất cả"}</a>
                </div>`;
                if(i === 0) {
                    for(const element of dropdownList[i][1]) {
                        result += `
                    <div class="dropdown-item py-0">
                        <a class="icon-text is-align-items-center">
                          <span class="icon image is-16x16 mr-2">
                            <img class="is-rounded" src="${element[1]}" alt="IMG">                                
                          </span>
                          <span class="is-size-7">${element[0]}</span>
                         </a>
                    </div>`;
                    }  
                } 
                else {
                    for(const element of dropdownList[i][1]) {
                        result += `
                    <div class="dropdown-item py-0">
                        <a class="icon-text is-align-items-center">
                          <span class="is-size-7" style ="color: ${element[1]}";>${element[0]}</span>
                         </a>
                    </div>`;
                    }
            }
                result += `
            </div>
        </li>`;        
            }
    return result;
    }

function addViewPlanDetailContent(weekPlanList) {
  let result = `
  <ul class="columns is-gapless is-size-7 has-text-grey is-align-items-center my-0">
                      <li class="column" style="width: calc(100% - 630px);">Công việc</li>
                      <li class="column is-narrow" style="width: 130px;">Thời hạn</li>
                      <li class="column is-narrow" style="width: 130px;">Mức độ ưu tiên</li>
                      <li class="column is-narrow" style="width: 110px;">Thành viên</li>
                      <li class="column is-narrow" style="width: 80px;">Trạng thái</li>
                      <li class="column is-narrow" style="width: 30px;"></li>
                    </ul>
  `;

}




// date picker
jQuery(function($) {
  $('div[name="daterange"]').daterangepicker({
    locale: {
      format: 'YYYY-MM-DD',
      "separator": " to "
    },
    minDate: moment().startOf('month'),
    changeMonth: false,
    changeYear: false,
    stepMonths: 0
  });
});
