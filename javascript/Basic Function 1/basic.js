// 14 correctly predicted out of 15  


function a(){
    return 35;
}
console.log(a())
// prediction: 35
// actual output: 35

function a(){
    return 4;
}
console.log(a()+a());
// prediction: 44
// actual output: 8

function a(b){
    return b;
}
console.log(a(2)+a(4));
// prediction: 6
// actual output: 6

function a(b){
        console.log(b);
        return b*3;
    }
    console.log(a(3));
// prediction: 3, 9
// actual output: 3, 9

function a(b){
    return b*4;
    console.log(b);
 }
 console.log(a(10));
// prediction: 40
// actual output:40

function a(b){
    if(b<10) {
        return 2;
    }
    else     {
        return 4;
    }
    console.log(b);
}
console.log(a(15));
// prediction: 4
// actual output:4

function a(b,c){
    return b*c;
}
console.log(10,3);
console.log( a(3,10) );
// prediction: 10, 3, 30
// actual output:10, 3, 30

function a(b){
    for(var i=0; i<10; i++){
        console.log(i);
    }
    return i;
}
console.log(3);
console.log(4);
// prediction: 3, 4
// actual output:3, 4

function a(){
    for(var i=0; i<10; i++){
        i = i +2;
        console.log(i);
    }
}
a();
// prediction: 2,4,6,8
// actual output:2,5,8,11

function a(b,c){
    for(var i=b; i<c; i++) {
       console.log(i);
   }
   return b*c;
}
a(0,10);
console.log(a(0,10));
// prediction: 0,1,2,3,4,5,6,7,8,9,0
// actual output:0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0

function a(){
    for(var i=0; i<10; i++){
       for(var j=0; j<10; j++){
           console.log(j);
       }
       console.log(i);
    }
}
// prediction: the function isn't called so nothing is printed
// actual output: 

function a(){
    for(var i=0; i<10; i++){
        for(var j=0; j<10; j++){
            console.log(i,j);
        }
        console.log(j,i);
    }
}
// prediction: the function isn't called so nothing is printed
// actual output:

var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
console.log(z);
// prediction: 10
// actual output:10

var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
a();
console.log(z);
// prediction: 15,10
// actual output:15,10

var z = 10;
function a(){
    var z = 15;
    console.log(z);
    return z;
}
z = a();
console.log(z);
// prediction: 15,15
// actual output:15,15