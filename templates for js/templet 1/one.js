let tabs = document.querySelectorAll(".tabs li");
let tabsArray = Array.from(tabs);
let divs = document.querySelectorAll(".content > div");
let divsArray = Array.from(divs);
// console.log(tabsArray);
tabsArray.forEach((Element) => {
  Element.addEventListener("click", function (e) {
    // console.log(e)
    tabsArray.forEach(function (ele) {
      ele.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    divsArray.forEach(function (div) {
      div.style.display = "none";
    });
    document.querySelector(e.currentTarget.dataset.content).style.display="block"
  });
});
