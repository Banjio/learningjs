const button = document.querySelector('#clickoUno')!;

button.addEventListener('click', () => {
    console.log("Clicked!");
});

function clickHandler(message: string){
    console.log(`Clicked ${message}`)
}

if(button){
    button.addEventListener('click', clickHandler.bind(null, 'Hello Me'))
}