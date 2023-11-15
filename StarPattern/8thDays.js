/**
 
    *
   **
  ***
 ****
*****

 */
//note if row += "  "; here we added  two space then in * you have to add one more space like:- row += "* ";
// const n = 5;

/*
        * 
      * * 
    * * * 
  * * * * 
* * * * * 

 */

// for (let i = 1; i <= n; i++) {
//   let row = "";
//   for (let j = 1; j <= n - i; j++) {
//     row += "  ";
//   }
//   for (let k = 1; k <= i; k++) {
//     row += "* ";
//   }

//   console.log(row);
// }

//Second pattern
//row += "* "; we added space after *
/**
 
 

    * 
   * * 
  * * * 
 * * * * 
* * * * * 
 */
// const n = 5;

// for (let i = 1; i <= n; i++) {
//   let row = "";
//   for (let j = 1; j <= n - i; j++) {
//     row += " ";
//   }
//   for (let k = 1; k <= i; k++) {
//     row += "* ";
//   }

//   console.log(row);
// }

//Third pattern
/**
    1
   12
  123
 1234
12345
 */
// const n = 5;
// for (let i = 1; i <= n; i++) {
//   let row = "";
//   for (let j = 1; j <= n - i; j++) {
//     row += " ";
//   }
//   for (let k = 1; k <= i; k++) {
//     row += k;
//   }

//   console.log(row);
// }

//forth pattern
/**
    a
   ab
  abc
 abcd
abcde
 */

// const n = 5;
// for (let i = 1; i <= n; i++) {
//   let row = "";
//   for (let j = 1; j <= n - i; j++) {
//     row += " ";
//   }
//   for (let k = 1; k <= i; k++) {
//     row += String.fromCharCode(97 + k - 1);
//   }

//   console.log(row);
// }

//fifth pattern

/**
 
    1
   21
  321
 4321
54321

 */
// const n = 5;

// for (let row = 1; row <= n; row++) {
//   let print = "";
//   for (let spaceColumn = 1; spaceColumn <= n - row; spaceColumn++) {
//     print += " ";
//   }
//   for (let numberColumn = row; numberColumn >= 1; numberColumn--) {
//     print += numberColumn;
//   }
//   console.log(print);
// }

//6th pattern
/*

* * * * * 
*       * 
*       * 
*       * 
* * * * * 

 */
const n = 5;

for (let row = 1; row <= n; row++) {
  let print = "";
  for (let column = 1; column <= n; column++) {
    if (row == 5 || column == 5 || row == 1 || column == 1) {
      print += "* ";
    } else {
      print += "  ";
    }
  }

  console.log(print);
}
