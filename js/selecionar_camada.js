function selecionar_camada() {
    var classebotao = event.target.className;
    if ( classebotao == "botao_variavel") {
        var idbotao = event.target.id;
        var comeco = idbotao.indexOf("_");
        idbotao = idbotao.substring(comeco+1);
        var botao = document.getElementById(idbotao);
        var listab = document.getElementsByClassName('botao_variavel clicked');
        console.log(listab);
        if ( listab.length > 0 ) {
            for ( var elem = 0; elem < listab.length; listab++ ) {
                listab[elem].classList.remove('clicked');
            }
        }
        event.target.classList.add('clicked');
    }
    else {
        event.target.classList.remove('clicked');
    }
}