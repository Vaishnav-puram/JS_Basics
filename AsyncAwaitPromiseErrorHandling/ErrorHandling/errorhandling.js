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
async function getData() {
    try {
        const id = await rollno;
        // console.log(id) // [1,2,3,4,5]
        const data = await details(id);
        console.log(data); //Roll no is : 2 My name is vaishnav and age is 23
        return data
    } catch (err) {
        console.log(`the error is ${err}`)
        //      
    }
}
const record = getData().then((info) => {
    console.log(info) //Roll no is : 2 My name is vaishnav and age is 23
})



