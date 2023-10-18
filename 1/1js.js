let a = 5; //number
let name = "Name";//string
let i = 0;//number
let double = 0.23;//number
let result = 1/0;//number infinity
let answer = true;//boolean
let no = null;//null не относится ни к одному из типов object
let b;

let sqare;
let sqareSideB = 5;
let sqareASide1 = 45;
let sqareASide2 = 21;

function sqareB(){
    sqare = (Math.trunc(sqareASide1/sqareSideB))*(Math.trunc(sqareASide2/sqareSideB));
    alert(`Квадратов B поместится ${sqare}`)
}
sqareB();

i = 2;
a = ++i;
b = i++;

if(a == b){
    alert("переменные а и б ровны");
}

if(a++ == ++b){
    alert("переменные а и б ровны");
}

function compareValues(value1, value2) {
    value1 == value2
      ? console.log(`Значения ${value1} и ${value2} равны.`)
      : console.log(`Значения ${value1} и ${value2} не равны.`);
  }
  
compareValues("Котик", "котик");
compareValues("Котик", "китик");
compareValues("Кот", "Котик");
compareValues("Привет", "Пока");
compareValues(73, "53");
compareValues(false, 0);
compareValues(54, true);
compareValues(123, false);
compareValues(true, "3");
compareValues(3, "5мм");
compareValues(8, "-2");
compareValues(34, "34");
compareValues(null, undefined);

let userName = prompt("Пожалуйста, введите ваше имя:");
userName = userName.toLocaleLowerCase();
if(userName != null){
    let parts = userName.split(" ");
    if(parts[0]=="марина" || parts[1]=="марина"){
        alert("Введённые данные верны");
    }
}

let russian = true;
let math = true;
let english = true;

if(russian && math && english){
    alert("Все экзамены сданы");
}

if(!russian && !math && !english){
    alert("Отчислен");
}

if((russian && math && !english)||(russian && !math && english)||(!russian && math && english)){
    alert("Пересдача по 1 предмету");
}

if((!russian && !math && english)||(!russian && math && !english)||(russian && !math && !english)){
    alert("Пересдача по 2 предметам");
}

let resultate;
console.log(resultate = true + true);
console.log(resultate = 0 + "5");
console.log(resultate = 5 + "мм");
console.log(resultate = 8/Infinity);
console.log(resultate = 9 * "\n9");
console.log(resultate = null - 1);  
console.log(resultate = "5" - 2);
console.log(resultate = "5px" - 3);
console.log(resultate = true - 3);
console.log(resultate = 7 || 0);

let IntString = [];

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    IntString[i] = i + 2;
  } else {
    IntString[i] = i + "мм";
  }
}

for (let i = 1; i <= 10; i++) {
  console.log(IntString[i]);
}


// let daysOfWeek = {1: "пн",2: "вт",3: "ср",4: "чт",5: "пт",6: "сб",7: "вс"};


// let userDayNumber = parseInt(prompt("Введите номер дня недели (от 1 до 7):"));

  
// if (!isNaN(userDayNumber) && userDayNumber >= 1 && userDayNumber <= 7) {
//     let dayName = daysOfWeek[userDayNumber];
//     alert(`День недели: ${dayName}`);
// }
// else {
//     alert("Некорректный ввод");
// }

let daysOfWeek = ["пн","вт","ср","чт","пт","сб","вс"];
  
let userDayNumber = parseInt(prompt("Введите номер дня недели (от 1 до 7):"));
  
if (!isNaN(userDayNumber) && userDayNumber >= 1 && userDayNumber <= 7) {
    let dayName = daysOfWeek[userDayNumber - 1];
    console.log(`День недели: ${dayName}`);
} 
else {
    console.log("Некорректный ввод");
}

let currentTime = new Date();

function Triangle(firstWord = "HI, ", secondWord = currentTime.getHours(),theirWord){
    theirWord =prompt("say your name"); 
    return firstWord+secondWord+theirWord;
}

alert(Triangle());


function params(a, b) {
    if (a === b) {
      return 4 * a;
    } 
    else {
      return a * b;
    }
}

// const params = function(a, b) {
//     if (a === b) {
//       return 4 * a;
//     } 
//     else {
//       return a * b;
//     }
// }

// const params = (a, b) => {
//     if (a === b) {
//       return 4 * a;
//     } else {
//       return a * b;
//     }
// }

console.log(params(7, 7));
console.log(params(3, 2 ));

  
  
  
  
