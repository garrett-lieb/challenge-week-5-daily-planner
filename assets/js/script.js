var currentDay = $("#currentDay");
var saveBtn = $(".saveBtn");
var Events = $(".fas fa-save");
var text = $("textarea");
var time = $(".time-block").attr("id");
var textarray= [];
var timearray= [];
console.log("hey get to work");


$( document ).ready(function() {
  
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  // get the user input from localStorage
  localStorage.getItem("text", text);
  localStorage.getItem("time", time);

  // set the text of the textarea to the value from localStorage
  // apply the past, present, or future class to each time block
  // compare the hour in the id to the current hour


  

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  //event listener for save button

    $(".saveBtn").on("click", function() {
    console.log("save button clicked");
    let time = $(this).parent().attr("id");
    let text = $(this).siblings(".description").val();
    let hour = String(time).split("-")[1];
    
  // push the user input from the textarea to the array?
    
    timearray.push(time);
    textarray.push(text);
    
  // save to local storage
    localStorage.setItem(time, text);
  //function to store the user input in local storage?
    
    

    // function renderText() {
    //   for (let i = 0; i < textarray.length; i++) {
    //     $(text).text(textarray[i]);
    //   }
    // }
    // renderText();


    console.log(textarray);
    console.log(timearray);
    console.log(time);
    console.log(text);
    console.log(hour);
    
    });

    //display the current date and time
    function displayTime() {
      var rightNow = dayjs().format ( 'MMM DD, YYYY [at] hh:mm:ss A' );
      currentDay.text(rightNow);
    }

    // make background color change based on time
    // function to render the background color
    // target the id of the time block
    function renderBackground() {
      var time = $(text).parent().attr("id");
      var hour = String(time).split("-")[1];
      
      if (hour < dayjs().hour()) {
        $(text).parent().addClass("past");
      }
      if (hour == dayjs().hour()) {
        $(text).parent().addClass("present");
      }
      if (hour > dayjs().hour()) {
        $(text).parent().addClass("future");
      }
    }

    // renderText();
    renderBackground();
    displayTime();
    setInterval(displayTime, 1000);

  });