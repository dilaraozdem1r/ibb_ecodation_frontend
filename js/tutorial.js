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
// var result = "JS öğreniyorum";
// console.log(typeof result + "=>" + result);

// var result = 4423;
// console.log(typeof result + "=>" + result);

// var result = 4423.23;
// console.log(typeof result + "=>" + result);

// var result = true;
// console.log(typeof result + "=>" + result);

// //Naming Convensition
// var deneme = "JS Data";
// console.log(deneme);

// var deneme5 = "JS Data";
// console.log(deneme5);

// var $deneme5 = "JS Data";
// console.log($deneme5);

// var _$deneme5 = "JS Data";
// console.log(_$deneme5);

// //interpreter, compiler
// //senkron , asenkron

// //whoisting datası
// result2 = 56;
// var result2;

// //Operators
// // + - * ** / %
// // ! DEĞİL && VE || VEYA
// //x++
// //x--
// //++x
// //--x

// // = ATAMA
// // == EŞİT(türüne bakma)
// // === EŞİT(türüne bak)

// var number1 = 40;
// var number2 = 5;

// console.log(number1 + number2);
// console.log(number1 - number2);
// console.log(number1 * number2);
// console.log(number1 / number2);
// console.log(number1 % number2);

// //CAST => sayılar için Number() , string için String() , boolean için Boolean()
// var userData = Number(prompt("Lütfen sayı giriniz"));
// console.log(userData++ - 45);

// //undefined
// //Nan
// //isNan
// //Inifinity

// var result4;
// console.log(result4); //undefined

// var result5 = asdaf / 4;
// console.log(result5); //nan: not a number

// var result6 = 10 / 0;
// console.log(isNan(result6)); //isNaN  => false:sayıdır

// console.log(4 / 0); //infinity

// //Math
// console.log(Math.PI);
// console.log(Math.E);
// console.log(Math.min(4, 5, 3, 8, 15, 1, 20));
// console.log(Math.max(4, 5, 3, 8, 15, 1, 20));

// console.log(Math.sqrt(16));
// console.log(Math.pow(2, 4));
// console.log(Math.abs(-10));

// console.log(Math.floor(3.9));
// console.log(Math.ceil(3.1));
// console.log(Math.round(6.4));
// console.log(Math.round(6.5));

// console.log(Math.sin(90));

// console.log(Math.random());

// //Number
// var sayi = 1500;
// console.log(sayi);

// var sayi2 = 1.5e4; //15E+3
// console.log(sayi2);

// //binary, octal,decimak,hexadecimal
// var binary = 0b1010;
// console.log(binary);

// var octal = 0o1010;
// console.log(octal);

// var decimal = 123456;
// console.log(decimal);

// var hexadecimal = 0x1010;
// console.log(hexadecimal);

// //Cast
// //Number cast ile parseInt cast arasındaki fark nedir ?
// console.log(Number("3") + 10);
// console.log(parseInt("3") + 10);

// //string ile toString arasındaki fark ?
// console.log(String(30) + 10);
// var number = 30;
// console.log(number.toString() + 10);

// //var, let, const
// var data1 = 11;
// console.log(data1);

// var data1 = 22;
// console.log(data1);

// let data2 = 33;
// data2 = 44;
// console.log(data2);

// const data3 = 55;
// console.log(data3);

// //String
// let str = " js öğreniyorum js";
// console.log(str);
// console.log(str.length);
// console.log(str.trim().length);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// console.log(str.charAt(1));
// console.log(str.indexOf("js"));
// console.log(str.lastIndexOf("js"));

// console.log(str.concat("sona"));
// console.log(str.replace(str, "değiştir"));

// console.log(str.substring(1));
// console.log(str.substring(1, 4));

// //function

// function returnsuzParametresiz() {
//   console.log("deneme1");
// }

// returnsuzParametresiz();

// function returnsuzParametreli(ad) {
//   console.log(ad);
// }

// returnsuzParametreli("mehmet");

// function returnliParametresiz() {
//   return "deneme2";
// }
// let result1 = returnliParametresiz();
// console.log(result1);

// function returnliParametreli(soyad) {
//   return "deneme3 " + soyad;
// }
// let result3 = returnliParametreli("ali");
// console.log(result3);

// //Normal Funciton
// function normalFunction() {}

// //Anoymous Function
// let anoymousFunction = function () {};

// //Arrow Function
// let arrowFunction = () => {};

// //Immedia Function ()() : amaç çağırmadan bu fonksiyonu çalıştırmak
// // (funciton(){
// //     console.log("deneme4");
// // })();

// // condition
// const condi1 = () => {
//   let number = 4;
//   if (number >= 2) {
//     console.log("büyüktür");
//   } else {
//     console.log("küçüktür");
//   }
// };

