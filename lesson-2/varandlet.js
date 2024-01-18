//used to declare variables

//var is functional scoped and let is block scoped

function Comp(){
    var a ='Welcome to secondweek!';
    console.log(a);

    if(a == 'Welcome to secondweek!'){
        let b ='COMP1073';
        console.log(a +' '+b);
    }
    //console.log(a +' '+b);
}
Comp();


//let doesn't allow you to redeclare the variables

var c =10;
var c=20;
console.log(c);

// let d =10;
// let d=20

//Hoisting
console.log(x);
var x = 10;

console.log(y);
let y =10;
