//Fetch provides a fetch() method defined on the window object, which you can use to perform requests.
//fetch() method returns a promise that you can use to retrieve the response of the request

fetch('https://api.covid19api.com/summary')
    .then((
        apidata) => {
        console.log(apidata)
        return apidata.json();
    }).then((actualdata) => {
        console.log(actualdata.Countries[101]);
        const data=actualdata.Countries[101]; 
        document.getElementById("api").innerHTML=`the country is ${data.Country} total confirmed ${data.TotalConfirmed}`
    }).catch((err) => {
        console.log(err)
    })


