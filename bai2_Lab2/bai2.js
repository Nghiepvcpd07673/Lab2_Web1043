let a = parseFloat(prompt('Nhập cạnh a :'));
let b = parseFloat(prompt('Nhập cạnh b :'));
let c = parseFloat(prompt('Nhập cạnh c :'));

if (a + b > c && a+c>b && b+c >a){
    if(a == b || a == c || b==c){
    // tam giác cân có 2 cạnh đều bằng nhau
    console.log('Tam Giác cân');
    }else if( 
        a == Math.sqrt(Math.pow(b,2)+Math.pow(c,2))||
        b == Math.sqrt(Math.pow(a,2)+Math.pow(c,2)) ||
        c == Math.sqrt(Math.pow(a,2)+Math.pow(b,2)))
    {
        console.log('Đây là tam giác vuông');
        //a = 5, b = 12, c = 13 / a = 7, b = 24, c = 25 
    }else if(a != b && a != c && b != c && a+b >c && a+c > b && b+c >a ){
        console.log('Đây là tam giác thường');
        
    }
}else{
    console.log("Ba giá trị a, b, c không tạo thành tam giác.");
}

