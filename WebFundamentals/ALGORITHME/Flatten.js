
// var arr2d=[[2,5,8],[3,6,1],[5,7,7]]


// function arrayFlatten(arr1){
//     var newarr=[];
//     for(var i=0;i<arr1.length;i++){
//         for(var j=0;j<arr1[i].length;j++){
//             newarr.push(arr1[i][j]);
//         }
//     }
//     return newarr;
// }


// var result=arrayFlatten(arr2d);
// console.log(result);




var nums1 = [3, 3];
function targGet(arr, target) {
    var res = [];
    for (var i = 0; i < arr.length; i++) {
        for (var j = 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target && j!=i) {
                console.log(arr[i] + arr[j])
                res.push(i, j);
                return res;
            }
        }
    }
}

les = targGet(nums1, 6);
console.log(les);