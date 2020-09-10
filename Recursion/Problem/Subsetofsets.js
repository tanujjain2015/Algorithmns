function generate_all_subsets(s){    
    var output = [];
    function _generate_all_subsets(so_far, start){
        if (start == s.length){
            output.push(so_far);
            return
        }
        _generate_all_subsets(so_far + s[start], start+1);
        _generate_all_subsets(so_far, start+1);
        }
    _generate_all_subsets([], 0)
    return output
}

var input = "abc";
console.log(generate_all_subsets (input));