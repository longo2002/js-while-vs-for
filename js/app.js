console.log("works!")
// ARRAY DA RIMEPIRE
const oddNums = []

// RECUPERO IL NUMERO
let n = parseInt(prompt("Inserisci un numero"))

// MODULO PER CAPIRE SE E' PARI
let mod2 = ( n % 2 === 0 )

// FILTRO IL NUMERO TRA PARI O DISPARI
while( isNaN(n) || (n = mod2) ){
    n = parseInt(prompt("Inserisci un numero"))
}
oddNums.push(n)

// STAMPO L'ARRAY
console.log(oddNums)