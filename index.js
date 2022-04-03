const mail = ["prova@gmail.com","Pera@gmail.com","erba@gmail.com"];

let mailInserita = prompt('Scrivi la tua meil');
const contenitore = document.getElementById("contenitore");
let trovata = false;

for (let i = 0; i < mail.length; i++){
   
    if(mail[i] === mailInserita ){
        trovata = true;
        
    } 
}

if(trovata){
    contenitore.innerHTML = `mail registrata`;
    
} else{
    contenitore.innerHTML = `La mail cercata non è registrata`;
    
}

