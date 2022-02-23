// element.style.color="red";
// element.style.cssText="color:green; font-size:30px;";
// element.style.removeProperty("color");
// element.setProperty("text-align:center");//error
// element.style.setProperty("color:red");//error
// console.log(document.styleSheets["0"].rules)
// console.log(document.styleSheets[0].ownerRule);
// console.log(document.stylesheets[0])
// console.log(document.styleSheets[0].rules);
// // console.log(document.querySelector("#my-div"));
// let element=document.getElementById("my-div");
// console.log(element);
// let p=document.createElement("p");
// let text=document.createTextNode("how are you");
// element.before("how are you");
// element.after("how are YouTube");
// // element.remove();
// let span = document.querySelector(".tow");
// console.log(span.nextSibling.remove());
// console.log(span.nextElementSibling);
// console.log(span.previousElementSibling);
// console.log(span.parentElement);
// =======================================
// window.alert("how are you");
// window.document.title="js code";
// window.confirm("welcome in js code");
// let prompt=window.prompt("full name","min is 4 names");
// =======================================
// setTimeout(sayHello(),2000);
// function sayHello() {
//     console.log("javascript code")
// }

// function msg(user) {
//     console.log(`this msg for ${user}`)
// }

// setTimeout(msg,3000,"venom");
// =======================================
// setInterval(function(){
//     console.log("how are you")
// },400);
// let div=document.getElementsByTagName("div");
// console.log(div.innerHtml);
// console.log(div.);

// console.log(div)
// function countDown() {
//     div.innerHtml-=1;
// }


// =======================================
// console.log(location);
// console.log(location.host);
// console.log(location.href);
// // location.protocol="https";
// console.log(location.protocol)
// location.replace("https://google.com")
// location.assign("https://google.com")
// location.href="https://google.com";

// =======================================

window.localStorage.color="red";
// window.localStorage.setItem("color","red");
console.log(window.localStorage.getItem("color"))
document.body.style.backgroundColor=window.localStorage.getItem("color")