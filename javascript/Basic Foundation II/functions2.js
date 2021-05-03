// Get 1 to 255 - Write a function that returns an array with all the 
// numbers from 1 to 255.
function print(){
    for(var i=0; i<= 255; i++){
            console.log(i);
    }
}

// Get even 1000 - Write a function that would get the sum of all the 
// even numbers from 1 to 1000.  You may use a modulus operator for this exercise.
function geteven(){
    var sum=0;
    for(var i=0; i<= 1000; i++){
        if(i %2 == 0){
            sum+=i;
        }
    console.log(i);
    }
}
// Sum odd 5000 - Write a function that returns the sum of all the odd 
// numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).
function sumodd(){
    var sum=0;
    for(var i=0; i<num; i++){
        if(i%2 != 0){
            sum+=i;
        } 
    }
    return sum;
}
// Iterate an array - Write a function that returns the sum of all the values
// within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).
function sumarr(arr){
	var sum=0;
    for(var i=0; i<arr.length; i++){
        sum+=arr[i];
    }
    return sum;
}
// Find max - Given an array with multiple values, write a function that 
// returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)
function maxx(arr){
	var max=arr[0];
    for(var i=0; i<arr.length; i++){
        if(max<arr[i]){
            max=arr[i]
        }
    }
    return max;
}

// Find average - Given an array with multiple values, write a function
// that returns the average of the values in the array. (e.g. for [1,3,5,7,20]
// average is 7.2)
function average(arr){
	var sum=0;
    for(var i=0; i<arr.length; i++){
        sum+=arr[i];
    }
    return (sum/arr.length);
}

// Array odd - Write a function that would return an array of all the odd
// numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.
function oddarr(){
	var odds=[];
    for(var i=0; i<50; i++){
        if(i % 2 == 1){
            odds.push(i)
        }
    }
    return odds;
}

// Greater than Y - Given value of Y, write a function that takes an array
// and returns the number of values that are greater than Y. For example if
// arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two
// values in the array greater than 3, which are 5, 7).
function great(arr,y){
    var num=0;
    for(var i=0; i<arr.length ; i++){
        if(arr[i] > y){
            num+=1;
        }
    }
    return num;
}

// Squares - Given an array with multiple values, write a function that
// replaces each value in the array with the value squared by itself.
// (e.g. [1,5,10,-2] will become [1,25,100,4])
function sqrs(arr){
    var nums=[];
    for(var i=0; i<arr.length ; i++){
        nums.push(arr[i]*arr[i]);
    }
    return nums;
}

// Negatives - Given an array with multiple values, write a function that
// replaces any negative numbers within the array with the value of 0.
// When the program is done the array should contain no negative values.
// (e.g. [1,5,10,-2] will become [1,5,10,0])
function negs(arr){
    var nums=[];
    for(var i=0; i<arr.length ; i++){
        if(arr[i] < 0){
            nums.push(0);
        }
        else        
            nums.push(arr[i]);
    }
    return nums;
}

// Max/Min/Avg - Given an array with multiple values, write a function that
// returns a new array that only contains the maximum, minimum, and average
// values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])
function minmax(arr){
    var min= arr[0];
    var max= arr[0];
    var avg= arr[0];
    var sum=0;
    for(var i=0; i<arr.length ; i++){
        sum+=arr[i];
        if(arr[i] < min){
            min=arr[i];
        }
        if(arr[i] > max){
            max=arr[i];
        }
        avg=sum/arr.length;
    }
    return [max,min,avg];
}

// Swap Values - Write a function that will swap the first and last values of
// any given array. The default minimum length of the array is 2. (e.g.
// [1,5,10,-2] will become [-2,5,10,1]).
function swap(arr){
    var val= arr[0];
    arr[0]=arr[arr.length-1];
    arr[arr.length-1]=val;
    return arr;
}

// Number to String - Write a function that takes an array of numbers and replaces
// any negative values within the array with the string 'Dojo'. For example if
// array = [-1,-3,2], your function will return ['Dojo','Dojo',2].
function numstring(arr){
    var nums=[];
    for(var i=0; i<arr.length ; i++){
        if(arr[i] < 0){
            nums.push('Dojo');
        }
        else        
            nums.push(arr[i]);
    }
    return nums;
}