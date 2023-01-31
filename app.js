/* document.write("<h1>hello world</h1>")

//tipos de datos

"Hello world"   //string
'Hello world'

100000 // number
-2.3 // number

//boolean
true
false

//array
['joe','carlangas', 'tatis']
[1,2,3]
[true, false, true]

//object --> representacion abstracta 
'jos'
70.4
14
true

console.log({"username": "jose", "score": 70.40})

nameuser = "Martha"

console.log(nameuser)

*/
/*
//variables
var username = "jhon";
let lastname = "carter";

//var vs let

username = "pepe";



//constante

const PI = 3.1415;

//PI = 1000;

let casa = "monte"
casa = 55


console.log(casa + 9);

console.log(PI);*/

let numberoOne = 60;
let numberoTwo = 900;

let result = numberoOne + numberoTwo

console.log(result);

let name = "José"
let lastname2 = "Quenta"

let completeName = name + " " + lastname2
console.log(completeName);


let passwordDB = 'pepe1234';
let input = 'pepe123';

let result2 = input == passwordDB;
console.log(result2);

if (result2 === true){
    console.log('login correcto');
} else {
    console.log('login incorrecto');
}

let score = 70;
if (score > 30){
    console.log('You need to practice more');
} else if (score > 15){
    console.log('You are improving');
}
else{
    console.log('you need to follow this tutorial');
}

let typecard = 'Debit cardx';

switch (typecard) {
    case 'Debit card':
        console.log('This is a Debit card');
        break;
    case 'Credit card':
        console.log('This is a Credit card');
        break;

    default:
        console.log('No card');
        break;
}


let count = 0;

while (count <= 50) {
    console.log(count);
    count++;
}


let names = ['ryan', 'joe', 'john', 'mario'];

console.log(names.length);

for (let i = names.length - 1; i >= 0; i--){
    console.log(names[i]);
};


function greeting(namePerson) {
    console.log('hello' + " " +namePerson);
}

greeting('José');
greeting('Vero');