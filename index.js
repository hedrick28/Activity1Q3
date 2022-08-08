"use strict";
function vowelLetter(ch) {
    if (ch != 'a' && ch != 'e' && ch != 'i'
        && ch != 'o' && ch != 'u' && ch != 'A' && ch != 'E' && ch != 'I'
        && ch != 'O' && ch != 'U') {
        return false;
    }
    return true;
}
// Function that replaces consonant with
// next immediate consonant alphabetically
function replaceAlphabets(s) {
    var newArray = [];
    // Start traversing the string
    for (var i = 0; i < s.length; i++) {
        let nextLetter = String.fromCharCode(s[i].charCodeAt(0) + 1);
        // if character is z,
        // than replace it with character b
        if (s[i] == 'z' || s[i] == 'Z') {
            newArray.push("A");
        }
        else if (vowelLetter(s[i]) == false) {
            if (vowelLetter(nextLetter) == true) {
                newArray.push(nextLetter.toUpperCase());
            }
            else if (vowelLetter(nextLetter) == false) {
                if (/^[a-zA-Z]+$/.test(s[i])) {
                    newArray.push(nextLetter.toLowerCase());
                }
                else {
                    newArray.push(s[i]);
                }
            }
        }
        else if (vowelLetter(s[i]) == true) {
            newArray.push(nextLetter);
        }
    }
    return newArray.join('');
}
// Driver code
var s = "Cat30".split('');
console.log(replaceAlphabets(s));
