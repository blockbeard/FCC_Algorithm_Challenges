/**
 * Created by chris_000 on 11/07/2016.
 */

function makeFriendlyDates(arr) {
    var start = new Date(arr[0]),
        finish = new Date(arr[1]),
        current = new Date(),
        friendlyStart,
        friendlyEnd;

    //check if dates separated by less than 1 year
    function lessThanOneYear(){
        console.log(finish.getTime() + " " + start.getTime());
    return ((finish.getTime()- start.getTime()) < 31536000000);

    }

    //check if date begins in this year
    function currentYear(){
        console.log("currentYear() = " + (current.getFullYear() === start.getFullYear()));
        return (current.getFullYear() === start.getFullYear());
    }
    //check if dates are in the same month
    function sameMonth() {
        console.log("sameMonth() = " + (start.getMonth() === finish.getMonth()  &&  start.getFullYear() === finish.getFullYear()));
        return (start.getMonth() === finish.getMonth()  &&  start.getFullYear() === finish.getFullYear());
    }
    //convert day into friendly
    function friendlyDay(date){
        var niceDay;
        switch(date.getDate()){
            case 1:
                niceDay = "1st";
                break;
            case 2:
                niceDay = "2nd";
                break;
            case 3:
                niceDay = "3rd";
                break;
            default:
                niceDay = date.getDate() + "th";
        }
        console.log("friendlyDay(date) = " + niceDay);
        return niceDay;
    }
    //convert month into friendly
    function friendlyMonth(date){
        var niceMonth;
        switch (date.getMonth()){
            case 0:
                niceMonth = "January";
                break;
            case 1:
                niceMonth = "February";
                break;
            case 2:
                niceMonth = "March";
                break;
            case 3:
                niceMonth = "April";
                break;
            case 4:
                niceMonth = "May";
                break;
            case 5:
                niceMonth = "June";
                break;
            case 6:
                niceMonth = "July";
                break;
            case 7:
                niceMonth = "August";
                break;
            case 8:
                niceMonth = "September";
                break;
            case 9:
                niceMonth = "October";
                break;
            case 10:
                niceMonth = "November";
                break;
            case 11:
                niceMonth = "December";
                break;
                        }
                        console.log("friendlyMonth(date) = " + niceMonth);
                        return niceMonth + " ";
    }
    //make start date into friendly
    function makeFriendlyStart(){
        if (currentYear() && lessThanOneYear()){
            friendlyStart = friendlyMonth(start) + friendlyDay(start);
        }else{
            friendlyStart = friendlyMonth(start) + friendlyDay(start) + ", " + start.getFullYear();
        }
        return friendlyStart;
    }
    //make end date into friendly
    function makeFriendlyEnd(){
        if (sameMonth()) {
            friendlyEnd = friendlyDay(finish);
        }else if (lessThanOneYear()){
            friendlyEnd = friendlyMonth(finish) + friendlyDay(finish);
        }else{
            friendlyEnd = friendlyMonth(finish) + friendlyDay(finish) + ", " + finish.getFullYear();
        }
        return friendlyEnd;
    }

    if ((start - finish) === 0){//this works but I don't understand why if(start == finish) doesn't
        console.log([makeFriendlyStart()]);
        console.log(start + " " + finish);
        return [makeFriendlyStart()];
    }else {
        console.log(start + " " + finish);
        console.log([makeFriendlyStart(), makeFriendlyEnd()]);
        return [makeFriendlyStart(), makeFriendlyEnd()];
    }
}

makeFriendlyDates(["2018-01-13", "2018-01-13"]);

