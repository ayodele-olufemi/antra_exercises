// WEB 2.0 | AJAX | SPA
// JavaScript | Ecamscript | Nodejs
// JavaScript = ES + WebAPI
// ES = syntax standard
// Node = ES + NodeAPI

// console.log('Hello');
// // let body = document.querySelector('body');
// // console.log(body);
// console.log(global);

// primative type
// console.log(typeof 'abc');
// console.log(typeof true);
// console.log(typeof null);
// console.log(typeof undefined);
// console.log(typeof 6);
// console.log(typeof Symbol());
// console.log('abc'.length);

// let a = 5;
// b = a;
// b = 6;
// console.log(a, b);

// let b = 6;

// function foo(input) {
//   console.log(input); //6
//   input = 8;
//   console.log(input); //8
// }

// foo(b);
// console.log(b); // 6

// Object type

// let a = {};
// let b = Object.create({});
// let c = new Object();
// class D {
//   constructor() {}
// }
// d = new D();
// console.log(d);

// let a = { name: 'patrick' };
// let b = a;
// b = { name: 'changed' };
// console.log(a, b);
// let a = { name: 'patrick' };
// let b = a;
// const test = 'name';
// b[test] = 'changed';
// console.log(a, b);

// let a = { name: 'patrick' };

// function foo(input) {
//   console.log(input); //{name:'patrick'}
//   input.name = 'CHANGED'; // mutate
//   console.log(input); //{name:'changed'}
// }

// foo(a);
// console.log(a); //{name:'changed'}

// function foo(input) {
//   console.log(input); //{name:'patrick'}
//   input = { name: 'CHANGED' };
//   console.log(input); //{name:'changed'}
// }

// foo(a);
// console.log(a); //{name:'patrick'}

// let a = {};
// a.name = 'patrick';
// console.log(a);

// let b = 'abc';
// b.name = 'patrick';
// console.log(b);

// 'use strict';
// a = 5;
// console.log(a);

// == vs === | coercion
// console.log(5 == true);
// console.log(5 + '5');
// console.log(5 - '5');

// const a = { name: 'patrick' };
// const b = { name: 'patrick' };
// console.log(a === b);
// console.log(a == b);

// let const var
// var vs let
// undefined vs not defined

// function foo() {
//   if (true) {
//     console.log(a);
//     let a = 5;
//     console.log(a); //5
//   }
//   console.log(a);
// }
// foo();
// //console.log(a);

// const obj = {};

// // obj.name = 'patrick';
// obj = {};

// var a; // a = undefined
// a = 5;

// console.log(foo);

// //function foo() {}
// var foo = function () {};
