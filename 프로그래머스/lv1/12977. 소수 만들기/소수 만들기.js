function solution(nums) {
    var answer = 0;

    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            for (let k=j+1; k<nums.length; k++){ // 숫자 3개의 조합
                let sum = nums[i] + nums[j] + nums[k];
                let isPrime = true;
                // 소수 판별
                for(let l=2; l<sum; l++){
                    if(sum%l === 0){
                        isPrime = false;
                      break;  
                    } 
                }
                if(isPrime){
                    answer ++;
                }
            }
        }
    }
    
    return answer;
}