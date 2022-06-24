//the aysnc func's which are in web api's and after execution they move into message queue.Event loop helps to move these message queues into execution context  
const fun2=()=>{
    setTimeout(() => {
        console.log("function 2 starts!!!!");
    }, 5000);
    // console.log("function 2 starts!!!!")
    
}
const fun1=()=>{
    console.log("function 1 starts")
    fun2();
    console.log("function 1 ends!!!!!")
}
fun1();