const email = document.querySelector('#exampleInputEmail1')
const password = document.querySelector('#exampleInputPassword1')
const registerForm = document.querySelector('#register-form')


registerForm.addEventListener('submit', (e)=>{
    e.preventDefault()

    const emailRes = email.value
    const passwordRes = password.value

    fetch('localhost:3000/users').then((response)=>{
        response.json().then((data)=>{
            if(data.error){
                console.log('it is an error')
            }else{
                console.log('user have been successfully registered')
            }
        })
    })
})

