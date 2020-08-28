var sortNumbers = [99, 34, 12, 87, 1, 10, 13, 24];

function bubbleSort (arr) {
    for (let i = 0; i < arr.length; i ++) {
        for(let j = arr.length; j > i ; j --){
            if (arr[j-1] > arr[j]){
                var temp = arr[j];
                arr[j] = arr[j-1];
                arr[j-1] = temp;
            }
        }
    }
    console.log(arr);
}

bubbleSort(sortNumbers);