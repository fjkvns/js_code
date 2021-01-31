let a = 17;
let b = 10;
let c;
c = a - b;
let d = 7;
let result = c-d;
console.log(result)

let str = "Hello world!";
console.log(str);

let str1 = "Hello, ";
let str2 = "world!";
let strings = str1 + str2;
console.log(strings)

let name = "Alexey";
strings = str1 + name;
console.log(strings)

let age = 15;
strings = "I am " + age + " years old";
console.log(strings);

/*let number = prompt("What number do you want to get a square of?");
number = number * number;
alert(number)*/

str = "abcde";
console.log(str[0], str[3], str[4]);

let num = 156;
let summ = 1;
for (let i = 0; i<num.length; i++){
        summ*=num[i];
}
console.log(summ)

a = 0;
b = 5;
if(a <= 1 && b>=3){
    console.log(a+b);
}
else{
    console.log(a-b)
}

a = 14;
b = 8;
if((a > 2 && a<11) || (b >=6 && b<14)){
    console.log("true")
}
else{
    console.log("false, dude")
}

num = '3';
switch (num){
    case '1':
        console.log('Summer');
    break;
    case '2':
        console.log('Fall');
    break;
    case '3':
        console.log('Winter');
    break;
    case '4':
        console.log('Spring');
    break;
    default:
        console.log('Please enter a number from 1 to 4');
    break;
}

//month = prompt('Enter a number between 1 and 12')
month = 2;
switch (month){
    case '1':
        console.log('Winter');
    break;
    case '2':
        console.log('Winter');
    break;
    case '3':
        console.log('Spring');
    break;
    case '4':
        console.log('Spring');
    break;
    case '5':
        console.log('Spring');
    break;
    case '6':
        console.log('Summer');
    break;
    case '7':
        console.log('Summer');
    break;
    case '8':
        console.log('Summer');
    break;
    case '9':
        console.log('Fall');
    break;
    case '10':
        console.log('Fall');
    break;
    case '11':
        console.log('Fall');
    break;
    case '12':
        console.log('Winter');
    break;
    default:
        console.log('Please enter a number from 1 to 12');
    break;
}

let string = "abcde";
if (string[0] === "a"){
    console.log("true");
}
else{console.log("false")}

//let strNum = prompt("Enter your ticket number");
let strNum = "111111";
let fPart = Number(strNum[0]) + Number(strNum[1]) + Number(strNum[2]);
let sPart = Number(strNum[3]) + Number(strNum[4]) +Number(strNum[5])
if(fPart === sPart){
    console.log('Your trolley ticket is lucky!')
}
else{
    console.log("Your trolley ticket isn't lucky")
}

let htmlInp = document.getElementsByTagName('input')
let button = document.getElementById('btn')
let parRes = document.getElementById('result')

button.addEventListener('click', function(event){
    event.preventDefault();
    parRes.innerText = parseInt(htmlInp[0].value) + 
    parseInt(htmlInp[1].value) +
     parseInt(htmlInp[2].value);
});