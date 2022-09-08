// console.log('connected level2.js')

const showedValue = document.getElementById('showed-value');
// code for increament
document.getElementById('increament').addEventListener('click', ()=>{
    
    const showedValueFloat = parseFloat(showedValue.innerText)
    const increasedValue = showedValueFloat + 1;
    showedValue.innerText = increasedValue;
    
    localStorage.setItem('value',increasedValue);
})

// code for decreament
document.getElementById('decreament').addEventListener('click', ()=>{
    
    const showedValueFloat = parseFloat(showedValue.innerText)
    const decreasedValue = showedValueFloat - 1;
    showedValue.innerText = decreasedValue;
    
    localStorage.setItem('value',decreasedValue);
})

const key = localStorage.getItem('value');

if(key){
    // code for displaying default value from local storage
    const valueFromLS = localStorage.getItem('value')
    showedValue.innerText = valueFromLS;
}else{
    console.log('Name is not found');
}