var currentDay = $("#currentDay");
var saveBtn = $(".saveBtn");
var Events = $(".fas fa-save");
var text = $("textarea");
var time = $(".time-block").attr("id");
var currentHour = dayjs().format("H");
var hour = [9, 10, 11, 12, 13, 14, 15, 16, 17];
var textarray= [];
var timearray= [];
console.log("hey get to work");


$( document ).ready(function() {

  $(".saveBtn").on("click", function() {
    let time = $(this).parent().attr("id");
    let text = $(this).siblings(".description").val();

    timearray.push(time);
    textarray.push(text);

    console.log(textarray);
    console.log(timearray);
    console.log(text);
    console.log(time);

  });

  function displayTime() {
    var rightNow = dayjs().format ( 'MMM DD, YYYY [at] hh:mm:ss A' );
    currentDay.text(rightNow);
  }

  function renderBackground() {
    for (var i = 0; i < hour.length; i++)
    if (hour[i] < currentHour) {
      text[i].classList.add("past");
    } else if (hour[i] > currentHour) {
      text[i].classList.add("future");
    } else {
      text[i].classList.add("present");
    } 
  }

  renderBackground();
  setInterval(renderBackground, 1000);
  displayTime();
  setInterval(displayTime, 1000);

});