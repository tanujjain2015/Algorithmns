const { Console } = require("console");

var sortNumbers = [99, 34, 12, 87, 1, 10, 13, 24];

function merge(arr, start, mid, end) {
    //if (start >= end) return ;

    console.log(start, mid, end);
    var arrSize1 = mid - start + 1;
    console.log("arrSize1 value is", arrSize1);
    var arrSize2 = end - mid;
    console.log("arrSize2 value is", arrSize2);

    var tempArr1 = [arrSize1]; 
    var tempArr2 = [arrSize2];

    var i, j, k;
    for (i = 0; i < arrSize1; i++){
        tempArr1[i] = arr[start + i];
    }
    console.log("tempArray1 value is", tempArr1);
    for (j= 0; j < arrSize2; j++){
        tempArr2[j] = arr[ start + mid  + j];
    }
    console.log("tempArray2 value is", tempArr2);

    i =0;
    j=0;
    k = start;

    while (i < arrSize1 && j < arrSize2) {
        //console.log (" I am inside while 1");
        console.log("Value of arr[i]",arr[i]);
        console.log("Value of arr[j]",arr[j]);
        if (tempArr1[i] <= tempArr2[j]){
            arr[k] = tempArr1[i];
            i++;
        } else {
            arr[k] = tempArr2[j];
            j++;
        }
        k++;
    }
    console.log (" I am here 2");
    while (i < arrSize1 ){
        console.log (" I am inside while 2");
        arr[k] = tempArr1[i];
        i++;
    }
    console.log (" I am here 3");
    while (j < arrSize2){
        console.log (" I am inside while 3");
        arr[k] = tempArr2[j];
        j++;
    } 
    console.log(arr);
}

function mergeSort(arr,start, end) {
    if (arr.length <= 1) return;

    if ( start < end) {
        console.log("value of start:", start);
        console.log("value of end:", end);
        var mid = (start + (end-1)) /2;
        console.log("value of Mid:", mid);1
        mergeSort(arr, start, mid);
        mergeSort(arr, mid+1, end);
        merge(arr, start, mid, end);
    }
    
}

mergeSort(sortNumbers, 0, sortNumbers.length -1);