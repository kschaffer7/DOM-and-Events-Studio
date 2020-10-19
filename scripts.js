window.addEventListener("load", function() {
    console.log('window loaded');
    // declare global variables
    let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    let flightStatus = document.getElementById("flightStatus");
    let shuttleBackground = document.getElementById("shuttleBackground");
    // "Take off" button events
    let takeOff = document.getElementById("takeoff");
    takeOff.addEventListener("click", function (event) {
        // console.log("Take off")
        // console.log(event);
        let confirm = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (confirm) {
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "blue";
            spaceShuttleHeight.innerHTML = 10000; //No need to increment, can only take off once!!!
        }
    });
    // "Land" button events
    let land = document.getElementById("landing");
    land.addEventListener("click", function (event) {
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight.innerHTML = 0;
    });
    // "Abort Mission" button events
    let missionAbort = document.getElementById("missionAbort");
    missionAbort.addEventListener("click", function (event) {
        let confirm = window.confirm("Confirm that you want to abort the mission.");
        if (confirm) {
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackground.style.backgroundColor = "green";
            spaceShuttleHeight.innerHTML = 0;
        }
    });
    // How to add an event listener to a button that does not have an id
    // Assign a 'position: absolute' for "rocket" and center
    let rocket = document.getElementById("rocket");
    rocket.style.position = "absolute";
    rocket.style.bottom = "0px";
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
        spaceShuttleHeight = document.getElementById("spaceShuttleHeight").innerHTML;
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