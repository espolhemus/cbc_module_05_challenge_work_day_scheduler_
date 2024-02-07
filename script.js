// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var saveButtons = document.querySelectorAll('.saveBtn');

$(document).ready(function() {
// Loop through each button and add the event listener
  saveButtons.forEach(button => {
    button.addEventListener("click", function() {
    // Get the id of the button's parent element
      const parentElement = button.parentNode;
      const timeBlock = button.parentNode.id;
      const activityDescription = parentElement.querySelector('.description').value;

    // Save the time block and current value of the textarea element in localStorage
    localStorage.setItem(timeBlock, activityDescription); 
  });
});

function setCurrentTime() {
  // Get the current date in the format: "Day of the Week, Month Day, Year"
  var currentDay = dayjs().format('dddd, MMMM D, YYYY');

  // Display the current date on the page
  $('#currentDay').text(currentDay);
  
  // Get the current time in 24-hour format
  var currentHour = dayjs().hour();

  // Loop over each time block in the schedule
  $('.time-block').each(function () {
    // Get the hour of the time block
    var scheduleHour = parseInt($(this).attr('id').split('-')[1]);

    // Check if the time block is in the past, present, or future
    if (scheduleHour < currentHour) {
      $(this).addClass('past');
    } else if (scheduleHour === currentHour) {
      $(this).addClass('present');
    } else {
      $(this).addClass('future');
    }
  });

}

function loadSavedActivites() {
  // Get the saved activities from localStorage
  for (let i = 0; i < localStorage.length; i++) {
    let activityTime = localStorage.key(i);
    let activityDescription = localStorage.getItem(activityTime);

    // Set the value of the textarea element with the corresponding time block
    $('#' + activityTime + ' .description').val(activityDescription);
  }

}


setCurrentTime();
loadSavedActivites()
});
