var sortNumbers = [99, 34, 12, 87, 1, 10, 13, 24];

function insertionSort (arr) {
     //if Array length is zero then return
    if (arr.length <= 1) return;
    //Start with index 2 in array
    for (let i = 1; i < arr.length; i++){
        //Store value of i in temp. this is the comparison value
        var temp = arr[i];
        var j = i - 1;
        while (j >=0 && arr[j] > temp){
            arr[j+1] = arr [j];
            j = j -1;
            arr[j+1] = temp;
        }
    }
    console.log(arr);
}

insertionSort(sortNumbers);
