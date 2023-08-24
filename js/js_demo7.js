var randoms = [];
while(randoms.length < 5){
    var x = Math.random()*46;
    x = parseInt(x)
    if(randoms.includes(x)){
        randoms.push(x);
    }
}
console.log(x)
function kiemtra(){
    var lucky = [];
    var s1 = document.getElementById("s1").value;
    if(s1 >= 0 && s1 <= 45){
        lucky.push(parseInt(s1))
    }
    var s2 = document.getElementById("s2").value;
    if(s2 >= 0 && s2 <= 45 && !lucky.includes(s2)){
        lucky.push(parseInt(s2))
    }
    var s3 = document.getElementById("s3").value;
    if(s3 >= 0 && s2 <= 45 && !lucky.includes(s3)){
        lucky.push(parseInt(s3))
    }
    var s4 = document.getElementById("s4").value;
    if(s4 >= 0 && s4 <= 45 && !lucky.includes(s4)){
        lucky.push(parseInt(s4))
    }
    var s5 = document.getElementById("s5").value;
    if(s5 >= 0 && s5 <= 45 && !lucky.includes(s5)){
        lucky.push(parseInt(s5))
    }
    if(lucky.length < 5){
        var tb = document.getElementById("thongbao");
        tb.innerText = "Vui lòng chọn 5 giá trị hợp lệ";
        tb.style.color = red
    }else{
        for(var i=0;i<randoms.length;i++){
            if(lucky.length.includes(randoms[i])){
                count++;
            }
        }
        var tb = document.getElementById("thongbao");
        if( count == 3){
            tb.innerText = "Bạn đã trúng 3 số";
            tb.style.color = green
        }else if( count == 4 ){
            tb.innerText = "Bạn đã trúng 4 số";
            tb.style.color = green
        }else if( count == 5 ){
            tb.innerText = "Bạn đã trúng jackpot";
            tb.style.color = green
        }else{
            tb.innerText = "Chúc bạn may mắn lần sau";
            tb.style.color = red
        }
    }
}