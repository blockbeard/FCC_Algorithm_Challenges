/**
 * Created by chris_000 on 05/07/2016.
 */

function filterFunction(element, index, arrray){
    return (element1 !== testElement);
}

function sym(args) {
var mergedArray = [],
    testElement;
    for (var i = 0; i < arguments.length; i++){
    mergedArray = mergedArray.concat(arguments[i]);
    }

    for (var n = 0; n < mergedArray.length; n++){
        testElement = mergedArray[n];
        console.log("test element = " + testElement);
        console.log("n = " + n +" lastIndexOf = " + mergedArray.lastIndexOf(testElement));

        if (mergedArray.lastIndexOf(testElement) !== n){
            console.log("if triggered");
         mergedArray.filter(filterFunction(element, index, array));
        }

    }

    console.log(mergedArray);
    return args;
}

sym([1, 2, 3], [5, 2, 1, 4], [2, 3, 7]);
