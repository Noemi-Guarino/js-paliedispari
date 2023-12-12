
let userWord = prompt("Inserisci una parola");

let divide = userWord.split('').reverse().join('');
console.log(divide);

if(userWord == divide){
    console.log('la parola è palindroma');
    document.writeln('la parola è palindroma');
  } else {
    console.log('la parola non è palindroma');
    document.writeln('la parola non è palindroma');
  }

