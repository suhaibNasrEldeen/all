// window.alert("hello from learning js fill");
// document.write("<p>you are good</p>");
// console.log("helow from %c js fill", "color:red; font-size:40px");
// console.error("error");
// console.table(["osama", "ahmad", "sayd"]);

// console.log(typeof 300);
// console.log(typeof "console.log(typeof 300");
// console.log(typeof [10, 15, 17]);
// console.log(typeof ["jhhf" ,"djkl"])
// console.log(typeof {name:"osama" , age: 17 ,country:" china"})
// console.log(typeof true)
// console.log(typeof false)
// console.log(typeof undefined)
// console.log(typeof null)
// let set="suha"
// const user_name = "souhaib";
// console.log("elzero \nweb\nschool");
// document.write(set +" " +user_name)
let protect = ["keybord", "mouse", "pen", "pad", "monitor", "iphone"];
let colors = ["red", "green ", "blue"];
let showCount = 5;
document.write(`<h1>show ${showCount} prod</h1>`);
for (let i = 0; i < 5; i++) {
    document.write(`<div>`);
    document.write(`<h3>[${i + 1}] ${protect[i]} </h3>`);
        for (let j = 0; j < colors.length; j++) {
            document.write(`<p>${colors[j]}</p>`)
        }
    document.write(`</div>`);
    
}
