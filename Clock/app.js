let body = document.querySelector('body')

let work = document.getElementById('trabajo')
let descanso = document.getElementById('descanso')

let timeTrabajo = 25
let timeDescanso = 5

let esDescanso = false

let seconds = "00"

let black = "100"
let purple = "100"

window.onload = () => {
  document.getElementById('minutes').innerHTML = timeTrabajo;
  document.getElementById('seconds').innerHTML = seconds;
}

function start() {
  document.getElementById('start').style.width = "0"

  seconds = 59

  let minutesTrabajo = timeTrabajo - 1;
  let breakMinutes = timeDescanso - 1;

  let time = () => {
    document.getElementById('minutes').innerHTML = minutesTrabajo;
    document.getElementById('seconds').innerHTML = seconds;

    seconds -= 1; 
    if (seconds === 0) {
        seconds= 59
        minutesTrabajo -= 1
        if(minutesTrabajo === -1) {
          // cuando minutos de trabajo haya finalizado y empiece el descanso hacé esto
          if(esDescanso == false) {
            esDescanso = true 
            minutesTrabajo = breakMinutes

            black = 0
            purple = 0

            trabajo.classList.add('later')
            trabajo.classList.remove('now')
            descanso.classList.add('now')
            descanso.classList.remove('later')
          } else {
            esDescanso = false
            minutesTrabajo = timeTrabajo -1

            black = 100
            purple = 100

            
            trabajo.classList.remove('later')
            trabajo.classList.add('now')
            descanso.classList.remove('now')
            descanso.classList.add('later')
          }
        }

    }
    if (esDescanso == false) {
      black -= (100 / 737);
    } else{
    purple += (100/147); 
    }
    console.log(purple)
    body.style.background = `linear-gradient(45deg, rgba(4,28,50,1) ${black}%, rgba(95,30,148,1) ${purple}%)`
  
  }
  setInterval(time, 50) //1000 = 1s

} 