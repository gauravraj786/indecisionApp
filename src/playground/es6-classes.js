class Person {
    constructor(name = 'anonymous' , age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting(){
        return `Hi ${this.name}`;
    }
    getDescription(){
        return `Hi ${this.name} of age ${this.age}`;
    }
}

class Student extends Person{
    constructor(name, age,major){
        super(name, age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major;
    }
    getDescription(){
        let description = super.getDescription();
        if(this.hasMajor()){
            description += `their major is ${this.major}`;
        }
        return description;
    }
}

const me = new Student('rahul', 26, 'cs');
console.log(me.hasMajor());
console.log(me.getDescription());

const other = new Student();
console.log(other.hasMajor());
