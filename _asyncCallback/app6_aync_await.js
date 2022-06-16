// solve app4 problem with another callback :: CallBackHell


console.log("Start");


function myRocket(rkt) {
    return new Promise(function (resolve, reject) {
        setTimeout(
            function () {
                console.log("🕐")
                resolve(rkt);
            }, 1000);
    })
}

function getCars(car) {
    return new Promise(function (resolve, reject) {
        setTimeout(
            function () {
                console.log("🕐🕐")
                resolve(car);

            }, 1000);
    })

}
function getBike(bike) {
    return new Promise(function (resolve, reject) {
        setTimeout(
            function () {
                console.log("🕐🕐🕐")

                resolve(bike);
            }, 1000);
    })

}


async function runMyFun() {

    try {
        let rkt = await myRocket(8989);
        console.log(rkt + "_rkt");
        let cars = await getCars(rkt);
        console.log(cars + "_cars");
        let bike = await getBike(cars);
        console.log(bike+"_bike"); 
    } catch (error) {
        
        console.log(error.message);
    }

}


runMyFun();

console.log("end"); 