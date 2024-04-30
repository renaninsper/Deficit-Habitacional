function CriaGrafico() {
    for (i = 1; i <= 3; i++) {
        var eixox = document.createElement('div');
        eixox.innerHTML = '<span>Gráfico '+i+' eixo x: </span>';
        eixox.id = 'eixox';
        var eixoy = document.createElement('div');
        eixoy.innerHTML = '<span>Gráfico '+i+' eixo y: </span>';
        eixoy.id = 'eixoy';
        var indicadorx = document.createElement('div');
        indicadorx.innerHTML  = grafico_variaveis();
        indicadorx.className = 'custom-graph-select';
        indicadorx.id = 'x';
        document.getElementById("grafico"+i).appendChild(eixox);
        document.getElementById("grafico"+i).appendChild(indicadorx);
        var indicadory = document.createElement('div');
        indicadory.innerHTML  = grafico_variaveis();
        indicadory.className = 'custom-graph-select';
        indicadory.id = 'y';
        document.getElementById("grafico"+i).appendChild(eixoy);
        document.getElementById("grafico"+i).appendChild(indicadory);

        myDiv = document.createElement('div');
        myDiv.id = 'myDiv'+i;
        myDiv.style.display = 'inline-block';
        document.getElementById("grafico"+i).appendChild(myDiv); 
    }
}
function AtualizaGrafico() {
    const indicador2 = document.getElementsByClassName('graph-select-selected');
    var trace1 = {
        x: vetores(0),
        y: vetores(1),
        mode: 'markers',
        type: 'scatter',
        marker: { 
            size: pop(), 
            color: Vetor_Cor_Eixos(vetores_cores(0))[5], },
        text: mergeElementsAtIndex(fid(),dist()),
        hovertemplate:
        '<br>%{text}</br>' +
        "y: %{y:}<br>" +
        "x: %{x:}<br>" +
        "<extra></extra>"
    };
    var tamanho1 = {
        autosize: false,
        width: 280/window.devicePixelRatio,
        height: 268/window.devicePixelRatio,
        margin: {
            l: 25,
            r: 25,
            b: 25,
            t: 25,
            pad: 1
        },
        paper_bgcolor: '#FFFFFF',
        plot_bgcolor: '#FFFFFF',
        title: {
            text: 'Gráfico 1',
            font: {
                family: "Roboto Condensed",
                size: 11,
                color: '#7f7f7f'
            },
            xref: 'paper',
            x: 0.5,
        },
        xaxis: {
            title: {
                text: indicador2[0].innerHTML,
                font: {
                    family: "Roboto Condensed",
                    size: 9,
                    color: '#7f7f7f'
                }
            },
            showticklabels: true,
            tickfont: {
                family: "Roboto Condensed",
                size: 8,
                color: '#7f7f7f'
            },
        },
        yaxis: {
            title: {
                text: indicador2[1].innerHTML,
                font: {
                    family: "Roboto Condensed",
                    size: 9,
                    color: '#7f7f7f'
                }
            },
            showticklabels: true,
            tickfont: {
                family: "Roboto Condensed",
                size: 8,
                color: '#7f7f7f'
            },
        } 
    };
    var data1 = [trace1];
    Plotly.newPlot('myDiv1', data1, tamanho1, {displaylogo: false});
    var myPlot = document.getElementById('myDiv1');
    myPlot.on('plotly_hover', function(data1){
        data1.points.map(function(d){
            var poligono = d.text;
            layer_area_ponderacao_2010.eachLayer(function (layer){
                var dado = layer.feature.properties['fid'].concat(': ',layer.feature.properties['Distrito']);
                if (dado == poligono) {
                    layer.setStyle({
                        weight: 4,
                        color: '#666',
                        dashArray: '',
                        fillOpacity: 0.7
                    });
                    layer.bringToFront();
                    info_update(layer);
                }
            })
        });
    })
    .on('plotly_unhover', function(data1){
        layer_area_ponderacao_2010.resetStyle();
        change_style(layer_area_ponderacao_2010);
    });

    var trace2 = {
        x: vetores(2),
        y: vetores(3),
        mode: 'markers',
        type: 'scatter',
        marker: { size: pop(), color: Vetor_Cor_Eixos(vetores_cores(2))[5], },
        text: mergeElementsAtIndex(fid(),dist()),
        hovertemplate:
        '<br>%{text}</br>' +
        "y: %{y:}<br>" +
        "x: %{x:}<br>" +
        "<extra></extra>"
    };

    var tamanho2 = {
        autosize: false,
        width: 280/window.devicePixelRatio,
        height: 268/window.devicePixelRatio,
        margin: {
            l: 25,
            r: 25,
            b: 25,
            t: 25,
            pad: 1
        },
        paper_bgcolor: '#FFFFFF',
        plot_bgcolor: '#FFFFFF',
        title: {
            text: 'Gráfico 2',
            font: {
                family: "Roboto Condensed",
                size: 11,
                color: '#7f7f7f'
            },
            xref: 'paper',
            x: 0.5,
        },
        xaxis: {
            title: {
                text: indicador2[2].innerHTML,
                font: {
                    family: "Roboto Condensed",
                    size: 9,
                    color: '#7f7f7f'
                }
            },
            showticklabels: true,
            tickfont: {
                family: "Roboto Condensed",
                size: 8,
                color: '#7f7f7f'
            },
        },
        yaxis: {
            title: {
                text: indicador2[3].innerHTML,
                font: {
                    family: "Roboto Condensed",
                    size: 9,
                    color: '#7f7f7f'
                }
            },
            showticklabels: true,
            tickfont: {
                family: "Roboto Condensed",
                size: 8,
                color: '#7f7f7f'
            },
        } 
    };
    var data2 = [trace2];
    Plotly.newPlot('myDiv2', data2, tamanho2, {displaylogo: false});
    var myPlot = document.getElementById('myDiv2');
    myPlot.on('plotly_hover', function(data2){
        data2.points.map(function(d){
            var poligono = d.text;
            layer_area_ponderacao_2010.eachLayer(function (layer){
                var dado = layer.feature.properties['fid'].concat(': ',layer.feature.properties['Distrito']);
                if (dado == poligono) {
                    layer.setStyle({
                        weight: 4,
                        color: '#666',
                        dashArray: '',
                        fillOpacity: 0.7
                    });
                    layer.bringToFront();
                    info_update(layer);
                }
            })
        });
    })
    .on('plotly_unhover', function(data2){
        layer_area_ponderacao_2010.resetStyle();
        change_style(layer_area_ponderacao_2010);
    });

    var trace31 = {
        x: vetores_normalizado(4),
        name: indicador2[4].innerHTML,
        autobinx: false, 
        histnorm: "count", 
        marker: {
            color: "rgba(255, 100, 102, 0.7)", 
            line: {
                color:  "rgba(255, 100, 102, 1)", 
                width: 1
            }
        },
        opacity: 0.5, 
        type: "histogram", 
        xbins: {
            end: 1.0001, 
            size: 0.05, 
            start: -0.001
        }
    };

    var trace32 = {
        x: vetores_normalizado(5),
        name: indicador2[5].innerHTML,
        autobinx: false, 
        histnorm: "count", 
        marker: {
            color: "rgba(100, 200, 102, 0.7)", 
            line: {
                color:  "rgba(100, 200, 102, 1)", 
                width: 1
            }
        },
        opacity: 0.5, 
        type: "histogram", 
        xbins: {
            end: 1.0001, 
            size: 0.05, 
            start: -0.001
        }
    };

    var tamanho3 = {
        font: {
            family: "Roboto Condensed",
            size: 9,
            color: '#7f7f7f'
        },
        showlegend: true,
        legend: {
            x: 1,
            xanchor: 'right',
            y: 1,
            "orientation": "h",
            bgcolor: '#FFFFFF00'
        },
        bargap: 0.05, 
        bargroupgap: 0.2, 
        barmode: "overlay",
        autosize: false,
        width: 280/window.devicePixelRatio,
        height: 268/window.devicePixelRatio,
        margin: {
            l: 25,
            r: 25,
            b: 25,
            t: 25,
            pad: 1
        },
        paper_bgcolor: '#FFFFFF',
        plot_bgcolor: '#FFFFFF',
        title: {
            text: 'Histograma',
            font: {
                family: "Roboto Condensed",
                size: 11,
                color: '#7f7f7f'
            },
            xref: 'paper',
            x: 0.5,
        },
        xaxis: {
            title: {
                text: 'Dado Normalizado',
                font: {
                    family: "Roboto Condensed",
                    size: 9,
                    color: '#7f7f7f'
                }
            },
            showticklabels: true,
            tickfont: {
                family: "Roboto Condensed",
                size: 8,
                color: '#7f7f7f'
            },
        },
        yaxis: {
            title: {
                text: 'Quantidade',
                font: {
                    family: "Roboto Condensed",
                    size: 9,
                    color: '#7f7f7f'
                }
            },
            showticklabels: true,
            tickfont: {
                family: "Roboto Condensed",
                size: 8,
                color: '#7f7f7f'
            },
        } 
    };
    var data3 = [trace31, trace32];
    Plotly.newPlot('myDiv3', data3, tamanho3, {displaylogo: false});
    var myPlot = document.getElementById('myDiv3');
    myPlot.on('plotly_hover', function(data3){
        data3.points.map(function(d){
            var poligono = d.text;
            layer_area_ponderacao_2010.eachLayer(function (layer){
                var dado = layer.feature.properties['fid'].concat(': ',layer.feature.properties['Distrito']);
                if (dado == poligono) {
                    layer.setStyle({
                        weight: 4,
                        color: '#666',
                        dashArray: '',
                        fillOpacity: 0.7
                    });
                    layer.bringToFront();
                    info_update(layer);
                }
            })
        });
    })
    .on('plotly_unhover', function(data3){
        layer_area_ponderacao_2010.resetStyle();
    });
}
function grafico_variaveis() {
    var variaveis = document.getElementsByClassName('slider');
    var textoglobal = '';
    for (var i = 0; i < variaveis.length; i++) {
        if (i == 0) {
            var texto = '<select><option value="'+variaveis[i].id.replaceAll(' ', '_')+'">'+variaveis[i].id+'</option>'+
            '<option value="'+variaveis[i].id.replaceAll(' ', '_')+'">'+variaveis[i].id+'</option>';
        }
        if (i > 0 && i < variaveis.length) {
            var texto = '<option value="'+variaveis[i].id.replaceAll(' ', '_')+'">'+variaveis[i].id+'</option>';
        }
        textoglobal = textoglobal+texto;
    }
    textoglobal = textoglobal+'</select>';
    if (textoglobal == '</select>') {
        textoglobal = '<select><option value="Raca">Pretos, Pardos e Indígenas</option><option value="CadUni_Extrema_Pobreza">Extrema Pobreza</option><option value="CadUni_Pobreza">Pobreza</option><option value="Raca">Pretos, Pardos e Indígenas</option><option value="Mulher_Responsavel">Mulher Responsável</option><option value="CadUni_Imigrantes">Imigrantes</option><option value="Analfabetos">Analfabetos</option><option value="Populacao_Hab_Precaria">População em Hab Precária</option><option value="Populacao_Corticos">População em Cortiços</option><option value="Populacao_de_Rua">População de Rua</option><option value="Baixo_Peso_Nascer">Baixo Peso ao Nascer</option><option value="Linha_Pobreza_60">60 anos Linha de Pobreza</option><option value="Deficientes">Deficientes</option><option value="CadUni_BPC_Idoso">Idosos no BPC</option><option value="CadUni_BPC_Deficientes">Deficientes no BPC</option><option value="Ate_Ensino_Fundamental_18">Até Ensino Fundamental (>18)</option><option value="Sem_Saneamento_Basico">Sem Saneamento Básico</option><option value="Sem_Abastecimento_Agua">Sem Abastecimento de Água</option><option value="Sem_Coleta_Lixo">Sem Coleta de Lixo</option><option value="Populacao">População</option><option value="Domicilios">Domicílios</option></select>';
    }
    return(textoglobal);
}