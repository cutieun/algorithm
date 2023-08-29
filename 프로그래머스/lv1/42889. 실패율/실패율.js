// function solution(N, stages) {
//     let answer = [];
//     let failPercentage = [];
    
//     stages.sort((a, b) => a - b);
    
//     for(i=0; i<N; i++){
//         let stage = i + 1;
//         let userCnt = stages.filter((v) => v === stage).length;
//         let fail = userCnt/stages.length;
//         for(j=0; j<userCnt; j++){
//             stages.shift();
//         }
//         failPercentage.push([stage, fail]);
//     }
    
//     failPercentage.sort((a, b) => b[1] - a[1]).forEach(v => {
//         answer.push(v[0]);
//     });

//     return answer;
// }

function solution(N, stages) {
    let answer = [];
    
    for(let i=1; i<=N; i++){
        let unclearUsers = stages.filter((v) => v === i).length;
        let totalUsers = stages.filter((v) => v >= i).length;
        answer.push([i, unclearUsers/totalUsers]);
    }
    return answer.sort((a, b) => b[1]- a[1]).map((v) => v[0]);
}