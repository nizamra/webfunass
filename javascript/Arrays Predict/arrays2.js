//Print Values and Sum
var arr = [6,3,5,1,2,4];
var sum=0;
for(var i = 0; i < arr.length; i++){   
		sum+=arr[i];
    console.log("Num "+arr[i]+", Sum "+sum);
}

//Value * Position
var newarr=[];
for(var i = 0; i < arr.length; i++){   
	newarr.push(arr[i]*i); 
}
console.log(newarr);