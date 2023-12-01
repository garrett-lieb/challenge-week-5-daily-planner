var currentDay = $("#currentDay");
var saveBtn = $(".saveBtn");
var events = $(".fas fa-save");
var text = $(".description");
var time = $(".time-block").attr("id");
var currentHour = dayjs().format("H");
var hour = [9, 10, 11, 12, 13, 14, 15, 16, 17];


  $(document).ready(function() {
    console.log("hey get to work");

    var textarray = JSON.parse(localStorage.getItem("textarray")) || [];
    var timearray = JSON.parse(localStorage.getItem("timearray")) || [];

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

    function displayTime() {
      var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss A');
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

    function init() {
      getText();
      displayTime();
      setInterval(displayTime, 1000);
      renderBackground();
      setInterval(renderBackground, 1000);
    }

    init();
  });
