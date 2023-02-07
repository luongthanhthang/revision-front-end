export default function selectOptionTime(startTime, endTime, step) {
    let time = "";
    for (let hour = startTime; hour <= endTime; hour++) {
      for (let minute = 0; minute <= 50; minute += 10) {
        let hourSelect;
        let minuteSelect;
        if (hour < 10) {
          hourSelect = "0" + hour;
        } else {
          hourSelect = hour;
        }
        if (minute == 0) {
          minuteSelect = "00";
        } else {
          minuteSelect = minute;
        }
        result += `<option value="${hourSelect}:${minuteSelect}">${hourSelect}:${minuteSelect}</option>`;
      }
    }
}