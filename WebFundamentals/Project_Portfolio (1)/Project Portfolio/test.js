function filter_list(l) {
    var newArr = [];
    var newArr2=[];
    for(var i =0; i < l.length ; i++){
        if(typeof(l[i])=='number'){
            newArr.push(l[i]);
        }
        
    }
    return newArr;
}

console.log(filter_list([1,2,"aasf","1","123",123]));