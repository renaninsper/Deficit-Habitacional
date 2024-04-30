function FilterLayer(Filter, Filter_) {
    var lyr = window['layer_'+document.getElementsByClassName('opcao_area clicked')[0].id];
    if ("options" in lyr && "dataVar" in lyr["options"]){
        features = this[lyr["options"]["dataVar"]].features.slice(0);
        try{
            sliderVals = document.getElementById(Filter).noUiSlider.get();
            try{
                if (Filter_ in features[0].properties && Filter_ != 'Indice2'){
                    function corte(features) {
                        return features.properties[Filter_] > sliderVals[0] && features.properties[Filter_] < sliderVals[1];
                    }
                    features = features.filter(corte);


                   
                }
                /*if (Filter_ in features[0].properties && Filter_ == 'Indice2' && number == 0) {
                    for (i = features.length - 1; i >= 0; --i){
                        if (features[i].properties[Filter_] < sliderVals[0] || features[i].properties[Filter_] > sliderVals[1]){
                      features.splice(i,1);
                    }
                  }
                }
                if (Filter_ in features[0].properties && Filter_ == 'Indice2' && number > 0) {
                    for (i = features.length - 1; i >= 0; --i){
                        if ( mp2(features, i)< sliderVals[0] || mp2(features, i) > sliderVals[1]){
                            features.splice(i,1);
                        }
                    }
                }*/
            } catch(err){}
        } catch(err){}
        this[lyr["options"]["layerName"]].clearLayers();
        this[lyr["options"]["layerName"]].addData(features);
    }
    cont = cont + 1;
    if (cont > 0){
        if (features.length > 1) {
            change_style();
            AtualizaGrafico();
        }
        if (number > 0){
          change_popup();
        }
    }
}