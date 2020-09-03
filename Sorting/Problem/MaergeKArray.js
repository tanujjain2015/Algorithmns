
// let arrLength
// function mergeArrays(arr) {
//      var input = [];
//      var size = arr.length;
//      var interval = arr[0].length;
//      var index = 0;
//      if (size == 1) {
//          return arr;
//      } else {
//          input.push(...arr[0]);
//      }
     
//      for (var i =1; i < arr.length; i = i +1){
//          if (i == 0) {
//              index = index +1;
//          }
//          input.push(...arr[i]);
//      }
//      heapSort(input);

//      if (getSortOrder(arr) == "ascending"){
//         return input;
//      } else {
//         return input.reverse();
//      }
// }

// function mergeArray (arr, input, leftIndex, rightIndex ){

//     for ()
// }

// function maxHeap(input, i) {
//     const left = 2 * i + 1
//     const right = 2 * i + 2
//     let max = i

//     if (left < arrLength && input[left] > input[max]) {
//         max = left
//     }

//     if (right < arrLength && input[right] > input[max])     {
//         max = right
//     }

//     if (max != i) {
//         swap(input, i, max)
//         maxHeap(input, max)
//     }
// }

// function swap(input, indexA, indexB) {
//     const temp = input[indexA]

//     input[indexA] = input[indexB]
//     input[indexB] = temp
// }

// function heapSort(input) {   
//     arrLength = input.length

//     for (let i = Math.floor(arrLength / 2); i >= 0; i -= 1)      {
//         maxHeap(input, i)
//       }

//     for (i = input.length - 1; i > 0; i--) {
//         swap(input, 0, i)
//         arrLength--

//         maxHeap(input, 0)
//     }
//     return
// }

// function getSortOrder(arr) {
//     var length  = arr.length;
//     var index = 0;
//     var sortOrder = "null";
//     for (var i = 0; i < arr.length; i++){
//         if (sortOrder == "null" && arr[i].length > 1 ) {
//             for (var j = 1; j < arr[i].length; j++){
//                 if (arr[i][index] == arr[i][j]){
//                     sortOrder = "null";
//                 }else if (arr[i][index] <  arr[i][j]){
//                     sortOrder = "ascending";
//                     break;
//                 }else {
//                     sortOrder = "descending";
//                     break;
//                 } 
//             }
//         } else {
//             break;
//         }
//     } 
//     return sortOrder;
// }

// var  arr = [[1, 3, 5, 7],[2, 4, 6, 8],[14, 9, 10, 11]];
// var arr = [[6,10,15], [7,9,18]];
// console.log(mergeArrays(arr));










///////////////////////////////////////////////////
let arrLength
function mergeArrays(arr) {
    /*
     * Write your code here.
     */
     var input = [];
     for (var i =0; i < arr.length; i++){
         input.push(...arr[i]);
     }
     heapSort(input);

     if (getSortOrder(arr) == "ascending"){
        return input;
     } else {
        return input.reverse();
     }
}
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

function getSortOrder(arr) {
    var length  = arr.length;
    var index = 0;
    var sortOrder = "null";
    for (var i = 0; i < arr.length; i++){
        if (sortOrder == "null" && arr[i].length > 1 ) {
            for (var j = 1; j < arr[i].length; j++){
                if (arr[i][index] == arr[i][j]){
                    sortOrder = "null";
                }else if (arr[i][index] <  arr[i][j]){
                    sortOrder = "ascending";
                    break;
                }else {
                    sortOrder = "descending";
                    break;
                } 
            }
        } else {
            break;
        }
    } 
    return sortOrder;
}

var  arr = [[1, 3, 5, 7],[2, 4, 6, 8],[14, 9, 10, 11]];
var arr = [[6,10,15], [7,9,18]];
console.log(mergeArrays(arr));