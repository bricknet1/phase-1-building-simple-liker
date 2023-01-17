// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!



const glyphs = document.querySelectorAll(".like-glyph")
const errMessage = document.querySelector("#modal")

function heartClick(event) {
  const heart = event.target;
  mimicServerCall()
    .then(() => {
      if (heart.textContent === EMPTY_HEART) {heart.textContent = FULL_HEART
      } else if (heart.textContent === FULL_HEART) {heart.textContent = EMPTY_HEART};
    })
    .catch((error) => {errMessage.className = "";
    errMessage.textContent = error;
    setTimeout(() => errMessage.className = "hidden", 3000);
    });
}

for (const glyph of glyphs) {
  glyph.addEventListener("click", heartClick);
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      console.log(isRandomFailure)
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
