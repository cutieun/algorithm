function solution(a, b, n) {
    let answer = 0;
    let total = n;
    
    while(total >= a){
        let getCola = parseInt(total/a) * b;
        let left = parseInt(total%a);
        total = left + getCola;
        answer += getCola;
    }
    
    return answer;
}