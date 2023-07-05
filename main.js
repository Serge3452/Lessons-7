 //ДЗ Урок-7
// Решил поумничать. но не удается получить числа из формы.
// Прошу помощи.
// Через +promt эта задача решается легко
// Да и текущий скрипт нужно переписать
// Но отстаю от лекция, прошу простить на первый раз :))

 

let sum = document.querySelector(".slogenie")
function one () {
    let a = +(document.querySelector (".numbera"));
    let b = +(document.querySelector (".numberb"));
    let c = a+b
    document.querySelector(".exit").innerHTML= c;
}
sum.onclick = one

let vuc = document.querySelector(".vuchet")
function two () {
    let a = +(document.querySelector (".numbera"));
    let b = +(document.querySelector (".numberb"));
    let c = a-b
    document.querySelector(".exit").innerHTML= c;
}
vuc.onclick = two

let umn = document.querySelector(".umnoj")
function three () {
    let a = +(document.querySelector (".numbera"));
    let b = +(document.querySelector (".numberb"));
    let c = a*b
    document.querySelector(".exit").innerHTML= (c);
}
umn.onclick = umn

let del = document.querySelector(".delenie")
function four () {
    let a = +(document.querySelector (".numbera"));
    let b = +(document.querySelector (".numberb"));
    let c = a/b
    document.querySelector(".exit").innerHTML= (c);
}
del.onclick = four


//Урок - 7

//  // ключевое слово название тело функции
// function one () {
//     console.log(123);
//     }

//     one ()

//  let fun = document.querySelector (".check");
//  function one() {
//     console.log(1234567890);
//  }
//  fun.onclick = one;

// let a = 8
// let b = 9
// function multi() {
//     console.log(a*b);
//     return a*b;
// }
// let c = multi()*2;
// console.log(c);



// function mlt2 (x,y,t) {
//     return x+y+t;
// }
// console.log(mlt2("Я"," учу"," скпипты"));

// function mlt3 (x,y) {
//     return   `Герой ${y}, а злодей ${x}` ;
// }
// console.log(mlt3("Джокер"," Бетмен"));

// let funy = document.querySelector (".check");
// funy.onclick = function(){
//     console.log(321);
// }
 
// Стрелочная
// let funa = document.querySelector (".check");
//   funa.onclick = ()=> {
//          console.log(123);
// }
// let b = ()=>{
//     console.log(456);
// };
// b();

