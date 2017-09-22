function isaVowel(letter){
    vowels = ["a", "e", "i","o","u"];
    if(vowels.indexOf(letter)===-1){
        console.log(letter + "is not a vowel");
    }
    else{
        console.log(letter + "is a vowel");
    }
}
isaVowel("a");
isaVowel("b");

var oldArray ["a","e","i","o","u"];
var newArray[];

oldArray.push("u");
for(var i=0; i<oldArray.length;i++){
    newArray.unshift(oldArray[i]);
}

console.log(newArray)