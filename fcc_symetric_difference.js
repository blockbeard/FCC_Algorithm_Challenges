/**
 * Created by chris_000 on 05/07/2016.
 */


function sym(args) {
    function symetric(value, index, arr) {
        return arr.indexOf(value) === arr.lastIndexOf(value);
    }
    function highlander(value, index, arr){
        return index == arr.indexOf(value);
    }


    var mergedArray = [],
        filteredArray = [],
        tempArr;
    for (var i = 0; i < arguments.length; i++) {
        tempArr = arguments[i].filter(highlander);
        mergedArray = mergedArray.concat(tempArr);
        filteredArray = mergedArray.filter(symetric);
        mergedArray = filteredArray;
        mergedArray.sort();
        console.log("i = " + i + " mergedArray = " + mergedArray);
        filteredArray = mergedArray.filter(symetric);
        mergedArray = filteredArray;

    }

    mergedArray.sort();
    console.log(mergedArray);


    return mergedArray;

}

sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);
