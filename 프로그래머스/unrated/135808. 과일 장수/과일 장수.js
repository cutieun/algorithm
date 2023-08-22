function solution(k, m, score) {
    let answer = 0;
    let boxes = [];
    
    // 내림차순 정렬
    score.sort((a, b) => b - a);
    
    // 사과 박스 나누기
    for(let i=0; i<score.length; i+=m){
        let box = [];
        for(let j=i; j<i+m; j++){
            box.push(score[j]);
        }
        boxes.push(box);
    }
    
    // 계산
    let boxCnt = parseInt(score.length/m);
    for(let b=0; b<boxCnt; b++){
        answer += Math.min(...boxes[b]) * m;
    }
    
    return answer;
}