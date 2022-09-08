document.getElementById('prompt').addEventListener('click', ()=>{
    const userValue = prompt('Put a value for addition');
    const userValueFloat = parseFloat(userValue);
    const afterAddition = userValueFloat + 200;
    alert(`The value after addition is  ${afterAddition}`)
})

document.getElementById('btn-confirm').addEventListener('click', ()=>{
    const confirmation = confirm('Do you want to see your website location?')
    if(confirmation){
        console.log(window.location.href)
    }
    else{
        console.log('Okay')
    }
})