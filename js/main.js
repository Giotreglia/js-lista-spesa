// Lista della spesa

const spesaDom = document.querySelector('#spesa');
console.log(spesaDom);

// Array lista della spesa

const listaSpesa = [

    "pane",
    "pasta",
    "sale",
    "zucchero",
    "patatine",
    "shampoo",
    "chatGPT",
    "pizza",
    "birra",
    "vino",
    "acqua"
];

console.log(listaSpesa);

// Ciclo while per inserire lista nell'html

let i = 0;

while(i < listaSpesa.length) {

    spesaDom.innerHTML += `<li>${listaSpesa[i]}</li>`;
    console.log(listaSpesa[i]);

    i++;
}



