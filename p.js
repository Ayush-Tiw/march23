// async function aa(){
//     return ("ayush tiwari")
// }
// aa()
// .then((data)=>
// console.log(data))
// .catch((err)=>{
//     console.log(err)
// })

// async function aab(){
//     return ayush
// }
// aab()
// .then((data)=>
// console.log(data))
// .catch((err)=>{
//     console.log(err)
// })

// let abc= async(city)=>{
// return (`i lives in ${city}`)
// }

// abc("hoshangabad").then((data)=>{
// console.log(data)
// })

// async function aaa(){
//     console.log(" not ayush tiwari")
// }

// console.log("hii")
// aaa()
// console.log("bye")


// let ayush= async ()=>{
//     let data= await "wait i am wait exprression"
//     console.log(data)
// }

// console.log("hii")
// ayush()
// setTimeout(()=>console.log("time"),2000)
// console.log("bye")

// const guvi=async()=>{
//     setTimeout(()=>console.log("wait"),3000)
// }

// console.log("a")
// guvi()
// console.log("b")

let promise=new Promise((resolve,reject)=>{
let n="ayush"

// resolve(n + " " + "insider")
reject(n + " "+ "outsider")
})
promise.then((value)=>
console.log(value))
.catch((v)=>
console.log(v)
)
.finally(()=>console.log("deal done"))


