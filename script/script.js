//harc1,krnam call,apply,bind ov 2 object poxancem 
// var obj1 = {
//     name:'Valodik',
//     age:25,
// };

// var obj2 = {
//     name:'Ashotik',
//     age:27
// };

// var concat = function () {
//     var arr = [];
//     for(var key in this){
//         arr.push(  this.name + this.age );
//     }
//     return arr;
// }
// console.log( concat.call(obj1) );




//Harc 2,chem haskacel 
// var obj = {};
// Object.defineProperty(obj,'name',{
//     value:'Anushko', ????
//     writable: false, ????
//     enumerable: false,   ????
//     configurable: false  ????
// })
// Object.defineProperty(obj, 'age', { value: 25 });

// let arr = [5, 3, 8, 2];
// let a = 1;
// let b = 7;
// var x = [];

// for(let i = 0; i < arr.length; i++) {
//     if( arr[i] > a && arr[i] < b ) {
//         x =  x.concat(arr[i])   
//     };
// }
// console.log(x);


// let str = "Hello";

// // делает то же самое, что и
// // for (let char of str) alert(char);

// let iterator = str[Symbol.iterator]();
// let result = iterator.next();

//  qnnutyan test er
// console.time('test');
// function add(param1, param2) {
//     if(Number.isInteger(param1) && Number.isInteger(param2)){
//         if((-1000 <= param1 && param1 <= 1000) && (-1000 <= param2 && param2 <= 1000)){            
//             return param1 + param2
//         };
//         console.log('amboxj en bayc diapazoni mej chen');
//     };
//     console.log('amboxj chen');
// };
// console.log(add(-999,2));
// console.timeEnd('test');



// function readNumber() {
    
//     do{
//         var num = prompt('Enter number','');       
//     } while( !isFinite(num) )
    
//     if( num === null || num === '') return null;
    
//     return console.log(+num);
// }
// console.log( `Number:${readNumber()}`);


// let str = '';

// for (let i = 0; i <= 220; i++) {
//   str += String.fromCodePoint(i);
// }
// console.log(str);

// let values = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];


// function uniq(arr) {
//     let uniqMap = new Set();
//     for(let val of arr) {
//         uniqMap.add(val)
//     };
//     return Array.from(uniqMap)
// };

// console.log(uniq(values));

// function logiq(n) {
//     let count = 0;
//     let int = n;
//     let lastNum;
//     let copyN = n;
//     let zuyg = 0;
//     while(int > 0){
//         int = parseInt(int/10);
//         count++;
//     };
//     let copyCount = count;
//     while(count > 0) {
//         lastNum = copyN % 10;
//         copyN = parseInt(n / 10);
//         if(lastNum % 2 === 1) {
//             console.log(`${n} is false`);
//             break
//         }
//         zuyg =zuyg + 1;
//         count--;
//     };
//     if(copyCount === zuyg) console.log(`${n} is true`);
// }
// console.log(logiq(1222));


// function bringNum(num) {
//     if(num % 10 !== 0) {
//         const lastNum = Math.round(((num/10)%1)*10);
//         let count = -1;
//         let x = 1;
//         let y = num;
//         while(y > 0){
//             y = parseInt(y/10);
//             count++;
//         };
//         while(count > 0) {
//             x *= 10
//             count--
//         }
//         num = parseInt(num/10);//36
//         num = (lastNum * x) + num
//         return num
//     }else return num
// }

// bringNum(325)


//25468>>>>254-6-8
//gorcnakan xndir
// function creatString(num) {
//     let output = '';
//     while(num) {
//         let lastDigit = num % 10;
//         num = parseInt(num / 10);
//         if(num % 2 === 0 && lastDigit % 2 === 0 && num > 0) {
//             output = '-' + lastDigit + output;
//         }else {
//             output = lastDigit + output
//         }
//     }
//     return output;
// }

//kisat
// function f(a,b,step) {
//     let arr = [];
//     let result;
//     while(a <= b) {
//         arr.push(result)
//     }
//     return arr
// }
//ira lucacne
// function f(a,b,step) {
//     let result = [];
//     for(let i = a; i <= b; i += step) {
//         result.push(i)
//     }
//     return result;
// }

//gtnel mec tiv??????????????????
// let arr = [1,10,5,60];

// function max(arr) {
//     let max;
//     arr.find((a,b) => {
//         return max = a - b 
//     })
// }

//homework 2
// '_, we have_ a .'>>>>>[“Houston”, “problem”]
//
// function changeSymb(str,arr) {
//     let j = 0;
//     str = str.split('');
//     for(let i = 0; i < arr.length; i++) {
//         let indxSymb = str.indexOf('_');
//         if(str[indxSymb] === '_') {
//             str[indxSymb] = arr[j];
//             j++
//         }
//     }
//     return console.log(str.join(''));
// }

// let string = 'May the _ _ _ _';
// let array = ['Force', 'be', 'with', 'you'];

// changeSymb(string,array);

//--------------------------------------------------------
//Homework 2>2
// let arr = [null, null, 1, undefined, 5, 9, false];
   
