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
    let 
})