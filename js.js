// create an h1 tag that can be inserted into any html file where this code is called
let myHeading = document.createElement('h1');

// try to add a class to the h1 tag
myHeading.classList.add('pageheading');

// add an ID to the h1 tag
myHeading.setAttribute("id", "h1ID turtles");

// create a span tag 
let mySpan = document.createElement('span');

// add a class to the span
mySpan.classList.add('headingspan');

// add an ID to the span
mySpan.setAttribute("id", "headingspanID");

// determine what text will go inside the span tag you just created
mySpan.innerText = "Eric is awesome";

// insert the span tag you created inside of the h1 tag you created <h1><span>Eric is awesome</span></h1>
myHeading.appendChild(mySpan);

// insert the h1 tag with span inside of it into the BODY of any HTML document where this code is called
document.body.appendChild(myHeading);
console.log('injected h1 and tag elements to page');