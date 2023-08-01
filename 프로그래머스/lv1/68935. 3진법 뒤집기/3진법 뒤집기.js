function solution(n) {
    let answer = parseInt(n.toString(3).split("").reverse().join(""),3);
    
    // 10진수 -> 3진수
    // answer = n.toString(3);
    
    // 3진수 뒤집기
    // answer = n.split("").reverse().join("");

    // 3진수 -> 10진수
    // answer = parseInt(n,3)

    return answer;
}