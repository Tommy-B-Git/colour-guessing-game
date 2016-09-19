// Create an aray of intial colors.. will eventuall replace with a function to pick random color
// var colors = [
//     "rgb(255, 0, 0)",
//     "rgb(255, 255, 0)",
//     "rgb(0, 255, 0)",
//     "rgb(0, 255, 255)",
//     "rgb(0, 0, 255)",
//     "rgb(255, 0, 255)"
// ];

var numSquares = 6;
var colors = generateRandomColors(numSquares);
// Loop through squares and assigm colors
var squares = document.querySelectorAll(".square");
//line below is intial was to hard code in a colour...
//...the preceding line is to pck a random col using fucn
//var pickedColor = colors[3];
var pickedColor = pickColor(); //func at bottom
//colorDisplay is the H1 SPAN
var colorDisplay = document.getElementById("colorDisplay");
//diplay answer inside span
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function() {
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    };
})

hardBtn.addEventListener("click", function() {
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
        squares[i].style.display = "block";
    }
})


resetButton.addEventListener("click", function() {
    //generate all new colors
    colors = generateRandomColors(numSquares);
    //pick new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    // Empty 'coreect' message span & Reset play again button text
    messageDisplay.textContent = "";
    this.textContent = "New Colours";
    //change color of squares
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
    };
    h1.style.background = "steelblue";
})

colorDisplay.textContent = pickedColor;



for (var i = 0; i < squares.length; i++) {
    //add initial colors to squares
    squares[i].style.background = colors[i];
    //add click listeners to squares
    squares[i].addEventListener("click", function() {
        //grab color of clicked square
        var clickedColor = this.style.background;
        //compare color to pickedColor
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct";
            resetButton.textContent = "Play Again?";
            //passes in the clicked colou var just above here
            changeColors(clickedColor);
            h1.style.background = clickedColor;
        } else {
            this.style.background = "#232323";
            messageDisplay.textContent = "Try Again"
        }
    });
};

function changeColors(color) {
    //loop through all squares
    for (var i = 0; i < squares.length; i++) {
        //change each color to match given color
        squares[i].style.background = color;
    };

}

function pickColor() {
    //math.random returns number 0-1 floor removes decimals
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    //Make an array
    var arr = [];
    //add (num) random cols to array
    for (var i = 0; i < num; i++) {
        // get random col and push it to array
        arr.push(randomColor())
    };
    //return that array
    return arr;
}

function randomColor() {
    //pick a 'RED - R' from 0 - 255
    var r = Math.floor(Math.random() * 256);
    //pick a 'GREEN - G' from 0 - 255
    var g = Math.floor(Math.random() * 256);
    //pick a 'BLUE - B' from 0 - 255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
