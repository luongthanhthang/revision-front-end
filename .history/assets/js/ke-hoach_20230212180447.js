class WorkPlan{
    constructor(nameWork, periodStatus, startDate, endDate, priority, memberList, workStatus) {
        this.nameWork = nameWork;
        this.periodStatus = periodStatus;
        this.startDate = startDate;
        this.endDate = endDate;
        this.priority = priority;
        this.memberList = memberList;
        this.workStatus = workStatus;
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

let periodStatus = ["Sắp hết hạn", "Trễ hạn"];
let workStatusList = ["Todo", "Doing", "Review", "Done", "Cancel"];
let priorityList = [["Thấp", "#8990A5"], ["Trung bình", "#6B8FE0"], ["Quan trọng", "#BCB51"], ["Khẩn cấp", "#FF5449"]];
let labelList = [["Dự án", "#1f81b2"], ["Vận hành", "#d34a51"], ["Khác", "#3aa51d"], ["Marketing", "#5f8e25"], ["HR", "#c207c5"]];

let filterList = [["Thành viên", memberList], ["Thời hạn", periodStatus], ["Trạng thái", workStatusList], 
["Độ ưu tiên", priorityList], ["Nhãn dán", labelList]];

let workPlanListWeek5 = [
    new WorkPlan("Check in OKRs", periodStatus[0], "03/02", "03/02", priorityList[2], [memberList[0], memberList[1]], workStatusList[0]),
    new WorkPlan("abc", periodStatus[0], "03/02", "10/02", "", [memberList[0], memberList[2]], workStatusList[0]),
    new WorkPlan("HRM v2 Hộp thư", periodStatus[0], "30/01", "04/02", priorityList[2], [memberList[0], memberList[1]], workStatusList[0]),
    new WorkPlan("Check in OKRs", periodStatus[0], "03/02", "03/02", priorityList[2], [memberList[0], memberList[1]], workStatusList[0]),
    new WorkPlan("abc", periodStatus[0], "03/02", "10/02", "", [memberList[0], memberList[2]], workStatusList[0]),
    new WorkPlan("HRM v2 Hộp thư", periodStatus[0], "30/01", "04/02", priorityList[2], [memberList[0], memberList[1]], workStatusList[0])
];

let workPlanListWeek2 = [
    new WorkPlan("Xậy dựng và chốt OKRs các cá nhân", periodStatus[0], "12/01", "12/01", priorityList[2], [memberList[0], memberList[3]], workStatusList[3]),
    new WorkPlan("Follow Hi-fi", "", "10/01", "13/01", priorityList[0], [memberList[0], memberList[3]], workStatusList[4]),
    new WorkPlan("Xây dựng plan tuần", "", "13/01", "13/01", priorityList[2], [memberList[0], memberList[3]], workStatusList[3]),
    new WorkPlan("Xậy dựng và chốt OKRs các cá nhân", periodStatus[0], "12/01", "12/01", priorityList[2], [memberList[0], memberList[3]], workStatusList[3]),
    new WorkPlan("Follow Hi-fi", "", "10/01", "13/01", priorityList[0], [memberList[0], memberList[3]], workStatusList[4]),
    new WorkPlan("Xây dựng plan tuần", "", "13/01", "13/01", priorityList[2], [memberList[0], memberList[3]], workStatusList[3])
];

let weekPlanList = [
    new WeekPlan(5, "30/01", "05/02", workPlanListWeek5),
    new WeekPlan(2, "09/01", "14/01", workPlanListWeek2)
];

window.addEventListener("DOMContentLoaded", () => {
    let mainContent = document.getElementById("plan-content");
    let planFilterContent = document.createElement("ul");
    planFilterContent.setAttribute("class", "filter-content columns is-gapless");
    planFilterContent.setAttribute("id", "plan-filter-content");
    planFilterContent.innerHTML = addViewPlanFilterContent();

    let planDetailContent = document.createElement("div");
    planDetailContent.setAttribute("class", "main-plan-content");
    planDetailContent.setAttribute("id", "main-plan-content");

    // mainContent.appendChild(planFilterContent);
})

function addViewPlanFilterContent() {
    return `
    
    <li class="column">
      <div class="field">
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
    console.log(typeof dropdownList);
    let result = "";
    dropdownList.foreach((item, index) => {
            result += `
        <li class="column is-narrow">
          <div class="dropdown is-hoverable is-size-7">
            <div class="dropdown-trigger">
              <span class="icon-text">
                <span>${item[0]}</span>
                <span class="material-icons material-icons-outlined">arrow_drop_down</span>
               </span>
            </div>
            <div class="dropdown-menu" role="menu">
              <div class="dropdown-content">
                <div class="dropdown-item">
                  <a class="has-text-weight-semibold has-text-black">${index === 0 ? "Tất cả thành viên" : "Tất cả"}</a>
                </div>`;
            
            item[1].foreach((itemDropdown) => {
                result += `
            <div class="dropdown-item py-0">
                <a class="icon-text is-align-items-center">
                  <span class="icon image is-16x16 mr-2">
                    <img class="is-rounded" src="${itemDropdown[1]}" alt="IMG">                                
                  </span>
                  <span class="is-size-7">${itemDropdown[0]}</span>
                 </a>
            </div>
                `
            });
            result += `
                    </div>
                </div>
            </li>`;          
        });
        return result;
    }

    console.log();