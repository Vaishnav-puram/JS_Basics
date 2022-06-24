function sumOfThree(...ele){ //restParameter
    return new Promise((resolve,reject)=>{
        if(ele.length>3){
            reject("only three elements or less needed!!")
        }
        else{
            sum=0;
            let i=0
            while(i <ele.length){
                sum+=ele[i];
                i++;
            }
            resolve(`sum of three elements is ${sum}`)
        }
    })
}

sumOfThree(2,4,6)
.then(ans=>console.log(ans)) //sum of three elements is 12
.catch(ans=>console.log(ans)) 

sumOfThree(2,4,6,5,7,8)
.then(ans=>console.log(ans)) 
.catch(ans=>console.log(ans)) //only three elements or less needed!!

async function add(){
    try{
    let result=await sumOfThree(2,4,6)
    console.log(result) //sum of three elements is 12
    }
    catch(err){
        console.log(err)
    }
}
add();
