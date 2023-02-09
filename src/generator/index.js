// ! Generateur de Tableau de jeu.
/*
  * Generateur du nombre de cellules et lignes basé sur
  * la valeur du State 'cellsNumber' & trigger par 'isRunnin'.
  * Si Is Running lancer Bloquer l'accès a l'input generateur de cellules
  * Généré un tableau celon la valeurs Input cellsNumbers
*/
// export function generatorTable(number) {
//   const newArray = [];
//   for (let rowIndex = 0; rowIndex < number; rowIndex++) {
//     newArray.push([]); // array row
//     for (let cellIndex = 0; cellIndex < number; cellIndex++) {
//       newArray[rowIndex].push([]); // array cell
//     }
//   }
//   // console.table(newArray);
// }

// function generateCell(rowIndex, number) {
//   for (let cellIndex = 0; cellIndex < number; cellIndex++) {
//     <div key={`${rowIndex}${cellIndex}`.slice(0)} className="GameArea--cell" />;
//   }
// }
// export function generatorDomArray(number) {
//   const ArrayJsx = {};
//   toLoop = number;

//   ArrayJsx.AreaGame = (
//     <div key="GameArea" className="GameArea">
//       for (let index = 0; index < toLoop; index++) {
//         hello  
//       }
//     </div>
//   );
// }
