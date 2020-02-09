// JavaScript Document

var dropdown;
var dropdown = false;

function myFunction(){
"use strict";
if (dropdown === true) {dropdown = false;} else {dropdown = true;}
down(); //Troca as variáveis e executa a função down
}

function down(){ //Define se o menu mobile vai aparecer ou não
"use strict";
if (dropdown === true){
	document.getElementById('menu').style.display = 'block';
	document.getElementById('botao').style.display = 'block';
	document.getElementById('botao').style.transform = 'rotate(180deg)';
	document.getElementById('botao').innerHTML = '&#9660;';
	}
	else
	{
	document.getElementById('menu').style.display = 'none';
	document.getElementById('botao').style.display = 'block';
	document.getElementById('botao').style.transform = 'rotate(0deg)';
	}
}

resize();
window.onresize = resize; //Chama a função resize quando mudar o tamanho da janela

function resize(){
"use strict";
if (window.innerWidth > 500){ //Reajusta ao padrão normal da página
	document.getElementById('menu').style.display = 'block';
	document.getElementById('botao').style.display = 'none';
	document.getElementById('botao').style.transform = 'rotate(0deg)';
	dropdown = false;
	}
	else
	{down();}
}
