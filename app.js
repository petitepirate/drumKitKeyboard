function playSound(e) {
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"`);
	const key = document.querySelector(`.key[data-key="${e.keyCode}"`);
	if (!audio) return; //stops the function from running if there is no audio
	audio.currentTime = 0; //rewind to the start so you can rapidly play keys repeatedly
	audio.play();
	key.classList.add('playing');
}

function removeTransition(e) {
	if (e.propertyName !== 'transform') return; //skit it if its not a transform
	this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach((key) => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);
