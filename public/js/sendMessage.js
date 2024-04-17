async function sendMessage() {
    try {
        if (!isUserAuthenticated()) {
            var redirectUrl = 'http://localhost:3000/auth/google/login';
            window.location.href = redirectUrl;
            return;
        }

        const messageContent = document.getElementById('messageInput').value;
        const newMessageData = {
            content: messageContent,
        };

        const response = await fetch('/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newMessageData),
        });

        if (!response.ok) {
            throw new Error('Ошибка отправки сообщения');
        }

    } catch (error) {
        console.error('Ошибка:', error);
    }
}

function isUserAuthenticated () {
    if(localStorage.getItem("email")){
        return true;
    } else {
        return false;
    }
}


