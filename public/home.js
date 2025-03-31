const button = document.querySelector("#toggle");
const phonenav = document.querySelector("#phone_nav");

button.addEventListener('click', () => {
    button.classList.toggle('drop');
    if(button.classList.contains('drop')){
        button.innerHTML = `
        <img src="images/icon-close.svg" alt="" srcset="">
        `
        phonenav.classList.remove("invisible")
    } else {
        button.innerHTML = `
        <img src="images/icon-hamburger.svg" alt="" srcset="">
        `
        phonenav.classList.add('invisible')
    }
})

const email = document.querySelector("#email");
const emailspan = document.querySelector("#emaildiv");
const gobutton = document.querySelector("#goemail");
const form = document.querySelector("#emailform")


form.addEventListener('submit', function(event) {
    event.preventDefault()

    if(email.value == '' ) {
        window.alert("field cant be left empty")
    } else {
        const checkVal = email.checkValidity();
        console.log(checkVal)
        if(!checkVal) {
            console.log("Try")
            emailspan.classList.remove('invisible')
        }
        else {
            let check = emailspan.classList.contains('invisible')
            if(!check) {
                emailspan.classList.add('invisible')
            }
        }
    }
})

// gobutton.addEventListener('click', () => {
// })