const lista = document.getElementById('output');

const nomi = ['Luca', 'Marco'];

const numeroNomi = 3;



// 1 ciclo di quanti nomi devo estrarre

//2 ad ogni ciclo salvo in una variabile un nome inserito con un promt

//3 aggiungo il nome all'array

//4 ciclo tutto l'array

//5 ad ogni ciclo aggiungo un li alla lista in pagina


for(let i = 0; i < numeroNomi; i++) {
  const nomeInserito = prompt(`Inserisci nome. ${i + 1} di ${numeroNomi}`);
  nomi.push(nomeInserito);
}

for(let i = 0; i < nomi.length; i++) {
  const li = document.createElement('li');
  li.innerHTML = nomi[i];

  lista.append(li);

}

console.log(lista)

console.log(nomi);