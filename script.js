const url = 'https://api.telegram.org/bot7207231079:AAFR21ydwp2ekBoB3ZTgIuQcPFQiCT9DD7U/sendPhoto'

function sendMessage(event) {
    event.preventDefault();

    const messageInput = document.querySelector('input[name="message"]');
    const photoInput = document.querySelector('input[name="photo"]');
    const message = messageInput.value;
    const photo = photoInput.files[0];

    // Создаем FormData для отправки данных
    const formData = new FormData();
    formData.append('chat_id', -1002043719567);
    formData.append('caption', message);
    formData.append('photo', photo);

    const params = {
        method: 'POST',
        body: formData
    };

    fetch(url, params)
        .then(response => {
            console.log(response);
            messageInput.value = ''; // Очистим поле ввода сообщения после отправки
        })
        .catch(error => {
            alert('Ошибка при отправке фото и сообщения:', error);
        });
}

document.getElementById('Form').addEventListener('submit', sendMessage);


//  event.preventDefault();

// Событие — это какое-то действие, произошедшее на странице. Например, клик, нажатие кнопки, движение мыши, отправка формы и так далее. Когда срабатывает событие, браузер создаёт объект события Event. Этот объект содержит всю информацию о событии. У него есть свои свойства и методы, с помощью которых можно эту информацию получить и использовать. Один из методов как раз позволяет отменить действие браузера по умолчанию — preventDefault().

// Event можно передать в функцию-обработчик события и в ней указать инструкции, которые должны быть выполнены, когда оно сработает. При передаче объекта события в обработчик обычно используется сокращённое написание — evt.