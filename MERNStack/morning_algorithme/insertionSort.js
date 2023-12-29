




function insert(arr){
    for (let i=1;i<arr.length;i++){
        let x=arr[i];
        for(let j=i-1;j>=0;j--){
            console.log(x);
            console.log("****");
            console.log(arr[j]);
            if(x<arr[j]){
                arr[j+1]=arr[j];
                if(j===0){
                    arr[j]=x;
                }
            }else{
                arr[j+1]=x
                break;
            }
        }
    }
    return arr;
}


const arr1=[29,10,14,20,15,14];
console.log(insert(arr1))