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

myRocket(88888)
    .then(
        function (rkt) {
            console.log(rkt + "_rkt");
            return getCars(rkt);
        }
    )
    .then(cars =>{
        console.log(cars + "_cars");
        return getBike(cars)
    }
        )
    .then(bike => console.log(bike+"_bike"))

console.log("end"); 