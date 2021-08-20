const loginButton = document.getElementById('login-nav')
const userInput = document.querySelector('.email-address')
const passwordInput = document.querySelector('.password')


document.cookie = 'auth=false'

const adminuser = 'dhushandhan.sd@gmail.com'
const password = 'shree@123'

function homeNavigation() {
    if(userInput.value === adminuser &&
        passwordInput.value === password) {
            document.cookie = 'auth=true'
            location.href = 'https://dhushandhansd.github.io/twitter.github.io/home'
    } else {
        document.cookie = 'auth=false'
    }
}

function loginActivator() {
    if(userInput.value != '' || userInput.value != null) {
        if(passwordInput.value != '' || passwordInput.value != null) {
            loginButton.classList.remove('inactive')
        }
    }
}

function loginNavigation() {
    location.href = 'https://dhushandhansd.github.io/twitter.github.io/login'
}