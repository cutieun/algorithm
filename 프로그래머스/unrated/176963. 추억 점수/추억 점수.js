function solution(name, yearning, photo) {
    var answer = [];
    
    let myMap = new Map();
    name.map((v, i) => {
        myMap.set(v, yearning[i]);
    })
    
    for(let i=0; i<photo.length; i++){
        let sum = 0;
        photo[i].forEach(person => sum += myMap.get(person) ?? 0);
        answer.push(sum);
    }
    
    return answer;
}