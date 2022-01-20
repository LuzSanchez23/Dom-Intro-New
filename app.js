//DOM_Intro_Exercise --Practice manipulating the DOM!

// Change the greeting from "Hello, There!" to "Hello, World!".
document.getElementById("greeting").innerHTML = "Hello World";

// Set the background color of each <li> to yellow.
document.getElementById("essentials").style.backgroundColor = "yellow";
  
// Create an image tag, set its src attribute to http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif, and append the to the #greeting div.
var newImage = document.createElement('img');
newImage.src = 'http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif'
document.getElementById("greeting").appendChild(newImage);

// Create and add a ul element to the end of the body with a class of "todo-items"
var newLi = document.createElement('ul');
newLi.id = "to-do-items";
document.body.appendChild(newLi);

// Go through the array ['make coffee','eat donut','change diapers','drive to work'] and create an li element for each item e.g. <li>make coffee</li>
var li = document.createElement("li");
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");

// Add each newly created li element to your ul of class "todo-items"
  newLi.appendChild(li);
  li.appendChild(document.createTextNode("Make Coffee" ));

  li1.appendChild(document.createTextNode("Eat Donut"));
  newLi.appendChild(li1);

  li2.appendChild(document.createTextNode("Change Diapers"));
  li1.appendChild(li2);

   li3.appendChild(document.createTextNode("Drive to work"));
   li2.appendChild(li3);

// -----Part Two:-------

// Add the class of selected to an <li> when it is clicked. Remove it from any other lis as well.
// I may be missing more javascript data in this problem!!
// var removeClass = document.getElementsByClassName("selected");
// removeClass.onmouseover = function (){
//   removeClass.remove();
// }

// When the gray div is moused over, it's removed from the DOM.
document.getElementById(`ghosting`).addEventListener(`mouseover`, imgRemove)
function imgRemove() {
    document.getElementById(`ghosting`).remove()
}

// When the orange div is moused over, its width doubles. When the mouse moves out of the div, it returns to its original size.
document.getElementById(`resize`).addEventListener(`mouseover`, mouseOver)
document.getElementById(`resize`).addEventListener(`mouseout`, mouseOut)
function mouseOver() {
    document.getElementById(`resize`).style.width = `400px`
}
function mouseOut() {
    document.getElementById(`resize`).style.width = `200px`
}

// When the reset button is clicked - remove the selected class from each <li> and change the image to panic.jpeg.
function myFunction() {
    var element = document.getElementById("essentials");
    element.classList.remove("selected");
    var changeImg = document.querySelector("img")
    changeImg.src = "img/panic.jpeg";
  }
  document.querySelector("myFunction").reset.button();


// When the 1, 2, 3, 4, 5, 6, 7, 8, 9, or 0 key is pressed, the page alerts the message "I HATE NUMBERZZZ!"
window.onkeypress = function(event) {
    if (event.keycode = 0-9) {
        alert("I HATE NUMBERZZZ!")
    }
}

// BONUS: If someone types the Konami Code, the page alerts "YOU ARE AN EVENT HANDLER GURUUUUUUUUU!"
