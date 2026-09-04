function playSound(type) {
    if(type === 'click') {
        console.log("Efeito sonoro de 'clique de madeira/metal' reproduzido!");
        
    }
}

const buttons = document.querySelectorAll('.btn-large, .btn-small, .icon-btn');
buttons.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        console.log("Efeito sonoro de hover reproduzido!");
        
    });
});