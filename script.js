//complete this code
class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  // Getters
  getName() {
    return this._name;
  }

  getAge() {
    return this._age;
  }

  // Setters
  setName(name) {
    this._name = name;
  }

  setAge(age) {
    this._age = age;
  }

  // For direct property access like student.name in tests
  get name() {
    return this._name;
  }

  get age() {
    return this._age;
  }

  set name(value) {
    this._name = value;
  }

  set age(value) {
    this._age = value;
  }
}

class Student extends Person {
  constructor(name, age) {
    super(name, age);
  }

  study() {
    console.log(`${this.name} is studying`);
  }
}

class Teacher extends Person {
  constructor(name, age) {
    super(name, age);
  }

  teach() {
    console.log(`${this.name} is teaching`);
  }
}

let p = new Person("John", 25);
p.getName();
p.setAge(30);

let s = new Student("John", 30);
s.study();

let t = new Teacher("John", 30);
t.teach();

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