// const condi2 = () => {
//   let number = 4;
//   let result = number >= 2 ? "büyüktür" : "küçüktür";
//   console.log(result);
// };

// const condi3 = () => {
//   let number = 4;
//   console.log(number >= 2 ? "büyüktür" : "küçüktür");
// };

// const condi4 = () => {
//   let number = 4;
//   if (number == "1") {
//     console.log("1");
//   } else if (number == "2") {
//     console.log("2");
//   } else if (number == "3") {
//     console.log("3");
//   } else {
//     console.log("1< X <3 dışındadır");
//   }
// };

// const condi5 = () => {
//   let number = 4;
//   // break    : döngü kırmak
//   // continue : 1 kereye mahsus ess geç sonra döngüye devam et
//   // return   : metot kırmak
//   //switch 'in karmaşıklığı if-else'den daha fazladır.
//   switch (number) {
//     case 1:
//       console.log("1");
//       break;
//     case 2:
//       console.log("2");
//       break;
//     case 3:
//       console.log("3");
//       break;
//     case 4:
//       console.log("4");
//       break;
//     default:
//       console.log("1< X <4 dışındadır");
//       break;
//   }
// };
// condi5();

// let isOddEven = () => {
//   const num = 4;
//   if (num % 2 == 0) {
//     console.log("çift");
//   } else {
//     console.log("tek");
//   }
//   //    console.log(num%2==0 ?"cift" : "tek") ;
// };

// // loop,
// let loop = () => {
//   for (let i = 1; i <= 10; i++) {
//     document.write(i + " ");
//   }
// };
// loop();
// document.writeln("<br/>");

// let loop2 = () => {
//   let i = 1;
//   while (i <= 10) {
//     document.write(i + " ");
//   }
// };

// let loop3 = () => {
//   let i = 0;
//   do {
//     document.write(i + " ");
//     i++;
//   } while (i <= 10);
// };

// loop3();

// //try catch
// let tryCatchTuto = () => {
//   try {
//     alert("pop-up");
//   } catch (error) {
//     console.log("hata mesajı :" + error.message);
//   } finally {
//     console.log("db.close");
//   }
// };

// tryCatchTuto();

// //debug nedir ?
// //1 ile 10 dahil olmak üzereye toplama işlemini yapan algoritmayı yaz

// const debugData = () => {
//   const sum = 0;
//   for (let i = 0; i <= 10; i++) {
//     sum += i;
//   }
// };
// debugData();

// // break  : döngünün çalışmasına izin verme
// // return : metodun çalışmasına izin verme
// // continue : sadece 1 seferlik o şartta çalışma

// let sumExamplesData = () => {
//   let user = Number(prompt("Lütfen bitiş sayısını giriniz"));
//   let commonSum = 0;
//   let oddSum = 0,
//     oddCounter = 0,
//     oddNumber = 0;
//   let evenSum = 0,
//     evenCounter = 0,
//     evenNumber = 0;

//   for (let i = 0; i < user; i++) {
//     if (user === 44) {
//       console.log("secret key number failed" + user);
//       break;
//     }
//     if (i === 50) {
//       console.log("en fazla 50 sayısına kadar hesaplanır" + user);
//       break;
//     }

//     if (i === 7) {
//       console.log("7 sayısını toplama" + user);
//       continue;
//     }
//     commonSum += i;
//     if (i % 2 == 0) {
//       evenSum += i;
//       evenCounter++;
//       evenNumber = i;
//     } else {
//       oddSum += i;
//       oddCounter++;
//       oddNumber = i;
//     }
//   }
//   console.log("Toplam : " + commonSum);

//   console.log("Tek sayılar: " + oddNumber);
//   console.log("Tek sayı adedi : " + oddCounter);
//   console.log("Tek sayı toplamı : " + oddSum);

//   console.log("Çift sayılar: " + evenNumber);
//   console.log("Çift sayı adedi : " + evenCounter);
//   console.log("Çift sayı toplamı : " + evenSum);
// };
// sumExamplesData();

// const usernameAndSurnameMasking = () => {
//   let isimSoyisim = String(prompt("Lütfen isminizi ve soyadınızı giriniz"));

//   const userIndex=isimSoyisim.indexOf(" ");
//   let isim = isimSoyisim.substring(0, userIndex);
//   for (let i = 1; i < isim.length; i++) {
//     isim = isim.replace(isim.charAt(i), "*");
//   }
//   isim=isim.toUpperCase();
//   let soyad = isimSoyisim.substring(
//     userIndex + 1,
//     isimSoyisim.length
//   );
//   for (let i = 3; i < soyad.length; i++) {
//     soyad = soyad.replace(soyad.charAt(i), "*");
//   }

//   console.log(isim.concat("").concat(soyad));

