function drawVec(vector, from, color, scale, sWidth, nameVec, unitVec){
    var scale = {x: scale, y: scale};
    vector = powerMath.Vector.multVec(vector, scale);
    from = powerMath.Vector.multVec(from, scale);

    var to = powerMath.Vector.addVec(from, vector); //get vector between points of vector

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = sWidth;
    ctx.lineCap = "round";
    ctx.moveTo(from.x, from.y);
    ctx.lineTo(to.x,to.y);
    ctx.stroke();

    ctx.font = "bold 24px BlinkMacSystemFont";
    ctx.fillText(unitVec, to.x-5, to.y-10);
    var txt = ctx.measureText(unitVec).width
    ctx.font = "15px BlinkMacSystemFont";
    ctx.fillText(nameVec, to.x+txt, to.y-4.5);
}

// get elements:
const canvas = document.getElementById("powerGraph");
const il1Slider = document.getElementById("il1");
const il2Slider = document.getElementById("il2");
const il3Slider = document.getElementById("il3");

const ctx = canvas.getContext("2d");

//-- Initiate Canvas ---
//Set Canvas size
//canvas.height = canvas.parentElement.clientWidth;  Old Method wiht low resolution
//canvas.width = canvas.parentElement.clientWidth;

    // New Method for high resolution with oversampling, not fully tested
    // Get the DPR and size of the canvas parent element because of dynamic sizing of css
    const dpr = window.devicePixelRatio;
    const rect = {width:  canvas.parentElement.clientWidth, height:  canvas.parentElement.clientWidth};

    // Set the "actual" size of the canvas
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    // Scale the context to ensure correct drawing operations
    //ctx.scale(dpr, dpr);

    // Set the "drawn" size of the canvas
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;

    canvas.radius = canvas.width/2;
    canvas.diameter = canvas.width;

//move coordinate-grid zero to center of canvas
ctx.translate(canvas.radius,canvas.radius)

var stroke1=10, stroke2=2;


//--------------------------------------------------------------------------------------

var iMax = 16;
drawPowerVeks = function(il1,il2,il3,maxI) {
    var zero = {x:-0 ,y:0};
    var alp=30;

    var scale=canvas.radius/maxI*0.8;

    var vecIL1 = powerMath.Vector.rotateVec(powerMath.Vector.getFromAngle(il1, alp),240 );
    var vecIL2 = powerMath.Vector.rotateVec(powerMath.Vector.getFromAngle(il2, alp),120);
    var vecIL3 = powerMath.Vector.rotateVec(powerMath.Vector.getFromAngle(il3, alp),0);

    var vecIL12 = powerMath.Vector.addVec(vecIL1, vecIL2);
    var vecIL123 = powerMath.Vector.addVec(vecIL12, vecIL3);

    ctx.clearRect(canvas.radius*-1, canvas.radius*-1, canvas.diameter, canvas.diameter);

    // drawGrid();
    drawVec(vecIL2, vecIL1, "pink", scale, stroke2, "","");
    drawVec(vecIL3, vecIL12, "pink", scale, stroke2, "","");
    drawVec(vecIL123, zero, "cyan", scale, stroke1, "N","I");

    drawVec(vecIL1, zero, "#02c53e", scale, stroke1,"L1","I");
    drawVec(vecIL2, zero, "#22c55e", scale, stroke1,"L2","I");
    drawVec(vecIL3, zero, "#22c55e", scale, stroke1,"L3","I");

    //console.log("vecDranw: " + il1 +" | "+ il2 +" | "+ il3);
    //console.log("IN: " + powerMath.Vector.amountVec(vecIL123));

};
drawGrid = function(){
    //grid
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.moveTo(canvas.radius,0);
    ctx.lineTo(canvas.radius*-1,0);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.moveTo(0,canvas.radius);
    ctx.lineTo(0,canvas.radius*-1);
    ctx.stroke();
}


/*
drawPowerVeks(il1Slider.value,il2Slider.value,il3Slider.value);
il1Slider.oninput = function(){drawPowerVeks(il1Slider.value,il2Slider.value,il3Slider.value)};
il2Slider.oninput = function(){drawPowerVeks(il1Slider.value,il2Slider.value,il3Slider.value)};
il3Slider.oninput = function(){drawPowerVeks(il1Slider.value,il2Slider.value,il3Slider.value)};

    //grid
ctx.beginPath();
ctx.strokeStyle = "black";
ctx.moveTo(canvas.radius,0);
ctx.lineTo(canvas.radius,canvas.radius*2);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle = "black";
ctx.moveTo(0,canvas.radius);
ctx.lineTo(radius*2,radius);
ctx.stroke();

il1Slider.oninput = function(){
    var alp=270, il1 = this.value;

    var vecIL1 = powerMath.Vector.getFromAngle(this.value, alp);

    drawVec(vecIL1, zero, origin, "red", scale, stroke);
    console.log(il1);
}

il2Slider.oninput = function(){
    var alp=150, il2 = this.value;

    var vecIL2 = powerMath.Vector.getFromAngle(this.value, alp);
    drawVec(vecIL2, zero, origin, "green", scale, stroke);
    console.log(il2);
}

il3Slider.oninput = function(){
    var alp=30, il3 = this.value;

    var vecIL3 = powerMath.Vector.getFromAngle(this.value, alp);  
    drawVec(vecIL3, zero, origin, "blue", scale, stroke);
    console.log(il3);
}


    var alp1=270; alp2=150; alp3=30,scale=5,stroke=2;

    var vecIL1 = powerMath.Vector.getFromAngle(this.value, alp1);
    var vecIL2 = powerMath.Vector.getFromAngle(this.value, alp2);
    var vecIL3 = powerMath.Vector.getFromAngle(this.value, alp3);  

    var vecIL1 = powerMath.Vector.getFromAngle(this.value, alp1);
    var vecIL2 = powerMath.Vector.getFromAngle(this.value, alp2);
    var vecIL3 = powerMath.Vector.getFromAngle(this.value, alp3);  

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawVec(vecIL1, zero, origin, "red", scale, stroke);
    drawVec(vecIL2, zero, origin, "green", scale, stroke);
    drawVec(vecIL3, zero, origin, "blue", scale, stroke);
*/