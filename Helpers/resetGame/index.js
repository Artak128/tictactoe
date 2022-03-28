export function resetGame(data) {
    [...document.querySelectorAll(".item")].forEach((item) => {
      item.classList.remove("backCircle", "backX");
    });
   data.area = {
    item1:'',
    item2:'',
    item3:'',
    item4:'',
    item5:'',
    item6:'',
    item7:'',
    item8:'',
    item9:'',
  };
    document.querySelector(".choice").classList.remove("hidden");
    document.querySelector(".gameType").classList.remove("hidden");
  }