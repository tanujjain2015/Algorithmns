//Selection Sort. 
//Complexity O(N to the power 2)
    

var sortNumbers = [99, 34, 12, 87, 1, 10, 13, 24];

function selectionSort(arr) {
    for (let i =0; i < arr.length; i ++){
        var min_indx = i ;
        for (let j = i + 1; j < arr.length; j ++) {
            if (arr[j] < arr[min_indx]){
                min_indx =j;
            }
        }
        var temp = arr[i];
        arr[i] = arr[min_indx];
        arr[min_indx] = temp;
    }
 
    console.log(arr);
}

selectionSort(sortNumbers);