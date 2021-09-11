// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

// <input type="text" placeholder="Ваше имя?" id="name-input" />
// <h1>Привет, <span id="name-output">незнакомец</span>!</h1>

const refs = {
    input: document.querySelector('#name-input'),
    nameLabel: document.querySelector('h1 > #name-output'),
}

refs.input.addEventListener('input', onInputChangeName)

console.log(refs.input);

console.log(refs.nameLabel);

let guestGreetingStr = refs.nameLabel.textContent;
console.log(guestGreetingStr);

function onInputChangeName(event) {
    refs.nameLabel.textContent = event.currentTarget.value;
 
    if (refs.nameLabel.textContent === '') {
        refs.nameLabel.textContent = guestGreetingStr;
    }
}