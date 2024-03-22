export function convertDate(date) {
  let day = date.getDate();
  day = day < 10 ? "0" + day : day;
  let month = date.getMonth() + 1;
  month = month < 10 ? "0" + month : month;
  let year = date.getFullYear();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  return hours + ":" + minutes + " " + day + "." + month + "." + year;
}
