console.log('Hello world'); 
//variable //
let name='natnael';
console.log(name);


let firstName = 'natnael';
let lastName = 'garomsa';

console.log(firstName,lastName);

//constant//
const interestRate= 0.3;
console.log(interestRate);


//primitive type//

let namee= 'nati';//string literales
let age = 30; //number literales
let isApproved = true; //boolean literales
let firstNamee = undefined;//
let selectedcolorr = null;

console.log(isApproved);


//reference type object

let person={
    name: 'nati',
    age: 22
};
console.log(person);

//Arrays//

let selectedcolor = ['red', 'green']
selectedcolor [2]= 'blue';
console.log(selectedcolor);

//function


function greet(name, lastName) {
    console.log('hello' + ' ' + name +' '  + lastName)
};
greet('nati', 'garomsa');



//arthimetic operator


let x =10;
let y = 5;

console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);
console.log(x%y);
console.log(x**y);

// increment 
console.log(x++)
console.log(++x)
//decrement

console.log(--x)
console.log(x--)

//comparison 

let = 1;
//relational 
console.log(x>0);
console.log(x<=1);
console.log(x<1);

// equlity 
console.log(x === 0);
console.log(x !== 0);

// ternary

let point=90;
let type = point > 100 ? 'blue' : 'red';

console.log(type);

//bitwise or 
console.log(1 | 2); 
console.log(1 & 2); 


const readpermission = 4;
const writepermission = 2;
const executepermisson= 0;

let mypermission =0;
mypermission = mypermission | readpermission | writepermission;
console.log(mypermission);

let message = (mypermission | readpermission) ? "yes" : "no";
console.log(message);



//control flow if-else

let hour = 23;

if(hour >=6 && hour >12){
    console.log('good morning')
}
else if(hour >=12 && hour >18){
    console.log('good afternoon')
}
else{
    console.log('good evening')
}