
function (arr, k){
    helper (arr, k, 0 , arr.length -1);
}

function partition () {
    
}

function helper (arr, k, start , end){

    if (start > end) return
    var pivotIndx = partition(arr, start, end);

    var n = arr.length;
    if (pivotIndx == n-k) {
        return input[n-k];
    }else if (pivotIndx > n-k){
        return helper (arr, k, start, pivotIndx-1)
    } else {
        return helper (arr, k, pivotIndx +1, end)
    }
}