/**
 * Created by chris_000 on 16/07/2016.
 */

var Person = function(firstAndLast) {

    this.getFirstName = function(){
        console.log(firstAndLast.split(" ")[0]);
        return firstAndLast.split(" ")[0];

    };

    this.getLastName = function(){
        return firstAndLast.split(" ")[1];
    };

    this.getFullName = function(){
        console.log(firstAndLast);
        return firstAndLast;
    };

    this.setFirstName = function(first){
        var newName = firstAndLast.split(" ");
        newName[0] = first;
        firstAndLast = newName.join(" ");
    };

    this.setLastName = function(last){
        var newName = firstAndLast.split(" ");
        newName[1] = last;
        firstAndLast = newName.join(" ");
    };

    this.setFullName = function(name){
        firstAndLast = name;
    };
};

var bob = new Person('Bob Ross');


