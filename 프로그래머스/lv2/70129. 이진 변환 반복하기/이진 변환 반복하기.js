function solution(s) {
    let answer = [0, 0];
  
    while(parseInt(s)>1){
        let beforeLength = s.length;
        s = s.replaceAll("0", "");
        answer[0] += 1;
        answer[1] += beforeLength - s.length;
        s = (s.length).toString(2);
    }
    
    return answer;
}