var currentDay = $("#currentDay");
var saveBtn = $(".saveBtn");
var events = $(".fas fa-save");
var text = $(".description");
var time = $(".time-block").attr("id");
var currentHour = dayjs().format("H");
var hour = [9, 10, 11, 12, 13, 14, 15, 16, 17];
var textarray= [];
var timearray= [];



  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?


$( document ).ready(function() {
  console.log("hey get to work");

  $(".saveBtn").on("click", function() {
    console.log("save button clicked");
    let savedtext = $(this).siblings(".description").val();
    let savedtime = $(this).parent().attr("id");
    console.log(savedtext);
    console.log(savedtime);
    textarray.push(savedtext);
    timearray.push(savedtime);
    localStorage.setItem("timearray", JSON.stringify(timearray));
    localStorage.setItem("textarray", JSON.stringify(textarray));
    console.log(textarray);
    console.log(timearray);
  });

  //upon refresh, the window will display the saved text based on the i value for the time array
  
  function renderText() {
  // check to see if time array id matches the time block id and if it does, display the text saved in the text array
  // saved text is a string, so we need to parse it to an integer to compare it to the time block id
  JSON.parse(localStorage.getItem("timearray"));
  console.log(timearray);
  JSON.parse(localStorage.getItem("textarray"));
  console.log(textarray);
  }
  
  function load() {
    renderText();
  }

  

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


    load();
    displayTime();
    setInterval(displayTime, 1000);
    renderBackground();
    setInterval(renderBackground, 1000);
    

});