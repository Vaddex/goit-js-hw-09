const emailInput = document.querySelector('.form-email-field')
const messageField = document.querySelector('.form-message-field')
const formSubmitBtn = document.querySelector('.form-submit-btn')


// Events
emailInput.addEventListener('focus', handleFocus)
emailInput.addEventListener('focusout', handlerFocusout)
emailInput.addEventListener('input', handlerInputEmail)
messageField.addEventListener('input', handlerInputMessage)
window.addEventListener('load', handlerWindowLoad)
formSubmitBtn.addEventListener('click', handlerSubmitBtn)


function handleFocus(event) {
    this.setAttribute('placeholder', 'Type area')
    this.classList.add('placeholder-font')
}
function handlerFocusout(event) {
    this.setAttribute('placeholder', '')
    this.classList.remove('placeholder-font')
}
function handlerInputEmail(event) {
    if (localStorage.hasOwnProperty('feedback-form-state')) {
        const savedObject = JSON.parse(localStorage.getItem('feedback-form-state'))
        savedObject.email = this.value.trim()
        localStorage.setItem('feedback-form-state', JSON.stringify(savedObject))
    } else {
        const object = {
            email: this.value.trim()
        }
        localStorage.setItem('feedback-form-state', JSON.stringify(object))
    }
}
function handlerInputMessage(event) {
    if (localStorage.hasOwnProperty('feedback-form-state')) {
        const savedObject = JSON.parse(localStorage.getItem('feedback-form-state'))
        savedObject.message = this.value.trim()
        localStorage.setItem('feedback-form-state', JSON.stringify(savedObject))
    } else {
        const object = {
            message: this.value.trim()
        }
        localStorage.setItem('feedback-form-state', JSON.stringify(object))
    }
}
function handlerWindowLoad(event) {
    if (localStorage.hasOwnProperty('feedback-form-state')) {
        const savedObject = JSON.parse(localStorage.getItem('feedback-form-state'))
        if (emailInput.text === undefined && savedObject.email !== undefined) {
            emailInput.value = savedObject.email
        }
        if (messageField.text === undefined && savedObject.message !== undefined) {
            messageField.value = savedObject.message
        }
    }
}
function handlerSubmitBtn(event) {
    event.preventDefault()
    if (localStorage.hasOwnProperty('feedback-form-state')) {
        const savedObject = JSON.parse(localStorage.getItem('feedback-form-state'))
        if (savedObject.email !== undefined && savedObject.message !== undefined &&
            savedObject.email.trim().length > 0 && savedObject.message.trim().length > 0) {
                console.log(savedObject);
                localStorage.removeItem('feedback-form-state')
                emailInput.value = ''
                messageField.value = ''
        }
    }
}