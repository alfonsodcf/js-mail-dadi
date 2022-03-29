const mail = ["prova@gmail.com","Pera@gmail.com","erba@gmail.com"];

let mailInserita = prompt('Scrivi la tua meil');
let scrivi = document.getElementById("scrivi");
let trovata = false;

for (let i = 0; i < mail.length; i++){
   
    if(mail[i] === mailInserita ){
        trovata = true;
        
    } 
}

if(trovata){
    scrivi.innerHTML = `mail registrata`;
    
} else{
    scrivi.innerHTML = `La mail cercata non è registrata`;
    
}

