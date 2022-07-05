let arr=[1,2,2,3,3,4,5]
let dup=[]
let newarr=[...arr];
for(let i=0;i<newarr.length;i++){
    if(newarr[i+1]==newarr[i]){
        dup.push(newarr[i])
    }
}

console.log(dup) //[2,3]