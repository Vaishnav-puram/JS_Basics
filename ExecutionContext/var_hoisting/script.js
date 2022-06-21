// document.write(shape+"<br>"); //undefined
// console.log(shape); //undefined
// var shape="square";
// document.write(shape); //square
// console.log(shape); //square
function getShape(condition){
    document.write(shape+"<br>"); //undefined
    console.log(shape); //undefined
    if(condition){
        var shape="square";
        return true;
    }
    else{
        return false;
    }

}
getShape();

function getShape1(condition){
    document.write(shape+"<br>"); //error that not initialised
    if(condition){
        let shape="square"; 
        return true;
    }
    else{
        return false;
    }

}
getShape1();
function getShape2(condition){
    document.write(shape+"<br>"); //error that not initialised
    if(condition){
        const shape="square";
        return true;
    }
    else{
        return false;
    }

}
getShape2();



