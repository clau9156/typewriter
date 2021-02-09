"use strict";

// init();
window.addEventListener("load", init);

// text in HTML
let text = document.querySelector(".typewritten");
// increment N
let increment = 0;


function init() {
    console.log("init");
    // get the text from somewhere
    document.querySelector(".typewritten").textContent;

    // clear the HTML area
    document.querySelector(".typewritten").textContent = "";

    // start loop
    loop();
}

funcion loop() {
    console.log("loop");
    // show the N'th letter:
    // - set textContent to subsring of 0 to N
    if (increment < text.length) {
        document.querySelector(".typewritten").textContent += text.charAt(increment);
        // increment N
        increment++;
        // wait before calling loop () again
        setTimeout(loop, 500); 
    } 
    // else{
    // end! 
    // }
}


// NOTES:
// text = "text inside"
// letters = text.substring(0,3) 
// thi
// document.querySelector(".typewritten").textContent = letters
// thi
// .substring()

// .length
// reminds me of password instead of * its just saying for every letter it adds another.