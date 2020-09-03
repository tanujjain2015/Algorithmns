
// var array_length;
// function swap(arr, indexA, indexB){
//     var temp = arr[indexA];
//     arr[indexA] = arr [indexB];
//     arr[indexB] = temp;
// }

// function heap_root(input, i){
//     var left_child = 2 * i;
//     var right_child = 2 * i +1 ;
//     var max = i;

//     if (left_child < array_length && input[left_child] > input[max]){
//         max = left_child;

//     }
//     if (right_child < array_length && input[right_child] > input[max]){
//         max = right_child;
//     }

//     if (max !=i ){
//         swap(input, i, max);
//         heap_root(input, max);
//     }
// }

// function heap_sort(input){
//     array_length = input.length;
//     for (var i = (Math.floor(array_length/2)); i > 0; i--){
//         heap_root(input,i);
//     }
//     console.log(input);
//     for (var j = input.length - 1; j > 0; j--) {
//         console.log("Value of j=",j);
//         console.log("Value of input",input[j]);
//         console.log("Value of array_length",array_length);
//         console.log("Value of input[0]",input[0]);
//         swap(input, 0, j);
//         console.log(input);
//         array_length--;
//         heap_root(input, 0);
//         console.log(input);
//     }

//     input.unshift(input.pop())

// }

function maxHeap(input, i) {
    const left = 2 * i + 1
    const right = 2 * i + 2
    let max = i

    if (left < arrLength && input[left] > input[max]) {
        max = left
    }

    if (right < arrLength && input[right] > input[max])     {
        max = right
    }

    if (max != i) {
        swap(input, i, max)
        maxHeap(input, max)
    }
}

function swap(input, indexA, indexB) {
    const temp = input[indexA]

    input[indexA] = input[indexB]
    input[indexB] = temp
}

function heapSort(input) {   
    arrLength = input.length

    for (let i = Math.floor(arrLength / 2); i >= 0; i -= 1)      {
        maxHeap(input, i)
      }

    for (i = input.length - 1; i > 0; i--) {
        swap(input, 0, i)
        arrLength--

        maxHeap(input, 0)
    }
    return
}

let arrLength

const list = [ 1,3, 5, 7, 2, 4, 6, 8, 14, 9, 10, 11];

const sorted = heapSort(list)

console.log(list)

//var sortNumbers = [99, 34, 12, 87, 1, 10, 13, 24];
// var sortNumbers = 
// heap_sort(sortNumbers);
// console.log(sortNumbers);

