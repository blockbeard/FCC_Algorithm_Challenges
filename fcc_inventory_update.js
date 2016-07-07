/**
 * Created by chris_000 on 06/07/2016.
 */

function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    // iterate through arr2
    for (var i = 0; i < arr2.length; i++){
        var present = false;

        // iterate through arr1
        for (var n = 0; n < arr1.length; n++){
            // if item is already in arr1
            if (arr1[n][1] === arr2[i][1]){
                // note presence
                present = true;
                // add to inventory
                arr1[n][0] = arr1[n][0] + arr2[i][0];
            }
        }
        // if not added to arr1 already
        if (!present){
            arr1.push(arr2[i]);
        }
    }
    // sort arr1 by alphabetical
    arr1.sort(function(a,b){
        var x = a[1].toLowerCase(),
            y = b[1].toLowerCase();
        if(x < y){
            return -1;
        }if(y < x){
            return 1;
        }if(x == y){
            return 0;
        }
    });
    console.log(arr1);
    return arr1;
}
updateInventory([[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]], [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]]);