// function get_all_number(arr) {
//     let newArr = [];
//     let zuyg = [];
//     let kent = [];
//     arr.forEach(element => {
//         if( typeof(element) === 'number') {
//             newArr.push(element)
//         }
//     });
//     for(let i = 0; i < newArr.length; i++) {
//         if(newArr[i] % 2 === 0) {
//            zuyg = zuyg.concat( newArr.slice(i,i + 1) );
//         }else{
//             kent = kent.concat( newArr.slice(i,i + 1));
//         }
//     }
//     return kent.concat(zuyg);
// }

// get_all_number(arr)
//-----------------------------------------------------------
//Մտածել նան նալ անդեֆինիդի մասին
// let arr = ['10', 'hi',NaN,null,undefined]

// function f(arr) {
//     let countNum = 0;
//     let countStr = 0;
//     for(let elem of arr) {
//         (typeof elem === 'number' && typeof elem !== NaN) ? countNum++: countStr++
//     }
//     return `Numbers: ${countNum}, Strings: ${countStr}`
// }

// f(arr)
//-------------------------------------------------------------
//
// let arr = [3, 7, 12, 5, 20, 0];

// function f(arr) {
//     let newArr = [];
//     arr.forEach((elem,indx,arr) => {
//         if( indx < arr.length - 1) newArr.push(elem * arr[indx + 1])
//     });
//     return newArr
// }

// f(arr)
//---------------------------------------------------------------
//5)
// let arr = ['anymore', 'raven', 'me', 'communicate'];

// function sumLength(arr) {
//     let min = arr[0].length;
//     let max = min;
//     let result;
//     for(let i = 0; i < arr.length; i++) {          
//         if(arr[i].length >= max) {
//             max = arr[i].length;
//         }
//         if(arr[i].length <= min){
//             min = arr[i].length
//         }
//     };    
//     return result = max + min 
// }

// sumLength(arr)
//------------------------------------------------------------------
//6
// function checkExam(a,b,c) {
//     let average = (a + b + c) / 3;
//     if(c !== undefined && average >= 50){
//         if(a < 40) {
//             a = 0
//         };
//         if(b < 40) {
//             b = 0
//         };
//         if(c < 40) {
//             c = 0
//         };
//         if(a,b === 0 || b,c === 0 || a,c === 0) {
//             console.log('Student Not Passed')  
//         }else console.log('Student Passed')
//     }else console.log('Student Not Passed');      
// }
//--------------------------------------------------------------------
//7)

// s=a*h/2 s=a*b
//"triangle, 6, 7"
// function calcArea() {
//     let str = prompt("enter with the following sample 'triangle', 6, 7 or 'rectangle' 8, 5");
//     let arr = str.split(',');
//     let figure = arr[0];
//     let numArr = [];

//     for(let key of arr) {
//         key = +key;
//         if(!isNaN(key) && (key > 0) ){
//             numArr.push(key)
//         }
//         if(key <= 0) {
//            return console.log('Please enter only positives');
//         };
//     };

//     if(figure === 'triangle'){
//         return console.log(`Square of the ${figure} is ${( numArr[0] * numArr[1] ) / 2}`);
//     }else {
//         return console.log(`Square of the ${figure} is ${ numArr[0] * numArr[1] }`);        
//     }
// }

// calcArea()

//---------------------------------------------------------------------
//lesson
// function f (str) {
//     let arr = [];
//     for(let key of str) {
//         arr.push(key)
//     };
//     for(let i = 0; i < str.length; i += 3) {
//         if(arr[i + 2] !== undefined) {
//             let temp = arr[i];
//             arr[i] = arr[i + 2];
//             arr[i + 2] = temp
//         };
//     };
//     return arr.join('');
// };
// f('abcdeftrl')
//-----------------------------------------------------------
// function foo (str) {
//     let res = '';
//     for (let i = 0; i < str.length;i += 3){
//       const revers = str.slice(i,i+3);
//       if(revers.length === 3) {
//         res += revers[2] + revers[1] + revers[0];
//       } else {
//         res += revers;
//       }
//     }
//     return res;
//   }
//   console.log(foo('abcdefg'));
//------------------------------------------------------------
// function f(arr) {
//     let sum = 0;
//     let countZeros = 0;
//     for(let key of arr){
//         if(key === 1){
//             sum += countZeros;
//         } else {
//             countZeros++;
//         }
//     }
//     return sum;
// }

// f([1,0,0,1,1,0,1])
//-------------------------------------------------------------
//Homework 3
//1)
//(n-1) + (n-2)
// function fibo(n) {
//     let arr = [];
//     if(n === 0 || n === 1) {
//         for(let i = 0; i < n; i++){
//             arr.push(i);
//         }
//         return arr.join(',')
//     }else{
//         for(let i = 0; i <= n; i++) {
//             if(i === 0 || i === 1){
//                 arr.push(i)
//             }else {
//                 arr.push(arr[i -1] + arr[i -2])
//             }   
//         }
//     }    
//     return arr.join(',')
// }
// console.log(
// fibo(3)
// );
//------------------------------------------------------------
//3)

//[1, 10, 2, 9, 2, 3, 9, 4]

