let square = document.getElementById("main1")
let square1 =  window.getComputedStyle(document.getElementById("square1"))
let square2 = window.getComputedStyle(document.getElementById("square2"))
let sq1X = square1.left;
let sq2X = square2.left;

function onDrag({movementX:e,movementY:r})
{
    console.log("vlizam method");
    let t = window.getComputedStyle(square),
    a = parseInt(t.left),o=parseInt(t.top);
    square.style.left=`${a+e}px`,
    square.style.top=`${o+r}px`
}



square.addEventListener("mousedown",()=>{
    
    square.addEventListener("mousemove",onDrag)
})


,document.addEventListener("mouseup",()=>{
    
    square.removeEventListener("mousemove",onDrag)
    console.log(sq1X);
    console.log(sq2X);

    if (Math.abs(Number(square.style.left) - Number(sq1X)) < Math.abs(Number(square.style.left) - Number(sq2X)) ) {
        square.style.left = sq1X
        square.style.top = square1.top;
    }else{
        square.style.left = sq2X
        square.style.top = square2.top;
    }

});