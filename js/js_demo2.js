 var arr = []; 

// for (var i = 0 ; i < 10 ; i++){
//     var x = prompt("Nhập giá trị cho số phần từ" + i)
//     arr.push(x)
// }
// var max = arr[0]; 
// var min = arr[0]
// for (var i=1; i < arr.length;i++){
//     if (max < arr[i]) {
//         max = arr[i];
        
//     }

//     if (min > arr[i]) {
//         min = arr[i];
        
//     }
// }
// alert("Gia tri lon nhat: " + max)
// alert("Gia tri nho nhat: " + min)


var ran = parseInt(Math.random()*45); 

do{
    var kq = prompt("Chọn 1 số từ 0 -> 45");
    kq = parseInt(kq);

    if (kq>0 && kq < 45 && !arr.includes(kq)){
        arr.push(kq)
    }
}while(arr.length<5)

    var check = false
    for(var i=0; i<arr.length; i++){
    if(arr[i] == ran){ 
        alert("Chúc mừng bạn đã trúng giải!");
        check = true
        break;
    }

    if(check == false){
        alert("lan sau")
    }
}
 

 