const button = document.querySelector("button");
const body = document.querySelector("body");
const textColor = document.querySelector('.textColor')
const audio = document.getElementById('audio')
const playBtn = document.getElementById('playbtn')
const container = document.querySelector('.container')

button.addEventListener('click', setColor)
setColor()
function setColor() {
    const colors = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "4",
        "4",
        "7",
        "8",
        "9",
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
      ];
      
      // color genator
      
      function randomColor() {
        let color = "#";
      
        for (let i = 0; i < 6; i++) {
          let randomNum = Math.floor(Math.random() * colors.length);
          color += colors[randomNum];
        }
      
        return color
      }
      
      const color1 = randomColor()
      const color2 = randomColor()
      const color3 = randomColor()
      
      console.log(color1, color2, color3);
      
      // degree generator
      
      const randomDeg = Math.floor(Math.random() *360)
      
      body.style.background = `linear-gradient(${randomDeg}deg, ${color1}, ${color2}, ${color3})`

      textColor.textContent = `linear-gradient(${randomDeg}deg, ${color1}, ${color2}, ${color3})`
      textColor.style.fontSize = '2rem'
      textColor.style.margin =  `1rem`
}

// playSong 
function playSong() {
    container.classList.add('play')
    playBtn.innerHTML = ` <i class="fas fa-pause"></i>`
    audio.play()
  }
  
  // pauseSong 
  function pauseSong() {
    container.classList.remove('play')
    playBtn.innerHTML = ` <i class="fas fa-play"></i>`
    audio.pause()
  }
  
  
  playBtn.addEventListener('click', function () {
    const isPlaying = container.classList.contains('play')
  
    if (isPlaying) {
      pauseSong()
    } else {
      playSong()
    }
  })