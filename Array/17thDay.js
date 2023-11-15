function fibonecy(n) {
  let first = 0,
    second = 1,
    sum = 0;

  for (let i = 2; i <= n; i++) {
    sum = first + second;
    first = second;
    second = sum;
  }
  return sum;
}
//0,1,1,2,3,5,8
console.log(fibonecy(8));
