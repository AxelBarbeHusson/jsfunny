function biere(hauteur,rayon) {
    if ((!isNaN(rayon) && !isNaN(hauteur)) && (rayon >= 0 && hauteur >= 0)){
        return hauteur * Math.PI * Math.pow(rayon,2);

    }else {
        return false;
    }
}