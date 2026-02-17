console.log("Script started");

function startExample() {
    let boxes = prompt("How many boxes did you sell? ");
    let badges = prompt("How many badges do you have? ");
    let hours = prompt("How many hours have you volunteered? ");

    let alltogether = boxes >= 100 || boxes >= 50 && badges >=10 && hours >=25;

    alert("Is gold status? " + alltogether);

}