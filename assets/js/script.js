var dayFormat = moment().format("ddd, MMMM Do");

var now = moment().format("H A");

var daySchedule = [
	{ time: "9 AM", event: "" },
	{ time: "10 AM", event: "" },
	{ time: "11 AM", event: "" },
	{ time: "12 PM", event: "" },
	{ time: "1 PM", event: "" },
	{ time: "2 PM", event: "" },
	{ time: "3 PM", event: "" },
	{ time: "4 PM", event: "" },
	{ time: "5 PM", event: "" }
];

var storedSchedule = JSON.parse(localStorage.getItem("savedSchedule"));

if (storedSchedule !== null) {
    daySchedule = storedSchedule;
};

$("#currentDay").text(dayFormat);

daySchedule.forEach(function(hourBlock, index) {
    var timeLabel = hourBlock.time;

    var hourColor = blockColor(timeLabel);

    var hourFormat =
    '<div class="time-block" id="' +
		index +
		'"><div class="row no-gutters input-group"><div class="col-sm-2 col-lg-1 input-group-prepend hour justify-content-sm-end pr-3 pt-3">' +
		timeLabel +
		'</div><textarea class="form-control ' +
		hourColor +
		' description">' +
		hourBlock.event +
        '</textarea><div class="col-sm-2 col-lg-1 input-group-append"><button class="saveBtn btn-block" type="submit"><i class="far fa-save"></i></button></div></div></div>';
    
    $(".container").append(hourFormat);
})