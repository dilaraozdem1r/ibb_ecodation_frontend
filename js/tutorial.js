//JS 1995 yılında Brandan Eich tarafından geliştirilmiştir.
// Cross Platform
//OOP uygun


//single comment

/* multi line comment */

// console.log("loglama");
// console.info("info");
// console.warn("warn");
// console.error("error");
// alert("pop-up bilgilendirme-1")
// window.alert("pop-up bilgilendirme-2")
// document.writeln("ekranda yazdırma");


//Variable
var result="JS öğreniyorum";
console.log(typeof result + "=>"+result);


var result=4423;
console.log(typeof result + "=>"+result);

var result=4423.23;
console.log(typeof result + "=>"+result);

var result=true;
console.log(typeof result + "=>" + result);

//Naming Convensition
var deneme="JS Data";
console.log(deneme);

var deneme5="JS Data";
console.log(deneme5);

var $deneme5="JS Data";
console.log($deneme5);

var _$deneme5="JS Data";
console.log(_$deneme5);

//interpreter, compiler
//senkron , asenkron

//whoisting datası
result2=56;
var result2;

//Operators
// + - * ** / % 
// ! DEĞİL && VE || VEYA
//x++ 
//x--
//++x
//--x

// = ATAMA
// == EŞİT(türüne bakma)
// === EŞİT(türüne bak)

var number1=40;
var number2=5;

console.log(number1+number2);
console.log(number1-number2);
console.log(number1*number2);
console.log(number1/number2);
console.log(number1%number2);

//CAST => sayılar için Number() , string için String() , boolean için Boolean() 
var userData=Number(prompt("Lütfen sayı giriniz"));
console.log(userData++-45);


//undefined
//Nan 
//isNan
//Inifinity


var result4;
console.log(result4); //undefined

var result5=asdaf/4;
console.log(result5); //nan: not a number

var result6=10/0;
console.log(isNan(result6)); //isNaN  => false:sayıdır

console.log(4/0); //infinity


//Math
console.log(Math.PI);
console.log(Math.E);
console.log(Math.min(4,5,3,8,15,1,20));
console.log(Math.max(4,5,3,8,15,1,20));

console.log(Math.sqrt(16));
console.log(Math.pow(2,4));
console.log(Math.abs(-10));

console.log(Math.floor(3.9));
console.log(Math.ceil(3.1));
console.log(Math.round(6.4));
console.log(Math.round(6.5));

console.log(Math.sin(90));

console.log(Math.random());

//Number
var sayi=1500;
console.log(sayi);

var sayi2=1.5E+4; //15E+3
console.log(sayi2);

//binary, octal,decimak,hexadecimal 
var binary=0b1010;
console.log(binary);

var octal=0o1010;
console.log(octal);

var decimal=123456;
console.log(decimal);

var hexadecimal=0x1010;
console.log(hexadecimal);


//Cast
//Number cast ile parseInt cast arasındaki fark nedir ?
console.log(Number("3")+10);
console.log(parseInt("3")+10);

//string ile toString arasındaki fark ?
console.log(String(30)+10);
var number=30;
console.log(number.toString()+10);

//var, let, const
var data1=11;
console.log(data1);

var data1=22;
console.log(data1);

let data2=33;
data2=44;
console.log(data2);

const data3=55;
console.log(data3);



//String