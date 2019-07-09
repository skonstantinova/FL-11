let email = prompt('Enter your email', '');
if (email===null || email==='') {
alert('Canceled')
} else {
let maxLength=6;
if (email.length<maxLength) {
alert("I don't know any emails having name length less than 6 symbols")
} else {
if (email==='user@gmail.com' || email==='admin@gmail.com') {
let pass=prompt('Enter your password', '')
if (pass===null || pass==='') {
alert('Canceled')
} else {
if (email==='user@gmail.com' && pass==='UserPass' || email==='admin@gmail.com' && pass==='AdminPass') {
let change = confirm('Do you want to change your password?')
if (change===false) {
alert('You have failed the change.') 
} else {
let oldPass=prompt('Enter the old password', '') 
if (oldPass===null || oldPass==='') {
alert('Canceled') 
} else {
if (oldPass!==pass) { 
alert('Wrong password') 
}
if (email==='user@gmail.com' && oldPass==='UserPass' || email==='admin@gmail.com' && oldPass==='AdminPass') {
let newpass = prompt('Enter the new password', '')
if (newpass.length<maxLength) {
alert('It’s too short password. Sorry.') 
} else {
let newPassAdain=prompt('Enter the new password again', '')
if (newpass===newPassAdain) {
alert('You have successfully changed your password.')
} else {
alert('You wrote the wrong password.')
}
}
}
}
} 
} else {
alert('Wrong password')
}
}
} else {
alert('I don’t know you')
}
}
}