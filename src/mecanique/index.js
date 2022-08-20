const array = [
  [0, 0, 0],
  [0, 1, 0],
  [0, 1, 0],
];
function scanArray() {
  // 1 je scanne mon tableau
  for (const row of array) {
    for (const col of row) {
      console.log(`%c [${row}] [${col}] => ${compteVoisin(row, col)} voisins`, 'color:green;');
    }
  }
}


