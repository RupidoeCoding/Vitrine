document.addEventListener("DOMContentLoaded", function () {
    const nom = document.getElementById("name");
    const prenom = document.getElementById("prenom");
    const mail = document.getElementById("email");
    const date = document.getElementById("birthdate");
    const pseudo = document.getElementById("pseudo");
    const mdp1 = document.getElementById("mdp1");
    const mdp2 = document.getElementById("mdp2");
    const confirmer = document.getElementById("boutonConfirm");

    nom.addEventListener("input", validenom);
    prenom.addEventListener("input", valideprenom);
    mail.addEventListener("input", validemail);
    date.addEventListener("input", validedate);
    pseudo.addEventListener("input", validepseudo);
    mdp1.addEventListener("input", validemdp1);
    mdp2.addEventListener("input", validemdp2);
    confirmer.addEventListener("click", ConfirmInscription);

    function validepseudo() {
        let user = pseudo.value.trim();
        let message = "";

        if (user.length < 6) {
            document.getElementById("messagePseudo").innerHTML = "Le pseudo doit contenir au moins 6 caractères";
            message = "pasok";
        } else {
            document.getElementById("messagePseudo").innerHTML = "";
            message = "OK";
        }
        return message;
    }

    function validenom() {
        let nomValue = nom.value.trim();
        let message = "";

        if (nomValue === "") {
            document.getElementById("messageName").innerHTML = "Le nom ne peut pas être vide";
            message = "pasok";
        } else {
            document.getElementById("messageName").innerHTML = "";
            message = "OK";
        }
        return message;
    }

    function valideprenom() {
        let prenomValue = prenom.value.trim();
        let message = "";

        if (prenomValue === "") {
            document.getElementById("messagePrenom").innerHTML = "Le prénom ne peut pas être vide";
            message = "pasok";
        } else {
            document.getElementById("messagePrenom").innerHTML = "";
            message = "OK";
        }
        return message;
    }

    function validemail() {
        let emailValue = mail.value.trim().toLowerCase();
        let message = "";
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!regex.test(emailValue)) {
            document.getElementById("messageMail").innerHTML = "L'adresse mail n'est pas valide";
            message = "pasok";
        } else {
            document.getElementById("messageMail").innerHTML = "";
            message = "OK";
        }
        return message;
    }

    function validemdp1() {
        let mdp1Value = mdp1.value.trim();
        let message = "";

        if (mdp1Value.length < 8) {
            document.getElementById("messageMDP1").innerHTML = "Le mot de passe doit contenir au moins 8 caractères";
            return "pasok";
        }

        const regexSpecial = /[_\-;:!?./*&$]/;
        if (!regexSpecial.test(mdp1Value)) {
            document.getElementById("messageMDP1").innerHTML = "Le mot de passe doit contenir au moins un caractère spécial (_-;:!?./*&$)";
            return "pasok";
        }

        const regexNumber = /[0-9]/;
        if (!regexNumber.test(mdp1Value)) {
            document.getElementById("messageMDP1").innerHTML = "Le mot de passe doit contenir au moins un chiffre";
            return "pasok";
        }

        document.getElementById("messageMDP1").innerHTML = "";
        return "OK";
    }

    function validemdp2() {
        let mdp1Value = mdp1.value.trim();
        let mdp2Value = mdp2.value.trim();

        if (mdp1Value !== mdp2Value) {
            document.getElementById("messageMDP").innerHTML = "Les mots de passe ne correspondent pas";
            return "pasok";
        } else {
            document.getElementById("messageMDP").innerHTML = "";
            return "OK";
        }
    }

    function validedate() {
        let valdate = document.getElementById("birthdate").value;
        if (!valdate) {
            return "OK";
        }

        const regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
        if (!regex.test(valdate)) {
            document.getElementById("messageDate").innerHTML = "Le format de la date est incorrect. Utilisez jj/mm/aaaa.";
            return "pasok";
        }

        const parts = valdate.split('/');
        const day = parseInt(parts[0], 10);
        const month = parseInt(parts[1], 10) - 1;
        const year = parseInt(parts[2], 10);
        const birthDate = new Date(year, month, day);
        if (birthDate.getDate() !== day || birthDate.getMonth() !== month || birthDate.getFullYear() !== year) {
            document.getElementById("messageDate").innerHTML = "La date saisie n'est pas valide.";
            return "pasok";
        }
    
        let auj = new Date();
        auj.setHours(0, 0, 0, 0);
        if (birthDate >= auj) {
            document.getElementById("messageDate").innerHTML = "La date doit être antérieure à aujourd'hui.";
            return "pasok";
        } else {
            document.getElementById("messageDate").innerHTML = "";
            return "OK";
        }
    }
    
    function ConfirmInscription() {
        let validations = [
            validenom(),
            valideprenom(),
            validepseudo(),
            validedate(),
            validemail(),
            validemdp1(),
            validemdp2()
        ];

        if (validations.includes("pasok")) {
            alert("Une ou plusieurs entrées ne sont pas valides.");
            return;
        }

        alert("Vous avez officiellement rejoint la communauté !");
    }

    // Optimisation suite à la partie 4
    document.getElementById('name').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
         event.preventDefault();
            document.getElementById('prenom').focus();
        }
    });

    document.getElementById('prenom').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            document.getElementById('email').focus();
        }
    });

    document.getElementById('email').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            document.getElementById('birthdate').focus();
        }
    });

    document.getElementById('birthdate').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
        event.preventDefault();
        document.getElementById('pseudo').focus();
        }
    });

    document.getElementById('pseudo').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            document.getElementById('mdp1').focus();
        }
    });

    document.getElementById('mdp1').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            document.getElementById('mdp2').focus();
        }
    });

    document.getElementById('mdp2').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            document.getElementById('boutonConfirm').click();
        }
    });
});
