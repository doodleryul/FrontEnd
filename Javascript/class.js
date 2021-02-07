'use strict';
// Object-oriented programming
// class: template
// object: instance of a class
// JavaScript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance

// 1. Class declarations
console.log('1. Class declarations');
class Person {
  //constructor
  constructor(name, age) {
    //fields
    this.name = name;
    this.age = age;
  }
  
  // methods
  speak() {
    console.log(this.name+' hello!');
  }
}

const rimiiii = new Person('rimiiii', 20);
console.log(rimiiii.name);
console.log(rimiiii.age);
rimiiii.speak();

// 2. Getter and setters
console.log('\n2. Getter and setters');
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  
  get age() {
    return this._age;
  }
  
  set age(value) {
    //if (value < 0) {
    //  throw Error('age can not be negativ);
    //}
    this._age = value < 0 ? 0 : value; //0보다 작으면 0으로 값을 받아라
  }
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);

// 3. Fields (public, private)
// Too soon!
console.log('\n3. Fields (public, private)')
class Experiment {
  publicField = 2; 
//  #privateField = 0; //#을 붙이면 내부에서만 돌아감
}
const experiment = new Experiment();
console.log(experiment.publicField);
//console.log(experiment.privateField);

// 4. Static preperties and methods
// Too soon
// memory 사용을 줄여줌
//class Article {
//  static publisher = 'Dream Coding';
//  constructor(articleNumber) {
//    this.articleNumber = articleNumber;
//  }
  
//  static printPublisher() {
//    console.log(Article.publisher);
//  }
//}

//const article1 = new Article(1);
//const article2 = new Article(2);
//console.log(Article.publisher); //article1.publisher로 하면 에러가 난다.
//Article.printPubliher();

// 5. inheritance
// a way for one class to extend another class
console.log('\n5. inheritance')
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }
  
  draw() {
    console.log('drawing '+this.color+' color!');
  }
  
  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
  draw() {
    super.draw(); //위에것 그대로 받아오고
    console.log('🔺'); //새롭게 추가
  }
  getArea() { //추가삽입
    return (this.width * this.height) / 2;
  }
  
  toString() { //object에 있는 tostring함수 오버라이딩
    return 'Trianle: color: '+this.color;
  }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instanceof
console.log('\n6. Class checking: instanceof')
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);
console.log(triangle.toString());
