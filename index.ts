//function to check if the letter is a vowel
function vowelLetter(ch: string) {
    if (ch != 'a' && ch != 'e' && ch != 'i'
        && ch != 'o' && ch != 'u' && ch != 'A' && ch != 'E' && ch != 'I'
        && ch != 'O' && ch != 'U') {
        return false;
    }
    return true;
}

//function on replacing string
function replaceAlphabets(s: string[]) {
    var newArray: string[] = [];
    for (var i = 0; i < s.length; i++) {
        let nextLetter = String.fromCharCode(s[i].charCodeAt(0) + 1);
        // Checking if the alphabet is a 'z' or 'Z'
        if (s[i] == 'z' || s[i] == 'Z') {
            newArray.push("A");
        //Checking if the string is a consonant
        } else if (vowelLetter(s[i]) == false) {
            //Check if the next letter is a vowel or a consonant
            if (vowelLetter(nextLetter) == true) {
                newArray.push(nextLetter.toUpperCase());
            } else if (vowelLetter(nextLetter) == false) {
                //Check if the next value is a letter or a character
                if (/^[a-zA-Z]+$/.test(s[i])) {
                    newArray.push(nextLetter.toLowerCase())
                } else {
                    newArray.push(s[i]);
                }
            }
        // Check if the next value is a vowel
        } else if (vowelLetter(s[i]) == true) {
            newArray.push(nextLetter)
        }
    }
    return newArray.join('');
}


// Running of Scripts
var s = "Cat30".split('');
console.log(replaceAlphabets(s));