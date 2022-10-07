// Je créé un commentaire sur javascript

/* Je créé plusieurs ligne de commentaire
sur plusieurs ligne */

alert ('Bonjour, je suis UTRON et je fais bugger ton site'); 
//texte dans la console
console.log ('Texte en console');

// Création de la promesse
const promoseGetUsers = new Promise(function(resolve, reject) {
    if(USER!== 'undifined') {
        resolve (USER);
    } else { 
        reject ('Accès impossible, libérez Popo !');
    }
});

//Récupérer l'état de la promesse
promoseGetUsers
.then(function(u){
    console.log(u);
})
.catch(function(u){
        console.log(u);
});