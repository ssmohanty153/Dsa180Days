// function printnum(n) {
//   if (n != 0) {
//     printnum(n - 1);
//     console.log(n);
//   }

//   //   return;
// }
// printnum(10);
// // console.log(x);

//==========

//factorial

// function factorial(n) {
//   if (n == 0) {
//     return 1;
//   } else {
//     return n * factorial(n - 1);
//     console.log(n);
//   }
// }

// console.log(factorial(5));

// GCD

function gcd(m, n) {
  if (m < n) {
    return gcd(n, m);
  }
  if (n === 0) {
    return m;
  } else {
    return gcd(n, m % n);
  }
}

console.log(gcd(9,15));
