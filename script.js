$(document).ready(function () {
  //Display date and time in the header  
  $("#currentDay").text(moment().format('dddd, MMMM Do h:mm a'));
});