window.onload = init
let counter = 0

function init() {
    console.log('Ma page est lancée !')

    var contenu = document.getElementById('paragraphe')
    contenu.innerHTML = counter
}

let minus = () => {
    counter -= 1
    var contenu = document.getElementById('paragraphe')
    contenu.innerHTML = counter
}

let plus = () => {
    counter += 1
    var contenu = document.getElementById('paragraphe')
    contenu.innerHTML = counter
}

let onClick = () => {
    alert('Valeur actuelle = ' + document.getElementById('paragraphe').innerHTML)
}