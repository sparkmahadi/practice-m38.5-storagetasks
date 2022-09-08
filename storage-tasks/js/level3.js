// console.log('connected level3.js')

// document.getElementById('send-name').addEventListener('click', ()=>{
//     let nameValue = document.getElementById('name-field').value;
//     console.log(nameValue)
//         localStorage.setItem('name', nameValue)
// })

/* summarized to common function */
const setValueToLS = (elementId, fieldId, LSKeyName) =>{
    document.getElementById(elementId).addEventListener('click', ()=>{
        let nameValue = document.getElementById(fieldId).value;
        localStorage.setItem(LSKeyName, nameValue)
    })
}

setValueToLS('send-name', 'name-field', 'name')
setValueToLS('send-email', 'email-field', 'email')
setValueToLS('send-message', 'message-field', 'message')


const clearValueFromLS = (elementId, LSKeyName) =>{
    document.getElementById(elementId).addEventListener('click', ()=>{
        localStorage.removeItem(LSKeyName)
    })
}

clearValueFromLS('delete-name', 'name')
clearValueFromLS('delete-email', 'email')
clearValueFromLS('delete-message', 'message')