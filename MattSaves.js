function multiplication_table(number) {
    for (var i=1; i <=10; i++) {
        console.log(i * number);
    }
}

multiplication_table(6);

function max(a,b) {
    if (a > b) {
        console.log(a);
    } else {
        console.log(b);
    }
}

max(6,9);

function new_max(a,b,c) {
    if (a > b && a > c) {
        console.log(a);
    } else if (b > a && b > c) {
        console.log(b);
    } else {
        console.log(c);
    }
}

new_max(6,10,8);

function isaVowel(letter) {
    var vowels = ['a','e','i','o','u'];
    var vowel = false;
    
    for (var i = 0; i < vowels.length; i++) {
        if (letter === vowels[i]) {
            vowel = true;
        }   
    }
    return vowel;
}

isaVowel("u");
isaVowel("b");

var oldArray = ['a','e','i','o'];
var newArray = [];

oldArray.push('u');

for (var i = 0; i < oldArray.length; i++) {
    newArray.unshift(oldArray[i]);
}

console.log(newArray);