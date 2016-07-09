/**
 * Created by chris_000 on 07/07/2016.
 */

var permutations = [],
    filteredPermutations = [];

function permutationArr(num)
{
    var arr = (num + '').split('');

    function swap(a, b)
    {
        var tmp = arr[a];
        arr[a] = arr[b];
        arr[b] = tmp;
    }

    function generate(n) {
        if (n == 1) {
            permutations.push(arr.join());
        } else {
            for (var i = 0; i != n; ++i) {
                generate(n - 1);
                swap(n % 2 ? 0 : i, n - 1);
            }
        }
    }

    generate(arr.length);
   // return permutations;
}



function killRepeats(permutations){
    filteredPermutations = permutations.filter(function(currentValue){
           return (!/(.)\1/.test(currentValue));
            });

    }


function permAlone(str) {
    permutationArr(str);
    killRepeats(permutations);
    return filteredPermutations.length;


}
permAlone('aab');


