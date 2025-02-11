window.onload = function(){


let start = 0;
let cadena = "";
let letras = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O",
    "P","Q","R","S","T","U","V","W","X","Y","Z"
];

for(let i = 0; i < 100; i++){
    fetch("https://api.pi.delivery/v1/pi?start="+start+"&numberOfDigits=100")
    .then(response => response.json())
    .then(function(data){
        console.log(data);
        var newNum = data.content.toString().match(/.{1,2}/g)
        newNum.forEach(element => {
            console.log(parseInt(element));
            let letra = String.fromCharCode(parseInt(element));
            if (letras.includes(letra)) {
                cadena += letra;
                
            }
                 
        });
 });

    start+=1000;

   
}

console.log(cadena);

}