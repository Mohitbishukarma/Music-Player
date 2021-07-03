const play = document.getElementById("play");
const music = document.querySelector("audio");
const video=document.getElementById("video");
const img = document.getElementById("image_container");
let isPlaying = false;


const playMusic = () => {
    isPlaying = true;
    video.play();
    music.play();
    video.loop="true"
    play.classList.replace("fa-play", "fa-pause")
    img.classList.add("rotate");
    
}


const pauseMusic = () => {
    isPlaying = false;
   music.pause();
    video.pause();
    play.classList.replace("fa-pause", "fa-play")
    img.classList.remove("rotate");
    
}


play.addEventListener("click", () => {
    if (isPlaying){
        pauseMusic();
    } else {
    playMusic();
        
    }
})

