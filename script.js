
var currentDate = moment().format('dddd') + " " + moment().format("Do MMM YYYY");
var currentHour = moment().format('h:mm:ss a');


var interval = setInterval(function() {
  var momentNow = moment();
  $('#currentDay').html(momentNow.format('YYYY MMMM DD') + ' '
                      + momentNow.format('dddd')
                       .substring(0,3).toUpperCase());
  $('#currentDay').html(currentDate + " " + momentNow.format('hh:mm:ss A'));
}, 100);


$(document).ready(function () { 

  let NowMoment = moment().format("MMMM Do YYYY");
  let displayDate = document.getElementById("currentDay");
  displayDate.innerHTML = NowMoment;
  let currentHour = moment().format("HH");
  
$(".time-block").each(function () {
  var timeBlock = $(this).attr("id").split("-")[1];
  
  if (currentHour == timeBlock) {
    $(this).addClass("present");
    $(this).children(".description").addClass("white-text");
  } else if (currentHour < timeBlock) {
    $(this).removeClass("present");
    $(this).addClass("future");
  } else if (currentHour > timeBlock) {
    $(this).removeClass("future");
    $(this).addClass("past");
  }
});

$(".saveBtn").click(function (event) {
  event.preventDefault();
  var value = $(this).siblings(".time-block").val();
  var time = $(this).parent().attr("id").split("-")[1];
  localStorage.setItem(time, value);
});

  $("#hour-9 .time-block").val(localStorage.getItem("9"));
  $("#hour-10 .time-block").val(localStorage.getItem("10"));
  $("#hour-11 .time-block").val(localStorage.getItem("11"));
  $("#hour-12 .time-block").val(localStorage.getItem("12"));
  $("#hour-1 .time-block").val(localStorage.getItem("1"));
  $("#hour-2 .time-block").val(localStorage.getItem("2"));
  $("#hour-3 .time-block").val(localStorage.getItem("3"));
  $("#hour-4 .time-block").val(localStorage.getItem("4"));
  $("#hour-5 .time-block").val(localStorage.getItem("5"));
});