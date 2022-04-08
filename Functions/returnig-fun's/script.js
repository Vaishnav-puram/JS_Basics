function a(){
    return function b(){
         document.write("hello vaishnav <br>");
    }
}
a()();

function x(){
    return function y(){
         document.write("hello vaishnav");
         return function z(){
            document.write(" how are you ");
       }
    }
}
x()()(); 
//or
const v=x();
v()();