// };

//software prensible
//KISS, YAGNI, SOLID, CLEAN CODE, SPAGETTİ CODE, DUMMY CODE bunları araştır.

//Monad : Bir fonksiyonun çıktısı başka bir fonksiyonun girdisi ise buna monad denir.
// const birinci=()=>{
// let user=Number(prompt("Lütfen sayı giriniz"));
// return user;
// }
// const ikinci=()=>{
// let data=birinci();
// console.log(Math.sqrt(data));
// }
// ikinci();

//setTimeOut, setInterval()

//belirli zaman sonra tek bir kere çalışır ve durur.
// setTimeout(function(){
//   console.log("setTimeout")
// },2000)

// //belirli bir zaman sonra sonsuz döngüde çalışır.
// setInterval(function(){
//   console.log("setInterval")
// },2000);

//callBackFunction: çoklu işlemlerde kullanılır.
const birinci = (data) => {
  console.log(Math.pow(2, data));
  return data;
};

const ikinci = (callBackFunction) => {
  let user = Number(prompt("Lütfen sayı giriniz"));
  let data = callBackFunction(user);
  console.log(data);
};

//ikinci(birinci);

//promise
// const promTutorial = () => {
//   //catch: 1 tane olmak zorunda
//   let data = new Promise((resolve, reject) => {
//     let status = 400;
//     if (status === 200) {
//       resolve("çalıştı");
//     } else {
//       reject("çalışmadı");
//     }
//   })
//     .then(() => {
//       console.log("olumlu");
//     })
//     .catch((err) => {
//       console.error(err);
//     });
// };
// promTutorial();

// //asyn/await

// //dizi , forEach,for, for in, for of
// let arr = () => {
//   const numbers = [5, 6, 3, 11, 66];
//   return numbers;
// };

//  let arrResult = () => {
//    let data = arr();
//   console.log(data);
//   console.log(data[data.length - 1]);

//   //Iterative For Loop
//   for (let i = 0; i < data.length; i++) {
//     document.write(data[i] + " ");
//   }

//   document.writeln("<br/>");

//   //for in
//   for (let i in data) {
//     document.write(i + "=>" + data[i] + " ");
//   }
//   document.writeln("<br/>");

//   // for of
//   for (let i of data) {
//     document.write(i + " ");
//   }

//   document.writeln("<br/>");

//ForEach
// data.forEach(function (value, index, array) {
//   document.write(`${index}=>  ${value} <br/> `);
// });

// filter

// let result1 = data
//   .filter((value, index, array) => {
//     return value % 2 == 0;
//   })
//   .forEach((value, index, array) => {
//     document.write(`${index}=>  ${value} <br/> `);
//   });
// console.log(result1);

// map
// data.map((value,index,array)=>{
//   return value+10;
// }).forEach((value,index,array)=>{
//   document.write(`${index}=>${value} <br/>`)
// })

//   document.writeln("eleman sayısı: " + data.length);
//   data.push(99);
//   data.unshift(44);

//   data.pop(); //sonda 1 eleman çıkar
//   data.shift();
//   console.log(data)

//   //data.sort();

//   // data.reverse();
//   data.sort().reverse();
//   console.log(data);
//   console.log(data.toString().substring(0,2));

//   //splice, slice

// };
// arrResult();

//call back function promise örneği
// let callbackFunctionComputer = () => {
//   //dizi objesi içerisinde 5 tane random obje
//   let computerArray = [];

//   for (let index = 0; index < 5; index++) {
//     let computerObject = {
//       computerName: `computer ${index + 1}`,
//       price: `${index + 1}` * `${Number(100)}`,
//     };
//     computerArray.push(computerObject);
//   }
//   console.log(computerArray);

//   //bu dizi içerisindeki sadece computer name bileşenlerini göster.

//   const arrayInComputerName = () => {
//     computerArray.map((temp) => {
//       console.log(`${temp.computerName}`);
//     });
//   };
//   arrayInComputerName();

//   //call back function price
//   const arrayInComputerObject = (obj, callBackFnc) => {
//     computerObject.push(obj);
//     callBackFnc();
//   };

//   arrayInComputerObject(
//     { computerName: "computer 6", price: "600" },
//     arrayInComputerName
//   );
// };
// callbackFunctionComputer();

// //promise function promise örneği
// let promiseFunctionComputer = () => {
//   //dizi objesi içerisinde 5 tane random obje
//   let computerArray = [];

//   for (let index = 0; index < 5; index++) {
//     let computerObject = {
//       computerName: `computer ${index + 1}`,
//       price: `${index + 1}` * `${Number(100)}`,
//     };
//     computerArray.push(computerObject);
//   }
//   console.log(computerArray);

//   //bu dizi içerisindeki sadece computer name bileşenlerini göster.

