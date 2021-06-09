'use strict';
// Object-oriented programming
// class: template  #붕어빵틀
// object: instance of a class  #팥붕어빵 #슈크림붕어빵
// Javascript classes
// -introduced in ES6
// -syntactical sugar over prototype-based inheritance

// 1. Class declarations
class Person {
    // contributor
    // 생성자: 추후에 object를 만들 때 필요한 data 전달
    constructor(name, age) {
        // fields
        // 전달받은 data를 class에 존재하는 2가지 field에 할당
        this.name = name;
        this.age = age;
    }

    // methods 말할 수 있는 method 
    speak() {
        console.log(`${this.name}: hello!`);
    }
}

const 승연 = new Person('승연', 25); // 새로운 object 만들 때는 new 선언
console.log(승연.name);
console.log(승연.age);
승연.speak(); 

// 2. Getter and Setter
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    // get: 값 return
    get age() {
        return this._age;  // Getter 와 Setter 안에서 쓰이는 변수 이름 조금 다르게 해줘야 함
    }

    // set: 값 설정 value 받아오기 필수
    set age(value) {
        // if (value < 0) {
        //    throw Error('age can not be negative');
        // }
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('Steve', 'Job', -1);
// 사용자가 바보같이 값을 설정해도 그에 부응하지 않는 방어적인 프로그래밍하는 것
// Getter 와 Setter
console.log(user1.age)

// 3. Fields (public, private)
// Too soon!
//
class Experiment {
    publicField = 2;  
    #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateFiled);

// 4. Static properties and methods
// Too soon!
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);  // class 자체가 object화
Article.printPublisher();  // object들과 상관없이 class에서 공통적으로 사용할 수 있을 때 유용

// 상속과 다향성
// 5. Inheritance
// a way for one class to extend another class.
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color of`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {} // extends 라는 키워드 이용 // Shape 속성 다 가져오면서 변주 가능
class Triangle extends Shape {  // 변주 = overriding = 재정의
    draw() {
        super.draw();
        console.log('🔺');
    }
    getArea(){
    return (this.width * this.height) / 2;
    }
} 

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea()); // 이 때 다향성이 빛을 발함

// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(rectangle instanceof Triangle);
console.log(rectangle instanceof Shape);
console.log(rectangle instanceof Object);
