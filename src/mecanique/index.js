/* eslint-disable no-continue */
import { useSelector } from 'react-redux';

const AreaGame = useSelector((state) => state.boadGenerator.AreaGame);

function scanArea() {
  for (const row of AreaGame) {
    for (const cell of row) {
      console.log(`%c [${row}] [${cell}] => ${scanVoisin(row, cell)} voisins`, 'color:green;');
    }
  }
}

function scanVoisin(row, cell) {
  console.log('%c je Scan actuellement la cellules => ', AreaGame[row][cell], 'color: crimson;');
  const largeurArray = AreaGame[0].length;
  const hauteurArray = AreaGame.length;

  let count = 0;
  for (let i = -1; i <= 1; i++) {
    // SI on est sur la row en dehors du tableau
    if (row + i < 0 || row + i > hauteurArray - 1) {
      continue;
    }

    for (let j = -1; j <= 1; j++) {
      // SI on est sur la col en dehors du tableau
      if (cell + j < 0 || cell + j > largeurArray - 1) {
        continue;
      }

      // Je traite le cas ou je suis sur la cellule en cours
      if (i === 0 && j === 0) {
        continue;
      }

      count += AreaGame[row + i][cell + j];
    }
  }
  return count;
}

function next() {
  const tableauMisAJour = [];
  // 1 je scanne mon tableau
  for (let row = 0; row < AreaGame.length; row++) {
    tableauMisAJour.push([]);
    for (let col = 0; col < AreaGame.length; col++) {
      const voisins = scanVoisin(row, col);
      const isDead = AreaGame[row][col] === 0;

      // 1 La cellule est morte && elle a exactement 3 voisins => elle vit!
      if (isDead && voisins === 3) {
        tableauMisAJour[row].push(1);
        continue;
      }

      // 2 La cellule est vivante et elle a 2 ou 3 voisins => elle vit!
      if (!isDead && (voisins === 3 || voisins === 2)) {
        tableauMisAJour[row].push(1);
        continue;
      }

      // 3 La cellule a moins de 2 voisin ou plus de 3 voisins => elle meurt
      tableauMisAJour[row].push(0);
    }
  }
  // AreaGame = tableauMisAJour; // ! DISPATCH NEW AREA GAME
}
