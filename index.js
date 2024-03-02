// audio element is represented by an object is an instanceof HTMLAudioElement -> HTMLMediaElement -> HTMLElement
// input element is represented by an object is an instanceof HTMLInputElement -> HTMLElement

let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");

// song.onloadedmetadata = function(){
//     progress.max = song.duration;
//     progress.value = song.currentTime;
// }

// song.addEventListener("loadedmetadata", (event)=>{
//     progress.max = song.duration;
//     progress.value = song.currentTime;
// })

// play and pause click
function playPause(){
    if(ctrlIcon.classList.contains('fa-pause')){
        song.pause();
        ctrlIcon.classList.remove('fa-pause');
        ctrlIcon.classList.add('fa-play');
    }
    else{
        song.play();
        song.addEventListener('play', function() {
            console.log('Audio is now playing');
        });
        ctrlIcon.classList.add('fa-pause');
        ctrlIcon.classList.remove('fa-play');
    }
}

// update value on progress bar
if(song.play()){
    // setInterval is used to update value by time
    setInterval(() =>{
        progress.value = song.currentTime;
    }, 500);
}