function reverseString(str) {
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");  

    return joinArray; 
}
 
console.log(reverseString("hello"));
console.log(reverseString("Sergi"));
console.log(reverseString("However"));