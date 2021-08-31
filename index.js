//Constante récupérant l'élément du DOM ayant un id toggle
const toggle = document.getElementById('toggle');
//Constante récupérant le body
const body = document.querySelector('body');
//Création d'une fonction qui au click viens ajouté la class active au body et à la div toggle
toggle.onclick = () => {
    toggle.classList.toggle('active');
    body.classList.toggle('active');
}
