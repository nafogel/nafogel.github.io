var groguYes = new Audio("/groguyesno/audio/grogu-yes.mp3");
var groguNo = new Audio("/groguyesno/audio/grogu-no.mp3");

$("#grogu-yes").mousedown(function() {
	console.log("yes");
	groguYes.pause();
	groguYes.currentTime = 0;
	groguYes.play();
});

$("#grogu-no").mousedown(function() {
	groguNo.pause();
	groguNo.currentTime = 0;
	groguNo.play();
});
