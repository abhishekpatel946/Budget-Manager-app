// Select Chart element
const chart = document.querySelector(".chart");

// crete canvas element
const canvas = document.createElement("canvas");
canvas.width = 50;
canvas.height = 50;

// append canvas to chart element
chart.appendChild(canvas);

// to draw on canvas, we need to get context of canvas
const ctx = canvas.getContext("2d");

// change the line width
ctx.lineWidth = 8;

// circle radius
const R = 20;

function drawCircle(color, ratio, anticlockwise) {

    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.arc( canvas.width/2, canvas.height/2, R, 0, ratio*2*Math.PI, anticlockwise);
    ctx.stroke();
}

function updateChart( income, outcome ) {
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let ratio = income/ ( income + outcome );

    drawCircle("#E71C23", ratio, true);
    drawCircle("#45CE30", ratio, false);
    
}
