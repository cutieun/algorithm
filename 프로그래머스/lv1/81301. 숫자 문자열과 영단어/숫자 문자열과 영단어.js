function solution(s) {
    let answer = '';
    let numArr = ['zero','one','two','three','four','five','six','seven','eight','nine'];
    let startIdx = 0;
    
    for(let i = 0; i < s.length; i++){
        let findIdx = numArr.indexOf(s.slice(startIdx,i+1));

        if(findIdx !== -1){ // 문자숫자를 찾았을 경우
            answer+= findIdx;
            startIdx = i+1;
        }
        if(!isNaN(s[i])){   // 숫자일 경우
            answer += s[i];
            startIdx = i+1;
        }
    }
    return parseInt(answer);
}