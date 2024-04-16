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

displayMessages();
