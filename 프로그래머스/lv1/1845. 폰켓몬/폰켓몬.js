function solution(nums) {
    let max = nums.length/2;
    let mySet = new Set(nums);
    let setSize = mySet.size;
    
    return max > setSize ? setSize : max;
}