const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = "https://becode-predict-ades.herokuapp.com/predict";

// fetch(proxyurl + url)
// .then(response => response)
// .then(data => {
//     console.log(data)
// })
// .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))

//====================================================================================================

// fetch(proxyurl + url)
// .then(response => response.text())
// .then(data => {
//     console.log(data)
// })
// .catch(() => console.log("It's not ok, Can’t access " + url + " response. Blocked by browser?"))

//====================================================================================================

// fetch(proxyurl + url)
// .then(response => response.json())
// .then(data => {
//     console.log(data)
// })
// .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))

//=====================================================================================================


// {"0":{"property-type":"APARTMENT","rooms-number":2,"zip-code":1000,"full-address":"","facades-number":2,"area":150}}

document.querySelector("#go").addEventListener("click",function(){

    let propertytype = document.querySelector("#type").value;
    let area = parseInt(document.querySelector("#area").value);
    let rooms = parseInt(document.querySelector("#room").value);
    let zipcode = parseInt(document.querySelector("#zip").value);
    let garden =  Boolean(document.querySelector("#garden").value);
    let kitchen =  Boolean(document.querySelector("#kitchen").value);
    let swimmingpool = Boolean(document.querySelector("#swimmingpool").value);
    let terrace =  Boolean(document.querySelector("#terrace").value);
    let state = document.querySelector("#state").value;

    // console.log(area);
    // console.log(zipcode);
    // console.log(rooms);
    // console.log(propertytype);
    // console.log(garden);
    // console.log(kitchen);
    // console.log(swimmingpool);
    // console.log(terrace);
    // console.log(state);

    let info = {
        data:{
            "property-type": propertytype,
            "area": area,
            "rooms-number": rooms,
            "zip-code": zipcode,
            "garden": garden,
            "equipped-kitchen": kitchen,
            "swimmingpool": swimmingpool,
            "terrace": terrace,
            "building-state": state,
            "full-address":"",
            "facades-number":2
        }
    }

    let info2 = {
        data:{
            "property-type": "APARTEMENT",
            "area": 200,
            "rooms-number": 2,
            "zip-code": 1030,
            "garden": true,
            "equipped-kitchen": true,
            "swimmingpool": false,
            "terrace": true,
            "building-state": "NEW",
            "full-address":"",
            "facades-number":2
        }
    }

    
    fetch(proxyurl + url, {
        method: 'POST', 
        body: JSON.stringify(info), 
        headers: {'Content-Type': 'application/json'}
    })

    .then(response => response.json())
    .then(data => {
        console.log(data.prediction[0]);
        document.querySelector("#go").insertAdjacentHTML("afterend",`<p id="price">price: ${data.prediction[0]} € </p>`)
    })
    .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))    
})

