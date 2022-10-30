"use strict";
const button = document.querySelector('#clickoUno');
button.addEventListener('click', () => {
    console.log("Clicked!");
});
function clickHandler(message) {
    console.log(`Clicked ${message}`);
}
if (button) {
    button.addEventListener('click', clickHandler.bind(null, 'Hello Me'));
}
//# sourceMappingURL=app.js.map