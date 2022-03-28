export function checkForWinner(data) {
 let index = false;
    data.area.item1 === "backX" && data.area.item5 === "backX" && data.area.item9 === "backX" && (index = "backX");
    data.area.item1 === "backCircle" && data.area.item5 === "backCircle" && data.area.item9 === "backCircle" && (index = "backCircle");
    
    data.area.item3 === "backX" && data.area.item5 === "backX" && data.area.item7 === "backX" && (index = "backX");
    data.area.item3 === "backCircle" && data.area.item5 === "backCircle" && data.area.item7 === "backCircle" && (index = "backCircle");
    
    data.area.item1 === "backX" && data.area.item2 === "backX" && data.area.item3 === "backX" && (index = "backX");
    data.area.item1 === "backCircle" && data.area.item2 === "backCircle" && data.area.item3 === "backCircle" && (index = "backCircle");
    
    data.area.item4 === "backX" && data.area.item5 === "backX" && data.area.item6 === "backX" && (index = "backX");
    data.area.item4 === "backCircle" && data.area.item5 === "backCircle" && data.area.item6 === "backCircle" && (index = "backCircle");
    
    data.area.item7 === "backX" && data.area.item8 === "backX" && data.area.item9 === "backX" && (index = "backX");
    data.area.item7 === "backCircle" && data.area.item8 === "backCircle" && data.area.item9 === "backCircle" && (index = "backCircle");
    
    data.area.item1 === "backX" && data.area.item4 === "backX" && data.area.item7 === "backX" && (index = "backX");
    data.area.item1 === "backCircle" && data.area.item4 === "backCircle" && data.area.item7 === "backCircle" && (index = "backCircle");
    
    data.area.item2 === "backX" && data.area.item5 === "backX" && data.area.item8 === "backX" && (index = "backX");
    data.area.item2 === "backCircle" && data.area.item5 === "backCircle" && data.area.item8 === "backCircle" && (index = "backCircle");
    
    data.area.item3 === "backX" && data.area.item6 === "backX" && data.area.item9 === "backX" && (index = "backX");
    data.area.item3 === "backCircle" && data.area.item6 === "backCircle" && data.area.item9 === "backCircle" && (index = "backCircle");
    
    function checkAllAreas() {
      let index = 0;
      for (const i of Object.keys(data.area)) {
        data.area[i].length > 1 && (index += 1)
      }
      if(index === 9) return true;
    }
    
    if (index) {
      index === "backX" && alert("Win X Player");
      index === "backCircle" && alert("Win Circle Player");
      return true;
    }
    if(!index && checkAllAreas()){
          alert ("Тhe game ended in a draw");
          return true;
    }
  }

  ///////////////

  // export function checkForWinner() {
  //   let index = false;
  //   item1.classList.contains("backX") &&
  //     item5.classList.contains("backX") &&
  //     item9.classList.contains("backX") &&
  //     (index = "backX");
  //   item1.classList.contains("backCircle") &&
  //     item5.classList.contains("backCircle") &&
  //     item9.classList.contains("backCircle") &&
  //     (index = "backCircle");
  //   item3.classList.contains("backX") &&
  //     item5.classList.contains("backX") &&
  //     item7.classList.contains("backX") &&
  //     (index = "backX");
  //   item3.classList.contains("backCircle") &&
  //     item5.classList.contains("backCircle") &&
  //     item7.classList.contains("backCircle") &&
  //     (index = "backCircle");
  //   item1.classList.contains("backX") &&
  //     item2.classList.contains("backX") &&
  //     item3.classList.contains("backX") &&
  //     (index = "backX");
  //   item1.classList.contains("backCircle") &&
  //     item2.classList.contains("backCircle") &&
  //     item3.classList.contains("backCircle") &&
  //     (index = "backCircle");
  //   item4.classList.contains("backX") &&
  //     item5.classList.contains("backX") &&
  //     item6.classList.contains("backX") &&
  //     (index = "backX");
  //   item4.classList.contains("backCircle") &&
  //     item5.classList.contains("backCircle") &&
  //     item6.classList.contains("backCircle") &&
  //     (index = "backCircle");
  //   item7.classList.contains("backX") &&
  //     item8.classList.contains("backX") &&
  //     item9.classList.contains("backX") &&
  //     (index = "backX");
  //   item7.classList.contains("backCircle") &&
  //     item8.classList.contains("backCircle") &&
  //     item9.classList.contains("backCircle") &&
  //     (index = "backCircle");
  //   item1.classList.contains("backX") &&
  //     item4.classList.contains("backX") &&
  //     item7.classList.contains("backX") &&
  //     (index = "backX");
  //   item1.classList.contains("backCircle") &&
  //     item4.classList.contains("backCircle") &&
  //     item7.classList.contains("backCircle") &&
  //     (index = "backCircle");
  //   item2.classList.contains("backX") &&
  //     item5.classList.contains("backX") &&
  //     item8.classList.contains("backX") &&
  //     (index = "backX");
  //   item2.classList.contains("backCircle") &&
  //     item5.classList.contains("backCircle") &&
  //     item8.classList.contains("backCircle") &&
  //     (index = "backCircle");
  //   item3.classList.contains("backX") &&
  //     item6.classList.contains("backX") &&
  //     item9.classList.contains("backX") &&
  //     (index = "backX");
  //   item3.classList.contains("backCircle") &&
  //     item6.classList.contains("backCircle") &&
  //     item9.classList.contains("backCircle") &&
  //     (index = "backCircle");
  //   if (index) {
  //     index === "backX" && alert("Win X Player");
  //     index === "backCircle" && alert("Win Circle Player");
  //     return true;
  //   }
  // }