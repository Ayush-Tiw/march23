// javascript is synchronous type language

// async and await-->extention of promises
// async simply allow us to write promise based code asynchronously and does break thread of excution.
// async function always return a value

// The async function,await  keyword enable asynchronous,promise-based behaviour to be written in a cleaner style,avoidind=g the need to ecxplicitly configure promise chains.
// async ffunction can contain zero or more await expression
// await waits untill the returned promise is fulfilled or rejected.
// async function always return promise

// these both are use just to simplify the syntax necessary to consume promise-based APIs.

//async is a special function it gives power to write code asynchronously and gives power not break thread of execution of function 

// async function ayush(){//writing async make it a promise,async always return value
// return("Ayush Tiwari");
// }
// console.log(ayush());

// ayush().then(function (data){
//     console.log(data);
// });

//promise is called by "then" keyword

// with argument
// async function ayush(city){
//     return("Ayush Tiwari"+" "+city);
//     }
//     console.log(ayush("hoshangabad"));
    
//     ayush("indore").then(function (data){
//         console.log(data);
//     });


//use arrow function with async in above example

// let aush=async()=>{
//     return "I live in hoshangabad"
// };
// aush().then((data)=>{
//     console.log(data)
// })

// // find even or odd off a number
// async function find(number){
//         if(number%2==1){
        
//         return "odd"
//     }else{
//         return "even"
//     }
// }
// find(1).then(function(data){
//     console.log(data)
// })

//Await-->it is primarily being used 

// async function suman(){
//    let data="my name is ayush and i am from the async await world!"
//    console.log(data)
// };
// console.log("pizza")
// suman()
// console.log("burger")

//with await function
// async function suman(){
//     let data=await "my name is ayush and i am from the async await world!"
//     console.log(data)
//  };
//  console.log("pizza")
//  suman()
//  console.log("burger");
//await use for any function to wait and execute
//it makes async function wait

//  const guvi=async()=>{
//      let info=await "hello i am guvi"
//      console.log(info)
//  }

//  console.log("a")
//  guvi()
//  console.log("b")


//sometime to load big content it takes time but it is running on backend so we use await

//Promise chaining

//chaining is used in network connection or data base management 

// let suman_promise=new Promise(function(resolve,reject){
//     let data ="suman"
//     resolve(data+" "+"is the project manager" );
//     reject(data+" "+ "outsider")
// });
// suman_promise.then((value)=>{
//     console.log("promise fulfilled")//if promise is fullfille then do this
// });
// .catch((error)=>{
//     console.log("promise rejected")//if there is error do this
// })
// .finally(()=>{
//     console.log("Deal Closed")//whetther it is fulfilled or not, close the deal
// })


//use of promise chaining in more practical way

// Fetch Data from Github API using Promise Chaining

const url = "https://api.github.com/users/";

// function will load the data from the URL
function load_data(url) {
  return fetch(url).then((response) => response.json());
}

function Suman(name1) {
  return load_data(`https://api.github.com/users/${name1}`);
}

function display(url) {
  return new Promise(function (resolve, reject) {
    let github_pic = document.createElement("img");
    github_pic.src = url.avatar_url;
    document.body.append(github_pic);
  });
}

// loading the data into the HTML
load_data(url)
  .then((user) => Suman('sgangopadhyay'))
  .then(display)