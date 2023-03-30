import { Cell } from './gameOfLife';

const scanVoisin = (row: number, cell: number, AreaGame: Cell[][]) => {
  const sizeArray = AreaGame.length;

  let count = 0;
  for (let i = -1; i <= 1; i++) {
    // SI on est sur la row en dehors du tableau
    if (row + i < 0 || row + i > sizeArray - 1) {
      continue;
    }
    for (let j = -1; j <= 1; j += 1) {
      // SI on est sur la col en dehors du tableau
      if (cell + j < 0 || cell + j > sizeArray - 1) {
        continue;
      }
      // Je traite le cas ou je suis sur la cellule en cours
      if (i === 0 && j === 0) {
        continue;
      }
      count = AreaGame[row + i][cell + j].alive === true ? ++count : count;
    }
  }
  return count;
};

export const RunGame = (AreaGame: Cell[][]) => {
  const size = AreaGame.length;
  const tableauMisAJour: Cell[][] = [];
  // 1 je scanne mon tableau
  for (let col = 0; col < size; ++col) {
    tableauMisAJour.push([]);
    for (let cell = 0; cell < size; ++cell) {
      const voisins = scanVoisin(col, cell, AreaGame);
      const isDead = AreaGame[col][cell].alive === false;

      // Pour comprendre comment sont scanné les voisin avec "scanVoisins"
      // console.groupCollapsed('Current Cell');
      // console.log(`position X : ${col} & Y : ${row}`);
      // console.log(isDead ? 'Est morte' : 'Pas morte');
      // console.log(`à ${voisins} voisins vivant`);
      // console.groupEnd();

      // 1 La cellule est morte && elle a exactement 3 voisins => elle vit!
      if (isDead && voisins === 3) {
        tableauMisAJour[col].push({
          alive: true,
          posX: `${cell}`,
          posY: `${col}`,
        });
        continue;
      }

      // 2 La cellule est vivante et elle a 2 ou 3 voisins => elle vit!
      if (!isDead && (voisins === 3 || voisins === 2)) {
        tableauMisAJour[col].push({
          alive: true,
          posX: `${cell}`,
          posY: `${col}`,
        });
        continue;
      }

      // 3 La cellule a moins de 2 voisin ou plus de 3 voisins => elle meurt
      tableauMisAJour[col].push({
        alive: false,
        posX: `${cell}`,
        posY: `${col}`,
      });
    }
  }

  return tableauMisAJour;
};
