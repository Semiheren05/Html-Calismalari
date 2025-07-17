
var password;
console.log(password)
password= "Semih123"
console.log(password)


yas= 25;
console.log(yas)

//değişken tanımlama kuralları
// 1yas = yanlış
// yas1 = doğru
yas1= 30;

// for , if gibi komutları değişken adı olarak kullanamayız
 var ad_soyad;
 // değişken isimlerinde boşluk olamaz
 ad_soyad =" semih eren"
 console.log(ad_soyad)

const email = "12345@gmail.com"
console.log(email)
// değişken türleri

// primitive types

//string
let firstname = "Levent"
console.log(typeof firstname)

//number
 let age = 30 ;
 console.log(typeof age)
 //boolean
 let kredi_kullanimi = false
 console.log(typeof kredi_kullanimi)

 //undefined 
 let phone;
 console.log(typeof phone)
 //Reference types : objects
 //array
  let liste = ["Aslı"," kerem ","Sertaç"]
  console.log(typeof liste)
  //object literals 
  let address ={ 
    city: " istanbul",
    country:"türkiye",
  } 
console.log(address)

var hesapla = function(){ 
    return 0 ;
} 
console.log(typeof hesapla)
 //  aritmetik OPERATÖRLER
  veri =a+b;
 veri = a-b;
 veri=a*b;
 veri = a/b;
veri = d++;
veri= ++d;
veri = d--;
veri = --d;

 // ATAMA OPERATÖRLERİ
 veri = a ;
 veri +=a;// veri = veri + a
 veri -=a // veri = veri - a
 veri *=a // veri =veri * a 
 veri /=a // veri = veri / a
 veri %=a // veri = veri % a;
 // KARŞILAŞTIRMA OPERATÖRLERİ
 veri = a==b;
 veri = b==c;
 veri = 5==="5"; // 3 eşittir hem sayılara hem veri türlerine bakıyor türleri ve sayılar eşitse true yapar
 veri = a!=b;
 veri = a!==b;
 veri = a>b;
 veri = b<c;
 veri = 5 >=5;
 veri = b<=c;
 // MANTIKSAL OPERATÖRLER
  // && ( and)
veri = (a>b) && (a>c)
// (or) ||
veri =(b>a)|| (a>c)
// (not) !
veri = !(a>b)
 let veri;
 const a=20;
 const b=10;
 let d=3;
 const c=10;
// DATE OBJECT
let zaman = new Date();
 let birthday = new Date(1998,4,22);

// set methods
 zaman.setDate(25);
 zaman.setMonth(3);
 zaman.setFullYear(2025);
 zaman.setHours(20);
// get methods
 console.log(zaman.getMonth());
console.log(zaman.getDate());
console.log(zaman.getFullYear());
console.log(zaman.getDay());
console.log(zaman.getHours());
console.log(zaman.getMinutes());
console.log(zaman.getSeconds());
console.log(zaman.getMilliseconds());

console.log(zaman.getUTCFullYear()- birthday.getFullYear());
console.log(zaman.getMonth()- birthday.getmont)



console.log(zaman);
console.log(typeof zaman );






 console.log(veri);
 console.log(typeof veri);

// numbers

// veri= Number("5");
//veri= parseInt("5");
//veri= parseFloat("5.5")
//veri= parseInt("5c");
//veri = isNaN ("c5");
//veri = isNaN ( "5");
var sayi = 15.4358573978;
veri= sayi.toPrecision(5);
  veri= sayi.toFixed;

  veri =Math.PI
  veri= Math.round(3.5);
  veri=Math.round(3.2);
  veri =Math.ceil(3.2);
  veri = math.floor(8.3);
  veri= Math.pow(3,2);
  veri = math.sqrt(81);
  veri=math.min(1,3,5,7,9,10);
  veri = math.max(5,6,7,35,12,9);
  veri= math.floor(math.random()*100+1);
console.log(veri);
console.log(typeof veri);

// STRINGS

const firstnamee =" levent"
const lastname = "ertun"
const agee= "37";

// string concatennations
veri= firstnamee+""+lastname;
veri="Levent";
veri += "Ertun";

veri ='Benim adım'+firstnamee+'lastname'+ 'yaşım'+ age +' ve istanbulda yaşıyorum'

 veri = veri.toUpperCase();
 veri = veri.toLowerCase();

// veri = veri.substring(3,11);

// veri = veri.slice(1,8);
veri = veri.indexOf("n");
