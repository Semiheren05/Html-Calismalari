//object literals
// let firstname ="semih";
// let lastname ="eren";

// let firstname2 ="Levent";
// let lastname2 ="eren";

// let semih = ["semih","Eren",21];
//let eren = ["eren","semih",12];

let user = {
      userName:   "semiheren",
      firstname:"semih",
      lastname : " eren",
      age : 21,
      hobbies:["spor","kitap","yazılım"],
      address:{
            city: " İstanbul",
            country: "turkey",
            phone: "05300000000",
      }
}
veri = user;
veri = user.firstname;
veri = user.lastname;
veri = user.hobbies;
veri = user.hobbies.length;
veri = user.address;
console.log(veri);
console.log(typeof user);