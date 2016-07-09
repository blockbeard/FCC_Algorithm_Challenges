/**
 * Created by chris_000 on 07/07/2016.
 */
var permutations = [],
    filteredPermutations = [];

function doPerm(str, arr) {
    if (typeof (str) == 'string') str = str.split('');
    if (str.length == 0) permutations.push(arr.join(''));
    for (var i = 0; i < str.length; i++) {
        var x = str.splice(i, 1);
        arr.push(x);
        doPerm(str, arr);
        arr.pop();
        str.splice(i, 0, x);
    }

}

function killRepeats(permutations){
    filteredPermutations = permutations.filter(function(currentValue){
           return (!/(.)\1/.test(currentValue));
            });

    }


function permAlone(str) {
    doPerm(str, []);
    console.log(permutations.length);
    killRepeats(permutations);
    console.log(filteredPermutations.length);
    return filteredPermutations.length;



}
permAlone('aab');


