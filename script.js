console.log("Script started");

function start() {
    console.log("click");

    //CREATE HEADING
    let heading = document.createElement("h1");

    heading.innerText = "Attendance";

    heading.style.color = "blue";
    heading.style.textDecoration = "underline";

    document.body.appendChild(heading);

    let username = prompt("What is ur first name?");
    let userLastname = prompt("What is ur last name?");

    addName(username, userLastname);
    
    addSeparator();

}

function addName(newName, lastname) {
    let sixSeven = document.createElement("h2");
    sixSeven.innerText = lastname + ", " + newName;
    document.body.appendChild(sixSeven);
}
function addSeparator() {
    let lineBreak = document.createElement("hr");
    document.body.appendChild(lineBreak);
}