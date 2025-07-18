// arrays
let names =["arda","kerem","aslı","mert"];
 let years =[1990,1980,2000,2005];
 let mix =["arda","yilmaz",1990,null, undefined,["programlama","futbol"]]

console.log(names);
console.log(names.length);
console.log(typeof names);

console.log(years);
console.log(mix);
 
// get array item

console.log(names[3]);

// set array item

names[0]="levent";
names[names.length]="mehmet";
console.log(names);

// add item
names.push("Eda");

names.unshift("Eda");
console.log(names);


 //remove item



//years.pop();
//console.log(years);

years.shift();

//indexof
let index = names.indexOf("levent")
console.log("index:"+ index);

names.reverse();
console.log(names);

years.sort
console.log(years);

names.sort();
console.log(names);

let veri = names.concat(years);
console.log(veri);

names.splice(2,0,"ahmet");
console.log(names);

name.splice(2,2,"selin");
console.log(names);