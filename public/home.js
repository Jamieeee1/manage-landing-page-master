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