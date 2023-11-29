// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html. XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX


console.log("hello world");

$( document ).ready(function() {
    
  var currentDay = $("#currentDay");
       // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
      
    


    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    
    // compare the hour in the id to the current hour
    // if the hour is in the past, add the past class to the textarea
    // if the hour is in the present, add the present class to the textarea
    // if the hour is in the future, add the future class to the textarea


    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    
    // get the user input from localStorage
    // set the text of the textarea to the value from localStorage


    // TODO: Add code to display the current date in the header of the page.
    // HINT: How can Day.js be used to format the date?XXXXXXXXXXXXXXXXXXXXXXXXXX

    function displayTime() {
      var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
      currentDay.text(rightNow);
    }
    displayTime();
    setInterval(displayTime, 1000);

  });
  
 

