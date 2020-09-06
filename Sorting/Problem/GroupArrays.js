var sortNumber = [99, 34, 12, 87, 1, 10, 13, 24];

function solve(arr){
   if (arr.length <= 1) {
       return arr
   }
    var left = 0;
    var right = arr.length -1;
    
    while (left < right){
        if ((arr[left] % 2 !== 0 && arr[right]%2 === 0)){
            swap(arr, left, right);
            left ++;
            right --;
        }
        if (arr[left] %2 === 0) {
            left ++;
        }

        if (arr[right] %2 !== 0) {
            right --;
        }

    }
    return arr;
}

function swap (input, indexA, indexB){
    var temp = input[indexA];
    input[indexA] = input[indexB];
    input[indexB] = temp;
}

console.log(solve(sortNumber));