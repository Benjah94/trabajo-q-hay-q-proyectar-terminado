let boton1 = document.querySelector('#boton1')
let imagen1 = document.querySelector('#imagen1')
let texto1 = document.querySelector('#texto1')
let imagenCambiada = false;
boton1.onclick = function(){

if(imagenCambiada==false){
    imagen1.src='https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/cd06c88edba348079e67af01014db201_9366/camiseta-alternativa-river-plate-22-23.jpg'
    texto1.innerText = 'Camiseta del Club Atletico River Plate VISITANTE'
    imagenCambiada=true
    
}else{
    imagen1.src='riveeeeeeeer.jpg'
    texto1.innerText = 'Camiseta del Club Atletico River Plate LOCAL'
    imagenCambiada=false
}
}
//CAMISETA RIVER PLATE
let boton2 = document.querySelector('#boton2')
let imagen2 = document.querySelector('#imagen2')
let texto2 = document.querySelector('#texto2')
let imagenCambiada2 = false;
boton2.onclick = function(){

if(imagenCambiada2==false){
    imagen2.src='https://cdnx.jumpseller.com/prueba-22/image/35590817/resize/640/640?1698683140'
    texto2.innerText = 'Camiseta de la Seleccion Argentina VISITANTE'
    imagenCambiada2=true
    
}else{
    imagen2.src='Argentina23.jpg'
    texto2.innerText = 'Camiseta de la Seleccion Argentina LOCAL'
    imagenCambiada2=false
}
}
//CAMISETA ARGENTINA
let boton3 = document.querySelector('#boton3')
let imagen3 = document.querySelector('#imagen3')
let texto3 = document.querySelector('#texto3')
let imagenCambiada3 = false;
boton3.onclick = function(){

if(imagenCambiada3==false){
    imagen3.src='https://img4.dhresource.com/0x0/f3/albu/km/o/11/802e86f5-bfe7-43d2-94ce-63e745c88d90.jpg'
    texto3.innerText = 'Camiseta del Napoli VISITANTE'
    imagenCambiada3=true
    
}else{
    imagen3.src='napoli.png'
    texto3.innerText = 'Camiseta del Napoli LOCAL'
    imagenCambiada3=false
}
}
//CAMISETA NAPOLI
let boton4 = document.querySelector('#boton4')
let imagen4 = document.querySelector('#imagen4')
let texto4 = document.querySelector('#texto4')
let imagenCambiada4 = false;
boton4.onclick = function(){

if(imagenCambiada4==false){
    imagen4.src='https://www.oldfootballshirts.com/img/shirts/344/roma-away-football-shirt-1998-1999-s_27540_1.jpg'
    texto4.innerText = 'Camiseta de la Roma VISITANTE'
    imagenCambiada4=true
    
}else{
    imagen4.src='roma.png'
    texto4.innerText = 'Camiseta de la Roma LOCAL'
    imagenCambiada4=false
}
}
//CAMISETA ROMA
let boton5 = document.querySelector('#boton5')
let imagen5 = document.querySelector('#imagen5')
let texto5 = document.querySelector('#texto5')
let imagenCambiada5 = false;
boton5.onclick = function(){

if(imagenCambiada5==false){
    imagen5.src='https://www.oldfootballshirts.com/img/shirts/538/san-lorenzo-away-football-shirt-2005-s_10306_1.jpg'
    texto5.innerText = 'Camiseta de San Lorenzo VISITANTE'
    imagenCambiada5=true
    
}else{
    imagen5.src='san lorenzo.webp'
    texto5.innerText = 'Camiseta de San Lorenzo LOCAL'
    imagenCambiada5=false
}
}
//SAN LORENZO
