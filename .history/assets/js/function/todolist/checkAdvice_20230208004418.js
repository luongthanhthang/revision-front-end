function checkAdvice() {
    let todoList = Object.values(localStorage);
    if (todoList.every((item) => {return JSON.parse(item).statusWorkValue === "Done";})) {
      document.querySelector(".last-detail-todolist .advice").innerText =
        "Quá tuyệt vời, bạn đã hoàn thành Todolist của hôm nay :)";
    } else {
      document.querySelector(".last-detail-todolist .advice").innerText =
        "Tôi biết bạn sẽ làm tốt mà. Hãy hoàn thành thật sớm nhé!";
    }
  }