// Model
//let showButtons = document.getElementById("dialogueOptions").style.display.textContent;
let currentEvent = null;
let carCoolness = 10;
let coolness_max = 100;
let fuelAmount = 100;
let encounterDialogue = "Sup";
let dialogue1 = "x"; // dialogue option 1 button text
let dialogue2 = "y"; // dialogue option 2 button text
let dialogue3 = "z"; // dialogue option 3 button text
let dialogue4 = "Yes"; // dialogue option 4 button text
let dialogue5 = "No"; // dialogue option 5 button text
let imagePath = "images/test.png";
let showStuff = "";
let showGameOver = "";
let showEncounter = "";
let pickUp = false;
let showGasStation = false;
let isGameOver = false;
let isEncounter = false;

// Event ID & information
const events = [
    {
        eventType: "Encounter",
        name: "Jeff",
        greetingDialogue: "My name-a Jeff",
        correctResponse: 1,
        requiredCoolness: 0.33, // Required coolness value
        response: {
            positive: { dialogue: "Jeff.", coolness: 10},
            neutral: { dialogue: "Meh Jeff?", coolness: 2},
            negative: { dialogue: "You not Jeff", coolness: -5},
        }
    },

    {
        eventType: "Encounter",
        name: "Alan",
        greetingDialogue: "STEVE?",
        correctResponse: 2,
        requiredCoolness: 0.66,
        response: {
            positive: { dialogue: "STEVE!.", coolness: 10},
            neutral: { dialogue: "Have you seen STEVE!?", coolness: 2},
            negative: { dialogue: "YOU'RE NOT STEVE!", coolness: -5},
        }
    },

    {
        eventType: "Encounter",
        name: "Granny",
        greetingDialogue: "Drive carefully",
        correctResponse: 3,
        requiredCoolness: 0.99,
        response: {
            positive: { dialogue: "Careful driver, I approve", coolness: 10},
            neutral: { dialogue: "You're not gonna break the speed limit right?", coolness: 2},
            negative: { dialogue: "You delinquent, I'll smash your windscreen!", coolness: -5},
        }
    },

    //Pickup info
    {
        eventType: "Pickup",
        name: "Sunglasses",
        coolness: 10,
        imagePath: "images/sunglasses.png",
    },
    {
        eventType: "Pickup",
        name: "a Jetpack",
        coolness: 20,
        imagePath: "images/jetpack.png",
    },
    {
        eventType: "Pickup",
        name: "a Stereo",
        coolness: 8,
        imagePath: "images/stereo.png",
    },
    {
        eventType: "Pickup",
        name: "Window tint",
        coolness: 7,
        imagePath: "images/window_tint.png",
    },
    {
        eventType: "Pickup",
        name: "Flame seat covers",
        coolness: 2,
        imagePath: "images/flame_seat_covers.png",
    },
    {
        eventType: "Pickup",
        name: "a Hot chick",
        coolness: 18,
        imagePath: "images/hot_chick.png",
    },
    {
        eventType: "Pickup",
        name: "an AUX cable",
        coolness: -5,
        imagePath: "images/aux_cable.png",
    },
    {
        eventType: "Pickup",
        name: "a Roof cargo box",
        coolness: -10,
        imagePath: "images/roof_cargo_box.png",
    },
    {
        eventType: "Pickup",
        name: "a Fedora",
        coolness: -11,
        imagePath: "images/fedora.png",
    },
    

    // gas station info
    {
        eventType: "Gas Station",
        gasStationFuelplus: 50
    },

]