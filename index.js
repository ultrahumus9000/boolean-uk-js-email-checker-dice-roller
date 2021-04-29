// email

const email = ['thomastonehouse@gmail.com','lin@gmail.com', 'jennystonehouse@gmail.com', 'joestonehouse@gmail.com', 'paristonehouse@gmail.com']
const useremail = prompt('what is your email')
for ( const element of email){
    if(useremail == element) alert('your email is listed '+ useremail)
    else(alert('your email is not listed') )
}

// dice
let j = 0
for (let i = 0; i <5 ; i++){
    let userdicenumber = Math.floor(Math.random() * 7)
    let computerdicenumber = Math.floor(Math.random() * 7)
    console.log('user computer',userdicenumber, computerdicenumber)
    if (userdicenumber > computerdicenumber){
        j++
    }
}
console.log('user win times',j)

if (j >= 3){alert('user win')
    console.log('user win')} else{
    alert('user lose')
    console.log('user lose')
}