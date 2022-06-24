function sample(a,b){
    let c=a+b;
    return new Promise((resolve,reject)=>{
        if(c>5){
            resolve(c);
        }
        else{
            reject(c);
        }

    })
}
let res=sample(2,4);
res.then((ans)=>{
    console.log("this is in then"+" "+ans);
})
.catch((err)=>{
    console.log("this is in catch"+" "+err);
})

//..................................................................

//async and await are sugar coating to promise handling link then and catch

async function promiseHandler(){
    try{
        let ans=await sample(0,4);
        console.log("the value is larger"+" "+ans);

    }
    catch(err){
        console.log("the value is smaller"+" "+err)
    }
}
promiseHandler();