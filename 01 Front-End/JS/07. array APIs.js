// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join(',');  // join 함수 
    console.log(result);              // apple, banana, orange
}

// Q2. make an array out of string
{
    const fruits = '🍎,🥝,🍌,🍒';
    const result = fruits.split(','); // split 함수 
    console.log(result);              // ["🍎","🥝","🍌","🍒"]
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();  // reverse 함수 = T[]
    console.log(result);             // [5, 4, 3, 2, 1]
    console.log(array);              // [5, 4, 3, 2, 1]
}
 
// Q4. make new array without the first two elements
{
    const array = [1, 2, 3, 4, 5];
    const result = array.splice(0,2);// splice 함수 = T[]
    console.log(result);             // [1, 2]
    console.log(array);              // [3, 4, 5] 배열 자체를 변경

    const result1 = array.slice(2,5);// slice 함수 
    console.log(result1);            // [3, 4, 5] 배열에서 원하는 부분만 return
}

//
class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
}

const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
    const result = students.find(function (student, index) { // find 함수 = callback 함수
        return student.score === 90;
    });
    console.log(result);
}
{
    const result = students.find((student) => student.score === 90); // 예쁘게 한 줄로 정리 가능
    console.log(result);                                             
}

// Q6. make an array of enrolled students
{
    const result = students.filter((student) => student.enrolled === true); // filter 함수 = callback 함수
    console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
    const result = students.map((student) => student.score); // map 함수
    console.log(result);  // 배열 안에 있는 요소들에 다른 함수를 대입시켜 다른 data 만들고 싶을 때
                          // callback 함수로 전달되는 인자는 최대한 이해하기 쉽게 쓰세요 !!
}                         // 새로운 배열 return T[]

// Q8. check if there is a student with the score lower than 50
{
    const result = students.some((student) => student.score < 50); // some 함수 (일부)
    console.log(result);
}
{
    const result = !students.every((student) => student.score >= 50); //every 함수 (모두)
    console.log(result);
}

// Q9. compute students' average score
{
    const result = students.reduce((prev, curr) => {  // reduce 함수
        console.log('---------');                     // reduceRight 함수 (거꾸로)
        console.log(prev);                            // 배열 하나하나 돌면서 값을 누적할 때 쓰는 것
        console.log(curr);
        return prev + curr.score;
    }, 0);
    console.log(result / students.length);
}
{
    const result = students.reduce((prev, curr) => prev + curr.score, 0);
    console.log(result / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    const result = students.map((student) => student.score).join();
    console.log(result);
}

// Q11. Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
    const result = students
        .map((student) => student.score)
        .sort((a, b) => a - b)
        .join();
    console.log(result);
}