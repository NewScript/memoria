const reset = document.querySelector('[class="reset"');

const emojis = [
    '🐵',
    '🐵',
    '🐶',
    '🐶',
    '🦁',
    '🦁',
    '🐯',
    '🐯',
    '🐈',
    '🐈',
    '🦒',
    '🦒',
    '🐭',
    '🐭',
    '🐰',
    '🐰'
];

let shufflesEmojis = emojis.sort(
    () => ( Math.random() > 0.5 ? 2 : -1 ) // Verificar se pode tirar esse último conjunto de parêncteses
);

const checkMatch = () => {
    if(openCards[0].innerHTML === openCards[1].innerHTML){
        openCards[0].classList.add('boxMatch');
        openCards[1].classList.add('boxMatch');
    }else{
        openCards[0].classList.remove('boxOpen');
        openCards[1].classList.remove('boxOpen');
    };

    openCards = [];

    if(document.querySelectorAll('.boxMatch').length === emojis.length){
        alert('Você venceu!')
        reiniciar();
    }
}

const handleClick = (e) => {
    if( openCards.length < 2 && !e.target.classList.contains('boxMatch')){
        e.target.classList.add('boxOpen');
        openCards.push(e.target);
        // console.log(openCards[0].innerHTML, openCards[1].innerHTML)
    };
    if( openCards.length == 2 ){
        setTimeout(checkMatch, 500);
    };
}

for(let i = 0; i < emojis.length; i++){
    let box = document.createElement('div');
    box.className = 'item';
    box.innerHTML = shufflesEmojis[ i ];
    box.addEventListener('click', handleClick);
    document.querySelector('.game').appendChild( box );
}



// Guarda o 1 e 2 card selecionado
let openCards = [];

const reiniciar = () => {
    window.location.reload();
}

reset.addEventListener('click', reiniciar);