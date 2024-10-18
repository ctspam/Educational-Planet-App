// variables and initial list
var planetNames = getColumn("Planets of our Solar System", "Planet");
var planetDiameter = getColumn("Planets of our Solar System", "Diameter");
var planetLength = getColumn("Planets of our Solar System", "Length of day");
var planetDistance = getColumn("Planets of our Solar System", "Distance from sun");
var planetOrbitalP = getColumn("Planets of our Solar System", "Orbital period");
var planetPicture = getColumn("Planets of our Solar System", "Picture");
var planetMoons = getColumn("Planets of our Solar System", "Number of moons");
var planetNumber = getColumn("Planets of our Solar System", "id");

// empty filtering list
var filteredName = [];
var filteredDiameter = [];
var filteredLength = [];
var filteredDistance = [];
var filteredOrbitalP = [];
var filteredPicture = [];
var filteredMoons = [];
var filteredNumber = [];

// adds data for the specific planet to the lists
function filteredList(index){
  filteredName = [];
  filteredDiameter = [];
  filteredLength = [];
  filteredDistance = [];
  filteredOrbitalP = [];
  filteredPicture = [];
  filteredMoons = [];
  filteredNumber = [];
  
  if (index < 9) {
    for (var i = 0; i < planetNumber.length; i++) {
      if (planetNumber[i] == index) {
        appendItem(filteredName, planetNames[i]);
        appendItem(filteredDiameter, planetDiameter[i]);
        appendItem(filteredLength, planetLength[i]);
        appendItem(filteredDistance, planetDistance[i]);
        appendItem(filteredOrbitalP, planetOrbitalP[i]);
        appendItem(filteredPicture, planetPicture[i]);
        appendItem(filteredMoons, planetMoons[i]);
        appendItem(filteredNumber, planetNumber[i]);
      }
    }
  }
  else {
    setText("informationOutput","\n Pluto is not a planet!");
    appendItem(filteredPicture, planetPicture[8]);
    setProperty("planetImage", "image", filteredPicture[0]);
  }
}

// chooses a random planet and inputs the data of the random planet
function randomizer() {
  filteredList(randomNumber(1,8));
  setPlanetText();
}

// set the text of the results screen to display the information of the planet
function setPlanetText() {
  setText("informationOutput", "\n"+
  "Planet Name: " + filteredName[0] + "\n" +
  "Diameter: " + filteredDiameter[0] +" km"+ "\n" +
  "Length of Day: " + filteredLength[0] +" hours"+ "\n" +
  "Distance from Sun: " + filteredDistance[0] +"e6 km"+ "\n" +
  "Orbital Period: " + filteredOrbitalP[0] + " days"+ "\n" +
  "Number of Moons: " + filteredMoons[0] + "\n");
  setProperty("planetImage", "image", filteredPicture[0]);
}

// changes to the results screen and goes through the randomizer when clicked
onEvent("randomButton", "click", function( ) {
  setScreen("resultScreen");
  randomizer();
});

//choose each planet buttons
// mercury button
onEvent("mercurybutton", "click", function( ) {
  filteredList(1);
  setPlanetText();
  setScreen("resultScreen");
});

// venus button
onEvent("venusbutton", "click", function( ) {
  filteredList(2);
  setPlanetText();
  setScreen("resultScreen");
});
// earth button
onEvent("earthbutton", "click", function( ) {
  filteredList(3);
  setPlanetText();
  setScreen("resultScreen");
});
// mars button
onEvent("marsbutton", "click", function( ) {
  filteredList(4);
  setPlanetText();
  setScreen("resultScreen");
});
// jupiter button
onEvent("jupiterbutton", "click", function( ) {
  filteredList(5);
  setPlanetText();
  setScreen("resultScreen");
});

// saturn button
onEvent("saturnbutton", "click", function( ) {
  filteredList(6);
  setPlanetText();
  setScreen("resultScreen");
});

// uranus button
onEvent("uranusbutton", "click", function( ) {
  filteredList(7);
  setPlanetText();
  setScreen("resultScreen");
});

// neptune button
onEvent("neptunebutton", "click", function( ) {
  filteredList(8);
  setPlanetText();
  setScreen("resultScreen");
});

// pluto button
onEvent("plutobutton", "click", function( ) {
  filteredList(9);
  setScreen("resultScreen");
});

// restart button
onEvent("restartButton", "click", function( ) {
  setScreen("startScreen");
});
