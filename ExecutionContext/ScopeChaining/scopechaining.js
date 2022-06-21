var a="hello,"
function fun(){
    var b="how "
    // console.log(c) // parent can't access child variables
    fun1();
    function fun1(){
        var c="are you?"
        console.log(a+b+c) // child can access parent variables
    }
}
fun()

function fun2(){  //fun2 can't access b and d because it is not in it's scope
    var d="I'm fine"
    console.log(a+d) 
}
fun2()