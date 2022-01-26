// HINT: You can delete this console.log after you no longer need it!

// First, tell us your name
let yourName = "Anand Patel" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle

// selecting the element with an id of credit
const credit = document.querySelector('#credit')
// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector('#add-gb')

// Code to update name display
credit.textContent = `Created by ${yourName}`



// update quantity
function updateQuantity(displayQuantity) {
    let quantity = document.querySelector('.qty-gb')
    quantity.innerHTML = displayQuantity 
}


// Buttons
const gbPlusBtn = document.querySelector('#add-gb')
const gbMinusBtn = document.querySelector('#minus-gb')

// add event listener to decrease quantity
gbMinusBtn.addEventListener('click', function(){
    if (quantity > 0) {
        quantity = quantity - 1;
    }
    updateQuantity(`Gingerbread: ${quantity}`)
})

// add event listener to increase quantity
gbPlusBtn.addEventListener('click', function(){
    quantity = quantity + 1;


    updateQuantity(`Gingerbread: ${quantity}`)
})





function updateQuantity(displayQuantity) {
    let quantity = document.querySelector('.qty-cc')
    quantity.innerHTML = displayQuantity 
}

// Start quantity at 1 since product is in cart
let cc = 0;

// Buttons
const ccPlusBtn = document.querySelector('#add-cc')
const ccMinusBtn = document.querySelector('#minus-cc')

// add event listener to decrease quantity
ccMinusBtn.addEventListener('click', function(){
    if (quantity > 0) {
        quantity = quantity - 1;
    }
    updateQuantity(`Chocolate Chip: ${quantity}`)
})

// add event listener to increase quantity
ccPlusBtn.addEventListener('click', function(){
    quantity = quantity + 1;


    updateQuantity(`Chocolate Chip: ${quantity}`)
})






function updateQuantity(displayQuantity) {
    let quantity = document.querySelector('.qty-sugar')
    quantity.innerHTML = displayQuantity 
}

// Start quantity at 1 since product is in cart
let gb = 0;

// Buttons
const sugarPlusBtn = document.querySelector('#add-sugar')
const sugarMinusBtn = document.querySelector('#minus-sugar')

// add event listener to decrease quantity
sugarMinusBtn.addEventListener('click', function(){
    if (quantity > 0) {
        quantity = quantity - 1;
    }
    updateQuantity(`Sugar Sprinkle: ${quantity}`)
})

// add event listener to increase quantity
sugarPlusBtn.addEventListener('click', function(){
    quantity = quantity + 1;


    updateQuantity(`Sugar Sprinkle: ${quantity}`)
})





















































