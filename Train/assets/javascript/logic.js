 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyDajCFiBQ93ETtzCtSfyeJr-nX39mR_aiA",
    authDomain: "project-8fabc.firebaseapp.com",
    databaseURL: "https://project-8fabc.firebaseio.com",
    projectId: "project-8fabc",
    storageBucket: "project-8fabc.appspot.com",
    messagingSenderId: "528159473952"
  };
  firebase.initializeApp(config);

var database = firebase.database();

var name = "";
var destination = "";
var time= "";
var frequency = "";
var minAway = "";



//   ==========================================

$("#add-train").on("click", function(event) {

	event.preventDefault();

	name = $("#train-input").val().trim();
	destination = $("#destination-input").val().trim();
	time = $("#time-input").val().trim();
	frequency = $("#frequency-input").val().trim();


	// var tFrequency = frequency;
	// var firstTime = time;

	// var firstTimeConverted = moment(firstTime, "hh:mm").subtract(1, "years");
	// console.log(firstTimeConverted);

	// var currentTime = moment();
	// console.log("current time: " + currentTime)


	// var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
	// console.log("Difference in time: " + diffTime);

	database.ref().push({
		trainName: name,
		trainDestination: destination,
		trainTime: time,
		trainFrequency: frequency
	});

});


database.ref().on("child_added", function(snapshot) {

	var sv = snapshot.val();

	$("#train-list").append("<tr><td>" + snapshot.val().trainName + 
	      	"</td><td>" + snapshot.val().trainDestination + 
	      	"</td><td>" + snapshot.val().trainFrequency + 
	      	"</td><td>" + snapshot.val().trainTime
		); 

    }, function(errorObject) {
    	console.log("Errors handled: " + errorObject.code);
});

function savedata(){
    var message = messageField.value;
  
    messagesRef.child('users').child(userId).push(
    {
    fieldName:'messageField', 
    text:message
    });
    messageField.value = '';
  }