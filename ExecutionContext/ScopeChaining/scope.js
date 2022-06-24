var scope = "global scope";
function check()
{
var scope = "local scope";
function f()
{
return scope;
}
return f;
}

console.log(scope) //global scope
console.log(check()()); //local scope