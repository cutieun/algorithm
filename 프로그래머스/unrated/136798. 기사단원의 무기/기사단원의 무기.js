function solution(number, limit, power) {
    let answer = 0;
    for (let i = 1; i <= number; i++){
        let cnt = 0;
        for(let j = 1; j * j <= i; j++){
            if (j * j == i) cnt++;
            else if (i % j == 0) cnt += 2;
        }
        answer += cnt > limit ? power : cnt;
    }
    return answer;
}