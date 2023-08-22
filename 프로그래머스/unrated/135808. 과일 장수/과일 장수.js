function solution(k, m, score) {
    let answer = 0;
    let boxCnt = parseInt(score.length/m);
    
    score.sort((a, b) => b - a);
    
    for(let i=0; i<boxCnt; i++){
        answer += score[(m-1)+(m*i)] * m;
    }
    
    return answer;
}