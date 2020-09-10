

function generate_palindromic_decompositions(s){
        
        var output = [];
        var n = s.length;

        function is_palindrome(substring){
            if (substring.length ==1){
                return true
            }
            //console.log(substring);
            var low= 0 , high =substring.length-1;
            while (low < high){
                
                if (substring[low] != substring[high]){
                    //console.log(substring[low], substring[high]);
                    return false;
                }
                low ++;
                high --;
            }
            return true;
        }

        function _palindromic_decomposition(so_far, start){
            //base case
            if (start == n){
                console.log(so_far);
                console.log("######");
                so_far.unshift('|');
                output.push(...so_far);
                return
            }

            for (var i = start+1; i < n+1; i++){
                var curr = s.slice(start, i); 
                //var plain = ;
                if (is_palindrome(curr)){
                    //console.log(curr);
                    so_far.push(curr)
                    _palindromic_decomposition(so_far, i)
                    //at the end of dfs remove what was appended to
                    so_far.pop()
                }
            }
        }
        _palindromic_decomposition([], 0)
    return output
}

var input = "abracadabra";
console.log(generate_palindromic_decompositions (input));