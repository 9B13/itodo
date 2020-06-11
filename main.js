// each activity has 2 components:
// 0 - the activity text
// 1 - whether it is completed
var activities = {
	0:	["Do 50 crunches in 90 seconds.", false],
	1:	["Donate money to a COVID-19 relief fund.", false],
	2:	["Do 10 pushups.", false],
	3:	["Learn to do nail art.", false],
	4:	["Make a song on Song Generator.", false],
	5:	["Make a tower out of paste.", false],
	6:	["Meditate.", false],
	7:	["Make a cup of tea.", false],
	8:	["Bake chocolate chip cookies.", false],
	9:	["Bake a cake.", false],
	10:	["Watch an action movie.", false],
	11:	["Watch football.", false],
	12:	["Make a house of cards.", false],
	13:	["Get a high score on the Chrome dinosaur game.", false],
	14:	["Draw a self portrait.", false],
	15:	["Read a book.", false],
	16:	["Make trail mix.", false],
	17:	["Organize your closet.", false],
	18:	["Make a pile of clothes you don't want anymore and donate when you can.", false],
	19:	["Sell something on Depop.", false],
	20:	["Shop online.", false],
	21:	["Play Monopoly.", false],
	22:	["Play Snakes n' Ladders.", false],
	23:	["Listen to the whole discography of an artist you haven't heard before.", false],
	24:	["Make your own workout routine to your favourite song.", false],
	25:	["Learn origami.", false],
	26:	["Learn a new recipe.", false],
	27:	["Take an online boxing lesson.", false],
	28:	["Join a live workout on Instagram.", false],
	29:	["Organise your pantry.", false],
	30:	["Clean out your camera roll.", false],
	31:	["Play AI noughts and crosses.", false],
	32:	["Revamp an item of clothing in your closet you don't wear.", false],
	33:	["Make whipped coffee.", false],
	34:	["Learn the cup song.", false],
	35:	["Learn how to tie 5 types of knots.", false],
	36:	["Stretch to become more flexible.", false],
	37:	["Make perfume out of flowers.", false],
	38:	["Water your plants.", false],
	39:	["Practice makeup and try follow a tutorial.", false],
	40:	["Give yourself a haircut.", false],
	41:	["Watch America’s Got Talent.", false],
	42:	["Learn to throw cards.", false],
	43:	["Learn a TikTok dance.", false],
	44:	["Wash your hands.", false],
	45:	["Make a coronavirus meme.", false],
	46:	["Learn how to make spaghetti.", false]
};

// elements
var activity_el = document.getElementById("activity");
var log = document.getElementById("log");
var completed = document.getElementById("completed");
var dont_show = document.getElementById("dont-show");
var completed_counter = document.getElementById("completed_counter");
var total_counter = document.getElementById("total_counter");

var activity_id;
var activity;

// took this from stackoverflow (Pick random property from a Javascript object)
function pickRandomProperty(obj) {
    var result;
    var count = 0;
    for (var prop in obj)
        if (Math.random() < 1/++count)
           result = prop;
    return result;
}

function save_checkbox() {
	// saves previous checkbox settings
	activity[1] = completed.checked;

	// removes activities not to be shown
	if (dont_show.checked) { delete activities[activity_id] }

	// updates tally
	var tally = 0;

	for (var activity_i in activities) { tally += activities[activity_i][1]; }

	completed_counter.innerHTML = tally;
	total_counter.innerHTML = Object.keys(activities).length;
}

function new_activity() {
	// generates new activity
	activity_id = pickRandomProperty(activities); 
	activity = activities[activity_id];

	activity_el.innerHTML = activity[0];

	log.innerHTML = `${activity[0]}<br/>${log.innerHTML}`;

	// sets checkboxes to what they were
	completed.checked = activity[1];
	dont_show.checked = false;
}

function toggle_log() {
	// uses display attribute bc visibility leaves blank space where the text used to be
	if (log.style.display == "none") {
		log.style.display = "block";
	} else {
		log.style.display = "none";
	}
}

new_activity();