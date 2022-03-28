import { generateRandom } from "./../generateRandom/index.js";
export function singlePlayer(data) {
    let index = true;
    while (index) {
      let int = generateRandom();
      if (
        !document.querySelector(`#item${int}`).classList.contains("backCircle") &&
        !document.querySelector(`#item${int}`).classList.contains("backX")
      ) {
        document.querySelector(`#item${int}`).classList.add(data.indexForBackground);
        data.area[`item${int}`] = data.indexForBackground;
        data.indexForBackground = data.indexForBackground === "backX" ? "backCircle" : "backX";
        index = false;
      }
    }
  }