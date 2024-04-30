function DropButton( select_type ) {
    var x, i, j, l, ll, selElmnt, a, b, c;
    /*Procura por todos os elementos de classe "custom-select":*/
    x = document.getElementsByClassName("custom-"+select_type);
    l = x.length;
    for (i = 0; i < l; i++) {
        selElmnt = x[i].getElementsByTagName("select")[0];
        ll = selElmnt.length;
        /*Pra cada elemento, cria um novo DIV que agirá como o item selecionado:*/
        a = document.createElement("DIV");
        a.setAttribute("class", select_type+"-selected");
        a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
        a.id = selElmnt.value;
        x[i].appendChild(a);
        /*Pra cada elemento, cria um novo DIV que conterá o option list:*/
        b = document.createElement("DIV");
        b.setAttribute("class", "select-items select-hide");
        for (j = 1; j < ll; j++) {
            /*Pra cada option no select element original,
            cria um novo DIV que agirá como um option item:*/
            c = document.createElement("DIV");
            c.innerHTML = selElmnt.options[j].innerHTML;
            c.addEventListener("click", function(e) {
                /*Quando um item é clicado, atualiza o select box original,
                e o selected item:*/
                var y, i, k, s, h, sl, yl;
                s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                sl = s.length;
                h = this.parentNode.previousSibling;
                for (i = 0; i < sl; i++) {
                    if (s.options[i].innerHTML == this.innerHTML) {
                        s.selectedIndex = i;
                        h.innerHTML = this.innerHTML;
                        h.id = s.options[i].value;
                        if ( select_type == 'select' ) {
                            reloadmapdata();
                        }
                        else {
                            AtualizaGrafico();
                        }
                        y = this.parentNode.getElementsByClassName("same-as-selected");
                        yl = y.length;
                        for (k = 0; k < yl; k++) {
                            y[k].removeAttribute("class");
                        }
                        this.setAttribute("class", "same-as-selected");
                        break;
                    }
                }
                h.click();
            });
            b.appendChild(c);
        }
        x[i].appendChild(b);
        a.addEventListener("click", function(e) {
            /*Quando o select box é clicado, fecha quaisquer outros select boxes,
            e abre/fecha o select box atual:*/
            e.stopPropagation();
            closeAllSelect(this);
            this.nextSibling.classList.toggle("select-hide");
            this.classList.toggle("select-arrow-active");
        });
    }
    function closeAllSelect(elmnt) {
        /*Função que fecha todos os select boxes no documento,
        exceto o select box atual:*/
        var x, y, i, xl, yl, arrNo = [];
        x = document.getElementsByClassName("select-items");
        y = document.getElementsByClassName(select_type+"-selected");
        xl = x.length;
        yl = y.length;
        for (i = 0; i < yl; i++) {
            if (elmnt == y[i]) {
                arrNo.push(i)
            } 
            else {
                y[i].classList.remove("select-arrow-active");
            }
        }
        for (i = 0; i < xl; i++) {
            if (arrNo.indexOf(i)) {
                x[i].classList.add("select-hide");
            }
        }
    }
    /*Se o usuário clica em qualquer lugar fora do select box,
    fecha todos os select boxes:*/
    document.addEventListener("click", closeAllSelect);
}
function fechar_box_areas() {
    var clique = event.target;
    var menu = document.getElementById('area');
    var menuclasslist = menu.classList;
    menuclasslist = [...menuclasslist].map(element => element)
    if (clique.className != 'opcao_area' && !(menuclasslist.includes('fora_da_tela')) && clique.id != 'botao_area') {
        menu.classList.add('fora_da_tela');
        document.getElementById('botao_area').classList.remove('clicked');
    }
}