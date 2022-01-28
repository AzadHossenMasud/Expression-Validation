// Define From UI
let email = document.querySelector('#email')
let phoneNumber = document.querySelector('#phoneNumber')
let postCode = document.querySelector('#postCode')

// Add Event Listener
email.addEventListener('click', emailValiate)
phoneNumber.addEventListener('click', phoneNumberValidate)
postCode.addEventListener('click', postCodeValidate)

// Function
function emailValiate(e) {
    let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let text = prompt('Enter a email ')
    if(re.exec(text)){
        alert("The Email Address is valid")
    } else {
        alert('Invalid Email')
    }
   
}

function phoneNumberValidate(e) {
    let re = /^\+?(88)?01[3456789][0-9]{8}\b/;
    let text = prompt('Enter a Phone Number ')
    if(re.exec(text)){
        alert("The Phone Number is valid")
    } else {
        alert('Invalid Phone Number')
    }
}

function postCodeValidate(e) {
    let re = /^[0-9]{4}$/;
    let text = prompt('Enter a Postal Code ')
    if(re.exec(text)){
        alert("The Postal Code is valid")
    } else {
        alert('Invalid Postal Code')
    }
}