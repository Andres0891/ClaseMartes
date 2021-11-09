window.sr = ScrollReveal();
  sr.reveal('#txt', {
    duration: 6000,
    origin: 'left',
    distance: '100px'
  });
  window.sr = ScrollReveal();
  sr.reveal('#fondo', {
    duration: 6000,
    origin: 'left',
    distance: '100px'
  });

function encender(){
    document.getElementById("img").src="pic_bulbon.gif";
}
function apagar(){
    document.getElementById("img").src="pic_bulboff.gif";
}

function CambiarVerde(){
    document.getElementById("fondo").style.backgroundColor="Green";
    document.getElementById("cont").style.backgroundColor="blue";
}

function CambiarBlanco(){
    document.getElementById("fondo").style.backgroundColor="white";  
    document.getElementById("cont").style.backgroundColor="white";      
}



function agregar(){
    var Lista = document.getElementById("lista");
    var dato = document.getElementById("dato").value;
    var li = document.createElement("li");
    li.textContent= dato;
    Lista.appendChild(li);
    document.getElementById("dato").value="";
}
function eliminar(){
    var Lista = document.getElementById("lista");
    Lista.removeChild(Lista.lastElementChild);


}