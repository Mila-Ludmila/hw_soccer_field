
const soccerField = document.getElementById('soccerField');
const soccerBall = document.getElementById('soccerBall');

soccerField.addEventListener('click', function(e) {
const clickX = e.clientX;
const clickY = e.clientY;

// getBoundingClientRect() повертає розмір елемента та його позицію щодо viewport (частина сторінки, показана на екрані, і яку ми бачимо)
const fieldRect = soccerField.getBoundingClientRect();
const ballRect = soccerBall.getBoundingClientRect();

//Обчислюємо позицію, куди потрібно перемістити м’яч
const newX = clickX - fieldRect.left - ballRect.width / 2;
const newY = clickY - fieldRect.top - ballRect.height / 2;

//Слідкуємо за тим, щоб м'яч залишався в межах поля
const maxX = fieldRect.width - ballRect.width;
const maxY = fieldRect.height - ballRect.height;
            
const finalX = Math.min(Math.max(newX, 0), maxX);
const finalY = Math.min(Math.max(newY, 0), maxY);

//Переміщаємо м'яч плавно
soccerBall.style.transform = `translate(${finalX}px, ${finalY}px)`;
});