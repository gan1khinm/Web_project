function sendMessage() {
    // Получаем текст сообщения из поля ввода
    const messageContent = document.getElementById('messageInput').value;

    // Создаем объект с данными для нового сообщения
    const newMessageData = {
        content: messageContent,
    };

    addMessage(messageContent)
}

function addMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.textContent = message;

    const chatMessages = document.getElementById('chatMessages');

    chatMessages.appendChild(messageElement);
}


/*fetch('/api/messages', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(newMessageData),
})
    .then(response => {
        if (!response.ok) {
            throw new Error('Ошибка отправки сообщения');
        }
        return response.json();
    })
    .then(data => {
        // Выводим новое сообщение на страницу
        addMessage(data.content);
    })
    .catch(error => {
        console.error('Ошибка:', error);
    });*/