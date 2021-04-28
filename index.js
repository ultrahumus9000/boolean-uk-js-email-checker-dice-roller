// email

const email = ['thomastonehouse@gmail.com','lin@gmail.com', 'jennystonehouse@gmail.com', 'joestonehouse@gmail.com', 'paristonehouse@gmail.com']
const useremail = prompt('what is your email')
for ( const element of email){
    if(useremail == element) alert('your email is listed '+ useremail)
}

// dice
let j = 0
for (let i = 0; i <5 ; i++){
    let userdicenumber = Math.floor(Math.random() * 7)
    let computerdicenumber = Math.floor(Math.random() * 7)
    console.log(userdicenumber)
    if (userdicenumber > computerdicenumber){
        j++
    }
}
if (j >= 3){alert('user win')} else{
    alert('user lose')
}