// console.log("hello!");
// prompt("hehehehhe");
// a = 5;
// b = 6;
// console.log(a + b);

// c = parseInt(prompt("give num 1"));
// d = parseInt(prompt("give num 2"));
// console.log(c + d);
// alert("nee loosu ");    
// let x = (b - a) * 2;
// x++;
// alert(x);

// const num1 = 5;
// const num2 = 6;
// let sum = num1 + num2;
// let sub = num2 - num1;

// alert("Sum is : " + sum + " and sub is : " + sub);

// let carname;
// alert(typeof(carname));

//  var carName = "Volvo";
//  alert(typeof(carName));
//  alert(carName);
//  var carName;
//  alert(typeof(carName));
//  alert(carName);

//  let $help;


//  const cars = ['audi', 'bmw'];
//  alert(cars);
//  alert(cars[0]);
//  cars.push('lambo');
//  alert(cars);

//  /* can do same in const and var, why? then 
//  i can use var itself right instead of const for array? */

//  var car = ['audi', 'bmw'];
//  alert(car);
//  alert(car[0]);
//  car.push('lambo');
//  alert(car);

//  const cary = {name: "audi", tyre: 6, like:"no"}
//  console.log(cary);

//  function adds (a, b){
//      return a+b
//  }

//  alert(adds(3,3));


//  const car = new Object();    

//  car.Name = "BMW";
//  car.Type = 6;
//  car.Color = "red";

//  const car = {
//      Name : "BMW",
//      Type : 6,
//      Color :"red",
//      carfunc : function(){
//         return this.Name + " " + this.Color;
//      }
//  };

//  alert(car.carfunc());
//  console.log("enejhe");

//  document.getElementsByClassName('submi')[0].onclick = function(){
//      alert("clicked");
//  }   

//  let text = "hehehhehheeh";
//  let length = text.length;
//   alert(length);
//   alert(text.indexOf("h"));
//   alert(text.lastIndexOf("h"));
//   alert(text.search("h"));
//   alert(text.slice(1, 3));
//   alert(text.substring(1, 3));
//   alert(text.replace("h", "z"));
//   alert(text.toUpperCase());
//   alert(text.toLowerCase());
//   alert(text.charAt(2));
//   alert(text.charCodeAt(2));
//   alert(text[2]);
//  let slicer = text.slice(0, 3);
//  let substrn = text.substring(0, 3);
//  let subst = text.substr(0, 6);
//  console.log(slicer, substrn, subst);

//  let pad = text.padStart(5, " ");
//  let pad1 = text.padStart(10, " ");
//  let pad2 = text.padStart(15, " ");
//  let pad3 = text.padStart(20, " ");
//  let pad4 = text.padStart(25, " ");
//  console.log(pad);
//  console.log(pad1);
//  console.log(pad2);
//  console.log(pad3);
//  console.log(pad4);

//  let dummy = "Hello you're an idiot!"
//  let newdum = dummy.replace("idiot", "genius");
//  console.log(dummy);
//  console.log("sorry!", newdum);

//  let text1 = "Hello";
//  let repe = text1.repeat(3);
//  console.log(repe);

//  let com = text.concat(" ", text1);
//  console.log(com);

//  console.log(text[4]);

//  let index = text.indexOf("h");
//  let lastindex = text.lastIndexOf("h");
//  console.log(index, lastindex);

//  let search = text.search("h");
//  console.log(search);
//  let loc = text.indexOf("h", 2);
//  console.log(loc);

//  let match = text.match(/h/gi);
//  console.log(match);
//  let match1 = text.match(/h/g);
//  console.log(match1);
//  let match2 = text.match(/h/i);
//  console.log(match2);
//  let macth3 = text.match(/h/);
//  console.log(macth3);


//  let input = prompt("Enter something") === null ? "Input was null" : "Input received";



// let num = parseInt(prompt("Enter a number"));

// if (num > 0) {
//     console.log("Number is positive");
// }

// else if (num < 0) {
//     console.log("Number is negative");
// }

// else {
//     console.log("Number is zero");
// }


let a = 5;
let b = 6;
let c = 5;


if ( a + b > c && a + c > b && b + c > a) {
    console.log("Triangle is possible");
}
    
else {
    console.log("Triangle is not possible");
}

if (a == b > c || a == c > b || b == c > a) {
    console.log("Triangle is isosceles");
}
    
else if (a == b == c) {
    console.log("Triangle is equilateral");
}
    
else {
    console.log("Triangle is scalene");
}


let a1 = 6;
let b1 = 6;
let c1 = 6;


if ( a + b > c && a + c > b && b + c > a) {
    console.log("Triangle is possible");
}
    
else {
    console.log("Triangle is not possible");
}
console.log("heheheh");

if ((a == b && b != c) || (a == c && a != b) || (b == c && b != a)) {
    console.log("Triangle is isosceles");
} else if (a == b && b == c) {
    console.log("Triangle is equilateral");
}
else {
    console.log("Triangle is scalene");
}


n = 5;

for (i=0; i<n; i++) {
    console.log(i);
}