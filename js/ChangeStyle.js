function Vetor_Cor_Eixos(eixo){
    var vetor_cor = [];
    if ( eixo == 'sociedade' ){
        vetor_cor = ['#ffffff','#f8ecec', '#ebc6c6', '#dea1a1', '#d17b7b', '#c55656', '#e3e3e3'];
    }
    if ( eixo == 'economia' ){
        vetor_cor = ['#ffffff','#e9f7f6', '#bfe7e4', '#94d7d2', '#69c7c0', '#3fb8af', '#e3e3e3'];
    }
    if ( eixo == 'meiofisico' ){
        vetor_cor = ['#ffffff','#e9f1fb', '#bfd7f3', '#95bdeb', '#6ba3e3', '#4189db', '#e3e3e3'];
    }
    if ( eixo == 'ambcons' ){
        vetor_cor = ['#ffffff','#f5ebf4', '#e1c4df', '#ce9cc9','#ba75b4','#a74e9f', '#e3e3e3'];
    }
    if ( eixo == 'meioamb' ){
        vetor_cor = ['#ffffff','#e6f1e6','#b4d5b6','#82ba86','#509e56','#1e8326', '#e3e3e3'];
    }
    if ( eixo == 'desenvolvimento' ){
        vetor_cor = ['#ffffff','#fcf0e6','#f7d2b5','#f1b583','#ec9752','#e77a21', '#e3e3e3'];
    }
    return(vetor_cor)
}
function quartil (vetor) {
    vetor = vetor.sort(function(a, b){return a - b});
    var esp = Math.round(vetor.length/5);
    var min = vetor[0];
    var q01 = vetor[esp-1];
    var q02 = vetor[2*esp-1];
    var q03 = vetor[3*esp-1];
    var q04 = vetor[4*esp-1];
    var max = vetor[vetor.length-1];
    return([min, q01, q02, q03, q04, max]);
}
function style_area() {
    return{
        opacity: 1,
        color: 'rgba(129,129,129,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 0.3, 
        fill: true,
        fillOpacity: 1,
        fillColor: '#ffffff',
        interactive: true,
    }
}
function style_area_ponderacao_2010(feature) {
    var clicado = document.getElementsByClassName('botao_variavel clicked');
    if (clicado[0] !== undefined) {
        var clicado = clicado[0].id;
        var local = clicado.indexOf('+');
        var local2 = clicado.indexOf('-');
        var eixo = clicado.substring(local2+1);
        var variavel = clicado.substring(local+1, local2);
        var cores = Vetor_Cor_Eixos(eixo);
        var lista = vetor_dados2(variavel, layer_area_ponderacao_2010);
        var vetor = quartil(lista);
        if (feature.properties[variavel] >= vetor[0] && feature.properties[variavel] <= vetor[1]) {
            return {
                pane: 'pane_area_ponderacao_2010',
                opacity: 1,
                color: 'rgba(129,129,129,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 0.3, 
                fill: true,
                fillOpacity: 1,
                fillColor: cores[1],
                interactive: true,
            }
        }
        if (feature.properties[variavel] >= vetor[1] && feature.properties[variavel] <= vetor[2]) {
            return {
                pane: 'pane_area_ponderacao_2010',
                opacity: 1,
                color: 'rgba(129,129,129,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 0.3, 
                fill: true,
                fillOpacity: 1,
                fillColor: cores[2],
                interactive: true,
            }
        }
        if (feature.properties[variavel] >= vetor[2] && feature.properties[variavel] <= vetor[3]) {
            return {
                pane: 'pane_area_ponderacao_2010',
                opacity: 1,
                color: 'rgba(129,129,129,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 0.3, 
                fill: true,
                fillOpacity: 1,
                fillColor: cores[3],
                interactive: true,
            }
        }
        if (feature.properties[variavel] >= vetor[3] && feature.properties[variavel] <= vetor[4]) {
            return {
                pane: 'pane_area_ponderacao_2010',
                opacity: 1,
                color: 'rgba(129,129,129,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 0.3, 
                fill: true,
                fillOpacity: 1,
                fillColor: cores[4],
                interactive: true,
            }
        }
        if (feature.properties[variavel] >= vetor[4] && feature.properties[variavel] <= vetor[5]) {
            return {
                pane: 'pane_area_ponderacao_2010',
                opacity: 1,
                color: 'rgba(129,129,129,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 0.3, 
                fill: true,
                fillOpacity: 1,
                fillColor: cores[5],
                interactive: true,
            }
        }
        if (feature.properties[variavel] == 0) {
            return {
                pane: 'pane_area_ponderacao_2010',
                opacity: 1,
                color: 'rgba(129,129,129,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 0.3, 
                fill: true,
                fillOpacity: 1,
                fillColor: cores[0],
                interactive: true,
            }
        }
        if (feature.properties[variavel] == '') {
            return {
                pane: 'pane_area_ponderacao_2010',
                opacity: 1,
                color: 'rgba(129,129,129,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 0.3, 
                fill: true,
                fillOpacity: 1,
                fillColor: cores[6],
                interactive: true,
            }
        }
    }
    else {
        return{
            pane: 'pane_area_ponderacao_2010',
            opacity: 1,
            color: 'rgba(129,129,129,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 0.3, 
            fill: true,
            fillOpacity: 1,
            fillColor: '#ffffff',
            interactive: true,
        }
    }
}
function change_style() {
    var clicado = document.getElementsByClassName('botao_variavel clicked');
    var area = document.getElementsByClassName('opcao_area clicked')[0];
    if (clicado[0] != undefined) {
        var clicado = clicado[0].id;
        var local = clicado.indexOf('+');
        var local2 = clicado.indexOf('-');
        var eixo = clicado.substring(local2+1);
        var variavel = clicado.substring(local+1, local2);
        var cores = Vetor_Cor_Eixos(eixo);
        var lista = vetor_dados2(variavel);
        var vetor = quartil(lista);
        try {
            var deletar = document.getElementById('legenda');
            deletar.remove();
            deletar = document.getElementById('colcor');
            deletar.remove();
            deletar = document.getElementById('coltexto');
            deletar.remove();
        }catch(err){}
        var col4 = document.createElement('div');
        col4.className="col4";
        col4.id = "legenda";
        document.getElementById('all').appendChild(col4);
        var titulo = document.createElement('div');
        titulo.innerText = 'Legenda';
        titulo.className = 'titulo';
        document.getElementById('legenda').appendChild(titulo);
        var subtitulo = document.createElement('div');
        subtitulo.innerText = variavel.replaceAll('_',' ');
        subtitulo.className = 'subtitulo';
        document.getElementById('legenda').appendChild(subtitulo);
        var colcor = document.createElement('div');
        colcor.id = 'colcor';
        document.getElementById('legenda').appendChild(colcor);
        var coltexto = document.createElement('div');
        coltexto.id = 'coltexto';
        document.getElementById('legenda').appendChild(coltexto);

        var colinput = document.createElement('form');
        colinput.id = 'colinput';
        colinput.className = 'fora_da_tela';
        document.getElementById('legenda').appendChild(colinput);
        var botao = document.createElement('div');
        botao.id = 'botao_legenda';
        botao.className = 'botao_editar';
        document.getElementById('legenda').appendChild(botao);
        botao.addEventListener('click', legenda_edicao);

        for ( var i = 0; i < 7; i++ ) {
            var cor = document.createElement('div');
            cor.id = 'cor'+i;
            cor.className = 'cor';
            cor.style.backgroundColor = cores[i];
            document.getElementById('colcor').appendChild(cor);
            var texto = document.createElement('div');
            texto.id = 'texto'+i;
            texto.className = 'texto';
            if ( i > 0 && i < 6) {
                texto.innerText = vetor[i-1].toString()+' - '+vetor[i].toString();
            }
            if ( i == 0 ) {
                texto.innerText = '0';
            }
            if ( i == 6 ) {
                texto.innerText = 'Não se aplica';
            }
            document.getElementById('coltexto').appendChild(texto);
        }
        for ( var i = 0; i < 5; i++ ) {
            var input1 = document.createElement('input');
            input1.id = 'input1'+i;
            input1.className = 'input1';
            input1.value = vetor[i].toString();
            var input2 = document.createElement('input');
            input2.id = 'input2'+i;
            input2.className = 'input2';
            input2.value = vetor[i+1].toString();
            document.getElementById('colinput').appendChild(input1);
            document.getElementById('colinput').appendChild(input2);
        }
        var distrito = document.createElement('div');
        distrito.id = 'hover_distrito';
        distrito.className = 'titulo';
        distrito.innerText = 'UNIDADE GEOGRÁFICA';
        document.getElementById('legenda').appendChild(distrito);
        var dado = document.createElement('div');
        dado.id = 'hover_dado';
        dado.className = 'dado';
        dado.innerText = '####';
        document.getElementById('legenda').appendChild(dado);
        var grafico = document.createElement('div');
        grafico.id = 'grafico_legenda';
        document.getElementById('legenda').appendChild(grafico);
        const layout = {
            height: 280,
            width: 280,
            paper_bgcolor: '#FFFFFF00',
            plot_bgcolor: '#FFFFFF00',
            legend: {
                x: 1,
                xanchor: 'right',
                y: -80,
                "orientation": "h",
                bgcolor: '#FFFFFF00'
            },
            font: {
                family: "Roboto Condensed",
                size: 11,
                color: '#7f7f7f'
            },
            transition: {
                duration: 500
            }
        };
        var data = [{
            values:[0, 100], 
            labels: ['XXXX', 'XXXX'],
            hole:.55,
            type:"pie",
            marker: {
                colors: ['#818181', '#515151']
            }
        }];
        Plotly.newPlot("grafico_legenda", data, layout, {displayModeBar: false});
        window['layer_'+area.id].eachLayer(function (layer) {
            layer.setPopupContent(
                '<p>'+layer.feature.properties[variavel]+'</p>'
            )
            if (layer.feature.properties[variavel] >= vetor[0] && layer.feature.properties[variavel] <= vetor[1] ) {
                layer.setStyle ({
                    pane: 'pane_'+area.id,
                    opacity: 1,
                    color: 'rgba(129,129,129,1.0)',
                    dashArray: '',
                    lineCap: 'butt',
                    lineJoin: 'miter',
                    weight: 0.3, 
                    fill: true,
                    fillOpacity: 1,
                    fillColor: cores[1],
                    interactive: true,
                });
            }
            if (layer.feature.properties[variavel] > vetor[1] && layer.feature.properties[variavel] <= vetor[2] ) {
                layer.setStyle ({
                    pane: 'pane_'+area.id,
                    opacity: 1,
                    color: 'rgba(129,129,129,1.0)',
                    dashArray: '',
                    lineCap: 'butt',
                    lineJoin: 'miter',
                    weight: 0.3, 
                    fill: true,
                    fillOpacity: 1,
                    fillColor: cores[2],
                    interactive: true,
                });
            }
            if (layer.feature.properties[variavel] > vetor[2] && layer.feature.properties[variavel] <= vetor[3] ) {
                layer.setStyle ({
                    pane: 'pane_'+area.id,
                    opacity: 1,
                    color: 'rgba(129,129,129,1.0)',
                    dashArray: '',
                    lineCap: 'butt',
                    lineJoin: 'miter',
                    weight: 0.3, 
                    fill: true,
                    fillOpacity: 1,
                    fillColor: cores[3],
                    interactive: true,
                });
            }
            if (layer.feature.properties[variavel] > vetor[3] && layer.feature.properties[variavel] <= vetor[4] ) {
                layer.setStyle ({
                    pane: 'pane_'+area.id,
                    opacity: 1,
                    color: 'rgba(129,129,129,1.0)',
                    dashArray: '',
                    lineCap: 'butt',
                    lineJoin: 'miter',
                    weight: 0.3, 
                    fill: true,
                    fillOpacity: 1,
                    fillColor: cores[4],
                    interactive: true,
                });
            }
            if (layer.feature.properties[variavel] > vetor[4] && layer.feature.properties[variavel] <= vetor[5] ) {
                layer.setStyle ({
                    pane: 'pane_'+area.id,
                    opacity: 1,
                    color: 'rgba(129,129,129,1.0)',
                    dashArray: '',
                    lineCap: 'butt',
                    lineJoin: 'miter',
                    weight: 0.3, 
                    fill: true,
                    fillOpacity: 1,
                    fillColor: cores[5],
                    interactive: true,
                });
            }
            if (layer.feature.properties[variavel] == NaN) {
                layer.setStyle ({
                    pane: 'pane_'+area.id,
                    opacity: 1,
                    color: 'rgba(129,129,129,1.0)',
                    dashArray: '',
                    lineCap: 'butt',
                    lineJoin: 'miter',
                    weight: 0.3, 
                    fill: true,
                    fillOpacity: 1,
                    fillColor: cores[6],
                    interactive: true,
                });
            }
            if (layer.feature.properties[variavel] == '') {
                layer.setStyle ({
                    pane: 'pane_'+area.id,
                    opacity: 1,
                    color: 'rgba(129,129,129,1.0)',
                    dashArray: '',
                    lineCap: 'butt',
                    lineJoin: 'miter',
                    weight: 0.3, 
                    fill: true,
                    fillOpacity: 1,
                    fillColor: cores[0],
                    interactive: true,
                });
            }
        });
    }
    else {
        window['layer_'+area.id].eachLayer(function (layer) {
            layer.setStyle ({
                pane: 'pane_'+area.id,
                opacity: 1,
                color: 'rgba(129,129,129,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 0.3, 
                fill: true,
                fillOpacity: 1,
                fillColor: '#ffffff',
                interactive: true,
            });
        });
    }
}
function info_update(layer) { 
    var clicado = document.getElementsByClassName('botao_variavel clicked');
    var ativado = document.getElementsByClassName('opcao_area clicked')[0].id;
    if (clicado[0] !== undefined) {
        var clicado = clicado[0].id;
        var local = clicado.indexOf('+');
        var local2 = clicado.indexOf('-');
        var eixo = clicado.substring(local2+1);
        var cor_vetor = Vetor_Cor_Eixos(eixo);
        var variavel_ = clicado.substring(local+1, local2);
        var variavel = variavel_.replaceAll('_', ' ');
        try {
            var deletar = document.getElementById('hover_distrito');
            deletar.remove();
            deletar = document.getElementById('hover_dado');
            deletar.remove();
            var cores = getElementsByClassName('cor hovered');
            for (var i = 0; i < cores.length; i++ ){
                cores[i].classList.remove('hovered');
            }
        }catch(err){}
        var lista = vetor_dados2(variavel_, window[layer.options.layerName]);
        var distrito = document.createElement('div');
        distrito.id = 'hover_distrito';
        distrito.className = 'titulo';
        if (ativado == 'area_ponderacao_2010' || ativado == 'setor_censitario_2010') {
            distrito.innerText = layer.feature.properties['nm_unidade_geografica']+' NO DISTRITO DE '+layer.feature.properties['nm_distrito'];
            var dado_grafico = soma_distrito(lista, layer)-layer.feature.properties[variavel_];
            var texto = 'DISTRITO';
        }
        else {
            distrito.innerText = ativado.toUpperCase()+': '+layer.feature.properties['nm_unidade_geografica'];
            var dado_grafico = soma(lista)-layer.feature.properties[variavel_];
            var texto = 'CIDADE';
        }
        document.getElementById('legenda').appendChild(distrito);
        var dado = document.createElement('div');
        dado.id = 'hover_dado';
        dado.className = 'dado';
        dado.innerText = layer.feature.properties[variavel_];
        document.getElementById('legenda').appendChild(dado);
        const layout = {height: 280,
                        width: 280,
                        paper_bgcolor: '#FFFFFF00',
                        plot_bgcolor: '#FFFFFF00',
                        legend: {
                            x: 1,
                            xanchor: 'right',
                            y: -80,
                            "orientation": "h",
                            bgcolor: '#FFFFFF00'
                        },
                        font: {
                            family: "Roboto Condensed",
                            size: 11,
                            color: '#7f7f7f'
                        },
                        transition: {
                            duration: 500
                        }
                    };
        var data = [{
                        values:[dado_grafico, layer.feature.properties[variavel_]], 
                        labels: [texto, 'SELECÃO'],
                        hole:.55,
                        type:"pie",
                        marker: {
                            colors: ['#818181', '#515151']
                        }
                    }];
        var vetor = quartil(lista);
        if (layer.feature.properties[variavel_] == '' ) {
            var cor = document.getElementById('cor0');
            cor.classList.add('hovered');
        }
        if (layer.feature.properties[variavel_] >= vetor[0] && layer.feature.properties[variavel_] <= vetor[1] ) {
            var cor = document.getElementById('cor1');
            cor.classList.add('hovered');
            data[0]['marker']['colors'][1] = cor_vetor[1];
            Plotly.newPlot("grafico_legenda", data, layout, {displayModeBar: false});
        }
        if (layer.feature.properties[variavel_] > vetor[1] && layer.feature.properties[variavel_] <= vetor[2] ) {
            var cor = document.getElementById('cor2');
            cor.classList.add('hovered');
            data[0]['marker']['colors'][1] = cor_vetor[2];
            Plotly.newPlot("grafico_legenda", data, layout, {displayModeBar: false});
        }
        if (layer.feature.properties[variavel_] > vetor[2] && layer.feature.properties[variavel_] <= vetor[3] ) {
            var cor = document.getElementById('cor3');
            cor.classList.add('hovered');
            data[0]['marker']['colors'][1] = cor_vetor[3];
            Plotly.newPlot("grafico_legenda", data, layout, {displayModeBar: false});
        }
        if (layer.feature.properties[variavel_] > vetor[3] && layer.feature.properties[variavel_] <= vetor[4] ) {
            var cor = document.getElementById('cor4');
            cor.classList.add('hovered');
            data[0]['marker']['colors'][1] = cor_vetor[4];
            Plotly.newPlot("grafico_legenda", data, layout, {displayModeBar: false});
        }
        if (layer.feature.properties[variavel_] > vetor[4] && layer.feature.properties[variavel_] <= vetor[5] ) {
            var cor = document.getElementById('cor5');
            cor.classList.add('hovered');
            data[0]['marker']['colors'][1] = cor_vetor[5];
            Plotly.newPlot("grafico_legenda", data, layout, {displayModeBar: false});
        }
        if (layer.feature.properties[variavel] == NaN) {
            var cor = document.getElementById('cor6');
            cor.classList.add('hovered');
        }
    }
}
function tabela() {
    var ativado = document.getElementsByClassName('opcao_area clicked')[0];
    var camada = window['layer_'+ativado.id];
    try {
        try {
            document.getElementById('tabela innerhtml').remove();
        }catch(err){}
        var htmlinterno = document.createElement('div');
        htmlinterno.id = 'tabela innerhtml';
        var variaveis = document.getElementsByClassName('slider');
        var html = "<table><tr><th>"+ativado.innerText+"</th>";
        for (var i = 0; i < variaveis.length; i++) {
            var parte = "<th>"+variaveis[i].id+"</th>";
            html = html+parte;
        }
        html = html+'</tr>';
        var vetor = this[camada["options"]["dataVar"]].features
        for (var j = 0; j < vetor.length; j++) {
            if (ativado.id == 'area_ponderacao_2010' || ativado.id == 'setor_censitario_2010') {
                parte = '<tr><td>'+vetor[j].properties['cd_unidade_geografica']+'</td>';
            }
            else {
                parte = '<tr><td>'+vetor[j].properties['nm_unidade_geografica']+'</td>';
            }
            html = html+parte;
            for (var i = 0; i < variaveis.length; i++) {
                var variaveis_ = variaveis[i].id.replaceAll(' ','_');
                parte = '<td>'+vetor[j].properties[variaveis_]+'</td>';
                html = html+parte;
            }
            html = html+'</tr>';  
        };
        html = html+'</table>';
        htmlinterno.innerHTML = html;
        var corpo = document.getElementById('tabela');
        corpo.style.width = (variaveis.length*110+110).toString()+'px';
        corpo.childNodes[0].style.width = (variaveis.length*110+105).toString()+'px';
        corpo.childNodes[1].style.width = (variaveis.length*110+105).toString()+'px';
        corpo.style.height = 'auto';
        if (vetor.length <= 17) {
            corpo.childNodes[1].style.height = 'auto';
        }
        else {
            corpo.childNodes[1].style.height = '570px';
        }
        document.getElementById('tabelabody').childNodes[0].childNodes[0].appendChild(htmlinterno);
    }catch(err){}
}
function soma(vetor){
    var soma = 0;
    for (var i = 0; i < vetor.length; i++){
        soma = soma + vetor[i];
    }
    return(soma);
}
function soma_distrito(vetor, lyr){
    var listad = vetor_dados2('nm_distrito', window[lyr.options.layerName]);
    var distrito = lyr.feature.properties['nm_distrito'];
    var soma = 0;
    for (var i = 0; i < vetor.length; i++){
        if (listad[i] == distrito){
            soma = soma + vetor[i];
        }
    }
    return(soma);
}
function legenda_edicao(){
    var classebotao = event.target.className;
    if (classebotao == "botao_editar") {
        event.target.classList.add('clicked');
        document.getElementById('coltexto').classList.add('fora_da_tela');
        document.getElementById('colinput').classList.remove('fora_da_tela');
    }
    else {
        event.target.classList.remove('clicked');
        document.getElementById('colinput').classList.add('fora_da_tela');
        document.getElementById('coltexto').classList.remove('fora_da_tela');
    }
}