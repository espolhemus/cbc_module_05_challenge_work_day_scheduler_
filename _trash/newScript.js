
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var saveButtons = document.querySelectorAll('.saveBtn');

// Loop through each button and add the event listener
saveButtons.forEach(button => {
  button.addEventListener("click", function() {
    // Get the id of the button's parent element
    const parentElement = button.parentNode;
    const timeBlock = button.parentNode.id;
    // console.log(parentId);
  
    const activityDescription = parentElement.querySelector('.description').value;
    // const activityDescription = button.siblings
    console.log(activityDescription);

    // Save the time block and current value of the textarea element in localStorage
    localStorage.setItem(timeBlock, activityDescription); 
  });
});

function saveScheduleActivity() {
  // Get the current value of the textarea element
  var activityDate = dayjs().format('YYYY-MM-DD');
  var activityDescription = $(this).siblings('.description').val();
  var activityTime = $(this).parent().attr('id');

  // Save the current value of the textarea element in localStorage
  localStorage.setItem(activityDate, activityTime, activityDescription);
}
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

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

// function loadSavedActivites() {
//   // Loop over each time block in the schedule
//   $('.time-block').each(function () {
//     // Get the id of the time block
//     var timeBlockId = $(this).attr('id');

//     // Get the value of the corresponding key in localStorage
//     var activityDescription = localStorage.getItem(timeBlockId);

//     // Set the value of the textarea element with the corresponding time block
//     $(this).children('.description').val(activityDescription);
//   });
}
function loadSavedActivites() {


  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let value = localStorage.getItem(key);
    
    // Do something with the key and value
    console.log(`Key: ${key}, Value: ${value}`);
  }
  // // Get the saved activities from localStorage
  // var savedActivitiesArray = localStorage.getItem('savedActivities') || [];
  // console.log(savedActivitiesArray);

  // for (var i = 0; i < savedActivitiesArray.length; i++) {
  //   var activityTime = savedActivitiesArray[i].time;
  //   var activityDescription = savedActivitiesArray[i].description;

    // Set the value of the textarea element with the corresponding time block
    $('#' + activityTime + ' .description').val(activityDescription);
  }

}


setCurrentTime();
loadSavedActivites()

// saveBtn.addEventListener("click", saveScheduleActivity())