// // (function () {
// //   let counter = 0;
// //   const decrement = () => {
// //     counter--;
// //     updateCounter();
// //   };
// //   const increment = () => {
// //     counter++;
// //     updateCounter();
// //   };
// //   const updateCounter = () => {
// //     document.getElementById("counter").innerHTML = counter;
// //   };
// //   document.getElementById("increment").addEventListener("click", increment);
// //   document.getElementById("decrement").addEventListener("click", decrement);
// // })();
// // console.log(document.querySelector('h1'));
// // const a = document.childNodes[1];
// // console.log(a);

// // console.log(document.childNodes[1].childNodes.length);
// // console.log(document.querySelector('h1').nodeName);
// // console.log(document.querySelector('h1').nodeType);
// // console.log(document.querySelector('h1').innerText);
// // let img = document.getElementById('img');
// // let target = img.getAttribute('alt')
// // console.log(target);

// // const container = document.getElementById('container');
// // const para = document.getElementById('para');
// // const elm = document.createElement('h2');
// // elm.innerHTML = "Hello World!";
// // elm.style.color = 'Blue'

// // container.insertBefore(elm,para);
// // container.removeChild(elm);

// // console.log(window.location.hash);

// // function greetWorld() {
// //   try {
// //     var greeting = "Hello world!";
// //     alert(greeting);
// //   } catch (err) {
// //     alert(err);
// //   }
// // }

// // function checkPassword() {
// //   try {
// //     var pass = document.getElementById("f1").value;
// //     if (pass.length < 8) {
// //       throw "Please enter at least 8 characters.";
// //     }
// //     if (pass.indexOf(" ") !== -1) {
// //       throw "No spaces in the password, please.";
// //     }
// //     var numberSomewhere = false;
// //     for (var i = 0; i < pass.length; i++) {
// //       if (isNaN(pass(i, i + 1)) === false) {
// //         numberSomewhere = true;
// //         break;
// //       }
// //     }
// //     if (numberSomewhere === false) {
// //       throw "Include at least 1 number.";
// //     }
// //   } catch (err) {
// //     alert(err);
// //   }
// // }

// // Default Parameter
// // function sayHello(a="Hi"){
// //   console.log(a);
// // }
// // sayHello("Hello");

// // Rest Parameter
// // function sum(...numbers){
// //   let sum = 0;
// //   for(let i = 0; i<numbers.length; i++){
// //     sum += numbers[i];
// //     console.log(sum);
// //   }
// //   console.log(sum);
// // }
// // sum(2,4,7,7,12,44);

// // Spread Operator
// // let num1 = [1,2,3,4];
// // let num2 = [5,6,...num1, 7,8];
// // console.log(num2);

// // Closure
// // Lexical Scoping
// // function init() {
// //   var name = "Mozilla"; // name is a local variable created by init
// //   function displayName() {
// //     // displayName() is the inner function, that forms a closure
// //     console.log(name); // use variable declared in the parent function
// //   }
// //   displayName();
// // }
// // init();
// // function outer() {
// //   let counter = 0;
// //  return function inner() {
// //     counter++;
// //     console.log(counter);
// //   };
// // }
// // const increment = outer();
// // console.log(increment);
// // increment();

// // function outer(){
// //   let num = 1;
// //   function inner1(){
// //     let name = 4;
// //     console.log(num,name);
// //   }
// //   function inner2(){
// //     let num = 7;
// //     console.log(num);
// //     console.log(name);
// //   }
// //   inner1();
// //   inner2();
// //   console.log(name);
// //   console.log(num);
// // }
// // outer();
// // inner1();
// // inner2();

// function makeSizer(size) {
//   return function () {
//     document.body.style.fontSize = `${size}px`;
//   };
// }
// const size12 = makeSizer(12);
// const size14 = makeSizer(14);
// const size16 = makeSizer(16);
// document.getElementById("size-12").onclick = size12;
// document.getElementById("size-14").onclick = size14;
// document.getElementById("size-16").onclick = size16;
// let text = "sadaf shahab";
// let splittedText = text.split(" ");
// console.log(splittedText);

// let capitalizedWord = splittedText.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() );

// console.log(capitalizedWord);

// let titleCase = capitalizedWord.join(" ");
// console.log(titleCase);

// Iterators
// let arr1 = ["Apple", "Mango", "Banana"];
// let itr = arr1[Symbol.iterator]();
// itr.next();
// console.log(itr.next());
// itr.next();
// console.log(itr.next());

// let fruits = ["Apple", "Banana", "Orange","Pinapple"];

// let iterator = fruits[Symbol.iterator]();
// let result = iterator.next();

// while (!result.done) {
//   console.log(result.value); // Print the current value
//   result = iterator.next(); // Move to the next element
// }

// Generators
// Generate Function generates three
// different numbers in three calls
// function* fun() {
//     yield 10;
//     yield 20;
//     yield 30;
// }

// // Calling the Generate Function
// let gen = fun();
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);

// Generate Function generates an
// infinite series of Natural Numbers
// function *makeGenerator(){
//   console.log("Message 1");
//   yield  console.log("Message 8");
//   console.log("Message 2");
//   yield  console.log("Message 10");
//   yield  console.log("Message 14");
//   console.log("Message 5");
// }
// const gen = makeGenerator();
// gen.next();
// console.log("Message 30");
// gen.next();
// console.log("Message 61");
// gen.next();
// gen.next();
// console.log("Message 10");
// gen.next();

// Promise
// function prom(){
//     return new Promise(function(resolve,reject){
//         let num = 10;
//         if(num > 10){
//             console.log("Number is greater than 10.");
//             resolve("Successfull");
//         }
//         else{
//             console.log("Number is less than 10.");
//             reject("Rejected");
//         }
//     })
// }
// prom().then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error);
// })

// function orderPizza() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       if (Math.random() < 0.3) {
//         resolve("Pizza order ready");
//       } else {
//         reject("Pizza order failed");
//       }
//     }, 2000);
//   });
// }
// orderPizza();

// function waitCount(){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve();
//         },5000)
//     })
// }
// waitCount().then(() => {
//      for(let i = 1; i <= 5; i++){
//        setTimeout(() => {
//         console.log(i);
//        },i * 1000)
//      }
// })

// Fetch
// function getUser(){
//     let userName = prompt("Write username here..")
//     fetch(`https://api.github.com/${userName}`)
//     .then((response) => response.json())
//     .then((user) => {
//         console.log(user.followers); 
//     })
//     .catch((error) => {
//         console.log(error);     
//     })
// }
// getUser()
function getUser() {
    const username = prompt("Write username here..");
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((user) => {
             console.log(`${user.followers}`);        
      })
      .catch(() => {
        console.log("Error fetching data.");
      });
  }
  getUser()