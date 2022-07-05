const binarySearch=(list,item)=>{
    let low=0
    let high=list.length-1

    while(low<=high){
        const mid=Math.floor((low+high)/2)
        const val=list[mid]

        if(val==item){
            return mid
        }
        else if(val<item){
            low=mid+1
        }
        else {
            high=mid-1
        }
    }
    return null
}

let result=binarySearch([23,32,44,67,88,98,100],100);
console.log(`found at index no : ${result}`)