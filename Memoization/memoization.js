function mem(){
    var cache={}
    return function addTo234(num){
        if(num in cache){
            console.log("number is in cache")
            return cache[num]
        }
        else{
            console.log("number is not in cache")
            return cache[num]=num+234
        }
    }
}
var result=mem();
console.log(result(20)) //number is not in cache
console.log(result(20)) //number is in cache