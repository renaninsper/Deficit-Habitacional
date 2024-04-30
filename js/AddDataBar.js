function nome_imagem(){
    var imagem = event.target.id || event.target.parentNode.id;
    var local = imagem.indexOf("x_");
    imagem = imagem.substring(local+2);
    var local = imagem.indexOf("_");
    imagem = imagem.substring(local+1);
    local = imagem.indexOf("_");
    imagem = imagem.substring(0,local);
    return(imagem);
}
function nome_eixo(){
    var eixo = event.target.id || event.target.parentNode.id;
    var local = eixo.indexOf("_");
    eixo = eixo.substring(local+1);
    local = eixo.indexOf("_");
    eixo = eixo.substring(0,local);
    return(eixo);
}
function vetor_dados(dado) {
    var lyr = window['layer_'+document.getElementsByClassName('opcao_area clicked')[0].id];
    var eixo = [];
    lyr.eachLayer(function (layer){
        var valor = layer.feature.properties[dado];
        eixo.push(valor);
    });
    return(eixo);
}
function vetor_dados2 (dado) {
    var lyr = window['layer_'+document.getElementsByClassName('opcao_area clicked')[0].id];
    var eixo = [];
    features = this[lyr["options"]["dataVar"]].features.slice(0);
    for (i = features.length - 1; i >= 0; --i){
        var valor = features[i].properties[dado];
        eixo.push(valor);
    }
    return(eixo);
}
function selecionar_camada() {
    var classebotao = event.target.className;
    if ( classebotao == "botao_variavel") {
        var listab = document.getElementsByClassName('botao_variavel clicked');
        var listaa = document.getElementsByClassName('barcontainer clicked');
        if ( listab.length > 0 ) {
            for ( var elem = 0; elem < listab.length; listab++ ) {
                listab[elem].classList.remove('clicked');
                listaa[elem].classList.remove('clicked');
            }
        }
        event.target.classList.add('clicked');
        event.target.parentNode.classList.add('clicked');
    }
    else {
        event.target.classList.remove('clicked');
        event.target.parentNode.classList.remove('clicked');
        document.getElementById('legenda').remove();
    }
    change_style();
    
}
function selecionar_area() {
    var classebotao = event.target.className;
    if ( classebotao == "opcao_area") {
        var listab = document.getElementsByClassName('opcao_area clicked');
        if ( listab.length > 0 ) {
            for ( var elem = 0; elem < listab.length; elem++ ) {
                map.removeLayer(window['layer_'+listab[elem].id]);
                listab[elem].classList.remove('clicked');
            }
        }
        event.target.classList.add('clicked');
        camada_atual();
        change_style();
        atualizar_sliders();
    }
}
function atualizar_sliders(){
    var sliders = document.getElementsByClassName('slider');
    for (var i = 0; i < sliders.length; i++) {
        var variavel = (sliders[i].id).replaceAll(' ','_');
        var vetor = vetor_dados2(variavel);
        sliders[i].noUiSlider.updateOptions({
            start: [Math.min(...vetor), Math.max(...vetor)],
            connect: ['lower',false,'lower'],
            range: {
                'min': Math.min(...vetor),
                'max': Math.max(...vetor)
            }   
        });
    }
}

function GetData(variavel, camada) {
    const xhttp = new XMLHttpRequest();
    xhttp.onloadend = function() {
        var jsonrecebido = (this.responseText);
        try {
            jsonrecebido = JSON.parse(jsonrecebido);
            console.log(jsonrecebido);
            var features = window[camada["options"]["dataVar"]].features;
            for (var i = 0; i < features.length; i++) {
                var dado = window[camada["options"]["dataVar"]].features[i].properties['cd_unidade_geografica'];
                for (var j = 0; j < Object.keys(jsonrecebido.cd_unidade_geografica).length; j++) {
                    var valor = jsonrecebido.cd_unidade_geografica[j];
                    if (valor == dado) {
                        window[camada["options"]["dataVar"]].features[i].properties[Object.keys(jsonrecebido)[1].toString()] = jsonrecebido[Object.keys(jsonrecebido)[1].toString()][j];
                        j = Object.keys(jsonrecebido.cd_unidade_geografica).length;
                    }
                }
            }
        }
        catch {
            'Erro ao carregar dados'
        }
    }
    variavel = encodeURIComponent(variavel.toString())
    xhttp.open("GET", "data.py?t="+variavel.toString(), false);
    xhttp.send();
}

function fecharBarcontainer() {
    var idvariavel = event.target.className;
    var variavel = document.getElementById(idvariavel);
    variavel.click();
}

