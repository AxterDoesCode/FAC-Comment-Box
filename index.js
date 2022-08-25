document.getElementById("commentBox").addEventListener("submit", handleSubmit)

function handleSubmit(e){
    e.preventDefault()
    let username=document.getElementById("username").value
    let comment=document.getElementById("comment").value
    document.getElementById("comments").innerHTML +=`
        <h1>${username}</h1>
        <p>${comment}</p>
    `
}