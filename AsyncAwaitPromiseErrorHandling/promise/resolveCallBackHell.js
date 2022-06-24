//get rollno after 2s and after 2s get the name and after 2s get the gender 

//promise produce
const rollno = new Promise((resolve, reject) => {
    setTimeout(() => {
        let arr = [1, 2, 3, 4, 5];
        console.log("fetching data from API....")
        console.log("fetched data...");
        resolve(arr);
        reject("data not found!!!")
    }, 2000);
});
const details = (arr) => {
    return new Promise((resolve, reject) => {
        setTimeout((roll) => {
            let obj = {
                name: "vaishnav",
                age: 23
            }
            resolve(`Roll no is : ${roll[1]} My name is ${obj.name} and age is ${obj.age}`);
            reject("data not found!!!");

        }, 2000, arr)
    })
}

//promise consume
rollno.then((ans) => { //console.log(ans)
    details(ans).then((ans) => console.log(ans))
        .catch((err) => console.log(err))
})
    .catch((err) => console.log(err));