//   const arrayInComputerName = () => {
//     computerArray.map((temp) => {
//       console.log(`${temp.computerName}`);
//     });
//   };
//   arrayInComputerName();

//   //promise function price
//   const arrayInComputerObject = (obj, callBackFnc) => {
//     const promiseReturn = new Promise(() => {
//       computerObject.push(obj);
//     });
//     callBackFnc();
//   };

//   arrayInComputerObject({ computerName: "computer 6", price: "600" })
//     .then((response) => {console.log(response)})
//     .catch((err) => {
//       console.error(err);
//     });
// };
// promiseFunctionComputer();

//object
// const objectTutorials=()=>{
// const personObj={
//   "name":"Hamit",
//   "surname":"Mızrak",
//   "number":44,
//   "isLogin":true,
//   "software":["html5","css3","js","react","angular","vue"],
//   fullName:function(){
//     return this.name+ " "+ this.surname;
//   }
// }
// console.log(personObj)
// //variable
// console.log(personObj.name);
// console.log(personObj.surname)

// //variable nested
// console.log(personObj["name"]);
// console.log(personObj["surname"]);

// //array
// console.log(personObj.software[0]);

// const objectToString=JSON.stringify(personObj);
// console.log(objectToString);

// const stringToObject=JSON.parse(objectToString);
// console.log(stringToObject);

// //Object variable
// personObj.language="english";
// console.log(personObj.language);

// //function callback
// console.log(personObj.fullName());

// }
// // objectTutorials();
// //ödev: JSON nedir, XML nedir, aralarındaki fark nedir?

// //object constructor
// let objectConstructor=()=>{

// let personConstructor=function(name,surname){
//   this.name=name;
//   this.surname=surname;
//   console.log(this);
// }

// let personResult=new personConstructor("Hamit","Mızrak");
// console.log(personResult);

// }
// objectConstructor();

// //call, apply, bind
// //odev: anonymous function ile arrow function farkı?

// let noParameterCallApplyBind=()=>{

//   //function
// let functionOtherObject=function(){
//   document.writeln(`Parametresiz Functioon: ${this.adi} </br>`)
// }

// //object
// let objectData={
//   "adi":"spora gidiyorum",
// };
// functionOtherObject.call(objectData);
// functionOtherObject.apply(objectData);
// let deneme=functionOtherObject.bind(objectData);
// deneme();
// }
// noParameterCallApplyBind();
// document.writeln("<br/>");

// let parameterCallApplyBind=()=>{

//   //function
// let functionOtherObject=function(surname){
//   document.writeln(`Parametreli Functioon: ${this.adi} => ${surname} </br>`)
// }

// //object
// let objectData={
//   "adi":"spora gidiyorum",
// };
// functionOtherObject.call(objectData, "Mızrak");
// functionOtherObject.apply(objectData, ["Mızrak"]);
// let deneme=functionOtherObject.bind(objectData,"Mızrak");
// deneme();
// }
// parameterCallApplyBind();

//event
let eventFunction=()=>{
  alert( "deneme")
}




//dom
let newDataDate=()=>{
  let now=document.getElementById("text_data");
  //HTML
  // now.innerHTML="<b> <i> <mark>" +new Date().getFullYear()+"</b></i></mark>";
  //now.innerHTML=`<b> <i> <mark> ${new Date().getFullYear()} </b></i></mark>`;

  //QUERYSELECTOR , id=># , class=>.
  let now2=document.querySelector("#text_data");

  //TEXT
  //now.innerText= `<b> <i> <mark> ${new Date().getFullYear()} </b></i></mark>`;
  now.innerText= new Date().getFullYear();

  //CSS
  now.style.color="purple";
  now.style.backgroundColor="yellow";
  now.style.padding="10px";
};

let domData2=()=>{
  //ID
  //let domUserData=document.getElementById("dom_id").innerText="ID";

  //Class
  //let domUserData=document.getElementsByClassName("dom_class")[0].innerText="Class data";

  //Tag name
  //let domUserData=document.getElementsByTagName("p")[1].innerText="Tag name data";
}

let outSite=()=>{
let userInformation=
  window.confirm("Çıkmak istediğinize emin misiniz?") 
    ? window.location="https:www.ecodation.com"
    : window.alert("Çıkış işlemi iptal edildi");

}

//listener
let userListener=()=>{
  let listenerParag=document.getElementById("parag_list");
  listenerParag.addEventListener("click",function(e){
   alert(e.preventDefault()+ " " + e.target);
 document.getElementById("log_admin").innerHTML="takip edildi";
    // $("#log_admin").html("takip edildi");
  })
}
userListener();

//localStorage
//jquery ajax GET/POST
//KDV hesaplaması
//REACT
//jquery ajax GET/POST
