const thermometer = () =>{
    let temp = document.getElementById('thermo');
    temp.innerHTML= '<i class="fas fa-thermometer-empty"></i>';
    setTimeout( ()=>{
        temp.innerHTML= '<i class="fas fa-thermometer-quarter"></i>';
        temp.style.color='#6495ED';
    },1000);
    setTimeout( ()=>{
        temp.innerHTML= '<i class="fas fa-thermometer-half"></i>';
        temp.style.color='#FFBF00';

    },2000);
    setTimeout( ()=>{
        temp.innerHTML= '<i class="fas fa-thermometer-full"></i>';
        temp.style.color='#D70040';

    },3000);
}
thermometer();
setInterval(thermometer, 4000);