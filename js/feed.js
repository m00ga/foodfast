function validateEmail(mail) {
    let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    return re.test(mail)
}

window.onload = () => {
    let ok = document.getElementById("ok")
    let cancel = document.getElementById("cancel")
    ok.onclick = () => {
        let review = document.getElementById("review").value
        let email = document.getElementById("email").value
        let err = document.getElementById("wrong")
        if(!validateEmail(email)){
            err.style.display = "inline"
        }else{
            err.style.display = "none"
            alert(review)
            window.location.replace("/index.html")
        }
    }

    cancel.onclick = () => {
        window.location.replace("/index.html")
    }
}