function formatTime(minutes) {
  var minute;
  var hours;
  var days;
  minute=(minutes%60);
  hours=(((minutes-minute)/60)%24);
  days=((((minutes-minute)/60)-hours)/24);
  return (days + "day(s)" + hours + "hour(s)" + minute + "minete(s)");
}

alert(formatTime(1510));