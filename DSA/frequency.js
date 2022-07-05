const frequency=(arr,x)=>{
    let count=0
    console.log(`index no's`)
    for(const[i,ele] of arr.entries()){
        if(ele==x){
            count++
            console.log(i)
        }
    }
    return count
}
let result=frequency([9,2,4,8,8,7,4,9,7,8],9)
console.log(`frequency is : ${result}`)