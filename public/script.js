$(()=>{
    $('#signupform').submit((event)=>{
        event.preventDefault();
        let credentials_sign = {
            username: $('#username_s').val(),
            email: $('#email_s').val(),
            password: $('#password_s').val()
        }

        if($('#password_s').val() === $('#conf_pass_s').val()){

            $.post(
                '/signup',
                credentials_sign,
                (data) => {
                    if(data.success) {
                        alert('Sign up successful, please login to continue.')
                    } else{
                        alert('username already taken')
                    }
                }
            )
        }
        else
        alert('password didnot match!')
    })


    $('#loginform').submit((event)=>{
        event.preventDefault();
        let credentials_log = {
            email: $('#email_l').val(),
            password: $('#password_l').val()
        }

        $.post(
            '/login',
            credentials_log,
            (data) => {
                if(data.success) {
                    alert(`Welcome ${data.name}`)
                    location.href += `happymenses#${data.id}`
                    console.log('dsc')
                } else{
                    alert('username doesnot exist!')
                }
            }
        )
    })

})