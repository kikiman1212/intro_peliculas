
function videoUrl(kiko){
    document.getElementById("slider").src = kiko; /*onclick="videoUrl('vid/joker.mp4')  asi se pone en el div para que aparesca onclick="videoUrl('vid/joker.mp4')*/
	document.getElementById("K").src = ""; /*ESTA quita mi logo, la tube que investigar yo*/
	document.getElementById("titulo2").textContent = ""; /*ESTA quita lo escrito, la tube que investigar yo*/
	document.getElementById("verde").textContent = "";
}
function Para(recomendado){
    document.getElementById("verde").textContent = recomendado; /*ESTA pone con Nombre lo que yo ponga entre parentisis(), la tube que investigar yo
	onclick="Nombre('En una ciudad de traumas ')"*/
	
}

function Ano(fecha){
    document.getElementById("año").textContent = fecha; /*ESTA pone con Nombre lo que yo ponga entre parentisis(), la tube que investigar yo
	onclick="Nombre('En una ciudad de traumas ')"*/
	
}

function Nombre(tit){
    document.getElementById("titulo").textContent = tit; /*ESTA pone con Nombre lo que yo ponga entre parentisis(), la tube que investigar yo
	onclick="Nombre('En una ciudad de traumas ')"*/
	
}

function Logo(log){
    document.getElementById("logo").src = log; /*ESTA pone el logo que pongo entre parentisis onclick="Logo('img/icons/joker.png')"", la tube que investigar yo*/
	
}
function Poster(pos){
    document.getElementById("slider").src = pos; /*ESTA pone el logo que pongo entre parentisis onclick="Logo('img/icons/joker.png')"", la tube que investigar yo*/
	
}


const clip = document.querySelectorAll('.clip');
		for(let i = 0;i<clip.length; i++){
			clip[i].addEventListener('click',/*ESTA DE click, yo se la cambie por click, era mause esntra y se  repruducia, la tube que investigar yo*/
			function(e){
				clip[i].play()
			})
			clip[i].addEventListener('mouseout',
			function(e){
				clip[i].pause()
				clip[i].currentTime = 0;/*ESTA DE currentTime = 0, la tube que investigar yo*/
            })
	
		}

function saludo(){
	alert("Te saluda kiko, hola Campeón");
}


	