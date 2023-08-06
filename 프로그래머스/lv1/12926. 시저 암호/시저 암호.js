function solution(s, n) {
    let answer = '';
    let ascii_arr = [];
    // 대문자 : 65-90
    // 소문자 : 97-122 (+32)
    // space : 32
    for(let i=0; i<s.length; i++){
        let ascii = s.charCodeAt(i);
        let val = ascii + n;
        // console.log(val);
        if(ascii === 32){
            ascii_arr.push(32);
        }else if(ascii < 91){
            ascii_arr.push(val > 90 ? 65+(val-91) : val)
        } else {
            ascii_arr.push(val > 122 ? 97+(val-123) : val)
        }
    }
    // console.log(String.fromCodePoint(...ascii_arr));
    return String.fromCodePoint(...ascii_arr);
}