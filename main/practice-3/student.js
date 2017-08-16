const Person = require('./person');
const Class = require('./class');

module.exports = class Student extends Person {
    constructor(name, age, clazz, id) {
        super(name, age, id);
        this.clazz = clazz;
    }

    introduce() {
        if (!this.clazz) {
            return super.introduce() + ` I am a Student. I haven't been allowed to join Class.`;
        } else if (this.clazz.leader === this) {
            return super.introduce() + ` I am a Student. I am Leader of Class ${this.clazz.number}.`;
        } else {
            return super.introduce() + ` I am a Student. I am at Class ${this.clazz.number}.`;
        }
    }
};