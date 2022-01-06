const inp =document.querySelector('#sayi')

const but = document.querySelector('#baslat')

but.addEventListener('click',function(){

   
    if(inp.value === ''){
       
    alert('LUTFEN BIR SAYI GIRINIZ')
    }
    else if (inp.value == sayi){
        alert ('mukemmel')

    }
    else (inp.value < sayi)
     alert ('tekrar deneyimn')
    

});


var sayi =Math.floor(Math.random()*(100-10)) + 10
console.log(sayi)

function uret(max,min){
    console.log(Math.floor(Math.random)*(max-min)+min)
}
uret(50,90)

