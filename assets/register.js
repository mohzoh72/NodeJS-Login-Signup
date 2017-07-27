

document.getElementById("register-btn").addEventListener("click", register, false);


function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function register() {

    let username = document.getElementById('username').value
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    let terms = document.getElementById('terms').checked

    if (username.length < 4 && username != null) {
        alert('Please enter valid username')
    } else {
        if (!validateEmail(email)) {
            alert('Please enter valid email')
        } else {
            if (password.length < 4 && password != null) {
                alert('Please enter valid password')
            } else {
                if (!terms) {
                    alert('Accept terms and condition')
                } else {
                    // Entered details seems valid and can be sent to server.
                    $.ajax({
                        url: '/register/api/v1/',
                        type: 'POST',
                        data: { 'username': username, 'email': email, 'password': password },
                        success: function (resp) {
                            if (resp.code == 200) {
                                window.location.href = '/otp'
                            } else {
                                alert('Something went wrong. [SERVER ERROR]')
                            }
                        }
                    })
                }

            }
        }
    }

}