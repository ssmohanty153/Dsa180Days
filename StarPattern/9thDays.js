/**
 

    *
   ***
  *****
 *******
*********
 */

// const n = 5;

// for (let row = 1; row <= n; row++) {
//   let startPattern = "";
//   // console.log(row);
//   for (let space = 1; space <= n - row; space++) {
//     // console.log(space, "kk");
//     startPattern += " ";
//   }
//   for (let column = 1; column <= row * 2 - 1; column = column + 1) {
//     // console.log(column, "col");
//     startPattern += "*";
//   }
//   console.log(startPattern);
// }

//==2nd pattern

/**
 
       1 
      1 2 1 
    1 2 3 2 1 
  1 2 3 4 3 2 1 
1 2 3 4 5 4 3 2 1 
 */

// const n = 5;

// for (let row = 1; row <= n; row++) {
//   let startPattern = "";
//   // console.log(row);
//   for (let space = 1; space <= n - row; space++) {
//     // console.log(space, "kk");
//     startPattern += "  ";
//   }
//   for (let column = 1; column <= row; column = column + 1) {
//     startPattern += column + " ";
//   }
//   for (let column = row - 1; column >= 1; column = column - 1) {
//     startPattern += column + " ";
//   }
//   console.log(startPattern);
// }

//3rd pattern

/**
 
* * * * * * * * * 
  * * * * * * * 
    * * * * * 
      * * * 
        *

 */

// const n = 5;

// for (let row = n; row >= 1; row--) {
//   let startPattern = "";
//   // console.log(row);
//   for (let space = 1; space <= n - row; space++) {
//     // console.log(space, "kk");
//     startPattern += "  ";
//   }
//   for (let column = 2 * row - 1; column >= 1; column = column - 1) {
//     // console.log(column, "col");
//     startPattern += "* ";
//   }
//   console.log(startPattern);
// }

//4th pattern

/**
 

* * * * * * * * 
* * *     * * * 
* *         * * 
*             * 
*             * 
* *         * * 
* * *     * * * 
* * * * * * * * 

 */

// const n = 4;

// for (let row = n; row >= 1; row--) {
//   let startPattern = "";
//   for (let col = 1; col <= row; col++) {
//     startPattern += "* ";
//   }
//   for (let col = 1; col <= 2 * n - 2 * row; col++) {
//     startPattern += "  ";
//   }

//   for (let col = 1; col <= row; col++) {
//     startPattern += "* ";
//   }
//   console.log(startPattern);
// }

// for (let row = 1; row <= n; row++) {
//   let startPattern = "";
//   for (let col = 1; col <= row; col++) {
//     startPattern += "* ";
//   }
//   for (let col = 1; col <= 2 * n - 2 * row; col++) {
//     startPattern += "  ";
//   }

//   for (let col = 1; col <= row; col++) {
//     startPattern += "* ";
//   }
//   console.log(startPattern);
// }

//5th pattern

/**
 
*             * 
* *         * * 
* * *     * * * 
* * * * * * * * 
* * *     * * * 
* *         * * 
*             *  

 */

// const n = 4;
// for (let row = 1; row <= n; row++) {
//   let startPattern = "";
//   for (let col = 1; col <= row; col++) {
//     startPattern += "* ";
//   }
//   for (let col = 1; col <= 2 * n - 2 * row; col++) {
//     startPattern += "  ";
//   }

//   for (let col = 1; col <= row; col++) {
//     startPattern += "* ";
//   }
//   console.log(startPattern);
// }

// for (let row = n - 1; row >= 1; row--) {
//   let startPattern = "";
//   for (let col = 1; col <= row; col++) {
//     startPattern += "* ";
//   }
//   for (let col = 1; col <= 2 * n - 2 * row; col++) {
//     startPattern += "  ";
//   }

//   for (let col = 1; col <= row; col++) {
//     startPattern += "* ";
//   }
//   console.log(startPattern);
// }

//6th pattern

/**
   * 
  * * 
 * * * 
* * * * 
 * * * 
  * * 
   *
   
 */
const n = 4;
for (let row = n; row >= 1; row--) {
  let startPattern = "";
  for (let col = 1; col <= row - 1; col++) {
    startPattern += " ";
  }
  for (let col = 1; col <= n - row + 1; col++) {
    startPattern += "* ";
  }
  console.log(startPattern);
}
for (let row = 2; row <= n; row++) {
  let startPattern = "";
  for (let col = 1; col <= row - 1; col++) {
    startPattern += " ";
  }
  for (let col = 1; col <= n - row + 1; col++) {
    startPattern += "* ";
  }
  console.log(startPattern);
}
