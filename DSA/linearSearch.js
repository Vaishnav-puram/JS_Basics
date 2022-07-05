const linearSearch=(list,item)=>{
    for(const[i,ele] of list.entries()){  //key value pair 
        console.log(i)
        console.log(ele)
        if(ele==item){
            return i;
        }
    }
}

let result=linearSearch([45,23,67,89,100],23);
console.log(`found at index no : ${result}`);