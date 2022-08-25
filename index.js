const commentBox = document.getElementById("commentBox")
const commentInput = document.querySelector("textarea")
const characterCount = document.getElementById("character-count")
commentBox.addEventListener("submit", handleSubmit)

function handleSubmit(e){
    e.preventDefault()
    let username=document.getElementById("username-input").value
    let comment=document.getElementById("comment-input").value
    if(username&&comment&&commentInput.value.length <= 140)
        {document.getElementById("comments").innerHTML +=`
            <div class="comment-container">
                <p>${username}: ${comment}</p>
            </div>
        `
        commentBox.reset()
    }
    
}

commentInput.addEventListener("input", ({currentTarget: target}) => {
    const maxLength = 140
    const currentLength = target.value.length

    characterCount.value = `${currentLength}/140`
    currentLength > maxLength ? target.classList="red" : target.classList=""
})