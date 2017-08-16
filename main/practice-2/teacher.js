const Person = require('./person');

module.exports = class Teacher extends Person{
    constructor(name,age,classes){
        super(name,age);
        this.clazzes = classes;
    }

    introduce(){
        if(this.clazzes.length===0){
            return super.introduce()+` I am a Teacher. I teach No Class.`
        }else{
            let clazzNo = [];
            for(let i of this.clazzes){
                clazzNo.push(i.number);
            }
            return super.introduce()+` I am a Teacher. I teach Class ${clazzNo.join(',')}.`
        }
    }
};