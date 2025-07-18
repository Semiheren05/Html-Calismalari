// koşulu durumlar ( if-else)

const firstname = "çağlar";
const userName ="Caglayilmaz";
const age = 18;
const isStudent = true;
const school = "high school";

if (userName == "Caglayilmaz"){
    console.log("merhaba çağla"); 
}  
else{    
console.log("kullanıcı bulunamadı") 
}
// if ( age ===20 ) {    console.log("yaşınız 20") }

if (isStudent){
      console.log ("hangi bölümde okuyorsunuz")

}else{console.log("Hangi mesleği yapıyorsunuz")}

if (age>=18){
      if(school =="university"){
            console.log("Ehliyet alabilirsin")
      }
      else{
            console.log(" eğitim durumun ehliyet almak için yetersiz")
      }
}
else{
            console.log(" yaşın ehliyet için yetersiz")
      }