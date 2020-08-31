var A1 = [2,3,3,5,5,6,7,7,8,12]
var A2 = [5,5,6,8,8,9,10,10]

function intersectionOfTwoArrays (a1, a2) {
    var i = 0;
    var j =0;
    let intersection = new Set();

    while (true) {
        if (a1[i] == a2[j]){
            intersection.add(a1[i]);
            ++i ;
            ++j;
        } else if (a1[i] > a2[j]) {
            ++j;
            if (j >= a2.length){
                break;
            }
        } else {
            ++i;
            if (i >= a1.length){
                break;
            }
        }
    }
    console.log(intersection);
    
}

intersectionOfTwoArrays(A1, A2);