function solution(numbers) {
    let mySet = new Set();
    for(let i=0; i<numbers.length-1; i++){
        for(let j=i+1; j<numbers.length; j++){
            mySet.add(numbers[i] + numbers[j]);
        }
    }
    return [...mySet].sort((a, b) => a - b);
}