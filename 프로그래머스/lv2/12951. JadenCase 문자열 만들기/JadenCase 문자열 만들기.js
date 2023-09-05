function solution(s) {
    let answer = "";
    let arr = s.toLowerCase().split(" ");
    
    for(s of arr) {
        answer += s.charAt(0).toUpperCase() + s.slice(1) + " ";
    }
    
    return answer.slice(0, answer.length-1);
}