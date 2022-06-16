
const promiscObj = new Promise((resolve, reject) => {
    let req = false;
    if (req == true) {
        resolve(" Get Data from Api");
    } else {
        reject("Cant fetch data- error");
    }
});

promiscObj.then(
    (value) => { console.log(value); },
    //(error) => { console.log(error);  }  // you can use catch indted of error

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