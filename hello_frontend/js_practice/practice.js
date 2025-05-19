let my_str = "hi12392"
let my_str2 = "p2o4i8gj2"
let my_str3 = "abcde0"

function solution(my_string) {
    let my_array = Array.from(my_string);
    
    let answer = my_array.filter(item => isNaN(item) === false).sort((a, b) => a - b);
    
    return answer;
}

console.log(solution(my_str));
console.log(solution(my_str2));
console.log(solution(my_str3));