export default function selectOptionTime(startTime, endTime, hourStep, minuteStep) {
  let timeArray = [];
  for (let hour = startTime; hour <= endTime; hour += hourStep) {
    for (let minute = 0; minute < 60; minute += minuteStep) {
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
