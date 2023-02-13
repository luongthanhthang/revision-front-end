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

class Member{
  constructor(name, avatar) {
    this.name = name;
    this.avatar = avatar;
  }
}

let memberList = [new Member("Nguyễn Hữu Học", "https://work.conando.vn/upload/220223/637812349690327647.jpg")
, new Member("Trần Thị Diệp Anh", "https://avatars.dicebear.com/api/adventurer-neutral/BB5F999408.svg")
, new Member("Hoàng Thị Phương Thảo", "https://avatars.dicebear.com/api/adventurer-neutral/226M40DC04.svg")
, new Member("Lê Quang Huy", "https://work.conando.vn/upload/220916/229G2E120D.jpg")];

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
    mainContent.appendChild(planDetailContent);
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
                  dropdownList[i][1].forEach((member) => {
                    result += `
                    <div class="dropdown-item py-0">
                        <a class="icon-text is-align-items-center">
                          <span class="icon image is-16x16 mr-2">
                            <img class="is-rounded" src="${member.avatar}" alt="IMG" style = "height: 100%;">                                
                          </span>
                          <span class="is-size-7">${member.name}</span>
                         </a>
                    </div>`;
                    })
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
  weekPlanList.forEach((weekPlan) => {
    result += `
                    <ul class="columns is-gapless m-0">
                      <li class="column is-full">
                        <span class="icon-text">
                          <span class="icon">
                            <span class="material-icons material-icons-outlined is-size-5">arrow_drop_down</span>
                          </span>
                          <span class="has-text-weight-bold">Tuần ${weekPlan.week} • ${weekPlan.startDate} 
                            - ${weekPlan.endDate} (${weekPlan.workList.length})</span>
                          </span>
                      </li>
                    </ul>
                    <div class="plan-detail-content">
                      ${addViewPlanMainColumn(weekPlan.workList)}
                    </div>
    `;
  });
  return result;
}

function addViewPlanMainColumn(workList) {
  let result ="";
  workList.forEach((work) => {
    result += `
<ul class="columns is-gapless font-13 m-0" style="border-left: 4px solid black;">
  <li class="column" style="width: calc(100% - 630px);">
    <div class="columns is-justify-content-space-between is-align-items-center m-0 pl-2" style="width: 100%;">
      <div class="icon-text">
        <span class="icon">
          <span class="material-icons material-icons-outlined is-size-5">drag_indicator</span>
        </span>
        <span class="icon ml-0">
          <span class="material-icons material-icons-outlined is-size-5">arrow_right</span>
        </span>
        <span class="has-text-weight-medium has-text-black">${work.nameWork}</span>
      </div>
      ${work.periodStatus.length != 0 ? `
      <div class="column is-narrow">
        <span class="tag" style="background: ${work.periodStatus[2]}; color: ${work.periodStatus[1]};">${work.periodStatus[0]}</span>
      </div>` : ""} 
    </div>
  </li>
  <li class="column is-narrow" style="width: 130px;">
    <div class="icon-text has-text-grey">
      <span class="icon is-justify-content-flex-start mr-0">
        <span class="material-icons material-icons-outlined is-size-6">calendar_today</span>
      </span>
      <span class="has-text-weight-normal has-text-black">${work.startDate}-${work.endDate}</span>
    </div>
  </li>
  <li class="column is-narrow" style="width: 130px;">
  ${work.priority.length != 0 ? `
    <span class="tag" style="background: ${work.priority[2]}; color: ${work.priority[1]};">${work.priority[0]}</span>` : ""}
  </li>
  
  <li class="column is-narrow" style="width: 110px;">
    <div class="list-member icon-text">
      ${addMemberList(work.memberList)}
    </div>
    <span class="icon has-text-grey ml-3">
      <span class="material-icons material-icons-outlined is-size-5">chevron_right</span>
    </span>
  </li>
  ${work.workStatus.length != 0 ? `
  <li class="column is-narrow" style="width: 80px;">
    <span class="tag" style="background: ${work.workStatus[2]}; color: ${work.workStatus[1]};">${work.workStatus[0]}</span>
  </li>` : ""}
  <li class="column is-narrow" style="width: 30px;"></li>
</ul>
  ${work.subWork.length != 0 ? addSubContent(work.subWork) : ""}               
  `;
  });
  return result;
}

function addMemberList(memberList) {
  let result = ""
  memberList.forEach((member) => {
    result += `
      <span class="image is-24x24" title="${member.name}">
        <img class="is-rounded" src="${member.avatar}" alt="AVATAR"  style="height: 100%;">
      </span>`
  });
  return result;
}

function addSubContent(subWorkList) {
  let result = ""
  subWorkList.forEach((subWork) => {
    result += `
                    <ul class="sub-content columns is-gapless font-13 m-0" style="border-left: 4px solid black;">
                        <div class="icon-text has-text-weight-medium is-align-items-center" style="width: 20px; margin-left: 46px; border-left: 1px solid black; font-size: 20px">-</div>
                        <li class="column" style="width: calc(100% - 630px);">
                          <div class="columns is-justify-content-space-between is-align-items-center m-0 pl-2" style="width: 100%;">
                            <div class="icon-text">
                              <span class="has-text-weight-medium has-text-black">${subWork.nameWork}</span>
                            </div>
                            ${subWork.periodStatus.length != 0 ? `
                            <div class="column is-narrow">
                              <span class="tag" style="background: ${subWork.periodStatus[2]}; color: ${subWork.periodStatus[1]};">${subWork.periodStatus[0]}</span>
                            </div>` : ""} 
                          </div>
                        </li>
                        <li class="column is-narrow" style="width: 130px;">
                          <div class="icon-text has-text-grey">
                            <span class="icon is-justify-content-flex-start mr-0">
                              <span class="material-icons material-icons-outlined is-size-6">calendar_today</span>
                            </span>
                            <span class="has-text-weight-normal has-text-black">${subWork.startDate}-${subWork.endDate}</span>
                        </div>
                        </li>
                        <li class="column is-narrow" style="width: 130px;">
                          ${subWork.priority.length != 0 ? `
                          <span class="tag" style="background: ${subWork.priority[2]}; color: ${subWork.priority[1]};">${work.priority[0]}</span>` : ""}
                        </li>
                      
                        <li class="column is-narrow" style="width: 110px;">
                          <div class="list-member icon-text">
                            ${addMemberList(subWork.memberList)}
                          </div>
                          <span class="icon has-text-grey ml-3">
                            <span class="material-icons material-icons-outlined is-size-5">chevron_right</span>
                          </span>
                        </li>
                        ${subWork.workStatus.length != 0 ? `
                        <li class="column is-narrow" style="width: 80px;">
                          <span class="tag" style="background: ${subWork.workStatus[2]}; color: ${subWork.workStatus[1]};">${subWork.workStatus[0]}</span>
                        </li>` : ""}
                        <li class="column is-narrow" style="width: 30px;"></li>   
                    </ul>
      `
  });
  return result;
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
