
// k = holds Sum value for comparison
// 
function sumCombination (input, index, k, SumSoFar , slate, result, count) {
    if (SumSoFar > k ){
        return;
    }
    if (SumSoFar == k && count == 3){
        result.push (...slate);
        return;
    }

    if (index == input.length){
        return;
    }

    slate.push(input[index]);
    sumCombination (input, index+1, k, SumSoFar + input[index], slate, result, count++)
    slate.pop(slate.length-1);

    sumCombination (input, index+1, k, SumSoFar,    slate, result, count++);
}

function main(number, k ) {
    var result = []
    sumCombination(number, 0, k, 0, new Array(), result, 0 )
    console.log(result);
}

var sumNumber = [10, 3, -4, 1, -6, 9];
var k = 13

main(sumNumber, k);

