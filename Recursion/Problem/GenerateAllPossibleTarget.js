function generate_all_expressions(s, target){
    var output = [];
    var start = 0;

    function helper(so_far, evaluated, index, prev){
      
        
        if(index == s.length){
            if(parseInt(evaluated) == parseInt(target)){
                output.push(so_far);
                return
            } 

        }
        for(var i=index; i < s.length; i++){
            var curr = s.slice(index, i+1);
            var cur_int = parseInt(curr);
            if(index == 0){
                helper(so_far + curr, cur_int, i+1, cur_int);
            } else {
                helper(so_far + '+' + curr, parseInt(evaluated) + parseInt(cur_int), i+1, parseInt(cur_int));
                helper(so_far + '*' + curr, (parseInt(evaluated)-parseInt(prev)) + (parseInt(prev) * parseInt(cur_int)), i+1, parseInt(prev) * parseInt(cur_int));
            }
        }
    }

    helper("", 0, 0, 0);
    return output;
}

    var num = "58100";
    var trg = 6587410;
    console.log(generate_all_expressions(num,trg));