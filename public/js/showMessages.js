async function getMessages() {
    try {
        const response = await fetch('/messages', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Ошибка получения сообщений');
        }

        const messages = await response.json();
        return messages;
    } catch (error) {
        console.error('Ошибка:', error);
    }
}

async function displayMessages() {
    const messages = await getMessages();

    messages.forEach(message => {
        addMessage(message)
    });
}

function addMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.textContent = message.content;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Удалить';
    deleteButton.classList.add('deleteButton');
    messageElement.appendChild(deleteButton);

    deleteButton.addEventListener('click', () => {
        deleteMessage(message.id);
        messageElement.remove();
    });

    const chatMessages = document.getElementById('chatMessages');
    chatMessages.appendChild(messageElement);
}

displayMessages();
