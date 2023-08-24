var n = 0;



function change() {

    n++;
    var h1x = document.getElementById("number")
    h1x.innerText = n;
}


function myFunction() {
    // Code for IE9
    document.getElementById("myDIV").style.msTransform = "rotate(20deg)"; 
    document.getElementById("myDIV").style.msTransform = "rotate(50deg)"; 
    // Standard syntax
    document.getElementById("myDIV").style.transform = "rotate(20deg)"; 
  }


  function changeBox(){
    deg = deg + 45
    var box = document.getElementById("box");
    box.style.transform="rotate("+deg+"deg)";
  }

  var x = 100;
  function downX(){
    var s =setInterval(function(){
        x--;
        var h1x = document.getElementById("number")
        h1x.innerText = x
        if(x<=0){
            clearInterval(s)
        }
    },100);
  }


  var min = 10;
  var sec = 0
  

