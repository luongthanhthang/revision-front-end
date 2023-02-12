class PlanWeek{
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

class Week {
    constructor(week, startDate, endDate, workList) {
        this.week = week;
        this.periodStatus = periodStatus;
        this.startDate = startDate;
        this.endDate = endDate;
    }
}

let memberList = [["Nguyễn Hữu Học", "https://work.conando.vn/upload/220223/637812349690327647.jpg"]
, ["Trần Thị Diệp Anh", "https://avatars.dicebear.com/api/adventurer-neutral/BB5F999408.svg"]
, ["Hoàng Thị Phương Thảo", "https://avatars.dicebear.com/api/adventurer-neutral/226M40DC04.svg"]
, ["Lê Quang Huy", "https://work.conando.vn/upload/220916/229G2E120D.jpg"]];

let periodStatus = ["Sắp hết hạn", "Trễ hạn"];
let statusList = ["Todo", "Doing", "Review", "Done", "Cancel"];
let priorityList = [["Thấp", "#8990A5"], ["Trung bình", "#6B8FE0"], ["Quan trọng", "#BCB51"], ["Khẩn cấp", "#FF5449"]];
let labelList = [["Dự án", "#1f81b2"], ["Vận hành", "#d34a51"], ["Khác", "#3aa51d"], ["Marketing", "#5f8e25"], ["HR", "#c207c5"]];
