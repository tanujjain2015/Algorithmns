//var array = [1, 2, 3];
function permutationMain(input){
    var result = [];

    function swap (input, indexA, indexB){
        var temp = input[indexA];
        input[indexB] = input[indexA];
        input[indexA] = temp;
    }
    function permutation (input, index, slate){
        if (index == input.length){
            console.log(slate);
            result.push(...slate);
            return;
        } else {
            for (var pick = index; pick < input.length ; pick++){
                swap(input, index, pick);
                slate.push(input[index]);
                permutation(input,index+1,slate);
                slate.pop();
                swap(input, index, pick);
            }
        }
    }
    permutation(input,0,[])
    return result;
};
var input = [1,2,3];
console.log(permutationMain(input));