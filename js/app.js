const form = document.createElement(`form`);

const main = document.querySelector(`#main`);
main.className = `main-content`

const fieldset = document.createElement(`fieldset`);
fieldset.className = `main`;

const legend = document.createElement(`legend`);
legend.innerText = `My first form on JS(WOW)`;

const divInput1 = document.createElement(`div`);

const divInput2 = document.createElement(`div`);

const divButton = document.createElement(`div`);

const labelInput1 = document.createElement(`label`);
labelInput1.innerText = `E-mail`;

const labelInput2 = document.createElement(`label`);
labelInput2.innerText = `Password`;

const inputFieldset1 = document.createElement(`input`);
inputFieldset1.type = `text`;
inputFieldset1.placeholder = `Login/E-mail`;
inputFieldset1.className = `inputs`;

const inputFieldset2 = document.createElement(`input`);
inputFieldset2.type = `password`;
inputFieldset2.placeholder = `Password`;
inputFieldset2.className = `inputs`;

const buttonFieldset = document.createElement(`button`);
buttonFieldset.type = `submit`;
buttonFieldset.innerText = `Submit`

main.prepend(form);
form.prepend(fieldset);
fieldset.prepend(divButton);
fieldset.prepend(divInput2);
fieldset.prepend(divInput1);
fieldset.prepend(legend)
divInput1.prepend(labelInput1);
divInput2.prepend(labelInput2);
labelInput1.prepend(inputFieldset1);
labelInput2.prepend(inputFieldset2);
divButton.prepend(buttonFieldset);
