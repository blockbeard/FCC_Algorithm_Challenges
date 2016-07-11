/**
 * Created by chris_000 on 07/07/2016.
 */


function permAlone(str) {
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
                permutations.push(arr.join(""));
            } else {
                for (var i = 0; i != n; ++i) {
                    generate(n - 1);
                    swap(n % 2 ? 0 : i, n - 1);
                }
            }
        }

        generate(arr.length);
        console.log(permutations);
    }
    function duplicates(str){
        var dupes = new RegExp(/(.)\1/);
        return (!dupes.test(str));
    }

    function killRepeats(){
        filteredPermutations = permutations.filter(duplicates);
    }

    permutationArr(str);
    killRepeats();
    console.log(filteredPermutations);
    console.log(filteredPermutations.length);
    return filteredPermutations.length;


}
permAlone('aaabb');


