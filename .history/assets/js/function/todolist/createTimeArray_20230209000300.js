export default function createTimeArray(start, finish, step) {
  let startHour = parseInt(start.split(":")[0]);
  let startMin = parseInt(start.split(":")[1]);
  let endHour = parseInt(finish.split(":")[0]);
  let endMin = parseInt(finish.split(":")[1]);

  if (startHour > endHour) return null;
  if (startHour === endHour && startMin > endMin) return null;
  let current = [startHour, startMin];

  let object = {};
  let index = 0;

  while (current[0] < endHour || Boolean(current[0] === endHour && current[1] <= endMin)) {
    object[index] =
      (current[0] < 10 ? "0" + current[0] : current[0]) + ":" + (current[1] < 10 ? "0" + current[1] : current[1]);
    if (current[1] + step >= 60) {
      current[1] = current[1] + step - 60;
      current[0] += 1;
    } else {
      current[1] = current[1] + step;
    }
    index++;
  }
  return object;
}
