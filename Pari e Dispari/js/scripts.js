//  far scegliere all'utente tra dispari o pari
 let choose = prompt("Fai una scelta tra numeri Pari o Dispari");
 console.log(choose);

// far scegliere all'utente un numero da 1 a 5
 let userNumber = parseInt(prompt("Scrivi un numero da 1 a 5"));
 console.log("Il numero del user è:", userNumber);

 let user = document.getElementById("userchoose").innerHTML = 
"Hai scelto un numero: " + choose + "Il tuo numero è " + userNumber;

// generare un numero random per il pc
function pcgenerateRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let numeroRandompc = pcgenerateRandom(1,5);
console.log("Il numero del computer è:",numeroRandompc);

let pc = document.getElementById("pcchoose").innerHTML = 
"Il tuo avversario ha scelto il numero: " + numeroRandompc;

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.(se l'utente ha scelto pari e la somma dei due numeri è pari ha vinto l'utente sennò ha perso)

let sum = userNumber + numeroRandompc;
document.getElementById("sum").innerHTML = "la somma tra i due numeri è:" + sum;
console.log("la somma tra i due numeri è:",sum);

function isEven(sum) {
    if (sum % 2 == 0) {
        return true;
    }else
        return false;
}

console.log('Il risultato è :', isEven(sum));
// let result = document.getElementById("result").innerHTML = 
// "Il vincitore è : " + theWinner;

// let theWinner;

    if (choose == (sum % 2 == 0)) {
        document.writeln('Hai vinto!'); 
    }else if (choose == (sum % 2 != 0)){
        document.writeln('Hai vinto!');
    }else{
        document.writeln('Hai perso!'); 
    }
    
// let result = document.getElementById("result").innerHTML = 
// "Il vincitore è : " + theWinner;