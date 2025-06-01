//chatget.py
function getMessages() {
    fetch('../htbin/chatget.py', { method: 'GET' })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erreur HTTP : ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const chatMessages = document.getElementById('chatMessages');
            chatMessages.innerHTML = '';

            if (data.length > 0) {
                data.forEach(message => {
                    const messageElement = document.createElement('div');
                    messageElement.classList.add('chat-message');
                    messageElement.innerHTML = `<strong>${message.user} (${message.time} - ${message.date})</strong>: <span>${message.msg}</span>`;
                    chatMessages.appendChild(messageElement);
                });
                console.log('Messages reçus:', data);
            } else {
                console.log('Aucun message à afficher.');
            }
        })
        .catch(error => {
            console.error('Erreur lors de la récupération des messages:', error);
            alert(`Erreur lors de la récupération des messages : ${error.message}`);
        });
}

//chatsend.py
function sendMessage() {
    const messageInput = document.getElementById('chatInput');
    const message = messageInput.value.trim();
    const messageStatus = document.getElementById('messageStatus');

    if (message) {
        fetch('../htbin/chatsend.py', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({ msg: message })
        })
        //vérification de test
        .then(response => response.json())
        .then(data => {
            if (data.num === 0) {
                messageInput.value = '';
                getMessages();
                messageStatus.textContent = 'Message envoyé avec succès';
                messageStatus.style.color = 'green';
                console.log('Message envoyé avec succès:', message);
            } else {
                messageStatus.textContent = data.msg;
                messageStatus.style.color = 'red';
                console.error('Erreur lors de l\'envoi du message:', data.msg);
            }
        })
        .catch(error => {
            console.error('Erreur lors de l\'envoi du message:', error);
            messageStatus.textContent = 'Erreur lors de l\'envoi du message';
            messageStatus.style.color = 'red';
        });
    } else {
        messageStatus.textContent = 'Le message ne peut pas être vide.';
        messageStatus.style.color = 'red';
    }
}

document.getElementById('sendMessageBtn').addEventListener('click', sendMessage);

window.onload = function () {
    getMessages();
    //enlever le commentaire ici pour le serveur si vraiment utile car ça fonctionne sans vu qu'il y'a pas de réponse !   setInterval(getMessages, 5000);
};
