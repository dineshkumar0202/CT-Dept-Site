function sendMail(){
    let parms = {
        name : document.getElementById("name").Value,
        name : document.getElementById("email").Value,
        name : document.getElementById("subject").Value,
        name : document.getElementById("message").Value,
    }

    emailjs.send("service_470vq4w","template_blhtbpc",prams).then(alert( "Email Sent!!"))
}