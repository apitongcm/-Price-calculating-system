//OBJECTS AND FUNCTION 
// Object create 

let personProto = {
    calculateAge: function() {
        console.log( 2016- this.yearOfBirth);
    }
 };

 let john = Object.create(personProto); //2nd method
 john.name = "John movari";
 john.yearOfBirth =  1998;
 john.job = 'teacher';
 john.status = 'single';

 let carl = Object.create(personProto,  //3rd method to create object. 
{
    name:{value:'Carl Victor Manaloto'},
    yearOfBirth:{value:1997},
    job:{value:'engineer'}
});

//Primitives vs Objects 
// Example 

let a = 30; 
let b = a; 
a = 20; 

console.log(a); // result: >>>  a = 20
console.log(b); //result: >>> b = 30 
// overwrite the value of a. 

let obj1 = {
    item:'pencil',
    quantity:20, 
    price:10
};

let obj2 = obj1; 
obj1.price=20;

console.log(obj1.price); // result >>> obj1.price = 20 
console.log(obj2.price);  // result >>> obj1.price = 20 


//
let age = 65; 
let obj = {
    name:'Wil Aweson',
    city:'London',

};

function change(a,b){
    //primitive can only be access inside the function
    a= 50; //will not affect the result outside since it is a primitive.
    b.city = 'Philippines'; //will be printing Philippines instead of London since reference point will be pass outside.
}

change(age,obj);

console.log(age); // result: >>> 65
console.log(obj.city); // result >> Philippines

//FUNCTIONS 
//functions are also object in javascript 
//1- instance of Object type
// 2- behaves like any other object. 
//3 - store functions in a variable 
//4 - pass function as an argument to another function
//5 - return a function from a function 

//Passing functions as ARGUMENTS
let years = [ 1990, 1995, 1997, 1998, 2000, 2002, 2021]; //simple array 

function arrayCalc(arr, fn) { //generic function
    let arrRes = []; // this is where you store the push array. 
    for(let i =0; i < arr.length; i++) { //use for to push all the 7 elements inside the array. 
        arrRes.push(fn(arr[i]));
    }
    return arrRes; // return the new  array. 
}

function calculateAge(year) {
    return 2021 - year;  // you will return all the calculated ages inside the arrRes.

}

function isLegalAge(age){
    return age >= 18; // return a boolean if the elements(age)  inside your array will be greater than 18. 
}

function MaxHR(age){
    if (age >= 18 && age <= 81){
    return Math.round(206.9 - (0.67 * age));
    }else {
        return -1;
    }
}

let ages = arrayCalc(years, calculateAge); // assign ages to the arrayCalc function.
 console.log(ages);
 
let legalAge = arrayCalc(ages,isLegalAge); 
console.log(legalAge); 

let Hrate = arrayCalc(ages,MaxHR);
console.log(Hrate);

// MINI PROJECT

let retailPrice  = [10, 27, 50, 100, 800, 1500];

function pushArr (arr, fn) { 
    let price = [];
    for (let i = 0; i < retailPrice.length; i++){
        price.push(fn(arr[i]));
    }
    return price;
};

function addTax(Txprice){
    return Txprice + (Txprice * 0.12);
}

let newPrice = pushArr(retailPrice,addTax);
console.log(newPrice);

function Addprice(newPrice){
    let priceHike = (newPrice*0.2);
    return newPrice + priceHike;
}

let hikePrice = pushArr(newPrice,Addprice);
console.log(hikePrice);

function commision(newPrice){
    let sharePerItem = .13;
    return newPrice * sharePerItem;
}

let gainMoney = pushArr(newPrice,commision);
console.log(gainMoney);

let myMoney = gainMoney.reduce((a,b) => a + b, 0);
console.log(myMoney); //362.10720000000003 is all the money I get from selling those items.