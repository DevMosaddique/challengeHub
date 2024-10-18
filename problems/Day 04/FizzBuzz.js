//FizzBuzz Game

function GetFizzBuzz(num) {
    const FizzBuzzArr = []
    if(num <= 0) return "Give a non-negative Integer!"
    if(!Number.isInteger(num)) return "Give a non-negative Integer!"

    for (let i = 1; i <= num; i++) {
         if(i%3 === 0 && i % 5 === 0){
            FizzBuzzArr.push('FizzBuzz')
        }else if(i %3 === 0){
            FizzBuzzArr.push('Fizz')
        }else if(i %5 === 0){
            FizzBuzzArr.push('Bizz')
        }else {
            FizzBuzzArr.push(i)
        }

    }

    return FizzBuzzArr;
}

console.log(GetFizzBuzz(72))
