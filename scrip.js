let button = document.getElementById("button")
let author = document.getElementById('name-2')
let quote = document.getElementById("quote-2")


button.addEventListener("click" , ()=>{
    fetch("https://api.quotable.io/random").then(res=>{
        return res.json()
    }).then(blob=>{
        console.log(blob)
        console.log(blob.content)
        quote.innerHTML = blob.content
        author.innerHTML =  '-'+ blob.author
    }) 
})
