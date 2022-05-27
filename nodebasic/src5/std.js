

const name="Pradeep";

const marks=(math, eng) => {
    console.log(math+eng);
}

//Export Import Module Using Common JS
//module.exports=name;

//export multiple module
//module.exports={name, marks}

//--------------------------------------------------
//Export Import Module Using ES6 

//single export
//export default name;

//multiple export
export {name, marks}

