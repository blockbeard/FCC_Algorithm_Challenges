/**
 * Created by chris_000 on 14/07/2016.
 */

function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    var avgAlt = 378632.553;
    //formula
    T = Math.round((2*Math.PI)*Math.sqrt((Math.pow(earthRadius + avgAlt, 3)/GM)));
console.log(T);
    return arr;


}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
