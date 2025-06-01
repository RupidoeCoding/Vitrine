var video1 = document.getElementById('lol2025');
var unmuteBtn = document.getElementById('unmute-btn');
var muteBtn = document.getElementById('mute-btn');
video1.volume = 0.5;

muteBtn.addEventListener('click', function() {
    video1.muted = true;
    muteBtn.style.display = 'none';
    unmuteBtn.style.display = 'inline';
});

unmuteBtn.addEventListener('click', function() {
    video1.muted = false;
    unmuteBtn.style.display = 'none';
    muteBtn.style.display = 'inline';
});

const videos = [
    'Video/Welcome_to_Noxus.mp4', 
    'Video/Blood_Sweat_Tears.mp4',
];

function getRandomVideo(currentVideo) {
    let randomVideo;
    do {
      randomVideo = videos[Math.floor(Math.random() * videos.length)];
    } while (randomVideo === currentVideo);
  return randomVideo;
}
  
const videoElement = document.getElementById('lol2025');
  
let currentVideo = getRandomVideo(null);
videoElement.src = currentVideo;
  
videoElement.addEventListener('ended', () => {
    currentVideo = getRandomVideo(currentVideo);
    videoElement.src = currentVideo;
    videoElement.play();
});
  