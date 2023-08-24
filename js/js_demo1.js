var x = 17;
var y = "hello";


// if ( x > 15) {
//     var msg = prompt("vui long nhap so dien thoai")
//     var msg1 = prompt("vui long ten")
//     var msg2 = prompt("vui long nhap dia chi")
//     var msg3 = prompt("vui long email")
//     alert(msg + msg1 + msg2 + msg3)
// } else {

// }

var ran = parseInt(Math.random() * 20)
for (var i = 0; i < 10; i++) {
    var kq = prompt("nhap 1 so ngau nhien tu 1 -> 20 ")
    if( kq > 20){
        alert("Again")
    } else {
        if (kq == ran) {
            alert("goodjob")
            break
        } else {
            alert("next time")
        }
    }
}

