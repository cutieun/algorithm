function solution(s) {
    // s='try hello   world';
    let answer = '';
    let words = s.split(" ");
    console.log(words);
    for(let i=0; i<words.length; i++){
        for(let j=0; j<words[i].length; j++){
            if(j%2==0){
                answer += words[i][j].toUpperCase();
            } else {
                answer += words[i][j].toLowerCase();
            }
        }
        if (i < words.length - 1) {
          answer += " ";
        }
    }
    console.log(answer);
    return answer;
}