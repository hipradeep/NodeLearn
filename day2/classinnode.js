
module.exports = class MyClass {
   
    constructor(arg){
        this.arg = arg;
        console.log(arg);
    }

    show=()=>{
        console.log(this.arg);
    }
};