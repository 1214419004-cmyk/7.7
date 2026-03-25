console.log("Script started");

function start() {
    console.log("click");

    //CREATE HEADING
    let heading = document.createElement("h1");

    heading.innerText = "Attendance";

    heading.style.color = "blue";
    heading.style.textDecoration = "underline";

    document.body.appendChild(heading);

    let username = prompt("What is ur name?");

    addName(username);

}

function addName(newName) {
    let sixSeven = document.createElement("h2");
    sixSeven.innerText = newName;
    document.body.appendChild(sixSeven);
}
