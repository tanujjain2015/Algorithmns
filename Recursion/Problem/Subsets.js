

function subset(input){
    var result = []; 
    function helper(input, index, slate){
        if (index == input.length){
            console.log(slate);
            result.push(...slate);
            return;
        } else {
            helper(input,index+1,slate);
            slate.push(input[index]);
            helper(input, index+1 , slate);
            slate.pop(slate.length-1);
        }
    }
    helper(input,0,new Array())
    return result;
}

var input = [1,2,3]
console.log(subset(input))

