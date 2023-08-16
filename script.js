const URL =
"https://iskarr.github.io/austindonovan.github.io/api/business.json";

let cards = document.querySelector("div.cards");
let para = document.createElement("p");

fetch(URL)
    .then((response) => response.json())
    .then((jsObject) => {
        let business = jsObject.business;
        console.log(business)

        for(let i = 0;  i < business.length; i++) {
            console.log(business[i].imageurl);
            console.log(business[i].name);
            console.log(business[i].address);
            console.log(business[i].description);
        };
    });