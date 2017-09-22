function multiplication_table(number){
    for(var i=0;i<=30;i++){
        console.log(i*number);
    }
}

function max(number1, number2){
    if(number1>number2){
        console.log(number1);
    }
    else{
        console.log("ARRRRRRIBAAAAA!!!");
    }
}
max (3, 7);

function new_max(a, b, c){
    if(a>b && a>c ){
        console.log("UNO");
    }
    else if(b>a && b>c){
        console.log("DOS");
    }
    else{
        console.log("TRES")
    }
}
new_max(10, 6, 3);