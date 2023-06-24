canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

/*
    Use beginPath() function to begin a path.
    Then, use strokeStyle to set the color to "grey".
    Use lineWidth and set the width to 1.
    Use rect() to create a rectangle at 150 and 143
with 430 width and 200 height.
*/


ctx._beginPath();
ctx._strokeStyle______ = "grey";
ctx.___lineWidth____ = 1;
ctx.__rect_____(x, y, width, height);
ctx.stroke();

/*
    Use beginPath() function to begin a path.
    Then, use strokeStyle to set the color to "blue".
    Use lineWidth and set the width to 5.
    Use arc() to create a circle at x = 250 and y = 210
with 40 as radius, 0 startAngle and 2 * Math.PI endAngle.
*/

ctx._beginPath();
ctx._strokeStyle______ = "blue";
ctx.___lineWidth____ = 5;
ctx.__arc_____(x, y, width, height);
ctx.stroke();

// Similarly, create a black circle with position 350 and 210
ctx._beginPath();
ctx._strokeStyle______ = "black";
ctx.___lineWidth____ = 1;
ctx.__arc_____(x, y, width, height);
ctx.stroke();
// Similarly, create a red circle with position 210 and 40
ctx._beginPath();
ctx._strokeStyle______ = "red";
ctx.___lineWidth____ = 1;
ctx.__arc_____(x, y, width, height);
ctx.stroke();
// Similarly, create an orange circle with position 300 and 250
ctx._beginPath();
ctx._strokeStyle______ = "orange";
ctx.___lineWidth____ = 1;
ctx.__arc_____(x, y, width, height);
ctx.stroke();
// Similarly, create a green circle with position 400 and 250
ctx._beginPath();
ctx._strokeStyle______ = "green";
ctx.___lineWidth____ = 1;
ctx.__arc_____(x, y, width, height);
ctx.stroke();