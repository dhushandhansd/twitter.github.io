const loginButton = document.getElementById('login-nav')
const userInput = document.querySelector('.email-address')
const passwordInput = document.querySelector('.password')


document.cookie = 'auth=false'

const adminuser = 'dhushandhan.sd@gmail.com'
const password = 'shree@123'

function loginNavigation() {
    if(userInput.value === adminuser &&
        passwordInput.value === password) {
            location.href = 'https://dhushandhansd.github.io/twitter.github.io/home'
            document.cookie = 'auth=true'
    }
}

function loginActivator() {
    if(userInput.value != '' || userInput.value != null) {
        if(passwordInput.value != '' || passwordInput.value != null) {
            loginButton.classList.remove('inactive')
            document.cookie = 'auth=false'
        }
    }
}

function loginNavigation() {
    location.href = 'https://dhushandhansd.github.io/twitter.github.io/login'
}