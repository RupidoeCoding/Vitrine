document.getElementById('boutonidentification').addEventListener('click', function(event) {
    event.preventDefault();

    var username = document.getElementById('nameutilisateur').value;
    var password = document.getElementById('mdp').value;
    var params = 'username=' + encodeURIComponent(username) + '&userpwd=' + encodeURIComponent(password);

    var xhr = new XMLHttpRequest();

    xhr.open('POST', '/htbin/login.py', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(params);

    xhr.onload = function() {
        if (xhr.status === 200) {
            var messageElement = document.getElementById('message');
            messageElement.innerText = xhr.responseText;

            if (xhr.responseText.includes("Bonjour")) {
                messageElement.classList.add('succes');
                messageElement.classList.remove('erreur');
            } else {
                messageElement.classList.add('erreur');
                messageElement.classList.remove('succes');
            }
        } else {
            document.getElementById('message').innerText = "Erreur lors de la connexion.";
        }
    };

    xhr.onerror = function() {
        document.getElementById('message').innerText = "Erreur réseau, veuillez réessayer.";
    };
});

document.getElementById('nameutilisateur').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        document.getElementById('mdp').focus();
    }
});

document.getElementById('mdp').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        document.getElementById('boutonidentification').click();
    }
});
