console.log("works!")

const oddNums = []


while( oddNums.length < [10] ){
    
    n = parseInt(prompt("Inserisci un numero"))
    nInt = parseInt(n)

    let mod2 = ( n % 2 === 0 )

    if (isNaN(n) || (n = mod2)){
        console.log("no bueno")
    } else {
        oddNums.push(nInt)
    }
    
}

console.log(oddNums)
