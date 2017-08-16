// Write your code here
const Teacher  = require('./teacher');
const Student = require('./student');
const Person = require('./person');

module.exports = class Class {
    constructor(number) {
        this.number = number;
        this.teacheres = [];
    }

    assignLeader(student) {
        if(this.hasStudent(student)){
            this.leader = student;
            for(let item of this.teacheres){
                item.notifyLeaderAssigned(`${student.name} become Leader of Class ${student.clazz.number}`);
            }
            return 'Assign team leader successfully.';
        } else
            return 'It is not one of us.';

    }

    appendMember(student) {
        student.clazz = this;
        for(let item of this.teacheres){
            item.notifyStudentAppended(`${student.name} has joined Class ${student.clazz.number}`);
        }
    }

    appendTeacher(teacher){
        this.teacheres.push(teacher);
    }

    hasStudent(student){
        return student.clazz ===this;
    }


}