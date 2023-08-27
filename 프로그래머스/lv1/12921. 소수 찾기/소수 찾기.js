function solution(n) {
    let isPrime = Array(n+1).fill(true);       // idx:숫자, 각 숫자가 소수인지 boolean
    [isPrime[0], isPrime[1]] = [false, false]; // 0과 1은 소수가 아님
    
    let len_sqrt = parseInt(Math.sqrt(n));     // 소수는 제곱근까지만 확인하면 됨 
    for(let i=2; i<=len_sqrt; i++){
        j = i;
        if(isPrime[i]){
            while(i * j <= n){
                isPrime[i*j] = false;
                j++;
            }
        }
    }
    return isPrime.filter((v) => v).length;
}