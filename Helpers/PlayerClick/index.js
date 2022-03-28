import { singlePlayer } from "./../singlePlayer/index.js";
import { checkForWinner } from "./../checkForWinner/index.js";
import { resetGame } from "../resetGame/index.js";

export function PlayerClick(e,data) {
    if (e.target.classList.contains("item")) {
      e.target.classList.add(data.indexForBackground);
      data.area[e.target.id] = data.indexForBackground;
      data.indexForBackground = data.indexForBackground === "backX" ? "backCircle" : "backX";
      data.indexForGameType === "singlePlayer" && singlePlayer(data);
      setTimeout(function () {
        checkForWinner(data) && resetGame(data);
      }, 100);
      
    }
  }