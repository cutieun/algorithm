function solution(a, b) {
    let month = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let day = ['THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED'];
    let sumDays = b;

    // 총 일수 계산
    for(let i=0; i<a; i++){
        sumDays += month[i];
    }
    
    // 요일 계산
    return day[sumDays % 7];
}