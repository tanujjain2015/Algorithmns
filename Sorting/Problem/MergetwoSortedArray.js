var arr1 = [1,2];
var arr2 = [2,1,0,0];


function merger_first_into_second(arr1, arr2) {
    var n = arr1.length;
	// Start merging from the end. 
	var last1 = n - 1;
	var last2 = n - 1;
	var last = n + n - 1;
	// At least one element reamining. 
	while (last >= 0)
	{
		// If no elements remaining in arr1.
		if (last1 < 0)
		{
            // Think about the case when arr1 = [4, 5, 6] arr2 = [1, 2, 3, 0, 0, 0].
            // Once last1 = -1, arr2 will be [1, 2, 3, 4, 5, 6]. So, we can stop here.
            break;
		}
		// If no elements remaining in arr2.
		else if (last2 < 0)
		{
			arr2[last--] = arr1[last1--];
		}
		// Priority to larger element, as we are merging from the end. 
		else if (arr1[last1] <= arr2[last2])
		{
			arr2[last--] = arr2[last2--];
		}
		else
		{
			arr2[last--] = arr1[last1--];
		}
    }
}

console.log(merger_first_into_second(arr1, arr2));
