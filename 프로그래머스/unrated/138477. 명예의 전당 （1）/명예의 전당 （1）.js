function solution(k, score) {
    let answer = [];
    let fameArr = [];
    
    for(let s of score){
        if(fameArr.length < k) {
            fameArr.push(s);   
        } else {
            if(fameArr[0] < s){
                fameArr.shift();
                fameArr.push(s);
            }
        } 
        fameArr.sort((a, b) => a - b);
        answer.push(fameArr[0]);
    }
    
    return answer;
}