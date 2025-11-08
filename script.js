//complete this code
class Person {
	constructor(name,age){
		this.name = name;
		this.age = age;
	}
	getName(){
		return this.name;
	}

	setName(name){
		this.name = name;
	}

	getAge(){
		return this.age;
	}

	setAge(age){
		this.age = age
	}
}

class Student extends Person {
	constructor(name, age){
		super(name, age)	
	}
	study(){
		return `${this.getName()} is studying`
	}
}

class Teacher extends Person {
	constructor(name, age){
		super(name, age)	
	}
	teach(){
		return `${this.getName()} is teaching`
	}
}

let p = new Person("John", 25);
p.getName();
p.setAge(30)


let s = new Student("John", 30)
s.study();

let t = new Teacher("John", 30);
t.teach()

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
