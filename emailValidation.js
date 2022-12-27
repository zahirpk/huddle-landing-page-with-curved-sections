function checkEmail()
{
    var regexEmail = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;
    var email = document.getElementById("txtEmail");
    var text = document.getElementById("text")
    
    if (regexEmail.test(email.value)) {
        text.innerHTML ="Your Email is verified";
        text.style.color= "#4ECB02";
    } else {
        text.innerHTML ="Please check your email";
        text.style.color= "#F70808";
    }
}
