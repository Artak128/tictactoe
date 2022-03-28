export function generateRandom(min = 1, max = 10) {
    let rand = Math.random();
    rand = Math.floor(rand * (max - min));
    rand = rand + min;
    return rand;
  }