// function f(arr) {
//     let max = arr[0];
//     let min = arr[0];
    
//     for(let key of arr) {
//         if(max <= key){
//             max = key
//         };
//         if(min >= key){
//             min = key
//         };
//     };
    
//     const diff = max - min;

//     // for(let key of arr) {
//     //     if(diff === key) return true
//     // };
//     return arr.includes(diff)
//     //return false
// }
// console.log(
//     f([1,8,7,14,8,15])
// );
//------------------------------------------------------
//2) վերանայել NUMBER-ներով
//1233

// function f(n) {
//     let arr = [];
//     let sum = 0;
//     let digit = 1;
    
//     if(n < 0) {
//         n = Math.abs(n);
//         arr = String(n).split('')
//     }else arr = String(n).split('');

//     for(let key of arr) {
//         sum += +key
//         digit *= key
//     };

//     if(n === 0) return console.log(`Cannot calculate.`);
//     if(digit % sum === 0 && digit % sum === -0) return console.log(`Quotient is ${digit / sum}`);
    
//     return console.log(`Remainder is ${digit % sum}`);

// };

// console.log(
//     f(-455)
// );
//-----------------------------------------------------------------------
//4)
//[23,  -98, 0, -456, 12, 8]

// function findSecMax(arr) {
//     let max = arr[0];
//     let secMax = arr[0];
//     let secIndx = 0;
//     let firstIndex = 0;
//     arr.forEach((elem,indx) => {
//         if(max <= elem){
//             max = elem;
//             firstIndex = indx
//         };
//     });
//     arr.forEach((elem,indx) => {
//         if(elem !== max) {
//             if(secMax <= elem){
//                 secMax = elem;
//                 secIndx = indx
//         }
//         }else{
            
//         };
//     });
//     return secIndx;
// };
// console.log(
// findSecMax([60, 2, 43,55, -18, 5, -19, 36, 7, 56])
// );
//----------------------------------------------------------
//uxxvac tarberak

// function findSecMax(array) {
//     let copyArr = [];
//     let secMax;
//     let secIndx;
//     array.forEach(element => {
//         copyArr.push(element)
//     });
//     copyArr = copyArr.sort((a,b) => a - b);
//     secMax = copyArr[copyArr.length - 2];

//     if(array.length < 2) {
//         console.log('Array is not second element');
//     };
    
//     array.forEach((elem,indx) => {
//         if(elem === secMax) {
//             secIndx = indx
//         }
//     });
//     return secIndx
// };
// console.log(
//     findSecMax([60,54])
// );
//----------------------------------------------------------------

//[1, 2, 3, 4,]
//5)
// function f(arr,padAmount,repeat) {
//     if(padAmount <= arr.length && padAmount !== 0) {
//         let firstElem = arr.slice(0,padAmount);
//         let lastElem = arr.slice((arr.length - padAmount),arr.length)
//         for(let i = 0; i < repeat; i++) {
//             arr = firstElem.concat(arr);
//             arr = arr.concat(lastElem)
//         };
//     }else {
//        return console.log('Invalid padding amount');
//     };
//     return arr
// };
// console.log(
// f([1,2,3,4],3,2)
// );
//---------------------------------------------------------------------
//6)
// 1 - 1/3 + 1/5 - 1/7 + 1/9 + ….. + (-1k)* 1/n 

// function f(n) {
//     let result = 0;
//     let count = 0
//     for(let i = 1; i <= n; i += 2) {
//         if(count % 2 === 0) {
//             result = result + 1 / i;
//             count++
//         }else{
//             result -= 1 / i;
//             count++
//         }
//     };
//     return result 
// }
// console.log(
// f(9)
// );

//----------------------------------------------------------------------
//7)
//[[3, 4, 5], [1, 0, 0], [4, 5, 4], [8, 8, -1]]

// function f(arr) {
//     let result = [];
//     for(let key of arr) {
//         let sum = 0;
//         for(let prop of key) {
//             sum += prop
//         };
//         result = result.concat(sum)
//     }
//     return result
// };
// console.log(
// f([[3, 4, 5], [1, 0, 0], [4, 5, 4], [8, 8, -1]])
// );
//-----------------------------------------------------------------
//'dfgjkloyp'
//8)
// function f(str) {
//     let result = '';
//     for(let i = 0; i < str.length; i += 3) {
//         let revers = str.slice(i,i + 3);
//         if(revers.length === 3) {
//             result = result + revers[1] + revers[2] + revers[0]
//         }else{
//             result += revers
//         }
//     }
//     return result
// }
// console.log(f('dfgjkloyp'));
//---------------------------------------------------------------------------
//Lesson 11.08.2020

// function f(n){
//     let current = 1;
//     let result = [current];
//     for(let i = 2; i <= n; i++){
//         current = current * 10 + i;
//         result.push(current);
//     }
// }

//-----------------------------------------------------
// function f(n){
//     let current = 1;
//     let result = [current];
//     for(let i = 2; i <= n; i++){
//         current = current * 10 + i;
//         result.push(current);
//     }
//     let resultClone = [].concat(result);
//     resultClone.pop();
//     result = result.concat(resultClone.reverse());
//     return result;
// }

