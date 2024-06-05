document.addEventListener("DOMContentLoaded", function() {
    var proximo = document.getElementById('proximo');
    var atual = document.getElementById('atual');

    var carrosel = document.querySelector('.carrosel');
    var Slider = carrosel.querySelector('.lista');
    var thumb = document.querySelector('.carrosel .thumb');
    var Tempo = document.querySelector('.carrosel .tempo');

    // Certifique-se de que thumbItem[0] é um nó válido
    var thumbItem = thumb.querySelectorAll('.item');
    if (thumbItem.length > 0) {
        thumb.appendChild(thumbItem[0]);
    }

    var tempoCorrendo = 3000;
    var tempoAutoProx = 7000;
    var tempoFim;
    var Autorun;

    proximo.onclick = function() {
        mostrarSlider('proximo');
    };

    atual.onclick = function() {
        mostrarSlider('atual');
    };

    Autorun = setTimeout(() => {
        proximo.click();
    }, tempoAutoProx);

    function mostrarSlider(type) {
        var itemSlider = Slider.querySelectorAll('.itens');
        var thumbItem = thumb.querySelectorAll('.item');

        console.log('itemSlider:', itemSlider);
        console.log('thumbItem:', thumbItem);

        if (itemSlider.length === 0 || thumbItem.length === 0) {
            console.error('Nenhum item encontrado para mover no slider ou thumb');
            return;
        }

        if (type === 'proximo') {
            Slider.appendChild(itemSlider[0]);
            thumb.appendChild(thumbItem[0]);
            carrosel.classList.add('proximo');
        } else {
            Slider.prepend(itemSlider[itemSlider.length - 1]);
            thumb.prepend(thumbItem[thumbItem.length - 1]);
            carrosel.classList.add('atual');
        }

        clearTimeout(tempoFim);
        tempoFim = setTimeout(() => {
            carrosel.classList.remove('proximo');
            carrosel.classList.remove('atual');
        }, tempoCorrendo);

        clearTimeout(Autorun);
        Autorun = setTimeout(() => {
            proximo.click();
        }, tempoAutoProx);
    }
});

function clicar() {
    window.location = `https://onepiece.fandom.com/wiki/Romance_Dawn_Arc`
}