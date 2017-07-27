

function validateOTP() {
    let otp = document.getElementById('otp').value

    $.ajax({
        url: '/validate_otp/api/v1/',
        type: 'POST',
        data: { 'otp': otp },
        success: function (resp) {
            if (resp.code == 200) {
                alert('Congratulations you have been registered successfully, Redirecting you please wait')
                setTimeout(() => {
                    window.location.href = '/dashboard'
                }, 1000)
            } else {
                alert('Something went wrong. [SERVER ERROR]')
            }
        }
    })
}

function resendOTP() {
    alert('OTP resent');
}