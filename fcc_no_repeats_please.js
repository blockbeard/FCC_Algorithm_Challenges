/**
 * Created by chris_000 on 07/07/2016.
 */
var permutations = [];

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
    permutations = permutations.filter(function(str){
        var doubles = /(.)\1/;
            return (!doubles.test(str));
            });
    return permutations;
    }


function permAlone(str) {
    return killRepeats(doPerm(str, [])).length;


}

permAlone('aab');


