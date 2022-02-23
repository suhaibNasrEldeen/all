// let arr = ["ahmad", "mohamed", "Bella"];
// // consol.consol(arr.length)
// console.log(Math.floor(Math.random() * arr.length));
// console.log(Math.trunc(Math.random() * arr.length));
// console.log(arr[Math.trunc(Math.random() * arr.length)]);
let nums = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];
let color = [];

for (let i = 0; i < 6; i++) {
  color.push(nums[Math.trunc(Math.random() * nums.length)]);
}

let finalColor = `#${color.join("")}`;

document.body.append(finalColor);
document.body.style.backgroundColor = finalColor;
