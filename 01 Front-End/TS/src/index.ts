{
  const sayHi = (name:string, age:number, gender:string):string => {
    return `Hello ${name}, you are ${age}, you are a ${gender}`
  }
  
  console.log(sayHi("lee", 25, "female"));
}

{
  // interface 는 자바스크립트에서 인식 못함
  // interface 쓸 때가 있고 class 쓸 때가 있음
  interface Human {
    name: string,
    age: number,
    gender: string
  }

  const person = {
    name: "lee",
    age: 25,
    gender: "female"
  }

  const sayHi = (obj: Human):string => {
    return `Hello ${obj.name}, you are ${obj.age}, you are a ${obj.gender}`
  }

  console.log(sayHi(person));
}

{
  // interface 대신 넣는 것이 class
  class Human {
    // ts의 class 는 이렇게 property를 정의해줘야한다.
    // public / private
    public name: string;
    public age: number;
    public gender: string;

    constructor(name:string, age:number, gender:string){
      this.name = name;
      this.age = age;
      this.gender = gender;
    }
  }

  const lee = new Human("seungyeon", 25, "female");
  
  const sayHi = (obj: Human):string => {
    return `Hello ${obj.name}, you are ${obj.age}, you are a ${obj.gender}`
  }

  console.log(sayHi(lee));
}

{
  // Blockchain 만들면서 감 익히기
}