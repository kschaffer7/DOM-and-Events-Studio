window.addEventListener("load", function() {
    console.log('window loaded');
    // "Take off" button events
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
    // "Land" button events
    let land = document.getElementById("landing");
    land.addEventListener("click", function (event) {
        let response = window.alert("The shuttle is landing. Landing gear engaged.");
        let flightStatus = document.getElementById("flightStatus");
        flightStatus.innerHTML = "The shuttle has landed.";
        let shuttleBackground = document.getElementById("shuttleBackground");
        shuttleBackground.style.backgroundColor = "green";
        let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
        spaceShuttleHeight.innerHTML = 0;
    });
});