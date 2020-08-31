
  function randomIntFromInterval (min, max){
      return Math.floor((Math.random() * ((max + 1) - min)) + min);
  }
  var sortNumbers = [99, 34, 12, 87, 1, 10, 13, 24];

  function quickSortHelper(arr, start, end){
    console.log("Start value is:", start);
    console.log("end value is:", end);
      if (start >= end){
          console.log(arr);
          return ;
      }

      var pivotIndex = randomIntFromInterval(start, end);
      //var pivotIndex = 3;
      console.log("RandomIndex value is:", pivotIndex);


      var temp = arr[start];
      arr[start] = arr[pivotIndex];
      arr[pivotIndex] = temp;
      //console.log("value of array is:", arr);
      
      var pivot  = arr[start];
      var smaller = start;
      var bigger = start;

      console.log("value of bigger is:", bigger,  arr[bigger]);
      console.log("value of end  is:", end);
      for (bigger = start +1 ; bigger < end ; bigger ++){
          
          if (arr[bigger] < pivot){
              smaller++;
              var swap = arr[smaller];
              arr[smaller] = arr[bigger];
              arr[bigger] = swap;
          }
      }
      console.log("value of array is:", arr);
      temp = arr[smaller];
      arr[smaller] = arr[start];
      arr[start] = temp;

      //console.log("value of array is:", arr);
      //process.exit();

      console.log("value of start, smaller-1 is:",start, arr[start], smaller-1, arr[smaller-1]);
      //console.log("value of array is:", arr);
      quickSortHelper(arr, start, smaller-1);
      console.log("value of smaller+1, bigger is:",smaller+1, arr[smaller+1] ,bigger, arr[bigger]);
      //console.log("value of array is:", arr);
      quickSortHelper(arr, smaller +1, bigger );

  }

  function quickSort(arr){
      if (arr.length <= 1) return;

      quickSortHelper(arr, 0, arr.length-1);
  }

quickSort(sortNumbers);