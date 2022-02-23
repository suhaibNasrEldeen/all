let btnEl=document.querySelector(".genreat");
let Serial=document.querySelector(".Serial");
btnEl.onclick=function(){
    let characters="httpswwwyoutubecomwatchvAH0jAz8p7us&listPLDoPjvoNmBAycCXz5d9WvqlmykUIys5e8index12"
    let charsCount=10;
    let randomSerial="";
    for (let i = 0; i < charsCount; i++) {
        randomSerial+=characters[Math.floor(Math.random()*characters.length)];
    }
    Serial.innerHTML=randomSerial;
}