function AddDataBar() {
    var datavector = document.getElementsByClassName('jstree-anchor splus jstree-clicked') || [];
    var listvector = document.getElementsByClassName('slider') || [];
    var listvectorids = [...listvector].map(element => element.id);
    var datavectortexts = [...datavector].map(element => element.textContent) || [];
    for (var i = 0; i < datavectortexts.length; i++) {
        if ( !(listvectorids.includes(datavectortexts[i])) ) {
            var eixo = nome_eixo();
            var idvariavel = event.target.id || event.target.parentNode.id;
            var id = datavectortexts[i].replaceAll(' ', '_');
            var id2 = datavectortexts[i];
            var camada = window['layer_'+document.getElementsByClassName('opcao_area clicked')[0].id];
            var variaveis = Object.keys(camada._layers[Object.keys(camada._layers)[0]].feature.properties);
            if (!(variaveis.includes(id))) {
                GetData(id, camada);
            }
            var barcontainer = document.createElement('div');
            barcontainer.id = "barcontainer "+datavectortexts[i];
            barcontainer.className = "barcontainer";
            barcontainer.classList.add(eixo);
            document.getElementsByClassName("ss-content")[1].appendChild(barcontainer);
            var lab_indicador = document.createElement('div');
            lab_indicador.innerHTML  = '<b> '+datavectortexts[i]+':</b> <span id="val_'+id+'"></span>';
            lab_indicador.className = 'variavel';
            lab_indicador.style.height = "1px";
            document.getElementById("barcontainer "+datavectortexts[i]).appendChild(lab_indicador);
            var reset_indicador = document.createElement('div');
            reset_indicador.innerHTML = 'Redefinir';
            reset_indicador.className = 'filterlabel';
            reset_indicador.onclick = function() {
                sel_indicador.noUiSlider.reset();
            };
            document.getElementById("barcontainer "+datavectortexts[i]).appendChild(reset_indicador);
            
            var peso_indicador = document.createElement('div');
            if (listvectorids.length == 0) {
                peso_indicador.className = 'botao_variavel clicked';
                barcontainer.classList.add('clicked');
            } 
            else {
                peso_indicador.className = 'botao_variavel';
            }
            peso_indicador.id = "botao_"+nome_imagem()+'+'+id+'-'+eixo;
            peso_indicador.style.backgroundImage = 'url(tree/themes/icons/'+nome_imagem()+'.svg)';
            document.getElementById("barcontainer "+datavectortexts[i]).appendChild(peso_indicador);

            var fechar = document.createElement('div');
            fechar.id = "fechar_barcontainer";
            fechar.className = idvariavel;
            document.getElementById("barcontainer "+datavectortexts[i]).appendChild(fechar);
            fechar.onclick = function() {
                sel_indicador.noUiSlider.reset();
            };
            fechar.addEventListener('click', fecharBarcontainer);

            var div_indicador = document.createElement("div");
            div_indicador.id = datavectortexts[i];
            div_indicador.className = "slider";
            div_indicador.style.height = "10px";
            document.getElementById("barcontainer "+datavectortexts[i]).appendChild(div_indicador);
            var sel_indicador = document.getElementById(datavectortexts[i]);
            var id_dados = vetor_dados2(id);
            noUiSlider.create(sel_indicador, {
                connect: true,
                start: [Math.min(...id_dados), Math.max(...id_dados)],
                range: {
                'min': Math.min(...id_dados),
                'max': Math.max(...id_dados)
                }
            });
            var connect = sel_indicador.querySelector('.noUi-connect');
            connect.classList.add(eixo);
            sel_indicador.noUiSlider.on('update', function (values) {
                var val_indicador = document.getElementById("val_"+id);
                val_indicador.innerHTML = values.join(' - ');
                FilterLayer(id2, id);
            }); 
            var botaoselecao = document.getElementById("botao_"+nome_imagem()+'+'+id+'-'+eixo);
            botaoselecao.addEventListener('click', selecionar_camada);

            var variaveis = document.getElementsByClassName('custom-graph-select');
            for ( var i = 0; i < variaveis.length; i++ ){
                variaveis[i].innerHTML  = grafico_variaveis();
            }
            DropButton('graph-select');
            AtualizaGrafico();
        }
    }
    for (i = 0; i < listvectorids.length; i++) {
        if ( !(datavectortexts.includes(listvectorids[i])) ) {
            var deletar = document.getElementById("barcontainer "+listvectorids[i]);
            deletar.remove();
            change_style();
            var selecionado = document.getElementsByClassName('botao_variavel clicked');
            if (selecionado.length <= 0 || selecionado.length == undefined) {
                document.getElementById('legenda').remove();
            }
        }
    }
    if (listvector.length <= 3){
        document.getElementById('menu').style.height = (listvector.length*70).toString()+'px'
    }
}