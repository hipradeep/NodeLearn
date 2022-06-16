
const promiscObj = new Promise((resolve, reject) => {
    let req = true;
    let num=10;
    if (req == true) {
        resolve(num);
    } else {
        reject("Cant fetch data- error");
    }
}).then(
    (value) => { console.log(value); 
    return value+10;
}

).then(
    
    (value) => { console.log(value); }

).catch(
    (error) => { console.log(error);}

).finally(
   // (value) => { console.log(value); }
);




















// const promiseObj = new Promise((resolve, reject) => {
//     let num = 10; resolve(num);
// }
// ).then(
//     (value) => { console.log(value); return value + 10 }
// ).then(
//     (value) => { console.log(value); return value; }
// ).then(
//     () => { throw new Error(" Error Found "); }
// ).catch((error) => { console.log(error); }
// );