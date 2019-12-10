let valeur = prompt('Veuillez saisir un nombre');
let msg = '';
if (!isNaN(valeur)) {
    if (valeur > 0) {
        msg = 'Positif';
    } else if (valeur < 0) {
        msg = 'Negatif';
    } else {
        msg = 'Nul';
    }
} else msg = 'Un nombre c\'est un chiffre connard !';
console.log(msg);
document.write(msg);