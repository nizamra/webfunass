// Biggie Size - Given an array, write a function that changes all positive numbers in the
// array to the string "big".  Example: makeItBig([-1,3,5,-5]) returns that same array,
// changed to [-1, "big", "big", -5].
function begs(arr){
    var nums=[];
    for(var i=0; i<arr.length ; i++){
        if(arr[i] > 0){
            nums.push("big");
        }
        else        
            nums.push(arr[i]);
    }
    return nums;
}

// Print Low, Return High - Create a function that takes in an array of numbers.  The function should
// print the lowest value in the array, and return the highest value in the array.
function minnmax(arr){
    var min= arr[0];
    var max= arr[0];
    for(var i=0; i<arr.length ; i++){
        if(arr[i] < min){
            min=arr[i];
        }
        if(arr[i] > max){
            max=arr[i];
        }
    }
    console.log("the lowest value is: "+min);
    return max;
}

// Print One, Return Another - Build a function that takes in an array of numbers.  The function should
// print the second-to-last value in the array, and return the first odd value in the array.
function onether(arr){
    var fodd= arr[0];
    for(var i=0; i<arr.length ; i++){
        if(arr[i] % 2 == 1){
            fodd=arr[i];
            break
        }
    }
    console.log(arr[arr.length-2]);
    return fodd;
}

// Double Vision - Given an array (similar to saying 'takes in an array'), create a function that returns a new array
// where each value in the original array has been doubled.  Calling double([1,2,3]) should return [2,4,6] without changing
// the original array.
function double(arr){
    var nums=[];
    for(var i=0; i<arr.length ; i++){
        nums.push(arr[i]*2);
    }
    return nums;
}

// Count Positives - Given an array of numbers, create a function to replace the last value with the number of positive
// values found in the array.  Example, countPositives([-1,1,1,1]) changes the original array to [-1,1,1,3] and returns it.
function positives(arr){
    var nums=0;
    for(var i=0; i<arr.length ; i++){
        if(arr[i] > 0){
            nums+=1;
        }
    }
    arr[arr.length-1]=nums;
    return arr;
}

// Evens and Odds - Create a function that accepts an array.  Every time that array has three odd values in a row,
// print "That's odd!".  Every time the array has three evens in a row, print "Even more so!".
function shout(arr){
    var nums=0;
    for(var i=0; i<arr.length-2 ; i++){
        if(arr[i] % 2 == 0 && arr[i+1] % 2 == 0 && arr[i+2] % 2 == 0 ){
            console.log("Even more so!")
        }
        if(arr[i] % 2 == 1 && arr[i+1] % 2 == 1 && arr[i+2] % 2 == 1 ){
            console.log("Even more so!")
        }
    }
}

// Increment the Seconds - Given an array of numbers arr, add 1 to every other element, specifically those whose
// index is odd (arr[1], arr[3], arr[5], etc).  Afterward, console.log each array value and return arr.
function incsec(arr){
	var nums=[];
    for(var i=0; i<arr.length ; i++){
        if(arr[i] % 2 == 1){
            nums.push(arr[i]+1);
        }
        else        
            nums.push(arr[i]);
        console.log(nums[i])
    }
    return nums;
}

// Previous Lengths - You are passed an array (similar to saying 'takes in an array' or 'given an array') containing
// strings.  Working within that same array, replace each string with a number - the length of the string at the previous
// array index - and return the array.  For example, previousLengths(["hello", "dojo", "awesome"]) should return ["hello", 5, 4].
// Hint: Can for loops only go forward?
function previousLengths(arr){
    for(var i=arr.length-1; i>0 ; i--){
        arr[i]=arr[i-1].length;}
    return arr;
}

// Add Seven - Build a function that accepts an array. Return a new array with all the values of the original, but add
// 7 to each. Do not alter the original array.  Example, addSeven([1,2,3]) should return [8,9,10] in a new array.
function addSeven(arr){
	var nums=[];
    for(var i=0; i<arr.length ; i++){       
        nums.push(arr[i]+7);
    }
    return nums;
}

// Reverse Array - Given an array, write a function that reverses its values, in-place.  Example:
// reverse([3,1,6,4,2]) returns the same array, but now contains values reversed like so... [2,4,6,1,3].
// Do this without creating an empty temporary array.  (Hint: you'll need to swap values).
function reverse(arr){
    var i = 0;
    var j = arr.length - 1;

    while (i < j) {
        var x = arr[i];
        arr[i++] = arr[j];
        arr[j--] = x;
    }

    return arr;
}

// Outlook: Negative - Given an array, create and return a new one containing all the values of the original array,
// but make them all negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].
function negative(arr){
	var nums=[];
    for(var i=0; i<arr.length ; i++){
        if(arr[i] > 0){
            nums.push(arr[i]*-1);
        }
        else        
            nums.push(arr[i]);
    }
    return nums;
}

// Always Hungry - Create a function that accepts an array, and prints "yummy" each time one of the values is equal to
// "food".  If no array values are "food", then print "I'm hungry" once.
function hungry(arr){
    for(var i=0; i<arr.length ; i++){
        if(arr[i] == "food"){
            console.log("yummy");
            var x=true;
        }
    }
    if(!x){
        console.log("I'm hungry");
    }
}

// Swap Toward the Center - Given an array, swap the first and last values, third and third-to-last values, etc.
//  Example: swapTowardCenter([true,42,"Ada",2,"pizza"]) turns the array into ["pizza", 42, "Ada", 2, true].
//  swapTowardCenter([1,2,3,4,5,6]) turns the array into [6,2,4,3,5,1].  No need to return the array this time.
function reverse(arr){
    var i = 0;
    var j = arr.length - 1;

    while (i < j) {
        var x = arr[i];
        arr[i++] = arr[j];
        arr[j--] = x;
    }

    return arr;
}

// Scale the Array - Given an array arr and a number num, multiply all values in the array arr by the number num,
// and return the changed array arr.  For example, scaleArray([1,2,3], 3) should return [3,6,9].
function scaleArray(arr,val){
	var nums=[];
    for(var i=0; i<arr.length ; i++){       
        nums.push(arr[i]*val);
    }
    return nums;
}
