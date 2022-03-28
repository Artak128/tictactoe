export function submitType(e,data) {
    if (e.target.type === "submit" && e.target.name === 'type' && (single.checked || two.checked || multi.checked)) {
        document.querySelector(".gameType").classList.add("hidden");
        if(single.checked) {data.indexForGameType = 'singlePlayer'};
        if(two.checked) {data.indexForGameType = 'twoPlayer'};
        if(multi.checked){data.indexForGameType = 'multiPlayer'};
      };
  }