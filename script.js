
//Created a variable named "URL" and assigned it to a string that contains a url.
const URL =
"https://iskarr.github.io/austindonovan.github.io/api/business.json";

//Created two variables named "" and "". Then assigned them to their corresponing elements in the HTML document. 
let cards = document.querySelector("div.cards");
let para = document.createElement("p");

//Used the method "fetch()" to extract url and assigned the information to a varible. Then created a for loop to console.log each object.
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