function first_second(arr) {
  let first, second, third;
  console.log(arr.length);
  first = second = third = arr[0];

  for (let x = 1; x < arr.length; x++) {
    if (arr[x] > first) {
      third = second;
      second = first;
      first = arr[x];
    } else if (arr[x] > second) {
      third = second;
      second = arr[x];
    } else if (arr[x] > third) {
      third = arr[x];
    }
  }

  return `First: ${first}, Second: ${second}, Third:${third}`;
}

let arr = [12, 32, 34, 54, 45, 6, 17];

console.log(first_second(arr));
//First: 54, Second: 45, Third:34

function reverse(arr) {
  let n = arr.length ;
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    let temp = arr[i];
    arr[i] = arr[n - 1 - i];
    arr[n - 1 - i] = temp;
  }
  console.log(arr);
}
reverse(arr);
