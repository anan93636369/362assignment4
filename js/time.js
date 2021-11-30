// time is 
$(function startTime(){

	var current = new Date();
    current_hour = current.getHours()
    current_minute = current.getMinutes()
    current_seconds = current.getSeconds()


	AmOrPm = current_hour >= 12 ? 'PM' : 'AM';
	current_hour = (current_hour % 12) || 12;

    current_minute = checkTime(current_minute);
  	current_seconds = checkTime(current_seconds);

	var time = current_hour + ":" + current_minute + ":" + current_seconds + " " + AmOrPm;

    document.getElementById("time").textContent = time
    setTimeout(startTime, 1000);

})

function checkTime(i) {
  if (i < 10) {i = "0" + i};
  return i;
}
