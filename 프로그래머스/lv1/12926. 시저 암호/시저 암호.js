function solution(s, n) {
    let answer = '';
    let ascii_arr = [];
    
    // 대문자 : 65-90
    // 소문자 : 97-122 (+32)
    // space : 32
    
    for(let i=0; i<s.length; i++){
        let ascii = s.charCodeAt(i);
        let val = ascii + n;
        if(ascii === 32){       // 공백
            ascii_arr.push(32);
        } else if(ascii < 91){  // 대문자
            ascii_arr.push(val > 90 ? (val-26) : val)
        } else {                // 소문자
            ascii_arr.push(val > 122 ? (val-26) : val)
        }
    }
    return String.fromCodePoint(...ascii_arr);
}