// each activity has 2 components:
// 0 - the activity text
// 1 - whether it is completed
var activities = [
	["Do 50 crunches in 90 seconds.", true],
	["Donate money to a COVID-19 relief fund.", false],
	["Do 10 pushups.", false],
	["Learn to do nail art.", false],
	["Make a song on Song Generator.", false],
	["Make a tower out of paste.", false],
	["Meditate.", false],
	["Make a cup of tea.", false],
	["Bake chocolate chip cookies.", false],
	["Bake a cake.", false],
	["Watch an action movie.", false],
	["Watch football.", false],
	["Make a house of cards.", false],
	["Get a high score on the Chrome dinosaur game.", false],
	["Draw a self portrait.", false],
	["Read a book.", false],
	["Make trail mix.", false],
	["Organize your closet.", false],
	["Make a pile of clothes you don't want anymore and donate when you can.", false],
	["Sell something on Depop.", false],
	["Shop online.", false],
	["Play Monopoly.", false],
	["Play Snakes n' Ladders.", false],
	["Listen to the whole discography of an artist you haven't heard before.", false],
	["Make your own workout routine to your favourite song.", false],
	["Learn origami.", false],
	["Learn a new recipe.", false],
	["Take an online boxing lesson.", false],
	["Join a live workout on Instagram.", false],
	["Organise your pantry.", false],
	["Clean out your camera roll.", false],
	["Play AI noughts and crosses.", false],
	["Revamp an item of clothing in your closet you don't wear.", false],
	["Make whipped coffee.", false],
	["Learn the cup song.", false],
	["Learn how to tie 5 types of knots.", false],
	["Stretch to become more flexible.", false],
	["Make perfume out of flowers.", false],
	["Water your plants.", false],
	["Practice makeup and try follow a tutorial.", false],
	["Give yourself a haircut.", false],
	["Watch America’s Got Talent.", false],
	["Learn to throw cards.", false],
	["Learn a TikTok dance.", false],
	["Wash your hands.", false],
	["Make a coronavirus meme.", false],
	["Learn how to make spaghetti.", false]
];

// elements
var activity_el = document.getElementById("activity");
var log = document.getElementById("log");
var completed = document.getElementById("completed");
var dont_show = document.getElementById("dont_show");

var activity_id;
var activity;

function save_checkbox() {
	// saves previous checkbox settings
	activities[activity_id][1] = completed.checked;
}

function new_activity() {
	// generates new activity
	activity_id = Math.floor(Math.random() * activities.length);
	activity = activities[activity_id];

	activity_el.innerHTML = activity[0];

	log.innerHTML = `${activity[0]}<br/>${log.innerHTML}`;

	// sets checkbox to what it was 
	completed.checked = activity[1];
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