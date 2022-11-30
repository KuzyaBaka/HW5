const form = document.createElement(`form`);

const main = document.querySelector(`#main`);

const fieldset = document.createElement(`fieldset`);
fieldset.className = `main`

const legend = document.createElement(`legend`);
legend.innerText = `My first form on JS(WOW)`;

const inputFieldset1 = document.createElement(`input`);
inputFieldset1.type = `text`;
inputFieldset1.placeholder = `Login/E-mail`;
inputFieldset1.className = `inputs`

const inputFieldset2 = document.createElement(`input`);
inputFieldset2.type = `password`;
inputFieldset2.placeholder = `Password`;
inputFieldset2.className = `inputs`

const buttonFieldset = document.createElement(`input`)
buttonFieldset.type = `submit`
buttonFieldset.className = `inputs`

main.prepend(form)
form.prepend(fieldset);
fieldset.prepend(inputFieldset1)
fieldset.prepend(legend);
fieldset.append(inputFieldset2)
fieldset.append(buttonFieldset)

