let arr = [
    {price:10, q : 2},
    {price:3, q : 2},{price:4, q : 2},
]

let s = arr.reduce((a,b)=>{
    return a.price+b.price
})

console.log(s);