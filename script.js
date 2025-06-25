const displayBox = document.getElementById("password")
const longueur = 12;

// Lettres majuscules
const LettresMajuscules = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// Lettres miniscules
const lettresMiniscules = "abcdefghijklmnopqrstuvwxyz";
// Chiffres
const chiffres = "0123456789";
// Caractères spéciaux
const caracteresSpeciaux = "!@#$%^&*()_+-=[]{}|;:,.<>?/~'";
// Tous les caractères combinés
const tousLesCaracteres = LettresMajuscules + lettresMiniscules + chiffres + caracteresSpeciaux;

const genererMotDePasse = () => {
    let password = '';

    password += LettresMajuscules[Math.floor(Math.random() * LettresMajuscules.length)];
    password += lettresMiniscules[Math.floor(Math.random() * lettresMiniscules.length)];
    password += chiffres[Math.floor(Math.random() * chiffres.length)];
    password += caracteresSpeciaux[Math.floor(Math.random() * caracteresSpeciaux.length)];
    
     while(password.length < longueur){
        password += tousLesCaracteres [Math.floor(Math.random() * tousLesCaracteres.length)];
    

     }
    displayBox.value = password;

}

const copyPassword = () => {
    displayBox.select();
    document.execCommand("copy")
}