//----------------------------------------------------------------

//erankyuni
// 1
// 12
// 123
// 1234
// 123
// 12
// 1
// stringov lucum

// function erankyuni(n) {
//     let arr = [];
//     let temp = '';   
//     for(let i = 1; i <= n; i++) {
//         temp += i;
//         arr.push(+temp);
//         console.log(arr[i - 1]);
//     };
//     arr.reverse();
//     for(let i = arr.length - 1; i > 0; i--) {
//         console.log(arr[arr.length - i]);
//     }
// };

// console.log(
//     erankyuni(4)
// );

//---------------------------------------------------------------

//aranc stringi tsar tverov
// function erankyuni(n) {
//     let arr = [];
//     let temp = 0;   
    
//     for(let i = 1; i <= n; i++) {
//         arr.push(temp = temp * 10 + i);
//     };
    
//     let cloneArr = [].concat(arr).reverse();
//     cloneArr.shift();
//     arr = arr.concat(cloneArr);

//     for(let key of arr) {
//         console.log(key);;   
//     }
// };

// console.log(
//     erankyuni(5)
// );

//------------------------------------------------------------------
//Lesson 16.08.20

// let arr = [1,1,1,2,3,2];
// let count = 1

// let obj = arr.reduce((corrent,item) => {
//     if(corrent.hasOwnProperty(item)) {
//         count++
//         corrent[item] = count;
//     }else {
//         corrent[item] = count;
//         count = 1
//     }
//     return corrent
// },{})

//iranc tarberak@

// let arr = [1,1,1,2,3,2];

// function f(arr) {
//     const obj = {};
//     for(let key of arr) {
//         if(!obj.hasOwnProperty(key)){
//             obj[key] = 1;
//         } else {
//             obj[key]++;
//         }
//     };
//     for(let prop in obj){
//         console.log(`${prop}: ${obj[prop] / arr.length}`);
//     }
// }
//-----------------------------------------------------------------------

// let arr = [[1,3,5],[5,8,3],[1,9,1]]
// function f(arr) {
//     let output = [];
//     for(let elem of arr) {
//         const sum = elem.reduce((corrent,item) => {
//            return corrent + item 
//         });
//         output = output.concat(sum)
//     }
//     return output
// }; 
// f(arr)
//------------------------------------------------------------------------
//HomeWork-4
//2)

// function f(arr) {
//     let output = [];
//     arr.forEach(item => output[item] = item);
//     for(let i = 0; i < output.length; i++) {
//         if(Math.sign(output[i]) === -1) {
//             console.log(`the ${output} is negativ`);
//             break
//         };
//         if(output[i] === undefined) {
//             output[i] = undefined
//         };
//     };
//     return output
// };
// console.log(
//     f([5, 15, 19, 2])
// );

//--------------------------------------------------------------------------
/*
function f(arr) {
    let newArr = [];
    arr.sort((a,b) => a - b);
    for(let i = 0; i <arr.length; i++){
        if(newArr.length === arr[i]) {
            newArr.push(arr[i])
        }
        else {
            for(let j = 0; j < arr[i]-1; j++){
                newArr.push(undefined);
            }
            newArr.push(arr[i]);
        }
    }
    return newArr
}

console.log(f([4, 3, 0, 9,]))
*/
//------------------------------------------------------------------------
/*function f(arr) {
    let newArr = [];
    arr.sort((a,b) => a - b);
    if(arr[0] !== 0) {
        newArr.push(arr[0]);
        for(let i = 1; i < arr.length; i++) {
            if(newArr.length === arr[i]) {
                newArr.push(arr[i])
            }else {
                for (let j = newArr.length - 1; j < arr[i] - 1; j++) {
                    newArr.push(undefined)
                }
                newArr.push(arr[i]);
            }
        }
    }else {
        for(let i = 0; i < arr.length; i++) {
            if(newArr.length === arr[i]) {
                newArr.push(arr[i])
            }else {
                for (let j = newArr.length - 1; j < arr[i] - 1; j++) {
                    newArr.push(undefined)
                }
                newArr.push(arr[i]);
            }
        }
    }
    return newArr
}

console.log(
    f([4, 3, 0, 9,])
)*/
//------------------------------------------------------------------------
// 3)

// function isEmpty(obj) {
//     for(let prop in obj) {
//         if(obj.hasOwnProperty(prop)) {
//             return false
//         };
//     };
//     return true
// };

// console.log(
//     isEmpty({name: 'name'})
// );

//-----------------------------------------------------------------------
//Kisat e
//1)

// function f() {
//     let str1;
//     let str2;
    
//     //scissors mkrat
//     //paper tuxt
//     //rock qar

//     do{
//         str1 = prompt('Pleas input Rock,Paper or Scissors');
//         str2 = prompt('Pleas input Rock,Paper or Scissors')
//     }while((str1 !== 'rock' && str1 !== 'paper' && str1 !== 'scissors') || str2 !== 'rock' && str2 !== 'paper' && str2 !== 'scissors')

