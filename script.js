var display= document.getElementById('display');
var minutos= document.getElementById('minutos');
var segundos= document.getElementById('segundos');
var comecar= document.getElementById('comecar');
var stop= document.getElementById('stop');


var cronometroSeg;

var minutoAtual;
var segundoAtual;

var intervalo; 

for(var i =0; i <=60; i++){
    minutos.innerHTML += '<option value="'+i+'">'+i+'</option>';
}
for(var i =0; i <60; i++){
    segundos.innerHTML += '<option value="'+i+'">'+i+'</option>';
}

stop.addEventListener('click', function(){
    document.getElementById("sound").pause();
    document.getElementById("sound").currentTime=0;
    stop.style.display='none';
    
})
comecar.addEventListener('click', function(){
    minutoAtual= minutos.value;
    segundoAtual= segundos.value;
    
    display.childNodes[1].innerHTML= minutoAtual + ':' +segundoAtual;

    intervalo= setInterval(function(){
        
        segundoAtual--;
        if(segundoAtual<=0){
            if(minutoAtual>0){
                minutoAtual--;
                segundoAtual=59;
            }else{
                document.getElementById("sound").play();
                stop.style.display='grid';
                clearInterval(intervalo);
            }
        }
        display.childNodes[1].innerHTML= minutoAtual + ':' +segundoAtual;
    
    }, 1000)
})

