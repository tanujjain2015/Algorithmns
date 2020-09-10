

function dsHelper (input, index, slate, result){
    if (index == input.length){
        result.push (...slate);
        return 
    } else {
        slate.push(input[index]);
        dsHelper(input,index+1,slate, result);
        slate.pop();
        dsHelper(input,index+1, slate, result);
    }
}

function readstring (arr){
    var result = [];
    var slate = [];
    dsHelper (arr,0,slate,result);
    console.log(result);
}

var arraystring = [1, 2, 3];
console.log(readstring(arraystring));