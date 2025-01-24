// template_lhhfis9
// service_flayun8
// p-H7HsXoSmEKGe6_l

let isModalOpen = false
let contrastToggle = false
const scaleFactor= 1/20

function moveBackground(event){
    const shapes = document.querySelectorAll('.shape')
    const x = event.clientX * scaleFactor
    const y = event.clientY * scaleFactor

    for (let i = 0; i < shapes.length; ++i) {
        const isOdd = i % 2 !== 0
        const boolInt = isOdd ? -1 : 1
        shapes[i].style.transform = `translate(${x *boolInt}px, ${y * boolInt}px)`
    }
}

function toggleContrast() {
    contrastToggle = !contrastToggle
    if (contrastToggle) {
        return document.body.classList += ' dark-theme'
    }
    else {
        return document.body.classList.remove ('dark-theme')
    }
}

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector(' .modal__overlay--loading')
    const success = document.querySelector(' .modal__overlay--success')
    loading.classlist += ' modal__overlay--visible'
    emailjs
        .sendForm(
            'service_flayun8',
            'template_lhhfis9',
            event.target,
            'p-H7HsXoSmEKGe6_l'
    ).then(() => {
        loading.classList.remove('modal__overlay--visible')
        success.classList += ' modal__overlay--visible'
    }).catch(() => {
        loading.classList.remove('modal__overlay--visible')
        alert(
            "The email service is teporarily unavalible. Please contact me directly at andrewkyndheart@gmail.com"
        )
    })
}

function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false
        return document.body.classList.remove ("modal--open")
    }
    isModalOpen = true
    document.body.classList += " modal--open"
}