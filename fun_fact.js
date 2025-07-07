var f1btn = $('.F1');
var f1Display = $('.F1-text');

f1btn.on("click", updateF1);

function updateF1(){
    event.preventDefault();
    console.log("working");
    f1Display.append(`<p>1. My favorite color is turquoise</p>`);
}


var f2btn = $('.F2');
var f2Display = $('.F2-text');

f2btn.on("click", updateF2);

function updateF2(){
    event.preventDefault();
    console.log("working");
    f2Display.append(`<p>2. May favorite flower is the lily of the valley</p>`);
}


var f3btn = $('.F3');
var f3Display = $('.F3-text');

f3btn.on("click", updateF3);

function updateF3(){
    event.preventDefault();
    console.log("working");
    f3Display.append(`<p>3. My favorite ice cream flavor is cookies and cream</p>`);
}


var f4btn = $('.F4');
var f4Display = $('.F4-text');

f4btn.on("click", updateF4);

function updateF4(){
    event.preventDefault();
    console.log("working");
    f4Display.append(`<p>4. My favorite show is Friends </p>`);
}


var f5btn = $('.F5');
var f5Display = $('.F5-text');

f5btn.on("click", updateF5);

function updateF5(){
    event.preventDefault();
    console.log("working");
    f5Display.append(`<p>5. My favorite music artist is Tate McRae</p>`);
}


var f6btn = $('.F6');
var f6Display = $('.F6-text');

f6btn.on("click", updateF6);

function updateF6(){
    event.preventDefault();
    console.log("working");
    f6Display.append(`<p>6. My favorite food is ramen</p>`);

}