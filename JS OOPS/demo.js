class Student{
    constructor(name,age){
        this.myname=name;
        this.myage=age;
    }
    bio(){ //instance method
        console.log(`Hi , My name is ${this.myname} my age is ${this.myage}`);
    }
}

class Players extends Student{
    constructor(name,age,game,level){
        super(name,age); //when inheriting properties of parent class we have to use super method
        this.mygame=game;
        this.mylevel=level;
    }
    details(){
        console.log(`My name is ${this.myname} , age is ${this.myage} and game is ${this.mygame} and level is ${this.mylevel}`);
    }
}

let s1 = new Student('Vaishnav',23);
let s2 = new Student('arjun',26);
s1.bio(); //Hi , My name is Vaishnav my age is 23
s2.bio(); //Hi , My name is arjun my age is 26
let s3 = new Players('Vaishnav' ,23,'football',5);
s3.details(); //My name is Vaishnav , age is 23 and game is football and level is 5
