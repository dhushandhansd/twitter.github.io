const authAccess = document.cookie;
let auth = ''

for(let i = 0; i<authAccess.length; i++) {
    if(authAccess.charAt(i) == '=') {
        auth += authAccess.substring(i+1, authAccess.length)
    }
}

function authorize() {
    console.log(auth)
    if(auth == 'false') {
        location.href = 'https://dhushandhansd.github.io/twitter.github.io/'
    }    
}