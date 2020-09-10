function isCharNumber(c){
    return c >= '0' && c <= '9';
}
function helper (input, index, slate, result) {
    if (index == input.length){
        result.push(slate);
        return
    } else {
        if (isCharNumber(input[index])) {
            helper (input, index+1, slate + input[index], result);
        } else {
            helper (input, index+1, slate + input.charAt(index).toUpperCase() , result);
            helper (input, index+1, slate + input.charAt(index).toLowerCase(), result);
        }
    }
}

function readstring (arr){
    var result = []
    helper (arr,0,"",result);
    console.log(result);
}

var arraystring = "aBcde";
console.log(readstring(arraystring));