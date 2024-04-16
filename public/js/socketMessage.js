const socket = io('http://localhost:3000');

socket.on('newMessage', (message) => {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    //messageElement.textContent = message.content;
    messageElement.innerHTML = message.message.content;

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
});

async function deleteMessage(messageId) {
    try {
        const id = parseInt(messageId);
        const response = await fetch(`/messages/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('Ошибка удаления сообщения');
        }
    } catch (error) {
        console.error('Ошибка:', error);
    }
}
