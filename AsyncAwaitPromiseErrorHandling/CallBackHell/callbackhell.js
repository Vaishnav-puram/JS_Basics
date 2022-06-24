//get rollno after 2s and after 2s get the name and after 2s get the gender 
//callbackhell
const getDetails=()=>{
    setTimeout(()=>{
        let arr=[1,2,3,4,5];
        console.log("fetching data from API....");
        setTimeout((roll)=>{
            console.log("fetching roll no ....")
            console.log(`roll no is : ${roll[1]}`);
            let obj={
                name:"vaishnav",
                age:23
            }
            setTimeout((details) => {
                const gender="male";
                console.log("fetching details....");
                console.log(`Name is ${details.name} age is ${details.age} gender is ${gender} `);
                console.log("Task complete...")
            }, 2000,obj);
        },2000,arr)
    },2000)
}
getDetails();