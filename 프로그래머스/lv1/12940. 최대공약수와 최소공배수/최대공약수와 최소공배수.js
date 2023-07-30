function solution(n, m) {
    let arr = [n, parseInt(m/n), parseInt(m%n)]; // 기준값, 몫, 나머지
    
    // 최대공약수
    while(arr[2]>0){
        let val = arr[2];                           // 기준값
        let quotient = parseInt(arr[0]/arr[2]);     // 몫
        let remainder = parseInt(arr[0]%arr[2]);    // 나머지
        
        arr = [];
        arr.push(val);
        arr.push(quotient);
        arr.push(remainder);
    }
    return [arr[0], (n*m)/arr[0]]; 
}

    // 충격받은 다른사람 코드...
    // function gcdlcm(a, b) {
    // var r;
    // for(var ab= a*b;r = a % b;a = b, b = r){}
    // return [b, ab/b];
    // }