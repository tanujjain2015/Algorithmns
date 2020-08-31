

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  var sortingNumbers = [1,3,6,9];

  function sumOfTwoElement(arr, targetsum){
      var left = 0;
      var right = arr.length-1;

   while (left < right){
        if (arr[left] + arr[right] == targetsum){
            return true
        } else if (arr[left] + arr[right] < targetsum){
            ++left;
        } else {
            --right;
        }
    }   
  }

  console.log (sumOfTwoElement(sortingNumbers, 6));
  
  