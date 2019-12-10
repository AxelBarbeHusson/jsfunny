function check() {
    let nom = document.getElementById('nom').value;
    let prenom = document.getElementById('prenom').value;
    let mail = document.getElementById('mail').value;
    let msg = "";

    if (nom === "") msg += 'Mets ton nom bordel !\r';
    if (prenom === "") msg += 'Mets ton prenom blaireau !\r';
    if (mail === "") msg += 'Et ton mail !!!\r';

    alert(msg);

}