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

let memberList = ["Nguyễn Hữu Học", "Trần Thị Diệp Anh", "Hoàng Thị Phương Thảo", "Lê Quang Huy"];
let periodStatus = ["Sắp hết hạn", "Trễ hạn"];
let statusList = ["Todo", "Doing", "Review", "Done", "Cancel"];
let priorityList = []