let numbe1 =""
let numbe2 =""
if (numbe1 > numbe2){
  console.log("maximumNumber")
}else{
  console.log("notMaximumNumber")
}




let number1 =""
 let number2 =""
  let number3 =""
if (number1 >number2 && number1 > number3){
  console.log("maximumNumber")
}else{
  console.log("notMaximumNumber")
}


let number =""
  if (number>=1){
    console.log("positive")
  }if (number==0){
   console.log("zero")
 }else{
    console.log("negative")
  }



let year ="2024"
  if (year%4==0){
 console.log("leap year")
  }else{
   console.log("not leap year")
  }
  

let character =""
if (character>="a" && character<="z"|| character>="A" && character<="Z"){
  console.log("not alphabet")
}else{
  console.log("is alphabet")
}


let char ="B"
if(char=="a"||char=="e"||char=="i"||char=="o"||char=="u"||char=="A"||char=="E"||char=="I"||char=="O"||char=="U"){
  console.log("vowel")
}else{
  console.log("consonant")
}


let basicSalary="30000"
if (basicSalary<=10000){
  console.log("grossSalary is" + " ", (basicSalary*1) + (basicSalary*0.2) + (basicSalary*0.8))
}else if(basicSalary>10000 && basicSalary<=20000){
 console.log("grossSalary is" + " ", (basicSalary*1) + (basicSalary*0.25) + (basicSalary*0.90))
}else if(basicSalary>20000){
console.log("grossSalary is" + " ", (basicSalary*1) + (basicSalary*0.3) +(basicSalary*0.95))
}



let unit="300"
if (unit<=50){
 console.log("your bill is" + "",(0.50*unit) + (0.50*unit)*0.2,"naira")
}else if(unit>50 && unit<=150){
  console.log("your bill is" + "",(0.75*unit) + (0.75*unit)*0.2,"naira")
}else if(unit>150 && unit<=250){
 console.log("your bill is" + "",(1.20*unit) + (1.20*unit)*0.2,"naira")
}else{
  console.log("your bill is" + "",(1.50*unit) + (1.50*unit)*0.2,"naira")
}

let currentYear="2024"
let employmentYear="2020"
let bonus="Rs 2500"
  if(currentYear-employmentYear>3){
  console.log(bonus)
  }else{
   console.log("not eligible")
  }

let alimAge="1"
let kelvinAge="3"
let zaynabAge="6"
if (alimAge<kelvinAge && alimAge<zaynabAge){
  console.log("alim is the youngest")
}else if(kelvinAge<alimAge && kelvinAge<zaynabAge){
  console.log("kelvin is the youngest")
}else if(zaynabAge<alimAge && zaynabAge<kelvinAge){
  console.log("zaynab is the youngest")
}



let days="37"
if (days<=5){
  console.log("fine is 50naira")
}else if(days=6 && days<=10){
 console.log("fine is 100naira")
}else if(days=11 && days<=30){
 console.log("fine is 500naira")
}else{
 console.log("membership cancelled")
}

let num1="4"
let num2="2"
let num3="1"
if (num1<num2 && num1<num3){
  console.log("num1 is the smallest")
}else if(num2<num1 && num2<num3){
  console.log("num2 is the smallest")
}else if(num3<num1 && num3<num2){
  console.log("num3 is the smallest")
}


let isWeekend="true"
let isHoliday="false"
if (isWeekend=="true" && isHoliday=="true"){
  console.log("Weekend holiday")
}else if(isWeekend=="false" && isHoliday=="false"){
  console.log("Regular weekend")
}else if(isWeekend=="false" && isHoliday=="true"){
  console.log("Weekday holiday")
}else if(isWeekend=="true" && isHoliday=="false"){
  console.log("Regular weekday")
}


let timeSpent="7"
let salary="500"
if (timeSpent>=10){
  console.log("you are eligible" + " ",(salary*0.5))
}else{
 console.log("not eligible")
}


let purchasedQuantity="9000"
if (purchasedQuantity>1000){
  console.log("you have a discount" +" " ,"of",(purchasedQuantity*0.1))
}else{
  console.log("proceed to payment")
}

let side1="1"
let side2="2"
let side3="3"
if (side1==side2 && side2==side3){
  console.log("equilateral triangle")
}else if(side1==side2 && side2!==side3){
  console.log("isosceles triangle")
}else{
  console.log("scalene triangle")
}


let buzzNumber="51"
if(buzzNumber%7==0){
 console.log("buzz")
}else{
 console.log("not buzz")
} 