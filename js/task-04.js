// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

// <div id="counter">
//  <button type="button" data-action="decrement">-1</button>
//  <span id="value">0</span>
//  <button type="button" data-action="increment">+1</button>
// </div> 

const counterRef = document.querySelector('#value');

let counterValue = counterRef.textContent;
console.log(counterValue);
counterValue = 0;

const incrementBtn = document.querySelector('#counter button[data-action="increment"]');
console.log(incrementBtn);

const decrementBtn = document.querySelector('#counter button[data-action="decrement"]');
console.log(decrementBtn);

incrementBtn.addEventListener('click', onClickBtnIncrement)
decrementBtn.addEventListener('click', onClickBtnDecrement)

function onClickBtnIncrement() {
    counterValue += 1;
    counterRef.textContent = counterValue;
}

function onClickBtnDecrement() {
    counterValue -= 1;
    counterRef.textContent = counterValue;
}