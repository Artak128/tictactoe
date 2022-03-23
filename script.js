/////////// Data /////////////

let indexForBackground = "";
let indexForGameType = "";

/////// Function Helpers /////////

function checkForWinner() {
  let index = false;
  item1.classList.contains("backX") &&
    item5.classList.contains("backX") &&
    item9.classList.contains("backX") &&
    (index = "backX");
  item1.classList.contains("backCircle") &&
    item5.classList.contains("backCircle") &&
    item9.classList.contains("backCircle") &&
    (index = "backCircle");
  item3.classList.contains("backX") &&
    item5.classList.contains("backX") &&
    item7.classList.contains("backX") &&
    (index = "backX");
  item3.classList.contains("backCircle") &&
    item5.classList.contains("backCircle") &&
    item7.classList.contains("backCircle") &&
    (index = "backCircle");
  item1.classList.contains("backX") &&
    item2.classList.contains("backX") &&
    item3.classList.contains("backX") &&
    (index = "backX");
  item1.classList.contains("backCircle") &&
    item2.classList.contains("backCircle") &&
    item3.classList.contains("backCircle") &&
    (index = "backCircle");
  item4.classList.contains("backX") &&
    item5.classList.contains("backX") &&
    item6.classList.contains("backX") &&
    (index = "backX");
  item4.classList.contains("backCircle") &&
    item5.classList.contains("backCircle") &&
    item6.classList.contains("backCircle") &&
    (index = "backCircle");
  item7.classList.contains("backX") &&
    item8.classList.contains("backX") &&
    item9.classList.contains("backX") &&
    (index = "backX");
  item7.classList.contains("backCircle") &&
    item8.classList.contains("backCircle") &&
    item9.classList.contains("backCircle") &&
    (index = "backCircle");
  item1.classList.contains("backX") &&
    item4.classList.contains("backX") &&
    item7.classList.contains("backX") &&
    (index = "backX");
  item1.classList.contains("backCircle") &&
    item4.classList.contains("backCircle") &&
    item7.classList.contains("backCircle") &&
    (index = "backCircle");
  item2.classList.contains("backX") &&
    item5.classList.contains("backX") &&
    item8.classList.contains("backX") &&
    (index = "backX");
  item2.classList.contains("backCircle") &&
    item5.classList.contains("backCircle") &&
    item8.classList.contains("backCircle") &&
    (index = "backCircle");
  item3.classList.contains("backX") &&
    item6.classList.contains("backX") &&
    item9.classList.contains("backX") &&
    (index = "backX");
  item3.classList.contains("backCircle") &&
    item6.classList.contains("backCircle") &&
    item9.classList.contains("backCircle") &&
    (index = "backCircle");
  if (index) {
    index === "backX" && alert("Win X Player");
    index === "backCircle" && alert("Win Circle Player");
    return true;
  }
}
function generateRandom(min = 1, max = 10) {
  let rand = Math.random();
  rand = Math.floor(rand * (max - min));
  rand = rand + min;
  return rand;
}

function resetGame() {
  [...document.querySelectorAll(".item")].forEach((item) => {
    item.classList.remove("backCircle", "backX");
  });
  document.querySelector(".choice").classList.remove("hidden");
  document.querySelector(".gameType").classList.remove("hidden");
}
function singlePlayer() {
  let index = true;
  while (index) {
    let int = generateRandom();
    if (
      !document.querySelector(`#item${int}`).classList.contains("backCircle") &&
      !document.querySelector(`#item${int}`).classList.contains("backX")
    ) {
      document.querySelector(`#item${int}`).classList.add(indexForBackground);
      indexForBackground =
      indexForBackground === "backX" ? "backCircle" : "backX";
      index = false;
    }
  }
}
function submitValue(e) {
  if (e.target.type === "submit" && (o.checked || x.checked)) {
    indexForBackground = o.checked ? o.value : x.value;
    document.querySelector(".choice").classList.add("hidden");
  }
}

function submitType(e) {
  if (e.target.type === "submit" && e.target.name === 'type' && (single.checked || two.checked || multi.checked)) {
      if(single.checked) {indexForGameType = single.value};
      if(two.checked) {indexForGameType =  two.value};
      if(multi.checked){indexForGameType =  multi.value};
      document.querySelector(".gameType").classList.add("hidden");
    };
}

function PlayerClick(e) {
  if (e.target.classList.contains("item")) {
    e.target.classList.add(indexForBackground);
    indexForBackground = (indexForBackground === "backX") ? "backCircle" : "backX";
    indexForGameType === 'singlePlayer' && singlePlayer();
    checkForWinner() && resetGame();
  }
}


//// Add Event Listeners /////
document.addEventListener("click", submitType);
document.addEventListener("click", submitValue);
document.addEventListener("click", PlayerClick);


 