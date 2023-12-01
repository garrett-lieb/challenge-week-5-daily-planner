var currentDay = $("#currentDay");
var saveBtn = $(".saveBtn");
var events = $(".fas fa-save");
var text = $(".description");
var time = $(".time-block").attr("id");
var currentHour = dayjs().format("H");
var hour = [9, 10, 11, 12, 13, 14, 15, 16, 17];

  // When the page loads, the following functions will run; wrap the functions in a document.ready function 
  // this ensure the page is fully loaded before the functions run
  $(document).ready(function() {
    console.log("hey get to work");
    // define the arrays to store the text and time values; they are either empty or the values in local storage
    var textarray = JSON.parse(localStorage.getItem("textarray")) || [];
    var timearray = JSON.parse(localStorage.getItem("timearray")) || [];
    // Save the text in the "description" field to local storage in relation to the time of day
    $(".saveBtn").on("click", function() {
      console.log("save button clicked");
      var savedtext = $(this).siblings(".description").val();
      var savedtime = $(this).parent().attr("id");
      console.log(savedtext);
      console.log(savedtime);
      textarray.push(savedtext);
      timearray.push(savedtime);
      localStorage.setItem("timearray", JSON.stringify(timearray));
      localStorage.setItem("textarray", JSON.stringify(textarray));
      console.log(textarray);
      console.log(timearray);
    });

    function getText() {
      // Populate the "description" field based on the values in "textarray" in relation to "timearray"
      for (var i = 0; i < timearray.length; i++) {
        var timeId = "#" + timearray[i];
        var descriptionField = $(timeId).find(".description");
        descriptionField.val(textarray[i]);
      }
    }
    // Display the current date and time
    function displayTime() {
      var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss A');
      var dayofweek = dayjs().format('dddd');
      currentDay.text(rightNow + " " + dayofweek);
    }
    // Render the background color based on the current time
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
    // Initialize the page upon reload
    function init() {
      getText();
      displayTime();
      setInterval(displayTime, 1000);
      renderBackground();
      setInterval(renderBackground, 1000);
    }

    init();
  });
