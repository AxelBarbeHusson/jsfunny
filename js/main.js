function addCounter() {
    var el = document.getElementById('js_counter');
    var currentCount = el.innerHTML;
    var newCount = parseInt(currentCount) + 1;
    el.innerHTML = newCount;

}

// console.log(addCounter());
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function manche(min, max) {


    var aleatoire = getRandomInt(min, max);
    var nbcoup = 0;
    var message = 'le nombre à deviner est compris entre ' + min + ' et ' + max;
    var saisie;

    do {
        saisie = prompt(message);
        nbcoup++;
        if (saisie > aleatoire) {
            message = "C'est moins !";
        } else {
            message = "C'est plus !";
        }

    } while (saisie != aleatoire);
    return nbcoup;
}

//manche(1, 100);
//nb de manche jouer
var nbManche = 0;
var bestScore = 0;
var scoreManche;
do {
    scoreManche = manche(1,100);
    alert('Score de la Manche : ' + scoreManche + ' || Best score : ' + bestScore);
    nbManche++;
    if (scoreManche < bestScore || bestScore == 0){
        bestScore = scoreManche;
    }
    var retry = confirm('Voulez vous continuer à jouer ?');
}while (retry==true);
if (retry == false){
    alert('Vous avez effectuez ' +nbManche+ ' Manches & votre meilleur score est ' + bestScore);
}