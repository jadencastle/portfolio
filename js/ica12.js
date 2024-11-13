// let ourObject = {
//     "name": "casey",
//     "profession": "PhD Student",
//     "age": 30,
//     "pets":[{"name":"Boots", "type":"dog", "age": 9, "unit": "years"}, {"name":"Marty", "type": "cat", "age":5, "unit": "months"}]
// }



// console.log(ourObject);

let myData = {};

function fetchData(){
fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single')
    .then(res =>{
        if(res.ok){
            return res.json();
        }else{
            console.log(res);
        }
    }).then(res => {
        myData = res;
        console.log(myData);
        document.getElementById("joke").innerHTML = myData.joke;
    })
    .catch(error => {console.log(error)})
}
fetchData();

document.getElementById("generate").addEventListener("click", e=> {fetchData();})

// console.log(myData);

// let name = "Casey";

// let myString = "hello " + name + "!";
// let myString = `hello ${name} !`;