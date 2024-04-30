function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* Move o div pelo header */
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* sem header, move o div por qualquer parte do elemento:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // Posição do mouse ao clicar:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // Calcula a nova posição do mouse:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // nova posição do elemento div:
    console.log(elmnt.offsetWidth);
    var positiontop = elmnt.offsetTop - pos2;
    var positionleft = elmnt.offsetLeft - pos1;
    var boxwidth = elmnt.offsetWidth;
    var boxheight = elmnt.offsetHeight;
    if ( positiontop >= 47 && positiontop <= (window.innerHeight - boxheight -5) ) {
      elmnt.style.top = positiontop + "px";
    }
    if ( positiontop < 47 ) {
      elmnt.style.top = "47px";
    }
    if ( positiontop > (window.innerHeight - boxheight - 5) ) {
      elmnt.style.top = (window.innerHeight - boxheight - 5) + "px";
    }
    if ( positionleft >= 5 && positionleft <= (window.innerWidth - boxwidth -5) ) {
      elmnt.style.left = positionleft + "px";
    }
    if ( positionleft < 5 ) {
        elmnt.style.left = "5px";
    }
    if ( positionleft > (window.innerWidth - boxwidth - 5) ) {
        elmnt.style.left = (window.innerWidth - boxwidth - 5) + "px";
    }
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}