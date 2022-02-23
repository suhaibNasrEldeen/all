// let index = 0;
// while (index < 10) {
//   console.log(index);
//   index++;
// }
// document.write(`<title>while loop</title>`);
// function loop(user) {
//   document.write(`<p>${user} while loop</p>`);
// }
// loop(`belal`);
// function hlow(usernam, age) {
//   console.log(`helow ${usernam} your age is ${age}`);
//   if (age === 12) {
//     console.log("you are yung man");
//   } else if (12 < age) {
//     console.log("you are old man");
//   } else {
//     console.log("you are baby");
//   }
// }
// hlow(`suhaib`, 16);

// function gratyears(start, end, con) {
//   for (let i = start; i <= end; i++) {
//     if (i == con) {
//       break;
//     }
//     console.log(i);
//   }
// }
// gratyears(1999, 2021, "2010");
// function calc(num1, num2) {
//   return num1 + num2;
// }
// let resolt = calc(10, 10);
// console.log(resolt + 300);

// function rawan(name = "un", age = "un") {
//   // if (name ===undefined) {
//   //   name= "unknown"
//   // }
//   // age =age ||"un"
//   return `${name} your age is ${age}`;
// }
// console.log(rawan());

// function calc(...numbers) {
//   let result = 0;

//   for (let i = 0; i < numbers.length; i++) {
//     result += numbers[i];
//   }
//   return `finaly numbers is ${result}`;
// }
// console.log(calc(1122, 7653, 76437));

// function b(...parents) {
//   let c = 0;

//   for (let z = 0; z < parents.length; z++) {
//     c = c - parents[z];
//   }
//   return `${c}`;
// }
// console.log(b(10, 4));

// function showinfo(us = "un", age = "un", rt = 0, show = "yes", ...sk) {
//   document.write(`<div>`);
//   document.write(`<bp>welcom ${us} </bp>`);
//   document.write(`</div>`);
// }
// showinfo();

// let Mohammad = function (num1, num2) {
//   return num2 + num1;
// };
// console.log(Mohammad(1, 434));

// function saymessage(f_name ,l_name) {

//   let message=`how are you`

//   function concatMsg() {
//     message=`${message} ${f_name} ${l_name}`
//   }
//   concatMsg()
//   return message
// }
// console.log(saymessage( "suhaib" , "joker"))

// function print(number1 ,number2) {
//   return number1 +number2

// }
// console.log(print(10,08))

// let print=(number1 ,number2) => number1 + number2

// console.log(print(10,08))

// function parent() {
//   let a=10;

//   function child() {
//     let a=20;
//     console.log(a)
//     function grand() {
//       let b =1000;
//       console.log(`from grand ${a}`)
//     }
//     grand()
//   }

//   child()
// }
// parent()

// let myNums = [1, 3, 6, 8, 45, 4];
// let Newark = [];

// for (i = 0; i < myNums.length; i++) {
//   Newark.push(myNums[i] + myNums[i]);
// }
// console.log(Newark);

// let addself = myNums.map(function name(element, index, arr) {
//   // console.log(` element>>>> ${element}`)
//   // console.log(` index>>>>>> ${index}`)
//   // console.log(` array>>>>>> ${arr}`)
//   // console.log(` this>>>>>> ${this}`)
//   return element + element;
// }, 10);
// console.log(addself);

// let addself = myNums.map((element) => element + element);
// console.log(addself);

// function addtion(element) {
//   return element + element;
// }

// let add = myNums.map(addtion);
// console.log(add)

// let swappingCases = "elZERO";
// let invert = [1, -10, -20, 15, 100, -30];
// let ignoreNumbers = "ELZ123er4o";
// let sw= swappingCases.split("").map(function(i){
//   return i=== i.toUpperCase()? i.toLowerCase():i.toUpperCase();
// })
// .join("");
// console.log(sw)

