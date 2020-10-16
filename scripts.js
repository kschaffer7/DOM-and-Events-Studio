window.addEventListener("load", function() {
    console.log('window loaded');

    let takeOff = document.getElementById("takeoff");
    takeOff.addEventListener("click", function (event) {
        // console.log("Take off")
        // console.log(event);
        let response = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (response) {
            let flightStatus = document.getElementById("flightStatus");
            flightStatus.innerHTML = "Shuttle in flight.";
            let shuttleBackground = document.getElementById("shuttleBackground");
            shuttleBackground.style.backgroundColor = "blue";
            let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
            spaceShuttleHeight.innerHTML = 10000;
        }
    });
});