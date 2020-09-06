function findZeroSum(arr) {
    // Write your code here.
    var  sum  =0;
    var tripletArray = [];

    for (var i = 0; i < arr.length ; i++){
        for (var j= i+1; j < arr.length; j++){
            for (var k=j+1; k < arr.length; k++){
                if (arr[i] + arr[j] + arr[k] == sum){
                    var temparr = [];
                    temparr.push (arr[i]);
                    temparr.push (arr[j]);
                    temparr.push (arr[k]);
                    tripletArray.push(temparr);
                }
            }
        }
    }
    return tripletArray;
}

var arr = [10, 3, -4, 1, -6, 9];
console.log(findZeroSum(arr));