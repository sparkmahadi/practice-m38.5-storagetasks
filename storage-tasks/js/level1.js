console.log('connected level1.js')

localStorage.clear()
localStorage.setItem('name','sakib khan')
localStorage.setItem('age',40)
console.log(localStorage.getItem('name'))
console.log(localStorage.getItem('age'))

localStorage.removeItem('name')
localStorage.removeItem('age')

const objectToSet = {
    firstName: 'Abraham',
    lastName: 'Linkon'
}

const nameObject = JSON.stringify(objectToSet)
localStorage.setItem('name', nameObject)