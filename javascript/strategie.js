window.addEventListener("DOMContentLoaded", function() {
    const firstImageSrc1 = '../image/nexusbzoom.png'; 
    const firstText1 = 'Le nexus, qu\'il soit rouge ou bleu, est le coeur de votre base. Si le vôtre est détruit, la partie est perdue.';
    const firstImageSrc2 = '../image/toplane.png';
    const firstVideoSrc = '../Video/saut_eclair_vid.mkv';
    const displayImage1 = document.getElementById('displayImage1');
    const displayText = document.getElementById('displayText');
    const displayImage2 = document.getElementById('displayImage2');
    const displayVid = document.getElementById('displayvid');

    if (displayImage1) {
        displayImage1.src = firstImageSrc1;
        displayImage1.classList.remove('hidden'); 
    }

    if (displayText) {
        displayText.textContent = firstText1;
        displayText.classList.remove('hidden');
    }

    if (displayImage2) {
        displayImage2.src = firstImageSrc2;
        displayImage2.classList.remove('hidden');
    }

    if (displayVid) {
        displayVid.src = firstVideoSrc;
        displayVid.classList.remove('hidden');
        displayVid.load();
        displayVid.play();
    } else {
        console.error("L'élément #displayVid n'existe pas !");
    }
});

window.changeImage = function(imageSrc1, textContent) {
    const displayImage1 = document.getElementById('displayImage1');
    const displayText = document.getElementById('displayText');

    if (!displayImage1 || !displayText) {
        console.error("Les éléments #displayImage1 ou #displayText n'existent pas !");
        return;
    }

    displayImage1.style.opacity = "0";
    displayText.style.opacity = "0";

    displayImage1.src = imageSrc1;
    displayText.textContent = textContent;

    displayImage1.classList.remove('hidden');
    displayText.classList.remove('hidden');

    setTimeout(() => {
        displayImage1.style.opacity = "1";
        displayText.style.opacity = "1";
    }, 50);
};

window.changeImage2 = function(imageSrc2) {
    const displayImage2 = document.getElementById('displayImage2');

    if (!displayImage2) {
        console.error("L'élément #displayImage2 n'existe pas !");
        return;
    }
    displayImage2.style.opacity = "0";
    displayImage2.src = imageSrc2;
    displayImage2.classList.remove('hidden');

    setTimeout(() => {
        displayImage2.style.transition = "opacity 0.3s ease-in-out";
        displayImage2.style.opacity = "1";
    }, 50);
};

window.changevid = function(videoSrc) {
    const displayVid = document.getElementById('displayvid');

    if (!displayVid) {
        console.error("L'élément #displayvid n'existe pas !");
        return;
    }

    displayVid.style.opacity = "0";
    displayVid.src = videoSrc;
    displayVid.classList.remove('hidden');

    setTimeout(() => {
        displayVid.style.transition = "opacity 0.3s ease-in-out";
        displayVid.style.opacity = "1";
    }, 50);

    displayVid.play();
};
