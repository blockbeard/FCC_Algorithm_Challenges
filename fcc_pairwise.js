/**
 * Created by chris_000 on 16/07/2016.
 */

function pairwise(arr, arg) {
    var resultArr = [],
        result = 0;

    for (var i = 0; i < arr.length -1; i++){
        for (var j = i+1; j < arr.length; j++){
            if (resultArr.indexOf(i) === -1 && resultArr.indexOf(j) === -1 && (arr[i] + arr[j] === arg)){
           resultArr.push(i, j);
                result += i + j;
            }
        }

    }
    console.log(resultArr);
    console.log(result);
    return result;
}

pairwise([0, 0, 0, 0, 1, 1], 1);

