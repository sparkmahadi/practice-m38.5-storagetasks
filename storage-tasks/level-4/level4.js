const setValueToFields = (elementId, valueToSet) =>{
    const field = document.getElementById(elementId);
    field.value = valueToSet;
}

const getObjFromLS = () =>{
    const rawObj = localStorage.getItem('data');
    const newObj = JSON.parse(rawObj);
    if(newObj){
        if(newObj.name){
            setValueToFields('name-field', newObj.name);
            }
            if(newObj.email){
                setValueToFields('email-field', newObj.email);
            }
            if(newObj.message){
            setValueToFields('message-field', newObj.message);
            }
    }
   }

   
   const singleSendHandler = (buttonId, fieldId, relatedProperty) =>{
       document.getElementById(buttonId).addEventListener('click', ()=>{
           const data = localStorage.getItem('data');
           if(data){
               // localStorage.removeItem('data')
               let nameValue = document.getElementById(fieldId).value;
               newObj = JSON.parse(data);
               newObj[relatedProperty] = nameValue;
               const convertedObj = JSON.stringify(newObj);
               localStorage.setItem('data', convertedObj)
               
            }
            else{
                let newObj = {};
                let nameValue = document.getElementById(fieldId).value;
                newObj[relatedProperty] = nameValue;
                const convertedObj = JSON.stringify(newObj);
                localStorage.setItem('data', convertedObj)
            }     
        })
    }

singleSendHandler('send-name', 'name-field', 'name')
singleSendHandler('send-email', 'email-field', 'email')
singleSendHandler('send-message', 'message-field', 'message')

const singleDeleteHandler = (buttonId, relatedProperty) =>{
    document.getElementById(buttonId).addEventListener('click', ()=>{
        const data = localStorage.getItem('data');
        if(data){
                newObj = JSON.parse(data);
                delete newObj[relatedProperty];
                const convertedObj = JSON.stringify(newObj);
                localStorage.setItem('data', convertedObj)
            
        }
        else{
            alert('no value in LS')
        }     
    })
}

singleDeleteHandler('delete-name', 'name')
singleDeleteHandler('delete-email', 'email')
singleDeleteHandler('delete-message', 'message')




// const clearValueFromLS = (elementId, LSKeyName) =>{
//     document.getElementById(elementId).addEventListener('click', ()=>{
//         localStorage.removeItem(LSKeyName)
//     })
// }

// clearValueFromLS('delete-name', 'name')
// clearValueFromLS('delete-email', 'email')
// clearValueFromLS('delete-message', 'message')

    const getValueFromFields = (elementId) =>{
        const field = document.getElementById(elementId);
        const value = field.value;
        return value;
    }

// additonal task with level 4
document.getElementById('send-all').addEventListener('click', ()=>{
    const nameValue = getValueFromFields('name-field');
    const emailValue = getValueFromFields('email-field');
    const messageValue = getValueFromFields('message-field');
    
    let newObj = {};
    newObj.name = nameValue;
    newObj.email = emailValue;
    newObj.message = messageValue;
    
    const convertedObj = JSON.stringify(newObj);
    
    localStorage.setItem('data' ,convertedObj);
})

document.getElementById('delete-all').addEventListener('click', ()=>{
    localStorage.removeItem('data')
})

getObjFromLS();