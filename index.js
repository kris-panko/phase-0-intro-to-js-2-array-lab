// Write your solution here!
var cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
    return cats;
 }

 function destructivelyPrependCat(name) {
    cats.unshift(name);
    return cats;
 }

 function destructivelyRemoveLastCat(name) {
    cats.pop(name);
    return cats;
 }

 function destructivelyRemoveFirstCat(name) {
    cats.shift(name);
    return cats;
 }
 
 function appendCat(name){
    var name_1= [...cats,name];
    return name_1;
  }

 
    function prependCat(name){
        var newArray = [...cats];
        newArray.unshift(name);
        return newArray;
    }

    function removeLastCat() {
        var newArray = [...cats];
        newArray.pop();
        return newArray;
    }

    function removeFirstCat() {
        var newArray=[...cats];
        newArray.shift();
        return newArray;
    }