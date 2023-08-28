function solution(n, m, section) {
    let answer = 0;
    while(section.length > 0){
        let start = section.shift();
        let end = start + m;
        while(section[0] < end){
            section.shift();
        }
        answer ++;
    }
    return answer;
}