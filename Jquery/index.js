// class MyQuery {
//   constructor(selector) {
//     /// select the element based on selector
//     this.elements = document.querySelectorAll(selector);
//     //this.test = document.getElementsByTagName('button');
//   }
//   html(htmlTmp) {
//     // set innerHTML to the selecotr element
//     this.elements.forEach((ele) => {
//       ele.innerHTML = htmlTmp;
//     });
//     return this;
//   }
//   on(eventType, cb) {
//     this.elements.forEach((ele) => {
//       ele.addEventListener(eventType, cb);
//     });
//     return this;
//   }
//   show() {
//     this.elements.forEach((ele) => {
//       //   console.log(ele.style.removeProperty);
//       //   ele.style.removeProperty('display');
//       ele.classList.remove('hide');
//     });
//     return this;
//   }
// }

// const $$ = function (selector) {
//   return new MyQuery(selector);
// };

// $$('button.continue')
//   .html('Next Step...')
//   .on('click', () => {
//     alert('next step');
//   });

// var hiddenBox = $$('#banner-message');
// $$('#button-container button').on('click', function (event) {
//   hiddenBox.show();
// });

//$('button.continue').html('Next Step...');
// const arr = [1, 2, 3];
// console.log(arr instanceof Array);
// $$.ajax = (obj) => {
//   const { url, success } = obj;
//   fetch(url)
//     .then((res) => {
//       return res.json();
//     })
//     .then((data) => {
//       success(data);
//     });
// };

// $$.ajax({
//   url: 'https://jsonplaceholder.typicode.com/todos/1',
//   success: function (result) {
//     console.log(result);
//   },
// });
