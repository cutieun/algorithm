function solution(strings, n) {
    strings.sort((a, b) => {
        if(a[n] === b[n]){
            if (a > b) return 1;
            else if (b > a) return -1;
            else return 0;
        } else {
            if (a[n] > b[n]) return 1;
            else if (b[n] > a[n]) return -1;
            else return 0;
        }
    })
    return strings;
}