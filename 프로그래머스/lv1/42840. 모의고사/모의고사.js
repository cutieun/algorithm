function solution(answers) {
    let answer = [];
    let score = [0, 0, 0];
    let person1 = [1, 2, 3, 4, 5];
    let person2 = [2, 1, 2, 3, 2, 4, 2, 5];
    let person3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    // 맞힌 문제 count
    for(let i=0; i<answers.length; i++){
        let answer  = answers[i];
        if(answer === person1[i%person1.length]){
            score[0] += 1;
        }
        if(answer === person2[i%person2.length]){
            score[1] += 1;
        }
        if(answer === person3[i%person3.length]){
            score[2] += 1;
        }
    }
    
    // 가장 많이 문제를 맞힌 사람
    let max = Math.max(...score);
    
    for(let i = 0; i < score.length; i++){
        if(score[i] === max) {
            answer.push(i+1);
        }
    }
    
    return answer;
}