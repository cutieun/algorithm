function solution(s) {
    let answer = [];
    let idxMap = new Map();
    
    for(let i=0; i<s.length; i++){
        if(idxMap.has(s[i])){
            answer.push(i - idxMap.get(s[i]));
            idxMap.delete(s[i]);
            idxMap.set(s[i], i);
        } else {
            answer.push(-1);
            idxMap.set(s[i], i);
        }
    }
    
    return answer;
}