// let inv = invert.map(function (ele) {
//   return -ele;
// });
// console.log(inv);
// let ig = ignoreNumbers
//   .split("")
//   .map(function (ele) {
//     return isNaN(parseInt(ele)) ? ele : "";
//   })
//   .join("")
//   .toUpperCase();
// console.log(ig);
//===========================================
// let friends = [
//   "ahmad",
//   "asma",
//   "andro",
//   "vegon ",
//   "vetnam",
//   "gowen",
//   "sayed",
//   "",
// ];
// let filterFriends = friends.filter(function (ele) {
//   return ele.startsWith("a");
// });
// console.log(filterFriends);
//===========================================
// let numbers = [10, 37, 20, 30, 2, 5, 17, 10];
// let filterNumbers = numbers.filter(function (ele) {
//   return ele % 2 === 0;
// });
// console.log(filterNumbers);
//===========================================
// ----------------------------------------------
// let sentence = "i love food code too playing much"
// let smallWords=sentence.split(" ").filter(function (ele) {
//   return ele.length <= 4
//   }).join(" ");
//   console.log(smallWords)
//===========================================
//   let mix="A13BS2ZX";
//   let mixContent=mix.split("").filter(function(el){
//     return !isNaN(parseInt(el))
//   }).map(function(ele){
//     return ele**ele
//   })
// console.log(mixContent)
//===========================================
//---------------------------------------------------------
//===========================================
// let num = [10, 20, 15, 30];
// let add = num.reduce(function (acc, curnt, index, arr) {
//   console.log(index);
//   return acc + curnt;
// }, 125);
// console.log(add);
//===========================================
// let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];
// let finalString = removeChars
//   .filter(function (element) {
//     return !element.startsWith("@");
//   })
//   .reduce(function (acc, curnt) {
//     return `${acc}${curnt}`;
//   });
// console.log(finalString);
//===========================================
// let allLis = document.querySelectorAll("ul li");
// allLis.forEach(function (ele) {
//   ele.onclick = function (ele) {
//     console.log(this);
//   };
// });
// // console.log(allLis)

//===========================================

//------------------------------------------------------------------------------------------------
// Object
//============================================
// let user = {
//   //properties
//   theName: "OSAMA",
//   theAge: 34,
// //method
// sayHallo:function () {
//   return "how are you"
// }
// };
// console.log(user.theName)
// console.log(user.theAge)
// console.log(user.sayHallo())
// ============================================
// let user = new Object({
//   name: "rehem",
//   age: 23,
//   skills: ["html", "css", "js"],
//   available: false,
//   addresses: {
//     ksa: "reyad",
//     egypt: {
//       one: "cairo",
//       tow: "qena",
//     },
//   },
//   checkAv: function () {
//     if (this.available === true) {
//       return "free for work";
//     } else {
//       return "not";
//     }
//   },
// });
// user["venom"] = "venom";
// user.sayHello = function () {
//   return `how are you`;
// };
// console.log(user.age);
// console.log(user.name);
// console.log(user.skills[2]);
// console.log(user.addresses.ksa);
// console.log(user.addresses.egypt.tow);
// console.log(user["addresses"]["egypt"]["one"]);
// console.log(user.addresses.egypt);
// console.log(user.checkAv());
// console.log(user);
// console.log(user.sayHello());
//============================================
// myvar="hduuyu";
// console.log(this.myvar);
// console.log(window.myvar);

// document.getElementById("cl").onclick=function () {
//     console.log(this);
// };
//============================================
// let user={
//     age: 23,
//     doubleAge:function () {
//        return user.age*365;
//     },
// };

// let obj=Object.create({});
// console.log(user.doubleAge());
// obj["age"] = 14;
// console.log(obj);

// let copyObj=Object.create(user);

// console.log(copyObj)
// console.log(copyObj.doubleAge());
// console.log(copyObj.age);
// console.log(copyObj.doubleAge());

//============================================
// let obj1 = {
//   prop1: 1,
//   meth1: function () {
//     return this.prop1;
//   },
// };
// let obj2 = {
//   prop2: 2,
//   meth1: function () {
//     return this.prop2;
//   },
// };
// let targetObjects={
//     prop1:111,
//     prop3:3,
// };
// let fainalObj=Object.assign(targetObjects,obj1,obj2);
// console.log(fainalObj)
//============================================
//------------------------------------------------------------------------------------------------
// DOM
//============================================
// let myIdElement = document.getElementById("my-div");
// let myTagElement = document.getElementsByTagName("p");
// let myClassElement = document.getElementsByClassName("my-span");
// let myElement = document.querySelector(".my-span");
// console.log(myElement)
// console.log(myIdElement)
// console.log(myClassElement[0])
// console.log(myTagElement[1])
// console.log(document.body)
// console.log(document.title)
// console.log(document.forms[0].one.value)
//============================================
// let element=document.querySelector(".js")
// console.log(element.innerHTML)
// console.log(element.textContent);
// element.innerHTML="how are <span>you</span>"
// console.log(document.images[0])
// console.log(document.images[0])
// console.log(document.images[0])
// document.images[0].src="http//google.com"
// document.images[0].title="http//google.com"
// document.images[0].alt="google"
//============================================
// console.log(document.getElementsByTagName("p")[0].attributes);
// let myp=document.getElementsByTagName("p")[0];
// if(myp.hasAttribute("data-src")){
// //  console.log(true)
// myp.removeAttribute("data-src")
// }else{
//     console.log(false)
// }
//============================================

