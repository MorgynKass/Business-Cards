
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
        console.log(jsObject);
        let business = jsObject.business;
        console.log(business)

        // Creating a for loop that will loop through each array and its items.
        for(let i = 0;  i < business.length; i++) {
            console.log(business[i].imageurl);
            console.log(business[i].name);
            console.log(business[i].address);
            console.log(business[i].description);

            //Creating variables that hold each of my image elements in my HTML.
            const img1 = document.querySelector(".img.one");
            const img2 = document.querySelector(".img.two");
            const img3 = document.querySelector(".img.three");
            const img4 = document.querySelector(".img.four");
            const img5 = document.querySelector(".img.five");
            const img6 = document.querySelector(".img.six");
            const img7 = document.querySelector(".img.seven");
            const img8 = document.querySelector(".img.eight");
            const img9 = document.querySelector(".img.nine");

            //Creating variables that hold each of my name elements in my HTML.
            const name1 = document.querySelector(".name.one");
            const name2 = document.querySelector(".name.two");
            const name3 = document.querySelector(".name.three");
            const name4 = document.querySelector(".name.four");
            const name5 = document.querySelector(".name.five");
            const name6 = document.querySelector(".name.six");
            const name7 = document.querySelector(".name.seven");
            const name8 = document.querySelector(".name.eight");
            const name9 = document.querySelector(".name.nine");

            //Creating variables that hold each of my address elements in my HTML.
            const address1 = document.querySelector(".address.one");
            const address2 = document.querySelector(".address.two");
            const address3 = document.querySelector(".address.three");
            const address4 = document.querySelector(".address.four");
            const address5 = document.querySelector(".address.five");
            const address6 = document.querySelector(".address.six");
            const address7 = document.querySelector(".address.seven");
            const address8 = document.querySelector(".address.eight");
            const address9 = document.querySelector(".address.nine");
    
            //Creating variables that hold each of my description elements in my HTML.
            const description1 = document.querySelector(".description.one");
            const description2 = document.querySelector(".description.two");
            const description3 = document.querySelector(".description.three");
            const description4 = document.querySelector(".description.four");
            const description5 = document.querySelector(".description.five");
            const description6 = document.querySelector(".description.six");
            const description7 = document.querySelector(".description.seven");
            const description8 = document.querySelector(".description.eight");
            const description9 = document.querySelector(".description.nine");

            //Taking my variables and assigning their content in the HTML to their corrisponding info in the business array.
            img1.src = business[0].imageurl;
            img2.src = business[1].imageurl;
            img3.src = business[2].imageurl;
            img4.src = business[3].imageurl;
            img5.src = business[4].imageurl;
            img6.src = business[5].imageurl;
            img7.src = business[6].imageurl;
            img8.src = business[7].imageurl;
            img9.src = business[8].imageurl;

            name1.textContent = business[0].name;
            name2.textContent = business[1].name;
            name3.textContent = business[2].name;
            name4.textContent = business[3].name;
            name5.textContent = business[4].name;
            name6.textContent = business[5].name;
            name7.textContent = business[6].name;
            name8.textContent = business[7].name;
            name9.textContent = business[8].name;

            address1.textContent = business[0].address;
            address2.textContent = business[1].address;
            address3.textContent = business[2].address;
            address4.textContent = business[3].address;
            address5.textContent = business[4].address;
            address6.textContent = business[5].address;
            address7.textContent = business[6].address;
            address8.textContent = business[7].address;
            address9.textContent = business[8].address;

            description1.textContent = business[0].description;
            description2.textContent = business[1].description;
            description3.textContent = business[2].description;
            description4.textContent = business[3].description;
            description5.textContent = business[4].description;
            description6.textContent = business[5].description;
            description7.textContent = business[6].description;
            description8.textContent = business[7].description;
            description9.textContent = business[8].description;
        };
    });