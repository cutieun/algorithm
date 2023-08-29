function solution(N, stages) {
    var answer = [];
    let failPercentage = [];
    
    stages.sort((a, b) => a - b);
    
    for(i=0; i<N; i++){
        let stage = i + 1;
        let userCnt = stages.filter((v) => v === stage).length;
        let fail = userCnt/stages.length;
        for(j=0; j<userCnt; j++){
            stages.shift();
        }
        failPercentage.push([stage, fail]);
    }
    
    failPercentage.sort((a, b) => b[1] - a[1]).forEach(v => {
        answer.push(v[0]);
    });

    return answer;
}