//     if(str1) {

//     }
// };

// f()

//--------------------------------------------------------------------

// 4)

// function f(obj) {
//    let ages = Object.values(obj).reduce((corrent,item) => corrent + item);
//    return ages
// };

// console.log(
//     f({
//         Aram: 20,
//         Samvel : 15
//     })
// );

//-------------------------------------------------------------------
// 5)


// function f(obj) {
//     for(let prop in obj) {
//         if(typeof(obj[prop]) === 'number') {
//             obj[prop] *= 2
//         }
//     }
//     return obj
// };

// console.log(
//     f(
//         {
//             age: 10,
//             lastName: 10,
//             salery : 1500,
//             name: 'Aram'
//         }
//     )
// );

//---------------------------------------------------------------------
// 7)
// shat vat em grel)))zuygeri hamar miqich normal e,kenteri depqum shoxulic ggni)))))))))
// function f(number) {
//     let symb = '*'
//     let space = ' ';
//     let arr = ['*'];
//     let output = [];
//     let j = 0;
//     let length = 0
//     for(let i = 0; i < number; i++) {
//         while(j < number) {
//             arr.push(space);
//             j++
//         };
//     };
//     arr.push(symb);
//     number = arr.length / 2;
    
//     for(let i = 0; i < number - 1; i++) {
//         let temp = [];
//         if(i === 0) {
//             output.push(temp.concat(arr))
//         };
//         if(i === number - 1) {
//             console.log([' ',' ',' ',' ',' ',' ']);
//         }
//         arr.splice(i,1);
//         arr.splice(i * (-1) - 1,1);
//         arr.splice(i + 1,0,symb);
//         arr.splice(i * (-1) - 1,0,symb);
//         temp = temp.concat(arr);
//         output.push(temp)
//     };
    
//     for(let key of output) {
//         console.log(key.join(''));
//     };
//     //----hakarak patkern e stanum
//     output = output.reverse()
//     for(let key of output) {
//         console.log(key.join(''));
//     };
// };

// f(4)

//------------------------------------------------------------

//------------------------------------------------------------
//Lesson 18.08.20

// let arr = ['11','22','33','44','55'];

// arr[Symbol.iterator] = function() {
//     let i = -2;
//     this.next = function () {
//         if(i < this.length - 1){
//             return {
//                 value: this[i += 2],
//                 done: false
//             }
//         }else {
//             return {
//                 done: true
//             };
//         };
//     };
//     return this
// };

// for(let key of arr) {
//     console.log(key)
// }

//------------------------------------------------------------
//Lesson 20.08.20
//im gracs tarberakn e

// let obj = {
//     name: "Robert",
//     age: 33
// };

// obj[Symbol.iterator] = function() {
//     let arr = Object.keys(obj);
//     let i = 0;
//     this.next = function () {
//         if(i < arr.length) {
//             return {
//                 value: this[arr[i++]],
//                 done: false
//             }
//         }else {
//             return {
//                 done:true
//             }
//         }
//     }
//     return this
// }

// for(let key of obj) {
//     console.log(key);
// }


// let iterator = obj[Symbol.iterator]

//ira grac tarberakn e

// function makeIterable(obj){
//     obj[Symbol.iterator] = function(){
//         let values = Object.values(this);
//         return {
//             values,
//             index: 0,
//             next(){
//                 if(this.index < this.values.length){
//                     return {
//                         value: this.values[this.index++],
//                         done: false
//                     }
//                 }
//                 return {
//                     done: true
//                 }
//             }
//         }
//     }
//     return this;
// };
// makeIterable(obj)

// for(let key of obj) {
//     console.log(key);
// }
//----------------------------------------------------------
//23.08.20
//annnasun grac xndir

// function f(arr,elem) {
//     arr.forEach((item,indx) => {
//         if(item === elem) {
//             arr.splice(indx,1)
//         }else if(!arr.includes(elem)) {
//             arr.push(elem)
//         }
//     });
//     return arr
// }

//------------------------------------------------
//qnnutyunic heto nste normal grel em)))))))))))))))

// function reverse(arr) {
//     for(let i = 0; i < arr.length / 2; i++) {
//         let temp = arr[arr.length- i - 1];
//         arr[arr.length - i - 1] = arr[i]
//         arr[i] = temp;
//     }
//     return arr
// }
// console.log(
//     reverse([1,2,3,4])
// );

//-----------------------------------------------------

//porcenq return enenq this,next@ arandzin grenq
// function makeIterable(obj) {
//     obj[Symbol.iterator] = function() {
//         let values = Object.values(this);
//         return {
//             values,
//             index: 0,
//             next(){
//                 if(this.index < this.values.length) {
//                     return {
//                         value: this.values[this.index++],
//                         done: false
//                     }
//                 }
//                 return {
//                     done: true
//                 }
//             }
//         }
//     }
//     return obj;
// }

// let obj = {
//     name: 'Armen',
//     age: 25,

// };
// makeIterable(obj);

// for(let key of obj) {
//     console.log(key);
// }


// let obj = {
//     age1: 10,
//     age2: 20,
//     age3: 30
// };

