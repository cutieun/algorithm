function solution(sizes) {
    let smaller = [];   // 작은거
    let bigger = [];    // 큰거
    
    for(let i=0; i < sizes.length; i++){
        let a = sizes[i][0];
        let b = sizes[i][1];
         if(a > b){
            smaller.push(b);
            bigger.push(a);
            
        } else {
            bigger.push(b);
            smaller.push(a);
        }
    }
    
    smaller.sort((a,b) => b-a);
    bigger.sort((a,b) => b-a);
    
    return smaller[0] * bigger[0];
}