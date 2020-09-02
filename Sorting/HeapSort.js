
var array_length;
function swap(arr, indexA, indexB){
    var temp = arr[indexA];
    arr[indexA] = arr [indexB];
    arr[indexB] = temp;
}

function heap_root(input, i){
    var left_child = 2 * i;
    var right_child = 2 * i +1 ;
    var parent = Math.floor(i/2);
    var max = i;

    if (left_child < array_length && input[left_child] > input[max]){
        max = left_child;

    }
    if (right_child < array_length && input[right_child] > input[max]){
        max = right_child;
    }

    if (max !=i ){
        swap(input, i, max);
        heap_root(input, max);
    }
}

function heap_sort(input){
    array_length = input.length;
    for (var i = (Math.floor(array_length/2)); i > 0; i--){
        heap_root(input,i);
    }

    for (i = input.length - 1; i > 0; i--) {
        console.log("value of i", i);
        console.log("value of input[i]", input[i]);
        console.log("value of array_length", array_length);
        console.log("value of input[0]", input[0]);
        swap(input, 0, i);
        array_length--;
        heap_root(input, 0);
    }
   

}

var sortNumbers = [99, 34, 12, 87, 1, 10, 13, 24];
heap_sort(sortNumbers);
console.log(sortNumbers);

