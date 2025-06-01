document.addEventListener("DOMContentLoaded", function () {
    var canevas = document.getElementById("vent");
    var contexte = canevas.getContext("2d");      
    
    function redimensionnerCanvas() {
        var carte = document.querySelector(".carte");
        canevas.width = carte.clientWidth;
        canevas.height = carte.clientHeight;
        canevas.style.left = carte.offsetLeft + "px";
        canevas.style.top = carte.offsetTop + "px";
    }
    
    window.addEventListener("resize", redimensionnerCanvas);
    redimensionnerCanvas();
    
    var nombreMaxParticules = 20;
    var particules = [];
    
    function aleatoire(min, max) {
        return Math.random() * (max - min) + min;
    }
    
    function Particule() {
        this.initialiser();
    }
    
    //Hommage au cours de simulation : plein d'aléatoire
    Particule.prototype = {
        initialiser: function () {
            this.x = 0;
            this.y = aleatoire(0, canevas.height);
            this.taille = aleatoire(2, 6);
            this.vitesseX = aleatoire(3, 6);
            this.vitesseY = aleatoire(-1, 1);
            this.opacite = aleatoire(0.5, 1);
        },
    
        dessiner: function () {
            contexte.beginPath();
            contexte.arc(this.x, this.y, this.taille, 0, Math.PI * 2);
            contexte.fillStyle = `rgba(200, 200, 200, ${this.opacite})`;
            contexte.fill();
            contexte.closePath();
    
            this.mettreAJour();
        },
    
        mettreAJour: function () {
            this.x += this.vitesseX;
            this.y += this.vitesseY;
    
            if (this.x > canevas.width || this.y > canevas.height || this.y < 0) {
                this.initialiser();
            }
        }
    };
    
    function initialiserParticules() {
        for (var i = 0; i < nombreMaxParticules; i++) {
            particules.push(new Particule());
        }
    }
    
    function animer() {
        contexte.clearRect(0, 0, canevas.width, canevas.height);
        particules.forEach(particule => particule.dessiner());
        requestAnimationFrame(animer);
    }
    
    initialiserParticules();
    animer();
});