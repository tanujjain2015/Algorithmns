var arrLength 

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
    return input;
}

function topK(arr, k) {
    if (arr.length < k){
        var top3 = new Set(arr);
        return top3
    }
    // var newArr = heapSort(arr);
    

    var  kvalue = new Set(heapSort(arr));
    //console.log(kvalue);
    if (k >= kvalue.size) {
        return Array.from(kvalue);
    } else {
        return Array.from(kvalue).slice(kvalue.size-k, kvalue.size);
    }
    
}

var sortNumbers = [4,8,9,6,6,2,10,2,8,1,2,9];
console.log(topK(sortNumbers,11));
