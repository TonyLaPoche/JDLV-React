import { Cell } from './gameOfLife';

const scanVoisin = (row: number, cell: number, AreaGame: Cell[][]) => {
  const sizeArray = AreaGame.length;

  let count = 0;
  for (let i = -1; i <= 1; i += 1) {
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
      count = AreaGame[row][cell].alive ? ++count : count;
    }
  }
  return count;
};

export const RunGame = (AreaGame: Cell[][]) => {
  const size = AreaGame.length;
  const tableauMisAJour: Cell[][] = [];
  // 1 je scanne mon tableau
  for (let row = 0; row < size; ++row) {
    tableauMisAJour.push([]);
    for (let col = 0; col < size; ++col) {
      const voisins = scanVoisin(row, col, AreaGame);
      const isDead = AreaGame[row][col].alive === false;

      // 1 La cellule est morte && elle a exactement 3 voisins => elle vit!
      if (isDead && voisins === 3) {
        tableauMisAJour[row].push({
          alive: true,
          posX: `${row}`,
          posY: `${row}`,
        });
        continue;
      }

      // 2 La cellule est vivante et elle a 2 ou 3 voisins => elle vit!
      if (!isDead && (voisins === 3 || voisins === 2)) {
        tableauMisAJour[row].push({
          alive: true,
          posX: `${row}`,
          posY: `${row}`,
        });
        continue;
      }

      // 3 La cellule a moins de 2 voisin ou plus de 3 voisins => elle meurt
      tableauMisAJour[row].push({
        alive: false,
        posX: `${row}`,
        posY: `${row}`,
      });
    }
  }

  return tableauMisAJour;
};
