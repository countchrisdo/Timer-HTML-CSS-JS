//cached elements
const elapsedTimeEl = document.querySelector('main');
const btn = document.querySelector('button');

//Event Listeners
btn.addEventListener('click', handleStartStop);

// state variable to remember elapsedTimeEl
let elapsedTime = 0;
let isTiming = false;

render();

setInterval(function() {
  // In response to events / user interaction
  // we update all impacted state, then call render()
  if (!isTiming) return;
  elapsedTime++;
  render();
}, 1000);

function handleStartStop() {
  isTiming = !isTiming;
  render();
}

function render() {
  //visualize all state using the document/DOM
  elapsedTimeEl.textContent = formatTime(elapsedTime);
  btn.textContent = (isTiming) ? 'STOP' : "START";
}


function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')} : ${secs.toString().padStart(2, '0')}`;
}