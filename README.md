# Work Day Scheduler

Created a simple scheduling application that saves users day to local storage and allows them to store upcoming tasks. The hours change color depending on the time of day. 

Used [jQuery](https://jquery.com/) and [Moment.js](https://momentjs.com/) library to work with the dates and times.

Application deployed at: https://jpd61.github.io/work-day-scheduler/

Based on feedback that I received I worked on correctly ordering my JavaScript, improved my commenting frequency and quality to ensure that each part of the code is described, and worked on improving this README.md file to better showcase the application to visitors.

<img src="./assets/screenshot.PNG/">


### User Story
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively


### Acceptance Criteria
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with time blocks for standard business hours
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
WHEN I click into a time block
THEN I can enter an event
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
