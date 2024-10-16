function isPalindrome(str) {

    // let originalSentence = str.replaceAll(',', '').replaceAll(' ', '').toLowerCase()
    /*
    Other Way to write | ^ reverse the condition means it will replace everything eith '' except a-z, 0-9 (irrespectivre of Case)
    ===++++++++++++++++++===
        let originalSentence = str.replace(/^[a-z0-9]/gi, '').toLowerCase()
    */

    let originalSentence = str.toLowerCase()
console.log(originalSentence);

    let reversedSentence = originalSentence.split('').reverse().join('')

    if(originalSentence === reversedSentence){
        console.log(true)
    }else{
        console.log(false);
    }

}
isPalindrome('Madam, I\'m Adam'); // Output: false
isPalindrome('A man, a plan, a canal, Panama'); // Output: true
