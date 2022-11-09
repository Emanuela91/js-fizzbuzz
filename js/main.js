// Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

// faccio diventare una costante il div "container"
const contenitore = document.querySelector(".container");

// A livello Console stampo numeri da 1 a 100
for (let i = 1; i <= 100; i++){
    // poi creo all'interno del div i singoli box con i numeri
    const element = `<div class="box box-${i}">${i}</div>`;
    contenitore.innerHTML += element;
    
    // Se il numero è un multiplo di 3 stampo e di 5 stampo "FizzBuzz" e stampo in console
    else if (i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz",i);
    }
    
    // Se il numero è un multiplo di 3 stampo "Fizz" e stampo in console 
    if (i % 3 === 0){
        console.log("fizz",i);
    }
    
    // Se il numero è un multiplo di 5 stampo "Buzz" e stampo in console
    else if (i % 5 === 0){
        console.log("buzz",i);
    }
    
    else {
        console.log(i);
    }
}

