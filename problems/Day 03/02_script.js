
function findLongestWord(str) {
    let wordArr = str.split(" ");
    let wordLengthArr = []

    for (let i = 0; i < wordArr.length; i++) {
        wordLengthArr.push(wordArr[i].length)
    }
    maxLengthWord = Math.max(...wordLengthArr)
    /*
    - ...wordLengthArr spread the [10, 2, 7] => 10, 2, 7 [array => individual element]
    - and math.max choosed max number from it ie. 10
    */

    for(let i = 0; i < wordArr.length; i++){
        if (wordArr[i].length === maxLengthWord) {
            console.log(wordArr[i]);
        }
    }
}
findLongestWord("The quick brown fox jumped over the lazy dog");  // Output: "jumped"
findLongestWord("JavaScript is amazing"); //output: Javascript
