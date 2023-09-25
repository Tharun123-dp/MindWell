const button = document.querySelector("button")
button.addEventListener("click",()=> {
    Notification.requestPermission().then(perm => {
        if(perm==="granted"){
            const notification = new Notification("MIND WELL",{
                body: "YOU CAN GET TO CONTACT PSYCHOLOGIST BY JUST A CALL",
                data:{hello:"awareness"},
                icon: "logos.png"
            })
            notification.addEventListener("error",e => {
                alert("error")
            })
        }
    })
})