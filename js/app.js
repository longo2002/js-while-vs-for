console.log("works!")
// ARRAY DA RIMEPIRE
const oddNums = [""]

// RECUPERO IL NUMERO
let n = parseInt(prompt("Inserisci un numero"))

// MODULO PER CAPIRE SE E' PARI
let mod2 = ( n % 2 === 0 )

// FILTRO IL NUMERO TRA PARI O DISPARI
while( oddNums.length = 6 ){
    
    n = parseInt(prompt("Inserisci un numero"))

    if (isNaN(n) || (n = mod2)){
        console.log("no bueno")
    } else {
        oddNums.push(n)
    }
    
}
console.log(oddNums)

// STAMPO L'ARRAY
console.log(oddNums)