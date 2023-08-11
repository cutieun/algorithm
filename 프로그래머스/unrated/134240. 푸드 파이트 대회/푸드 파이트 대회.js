function solution(food) {
    let answer = ['0'];
    for(let i=food.length-1; i>0; i--){
        let perPerson = (i+'').repeat(parseInt(food[i])/2);
        answer.unshift(perPerson);
        answer.push(perPerson);
    }
    return answer.join('');
}