const button = document.querySelector('button');


//button.onclick = function(){

//};

const buttonClickHandler = () => {
    alert('Button was clicked!');
};

const anotherButtonClickHandler = () => {
    console.log('This was clicked!')
};

// button.onclick = buttonClickHandler;
// button.onclick = anotherButtonClickHandler;

const boundFn = 

button.addEventListener('click', () => {
    console.log('Clicked');
});


setTimeout(() => {
button.removeEventListener('click', buttonClickHandler);
}, 2000);