// let myElement = document.createElement("div");
// let myAttr = document.createAttribute("data-custom");
// let myText = document.createTextNode("product one");
// let myComment = document.createComment("this is div by DOM");

// myElement.className = "pro";
// myElement.title = "pro";
// myElement.setAttributeNode(myAttr);
// myElement.setAttribute("data-osama", "testing");
// myElement.appendChild(myComment)
// console.log(myElement);
// myElement.appendChild(myText);
// document.body.appendChild(myElement);

//============================================
// let myMainElement=document.createElement("div");
// let myHeading=document.createElement("h2");
// let myHeadingText=document.createTextNode("product title");
// let myParagraph=document.createElement("p");
// let myParagraphText=document.createTextNode("product description");

// myHeading.appendChild(myHeadingText);
// myMainElement.appendChild(myHeading);
// myParagraph.appendChild(myParagraphText);
// myMainElement.appendChild(myParagraph);

// myMainElement.className=`product`;
// document.body.appendChild(myMainElement)

// for (let i = 0; i < 100; i++) {
//     let myMainElement=document.createElement("div");
// let myHeading=document.createElement("h2");
// let myHeadingText=document.createTextNode("product title");
// let myParagraph=document.createElement("p");
// let myParagraphText=document.createTextNode("product description");

// myHeading.appendChild(myHeadingText);
// myMainElement.appendChild(myHeading);
// myParagraph.appendChild(myParagraphText);
// myMainElement.appendChild(myParagraph);

// myMainElement.className=`product`;
// document.body.appendChild(myMainElement) ;
// console.log(`${i}`)

// }

//============================================

// let myElement = document.querySelector("div");
// console.log(myElement);
// console.log(myElement.children);
// console.log(myElement.childNodes);
// console.log(myElement.firstChild);
// console.log(myElement.firstElementChild);
// console.log(myElement.lastChild);
// console.log(myElement.lastElementChild);

// ============================================
// let myElement = document.querySelector("button");
// myElement.onmouseenter=function () {
//     for (let i = 0; i < 11; i++) {
//         console.log(`suhaib${i}`)
//     }
// }
// window.onscroll=function(){
//     document.write("scroll")
// }
// // console.log(myElement);
// ============================================
// document.forms[0].onsubmit=function (e) {
//     userVialed=false
//     ageVialed=false
//     if(userVialed===false||ageVialed===false){
//         e.preventDefault();
//     }
// }
// document.links[0].onclick=function(event){
//     console.log(event);
//     event.preventDefault();
// }
// ============================================
// let tow = document.querySelector(".tow");
// window.onload=function(){
//   tow.focus();
// }
// ============================================
// let element=document.getElementById(`myp`);
// console.log(element)
// console.log( element.classList.contains("tow"));
// console.log( element.classList.item("0"));
// element.onclick=function(){
//     // element.classList.add("one","tow");
//     element.classList.toggle("one","tow");
//     // element.classList.remove("one","tow");
// }
// ============================================
let element = document.getElementById("my-div");
let creatp = document.createElement("p");
element.before("hello from js code ");
element.after("hello from js code ");
element.after(creatp);
creatp.append("this is my paragraph");
creatp.prepend("this is my paragraph");
creatp.remove();

// console.log(element);
// element.style.color="blue";
// element.style.fontSize="100px"
// element.style.cssText="color:blue; font-size:100px";
// element.style.removeProperty("color");
// console.log(document.styleSheets[2]);

// ============================================
let myp=document.getElementsByTagName("p");
let div=document.getElementsByTagName("div");
    div.appendChild(myp);
// console.log(myp)
// ============================================
