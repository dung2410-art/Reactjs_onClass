function demo1() {
    console.log("Demo1");

}

function demo2() {
    console.log("Demo2");

}

function input1() {
    var ipxx = document.getElementById("ipx");
    var v = ipxx.value
    console.log("input1...");

}

function input2() {
    var ipxx = document.getElementById("ipx");
    var v = ipxx.value
    //console.log("input2...");
    var ctx = document.getElementById("ct")
    ctx.innerText = v
}


function change1() {
    var slxx = document.getElementById("slx")
    var v = slxx.value;
    console.log(v)
}

var dg = 0;
var undg;
var speed = 10

function fan() {
    undg = setInterval(function () {
        var fanX = document.getElementById("fanX")
        dg += speed
        fanX.style.transform = "rotate(" + dg + "deg)";
    }, 1);
}

function fan1(){
    speed = 10;
    if (undg == null) {
        fan()
    }
}

function fan2(){
    speed = 20;
    if (undg == null) {
        fan()
    }
}

function fan3(){
    speed = 30;
    if (undg == null) {
        fan()
    }
}

function off() {
    // setInterval(function(){
    //     var fanX = document.getElementById("fanX")
    //     dg = dg++
    //     fanX.style.transform = "rotate("+dg+"deg)";
    // },1);

    if (undg != null) {
        clearInterval(undg)
    }
}