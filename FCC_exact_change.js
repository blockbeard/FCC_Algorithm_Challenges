function checkCashRegister(price, cash, cid) {
    var change = [],
        requiredChange = cash - price,
        totalChange = 0;

    for (i = 0; i < cid.length; i++) {
        totalChange += Math.round(cid[i][1] * 100) / 100;
    }
    totalChange = Math.round(totalChange * 100) / 100;

    if (requiredChange > totalChange) {
        return "Insufficient Funds";
    }
    else if (requiredChange == totalChange) {
        return "Closed";
    } else {
        for (i = cid.length - 1; i > -1; i--) {
            var denomination,
                currentDenominationRequired;
            switch (cid[i][0]) {
                case "ONE HUNDRED":
                    denomination = 100;
                    break;
                case "TWENTY":
                    denomination = 20;
                    break;
                case "TEN":
                    denomination = 10;
                    break;
                case "FIVE":
                    denomination = 5;
                    break;
                case "ONE":
                    denomination = 1;
                    break;
                case "QUARTER":
                    denomination = 0.25;
                    break;
                case "DIME":
                    denomination = 0.10;
                    break;
                case "NICKEL":
                    denomination = 0.05;
                    break;
                case "PENNY":
                    denomination = 0.01;
                    break;
            }
            currentDenominationRequired = parseInt(requiredChange / denomination);
            if (currentDenominationRequired === 0) {

            } else if (cid[i][1] === 0) {
            }
            else if (i === 0 && requiredChange > cid[i][1]) {
                return "Insufficient Funds";
            }
            else if (currentDenominationRequired * denomination > (cid[i][1])) {
                requiredChange = Math.round((requiredChange - cid[i][1]) * 100) / 100;
                change.push(cid[i]);
            } else if (currentDenominationRequired !== 0) {
                change.push([cid[i][0], denomination * currentDenominationRequired]);
                requiredChange = Math.round((requiredChange - (currentDenominationRequired * denomination)) * 100) / 100;

            }

        }
    }


    console.log("Required Change = " + requiredChange);
    console.log("Total Change = " + totalChange);
    console.log(change);
    return change;

}
// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]
checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