// obj = Object.fromEntries(Object.entries(obj).map(([key,value]) => [key,value * 2]));
//----------------------------------------------------------------------------------------------
//chinga chunqi xndir
// function correctValue(str){
//     return str==="Rock"||str==="Scissors"||str==="Paper";
// }

// function game() {
//     let player1,player2;
//     while(true) {
//        player1 = prompt("player 1 your turn");
//         while(!correctValue(player1)) {
//             player1 = prompt("Enter right value player 1");
//         }
//         player2 = prompt("player 2 your turn");
//         while(!correctValue(player2)) {
//             player2 = prompt("Enter right value player 2")
//         }
//         if(((player1 == 'Scissors' ) && (player2 == 'Paper' )) || ( player1 == 'Rock' && player2 == 'Scissors' ) || ( player1 == 'Paper' && player2 == 'Rock' )) {
//             alert("Wins Player1")
//             break;
//         }
//         else if(((player2 == 'Scissors' ) && (player1 == 'Paper' )) || ( player2 == 'Rock' && player1 == 'Scissors' ) || ( player2 == 'Paper' && player1 == 'Rock' )) {
//             alert("Wins Player2")
//             break;
//         }
//         else {
//             alert(" Draw Try Again");
//             continue;
//         }
//     }
// }

// game();

//--------------------------------------------------------------------------------------------
//chinga-chunq


// function chingachunq() {
//     let x1,x2;
//     let check = function () {
//         do{
//             x1 = prompt('x1։qar,mkrat,tuxt')
//             if(x1 !== 'qar' && x1 !== 'tuxt' && x1 !== 'mkrat' && x1 !== null) {
//                 alert('invalid value')
//             }else break    
//         }while(x1 !== 'qar' && x1 !== 'tuxt' && x1 !== 'mkrat');
        
//         do{
//             x2 = prompt('x2։qar,mkrat,tuxt');
//             if(x2 !== 'qar' && x2 !== 'tuxt' && x2 !== 'mkrat' && x2 !== null) {
//                 alert('invalid value')
//             }else break
//         }while(x2 !== 'qar' && x2 !== 'tuxt' && x2 !== 'mkrat');

//     }();
    
//     if(x1 === 'qar' && x2 === 'qar' || x1 === 'mkrat' && x2 === 'mkrat' || x1 === 'tuxt' && x2 === 'tuxt') {
//         alert('Nichya');
//         chingachunq()
//     }else if(x1 === 'qar' && x2 === 'mkrat' || x1 === 'mkrat' && x2 === 'tuxt' || x1 === 'tuxt' && x2 === 'qar') {
//         alert(`Haxtec ${x1}`);
//     }else if(x1 === 'qar' && x2 === 'tuxt' || x1 === 'mkrat' && x2 === 'qar' || x1 === 'tuxt' && x2 === 'mkrat') {
//         alert(`Haxtec ${x2}`);
//     }

// }

// chingachunq()

//-------------------------------------------------------------------------------------------------
//Lesson 29.08.20 REKURSIAAAAAAAAA

// function fibo(n) {
//     if(n === 0 || n === 1) {
//         return n
//     };
//     return fibo(n-1) + fibo(n - 2)
// }

// function f(n) {
//     let sum = 0;
//     let prev = 1;
//     let temp = 0;
//     if(n === 0 || n === 1) {
//         return n 
//     };
//     for(let i = 2; i <= n; i++) {
//         sum = temp  + prev;
//         prev = sum;
//         temp = sum
//     };
//     return sum
// }   
// f(4)
//---------------------------------------------------------------
//faktorial loop-ov && rekursiayov

// function factorial(num) {
//     let result = 0;
//     for(let i = num; i > 0; i--) {
//         result += i
//     };
//     return result
// };

// function faktorial(num) {
//     if(num === 0){
//         return 0
//     };
//     return num + faktorial(num - 1)
// }

//-------------------------------------------------------------
//[1,2,3,4,5]
// function f(arr) {
//     if(arr.length === 0) {
//         return 1
//     };
//     return arr.pop() * f(arr)
// };
// console.log(f([1,2,3,4,5]));    

//rekursia
// function f(arr) {
//     let result = 0;
//     for(let key of arr) {
//         result += key
//     }
//     return result
// }
//-------------------------------------------------------------
// 123
// 12
// 1
// (3 * 100) + (2 * 10) + (1 * 1)
//haazzziv luceci ))))))))))))) bayc sxal e,rekursian bdi aranc loop exni
// function reverse(num) {
//     let copyNum = num
//     let mnacord = num % 10;
//     let count = 1;
//     while(parseInt(copyNum = copyNum / 10) !== 0){
//         count *= 10
//     }
//     num = parseInt(num / 10)
//     if(num === 0) {
//         return mnacord 
//     }
//     return 1 * count * mnacord + reverse(num)
// }

// console.log(
//     reverse(123456666)
// );
//-------------------------------------------------------------------
//Homework 5
// 1)
// function f(num) {
//     if(num % 2 === 0 && num !==0){
//         return false
//     }else if(num === 0) {
//         return true
//     }
//     return f(parseInt(num / 10))
// }

