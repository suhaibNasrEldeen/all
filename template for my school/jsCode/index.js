let menu = document.getElementsByClassName("menu");
let control=document.getElementById("control");
control.onclick=function(){
    menu[0].classList.toggle("active");
};

// let title=document.getElementsByClassName("logo");

// function typewriter(e){
//     var text=e;
//     for(let i=0;i<text.length;i++){
//        console.log(text[i]);
//     }
// }
// // typewriter(title[0].textContent.toUpperCase());
// // typewriter(title[0].textContent.toUpperCase())
// let time=setTimeout(typewriter,2000, "how are you");
