const loginButton = document.getElementById('login-nav')
const userInput = document.querySelector('.email-address')
const passwordInput = document.querySelector('.password')

const loginNav = document.getElementById('login-nav-btn')



document.cookie = 'auth=false'

const adminuser = 'dhushandhan.sd@gmail.com'
const password = 'shree@123'

loginButton.addEventListener('click', () => {
    if(userInput.value === adminuser &&
        passwordInput.value === password) {
            location.href = 'https://dhushandhansd.github.io/twitter.github.io/home'
            document.cookie = 'auth=true'
    }

})

function loginActivator() {
    if(userInput.value != '' || userInput.value != null) {
        if(passwordInput.value != '' || passwordInput.value != null) {
            loginBtn.classList.remove('inactive')
            document.cookie = 'auth=false'
        }
    }
}

loginNav.addEventListener('click', () => {
    location.href = 'https://dhushandhansd.github.io/twitter.github.io/login'
})