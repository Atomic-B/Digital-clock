function displayTime() {
    var currentDateTime = new Date();
    var currentHour = Number(currentDateTime.getHours());
    var currentMin = Number(currentDateTime.getMinutes());
    var currentSec = Number(currentDateTime.getSeconds());

    var outputHour = document.getElementById("outputHour");
    var outputMin = document.getElementById("outputMin");
    var outputSec = document.getElementById("outputSec");
    var outputSession = document.getElementById("outputSession");

    outputHour.innerHTML = currentHour;
    outputMin.innerHTML = currentMin;
    outputSec.innerHTML = currentSec;

    if (currentHour >= 12) {
        outputSession.innerHTML = "PM";
    } else {
        outputSession.innerHTML = "AM";
    };
    if (currentHour > 12) {
        currentHour = currentHour - 12;
    }
}