function convertdecimalToBinary(num) {
  let rem = 0;
  let ans = 0;
  let mul = 1;

  while (num > 0) {
    rem = num % 2;
    num = Math.floor(num / 2);
    ans = rem * mul + ans;
    mul = mul * 10;
  }
  return ans;
}
console.log(convertdecimalToBinary(73));
