/**
 * Created by chris_000 on 11/07/2016.
 */

function makeFriendlyDates(arr) {
    var start = new Date(arr[0]),
        finish = new Date(arr[1]),
        friendlyStart,
        friendlyEnd;

    //check if dates separated by less than 1 year
    function lessThanOneYear(){
        console.log("Less than 1 year = "+(finish.getMilliseconds()- start.getMilliseconds()) <= 31556952000);
    return ((finish.getMilliseconds()- start.getMilliseconds()) <= 31556952000);

    }
    //check if date falls in this year
    function currentYear(){
    }
    //check if dates are in the same month
    function sameMonth(){
    }
    //convert day into friendly
    function friendlyDay(){
    }
    //convert month into friendly
    function friendlyMonth(){
    }
    //make start date into friendly
    function makeFriendlyStart(){
    }
    //make end date into friendly
    function makeFriendlyEnd(){
    }
    lessThanOneYear();
    console.log(friendlyStart + ", " + friendlyEnd);
    return friendlyStart + ", " + friendlyEnd;

}

makeFriendlyDates(['2016-07-01', '2016-07-04']);

