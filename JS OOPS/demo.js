class Student{
    constructor(name,age){
        this.myname=name;
        this.myage=age;
    }
    bio(){ //instance method
        return `Hi , My name is ${this.myname} my age is ${this.myage}`
    }
}

class Players extends Student{
    constructor(name,age,game,level){
        super(name,age); //when inheriting properties of parent class we have to use super method
        this.mygame=game;
        this.mylevel=level;
    }
    details(){
        return `My name is ${this.myname} , age is ${this.myage} and game is ${this.mygame} and level is ${this.mylevel}` 
    }
    summary(){
        return `${super.bio()} I play ${this.mygame}` 
    }
}

let s1 = new Student('Vaishnav',23);
let s2 = new Student('arjun',26);
console.log(s1.bio()); //Hi , My name is Vaishnav my age is 23
console.log(s2.bio()); //Hi , My name is arjun my age is 26
let s3 = new Players('Vaishnav' ,23,'football',5);
console.log(s3.details()); //My name is Vaishnav , age is 23 and game is football and level is 5
console.log(s3.summary()); //Hi , My name is Vaishnav my age is 23 I play football
