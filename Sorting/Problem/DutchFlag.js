var sortBalls = ["G", "B","G","G","R","B","R","G"];
//var sortBalls = [1,2,3,1,1,2,2,1,2,3];


function swap (input, indxA, indxB){
    var temp = input[indxA];
    input[indxA] = input[indxB];
    input[indxB] = temp;
}

function dutch_flag_sort (arr) {
    
    var i = 0;
    var hi = arr.length -1;
    var pivot = 0;

    while (i <= hi){
        if (arr[i] == 'G') {
            i++;
        }else if (arr[i] == "R"){
            swap(arr, i, pivot);
            pivot ++;
            i++;
        } else {
            swap(arr, i, hi);
            hi--;
        } 
    }
    return arr;
}


console.log(dutch_flag_sort(sortBalls));



// while (leftIndex < rightIndex) {
//     if (arr[leftIndex] == "B" && arr[rightIndex] == "R"){
//         swap(arr, leftIndex, rightIndex);
//         leftIndex++;
//         rightIndex--;
//     }
//     if (arr[leftIndex] == "R"){
//         leftIndex++;
//     }

//     if (arr[leftIndex] == "G"){
//         var tempLeftIndex =leftIndex + 1;
//         while (tempLeftIndex < rightIndex) {
//             if ((arr[tempLeftIndex] != "G" && arr[leftIndex] == "G")){
//                 swap (arr,leftIndex, tempLeftIndex);
//             }
//             tempLeftIndex++;
//         }
//     }
        
//     if (arr[leftIndex] == "B"){
//         var tempLeftIndex =leftIndex + 1;
//         while (tempLeftIndex < rightIndex) {
//             if (((arr[tempLeftIndex] == "R" || arr[tempLeftIndex]) == "G" && arr[leftIndex] == "B")){
//                 swap (arr,leftIndex, tempLeftIndex);
                
//             }
//             tempLeftIndex++;
//         }
//     }


//     if (arr[rightIndex] == "B" ){
//         rightIndex--;
//     }

//     // if ( arr[rightIndex] == "G" || arr[rightIndex] == "B"){
//     //     swap(arr,rightIndex, leftIndex+1);
//     // }

//     if (arr[rightIndex] == "R"){
//         var tempLeftIndex = rightIndex - 1;
//         while (tempLeftIndex > leftIndex) {
//             if ((arr[tempLeftIndex] != "R" && arr[rightIndex] == "R")){
//                 swap (arr,leftIndex, tempLeftIndex);
//             }
//             tempLeftIndex--;
//         }
//     }
//     if (arr[leftIndex] == "G"){
//         var tempLeftIndex =leftIndex + 1;
//         while (tempLeftIndex > leftIndex) {
//             if ((arr[tempLeftIndex] != "G" && arr[rightIndex] == "R")){
//                 swap (arr,leftIndex, tempLeftIndex);
//             }
//             tempLeftIndex--;
//         }
//     }
// }