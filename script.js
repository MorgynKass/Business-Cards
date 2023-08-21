
//Created a variable named "URL" and assigned it to a string that contains a url.
const URL =
"https://iskarr.github.io/austindonovan.github.io/api/business.json";

//Created two variables named "" and "". Then assigned them to their corresponing elements in the HTML document. 
let cards = document.querySelector(".cards");

//Used the method "fetch()" to extract url and assigned the information to a varible. Then created a for loop to console.log each object.
fetch(URL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        let business = jsObject.business;
        console.log(business);

        // Creating a for loop that will loop through each array and its items.
        for(let i = 0;  i < business.length; i++) {
            console.log(business[i].imageurl);
            console.log(business[i].name);
            console.log(business[i].address);
            console.log(business[i].description);

            //Created variables for each element I will need to append the information to. I then gave each element a class so I could edit them in CSS.
            let card = document.createElement("div");
            card.className = "card";
            let img = document.createElement("img");
            img.className = "img";
            let nameH1 = document.createElement("h1")
            nameH1.className = "name"
            let addressH2 = document.createElement("h2")
            addressH2.className = "address"
            let descriptionH2 = document.createElement("h2");
            descriptionH2.className = "description";

            //I then assigned the info to the elements.
            img.src = business[i].imageurl;
            nameH1.textContent = business[i].name;
            addressH2.textContent = business[i].address;
            descriptionH2.textContent = business[i].description;

            //Finally I appended the elements to the card variable. 
            card.appendChild(img);
            card.appendChild(nameH1);
            card.appendChild(addressH2);
            card.appendChild(descriptionH2);

            //Last step was to appends the card element to the card div I made in my HTML.
            document.querySelector(".cards").appendChild(card);
        };
    });