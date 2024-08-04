function loginFormValidation() {
    var useremail = document.registration.email;
    var userpassword = document.registration.password;

    var emailValid = emailValidation(useremail);
    var passwordValid = passwordValidation(userpassword, 7, 12);

    if (emailValid && passwordValid) {
        window.location.href = "welcomepage.html"; 
        return false; 
    }

    return false;
}

function emailValidation(useremail) {
    var email_expression = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (useremail.value.match(email_expression)) {
        document.getElementById("emailError").textContent = "";
        return true;
    }
    document.getElementById("emailError").textContent = "Enter a proper email.";
    return false;
}

function passwordValidation(userpassword, mx, my) {
    var passid_len = userpassword.value.length;
    if (passid_len == 0 || passid_len >= my || passid_len < mx) {
        document.getElementById("passwordError").textContent = "Password should be between " + mx + " to " + my + " characters.";
        return false;
    }
    document.getElementById("passwordError").textContent = "";
    return true;
}

// timer


var timerDuration = 60; 

function startCountdown(duration, display) {
    var timer = duration, minutes, seconds;
    var countdownInterval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            clearInterval(countdownInterval);
            display.textContent = "Time's up!";
            setTimeout(function() {
                window.location.href = "loginpage.html"; 
            }, 1000); 
        }
    }, 1000);
}


window.onload = function () {
    var display = document.getElementById('timer');
    startCountdown(timerDuration, display);
};


//logout

function logout(){
    return window.location.href = "loginpage.html";
}