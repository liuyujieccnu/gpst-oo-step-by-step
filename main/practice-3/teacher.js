const Person = require('./person');
const Class = require('./class');

module.exports = class Teacher extends Person {
    constructor(name, age, classes) {
        super(name, age);
        this.clazzes = classes;
        for (let item of this.clazzes) {
            item.appendTeacher(this);
        }
    }

    introduce() {
        if (this.clazzes.length === 0) {
            return super.introduce() + ` I am a Teacher. I teach No Class.`
        } else {
            let clazzNo = [];
            for (let i of this.clazzes) {
                clazzNo.push(i.number);
            }
            return super.introduce() + ` I am a Teacher. I teach Class ${clazzNo.join(',')}.`
        }
    }

    isTeaching(student) {
        return this.clazzes.indexOf(student.clazz) !== -1;
    }

    notifyStudentAppended(str) {
        console.log(`I am ${this.name}. ` + str);
    }

    notifyLeaderAssigned(str) {
        console.log(`I am ${this.name}. ` + str);
    }
};