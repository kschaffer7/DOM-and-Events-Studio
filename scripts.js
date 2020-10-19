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
        window.alert("The shuttle is landing. Landing gear engaged.");
        let flightStatus = document.getElementById("flightStatus");
        flightStatus.innerHTML = "The shuttle has landed.";
        let shuttleBackground = document.getElementById("shuttleBackground");
        shuttleBackground.style.backgroundColor = "green";
        let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
        spaceShuttleHeight.innerHTML = 0;
    });
    // "Abort Mission" button events
    let missionAbort = document.getElementById("missionAbort");
    missionAbort.addEventListener("click", function (event) {
        let response = window.confirm("Confirm that you want to abort the mission.");
        if (response) {
            let flightStatus = document.getElementById("flightStatus");
            flightStatus.innerHTML = "Mission aborted.";
            let shuttleBackground = document.getElementById("shuttleBackground");
            shuttleBackground.style.backgroundColor = "green";
            let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
            spaceShuttleHeight.innerHTML = 0;
        }
    });
    // How to add an event listener to a button that does not have an id
    // Assign a 'position: absolute' for "rocket" and center
    let rocket = document.getElementById("rocket");
    rocket.style.position = "absolute";
    rocket.style.bottom = 0;
    rocket.style.left = "178px";
    let bottom = rocket.style.bottom;
    bottom = bottom.replace("px","");
    let center = rocket.style.left;
    center = center.replace("px","");
    let allButtons = document.getElementsByTagName("button");
    // Move rocket image up
    let moveUp = allButtons[0];
    moveUp.addEventListener("click", function (event) {
        bottom = Number(bottom) + 10;
        rocket.style.bottom = bottom + "px";
        let spaceShuttleHeight = document.getElementById("spaceShuttleHeight").innerHTML;
        spaceShuttleHeight = Number(spaceShuttleHeight) + 10000;
        document.getElementById("spaceShuttleHeight").innerHTML = spaceShuttleHeight;
    });
    // Move rocket image down
    let moveDown = allButtons[1];
    moveDown.addEventListener("click", function (event) {
        bottom = Number(bottom) - 10;
        rocket.style.bottom = bottom + "px";
        let spaceShuttleHeight = document.getElementById("spaceShuttleHeight").innerHTML;
        spaceShuttleHeight = Number(spaceShuttleHeight) - 10000;
        document.getElementById("spaceShuttleHeight").innerHTML = spaceShuttleHeight;
    });
    // Move rocket image right
    let moveRight = allButtons[2];
    moveRight.addEventListener("click", function (event) {
        center = Number(center) + 10;
        rocket.style.left = center + "px";
    });
    // Move rocket image left
    let moveLeft = allButtons[3];
    moveLeft.addEventListener("click", function (event) {
        center = Number(center) - 10;
        rocket.style.left = center + "px";
    });
});