// console.log(
//     f(0)
// );
//-----------------------------------------------------------------
//2)
//[56, -9, 87, -23, 0, -105, 55, 1]
//Loop-ov tarberak
// function fl(arr) {
//     let min = arr[0];    
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] * -1 <= arr[i] && arr[i] <= min) {
//             min = arr[i]
//         }
//     }
//     console.log(min);
// }
// fl([56, -9, 87, -23, 0, -105, 55, 1])

//ayl tarberak,metothenerov
// let arr = [45, -9, 15, 5, -78];
// function f(arr) {
//     let min = arr.filter(item => item >= 0).sort((a,b) => a - b)[0];
//     return min
// };
// console.log(
//     f([56, -9, 87, -23, 20, -105, 55, 10])
// );

//rekursiv tarberak
// function f(arr,i = 0,min = arr[i]) {
//     if(arr[i] >= 0) {
//         if(arr[i] <= min) {
//             min = arr[i]
//         }
//         if(min < 0) {
//             min = arr[i]
//         }
//     }
//     if(i === arr.length && min < 0) {
//         return -1
//     }
//     if(i == arr.length) return min
//     return f(arr,++i,min)
// }
// console.log(
//     f([-9, -1, -87, -3, -10, -105, -55, -1])
// );


//--------------------------------------------------------------------------------
//3)
//Loop-ov tarberak
//[-9, -4, -4, 3, 12, 4, 5]

// function f(arr) {
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] > arr[i + 1]) {
//             return arr[i]
//         }
//     }
// }

//rekursiv tarberak

// function f(arr,i = 0,item = -1) {
//     if(i === arr.length) {
//         return item
//     }
    
//     if(arr[i] > arr[i + 1]) {
//         return item = arr[i]
//     }
//     return f(arr,++i,item)
// }
// f([-9, -4, -4, 3, 12, 4, 5])
//rekursiv tarberak arrow Function-ov
// function findIndx(arr,i = 0,item = -1) {
//     if(i === arr.length) {
//         return item
//     };
//     return arr[i] > arr[i + 1]? item  = i + 1: findIndx(arr,++i,item);
// };

// console.log(
//     findIndx([-9, -4, -4, 3, 12, 4, 5])
// );
//--------------------------------------------------------------------------------
//4)
//[6, 78, 'n', 0, 1]
//bdi poxem dzev@

// function removeFirstElem(arr,i = 0) {
//     if(i === arr.length - 1) {
//         arr.length = arr.length - 1;
//         return arr
//     }else if(arr.length <= 1) {
//         return arr
//     }else {
//         arr[i] = arr[i +1];
//         removeFirstElem(arr,++i)
//     }
//     return arr
// };
// console.log(
//     removeFirstElem([1,2])
// );

//--------------------------------------------------------------------------------
//5)
//['a','b','c','d','f']
//kisat e,miusi depq@ grac che
// function f(arr,num,i = 0,j = 0) {
//     if(num > 0) {
//         if(j < num) {
//             if(i < arr.length - 1) {
//                 let temp = arr[i];
//                 arr[i] = arr[i + 1];
//                 arr[i + 1] = temp;
//             }else {
//                 j++;
//                 i = -1
//             }
//         }else {
//             return arr
//         } 
//         if(num > 0) return f(arr,num,i+1,j);
//     }
//     //minusi depq@ 
//                 if(num < 0) {
//                     return fminus(arr,num,i = arr.length - 1,j = 0,);
//                     function fminus(arr,num,i,j) {
//                         if(j > num){
//                             if(i > 0) {
//                                 let temp = arr[i];
//                                 arr[i] = arr[i - 1];
//                                 arr[i - 1] = temp;
//                             }else{
//                                 j--;
//                                 i = arr.length
//                             }
//                         }else{
//                             return arr
//                         }
//                         return fminus(arr,num,--i,j);   
//                     }
//                 }
// };
// console.log(['a','b','c','d','f']);
// console.log(
//     f(['a','b','c','d','f'],-2)
// );
//--------------------------------------------------------------------------------
//Lesssons 01.09.20
//'abcddcba' > true   

// function f(str) {
//     let first = str.substr(0,str.length / 2);
//     let last = str.slice(str.length / 2);
//     let reversed = '';
//     if(first !== last) {
//         let length = last.length;
//         for(let i = 0; i < length; i ++) {
//             reversed += last.slice(-1);//d
//             last = last.slice(0,last.length - 1)
//         }   
//     }
//     first === reversed? true: false 
// }
// console.log(
//     f('abcdabcd')        
// );
//--------------------------------------------------------------------------------
//Lesson 03.09.20
//[1,[2,4[1,2]],10]

// function flattenArray(arr){
//     if(!Array.isArray(arr)){
//         return arr;
//     }
//     let result = [];
//     for(let key of arr){
//         result = result.concat(flattenArray(key));
//     }
//     return result;
// }

// function flattenArray(arr){
//     let result = [];
//     for(let key of arr){
//         if(Array.isArray(key)){
//             result = result.concat(flattenArray(key));
//         } else {
//             result = result.concat(key);
//         }
//     }
//     return result;
// }

//---------------------------------------------------------------------------------
//06.09.20
//'ar','ge,dsfar,asd'

//kisat e
// function f(sub,string,count = 0) {
//     let indx = string.lastIndexOf(sub)
//     if(sub === string[indx] + string[indx + 1]) {
//         count++
//     }
//     if(indx === -1) {
//         return count
//     }
    
//     return f(sub,string.substr(0,indx),count)
// };
// console.log(
//     f('bbb','bbb')
// );

// function f(obj) {
//     while(obj.next !== null) {
//         obj = obj.next
//     };
//     if(obj.next === null){
//         obj.value = 5;
//         obj.next = null;
//     }
//     return obj 
// };

// console.log(
//     f({
//         value: 1,
//         next: {
//           value: 2,
//           next: {
//             value: 3,
//             next: {
//               value: 4,
//               next: null
//             }
//           }
//         }
//       })
// );
//-------------------------------------------------------------------
//Homework-6
//1)

// function deepCopy(obj) {
//     if(typeof obj !== 'object') {
//         return obj
//     };
    
//     if(!obj) {
//         return obj
//     };
    
//     let clone = Array.isArray(obj)? []: {};

//     for(let prop in obj) {
//         if(obj.hasOwnProperty(prop)) {
//             clone[prop] = deepCopy(obj[prop]);
//         }
//     }
//     return clone
// }

// let a = { a: '1', b: null, c: [1,2,4,'asdf'] };
// let b = deepCopy(a);
//----------------------------------------------------------------------
//2)



//----------------------------------------------------------------------
//Lesson 12.09.20
//terutyun ka

// function merge(leftArr,rightArr) {
//     let result = [];
//     let leftIndex = 0, righIndex = 0;

//     while(leftIndex < leftArr.lenght && righIndex < rightArr.lenght) {
//         if(leftArr[leftIndex] > rightArr[rightArr]) {
//             result.push(rightArr[righIndex]);
//             righIndex++
//         }else {
//             result.push(leftArr[leftIndex])
//             righIndex++;
//         }
//     }
//     if(leftIndex === leftArr.lenght) {
//         result = result.concat(rightArr.slice(righIndex))
//     }else {
//         result = result.concat(leftArr.slice(leftIndex))
//     }
//     return result
// };


// function merge(leftArr, rightArr){
//     let result = [];
//     let leftIndex = 0, rightIndex = 0;
//     while(leftIndex < leftArr.length && rightIndex < rightArr.length){
//         if(leftArr[leftIndex] > rightArr[rightIndex]){
//             result.push(rightArr[rightIndex]);
//             rightIndex++;
//         } else {
//             result.push(leftArr[leftIndex]);
//             leftIndex++;
//         }
//     }
//     return result.concat(rightArr.slice(rightIndex), leftArr.slice(leftIndex))
// };

// function mergeSort(arr){
//     if(arr.length === 1){
//          return arr;
//     }
//     let middle = Math.floor(arr.length / 2);
//     let leftArr = arr.slice(0, middle);
//     let rightArr = arr.slice(middle);
//     return merge(mergeSort(leftArr), mergeSort(rightArr))
// }

//----------------------------------------------------------------------------------
//Todo list

/*
function Click_btn() {

    let valueInput = document.getElementsByClassName('input_type')[0].value;
    let createElemLi = document.createElement('li');
        //createElemLi.innerHTML = valueInput;
        createElemLi.className = 'li';
    let label = document.createElement("label");

    let checkbox = document.createElement("input");
        checkbox.type = 'checkbox';
        checkbox.checked = false;

    document.getElementsByClassName('ul_list')[0].append(createElemLi);
    let lenghtLi = document.getElementsByTagName("li")["length"];
    let liId = createElemLi.id = 'li' + lenghtLi;
        label.htmlFor = 'label_id' + lenghtLi;
    let labelId = label.id = 'label_id' + lenghtLi;
        checkbox.id = 'label_id' + lenghtLi;
    let checkboxId = 'label_id' + lenghtLi;

    let removeBtn = document.createElement('span');
        removeBtn.className = 'removeBtn';
        removeBtn.innerHTML = 'Delete';

    document.getElementsByClassName('li')[lenghtLi - 1].append(label);
    document.getElementsByClassName('li')[lenghtLi - 1].append(removeBtn);
    label.innerHTML = valueInput;

    document.getElementsByTagName("li")[lenghtLi - 1].append(checkbox);
    document.getElementsByClassName("input_type")[0].value = '';

    checkbox.addEventListener('click',function () {
        if(checkbox.checked === true) {
            let checkboxid = document.getElementById('label_id' + lenghtLi);
            checkboxid.style.textDecoration = 'line-through';
            console.log(checkboxid)
        }

        if(checkbox.checked === false){
            checkboxid = document.getElementById('label_id' + lenghtLi);
            checkboxid.style.textDecoration = 'none';
        }
    });

    removeBtn.addEventListener('click',function () {
        document.getElementById(liId).remove()
    })

}*/

//--------------------------------------------------------------------------------

