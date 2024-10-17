// get a input
//use loop ( *= i)

function calculateFactorial(num) {
    if(typeof num !== 'number' || num < 0 || !Number.isInteger(num)) return "ERROR! Enter a valid Integer"

//using iterative approach for preventing stack overflow
    let factorialOfNum = BigInt(1)
    for(let i = 1; i <= num; i++){
        factorialOfNum *= BigInt(i)
    }

    return factorialOfNum
}

console.log(calculateFactorial(1000))
