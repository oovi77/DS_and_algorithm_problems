//javaScript student class example

class Student{
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.tardies = 0;
        this.scores = [];
    }

    fullName() {
        return `Your full name is ${this.firstName} ${this.lastName}`;
    }

    markLate() {
        this.tardies += 1;
        if(this.tardies >= 3) {
            return 'You are EXPELLED!!!';
        }
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;

    }

    addScore(score) {
        this.scores.push(score);
        return this.scores;
    }

    calculateAverage() {
        let sum = this.scores.reduce(function(a,b) {return a + b;});
        return sum / this.scores.length;
    }

    //this is a utility function that belongs to the Student class
    //it is NOT an instance method because it does not rely on a particular
    //instance of student to do anything, and you do NOT call it on
    //an instance of a student object
    static enrollStudents (...students) {
        //maybe send an email to each student here
        return "ENROLLING STUDENTS !!";
    }
}

let firstStudent = new Student ("Colt", "Steele");
let secondStudent = new Student ("Blue", "Steele");

console.log(firstStudent.fullName());
console.log(firstStudent.markLate());
console.log(firstStudent.addScore(77));
console.log(firstStudent.addScore(99));
console.log(firstStudent.calculateAverage());

Student.enrollStudents(firstStudent, secondStudent);