
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function login() {

    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    let terms = document.getElementById('terms').checked


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
                    url: '/login/api/v1/',
                    type: 'POST',
                    data: { 'email': email, 'password': password },
                    success: function (resp) {
                        if (resp.code == 200) {
                            window.location.href = '/dashboard'
                        } else {
                            alert('Something went wrong. [SERVER ERROR]')
                        }
                    }
                })
            }

        }
    }


}