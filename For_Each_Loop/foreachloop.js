//forEach() method calls a function once for each element in an array in order

let arr=['Java','C','C++','JavaScript','MySQL'];

for(let i=0;i<arr.length;i++){
    console.log(arr[i]) //['Java','C','C++','JavaScript','MySQL'
}
for(items of arr){
    console.log(items) //['Java','C','C++','JavaScript','MySQL'
}

arr.forEach(function(ele){
    console.log(ele) //['Java','C','C++','JavaScript','MySQL'
})

arr.forEach(function(ele,index){
    console.log(index+":"+ele)  
})
// 0:Java
// 1:C
// 2:C++
// 3:JavaScript
// 4:MySQL

let arr1=[10,20,30,40,50]
arr1.forEach(function(ele,index,newarr){  //newarr obect the current element belongs to
    console.log(index+":"+ele+":"+newarr)
})
// 0:10:10,20,30,40,50
// 1:20:10,20,30,40,50
// 2:30:10,20,30,40,50
// 3:40:10,20,30,40,50
// 4:50:10,20,30,40,50

let arr2=[10,20,30,40,50]
arr2.forEach(function(ele,index,newarr){
    console.log(newarr[index]+10)
})
// 10
// 20
// 30
// 40
// 50

