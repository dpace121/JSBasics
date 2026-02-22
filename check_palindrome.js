// Checking for string palindrome

let str = "hello"

let rev = str.split("").reverse().join("")

if(str == rev){
    console.log("Palindrome")
}
else{
    console.log("Not Palindrome")
}

//Checking for palindrome without using reverse function

function isPalindrome(s){
    let i = 0
    let j = s.length - 1

    while(i < j){
        if(s[i] !== s[j])
        {
            return false;
        }
        i++;
        j--;
    }
    return true;
}
console.log(isPalindrome("madam"))

// Checking for palindrome number

let n = 121;
let rev1 = 0;
let temp = n;

while(temp > 0){
    rev1 = rev1 * 10 + (temp % 10)
    temp = Math.floor(temp/10)
}

if(n === rev1){
    console.log("Palindrome")
}