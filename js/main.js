var cuadro=document.getElementById('container')
var body=document.querySelector('body');
var section=document.querySelector('section');
var footer_border_bottom=document.querySelector('.contenedor-footer');
/*Botones de main */
var boton__primario1=document.querySelector('#boton__primario1');
var boton__primario2=document.querySelector('#boton__primario2');
var boton__primario3=document.querySelector('#boton__primario3');
var boton__primario4=document.querySelector('#boton__primario4');
/*Botones de aside*/
var boton__secundario1=document.querySelector('#boton__secundario1');
var boton__secundario2=document.querySelector('#boton__secundario2');
var boton__secundario3=document.querySelector('#boton__secundario3');
var boton__secundario4=document.querySelector('#boton__secundario4');
/*Footer*/
var link_github=document.querySelector('footer p a');
var formulario_box1=document.querySelector('#input1')
var formulario_box2=document.querySelector('#input2')
var formulario_box3=document.querySelector('#input3')
var formulario_box4=document.querySelector('#input4')
var texttarea=document.querySelector('textarea')


cuadro.onclick=function(){
    cuadro.classList.toggle('active')
    body.classList.toggle('active');
    section.classList.toggle('active');
    footer_border_bottom.classList.toggle('active');
/*Botones de main */
    boton__primario1.classList.toggle('active');
    boton__primario2.classList.toggle('active');
    boton__primario3.classList.toggle('active');
    boton__primario4.classList.toggle('active');
/*Botones de aside*/
    boton__secundario1.classList.toggle('active')
    boton__secundario2.classList.toggle('active')
    boton__secundario3.classList.toggle('active')
    boton__secundario4.classList.toggle('active')
/*Footer*/
    formulario_box1.classList.toggle('active')
    formulario_box2.classList.toggle('active')
    formulario_box3.classList.toggle('active')
    formulario_box4.classList.toggle('active')
    texttarea.classList.toggle('active')
    link_github.classList.toggle('active')
}