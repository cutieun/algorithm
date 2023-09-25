function solution(arr, queries) {
    let answer = [];
    
    queries.forEach((array) => {
        let [s, e, k] = [...array]; 
        let querieArr = arr.slice(s, e+1);
        let min = querieArr.filter((v) => v > k)
                           .sort((a, b) => a - b)[0] ?? -1;
        answer.push(min);
    })
    
    return answer;
}