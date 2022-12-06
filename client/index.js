import './components/custom-app.js'

//window.queue = function(path) {
//  if (!window.sounds) window.sounds = []
//  window.sounds.push(new Audio(path))
//}
//window.play = function() {
//  window.sounds.forEach(sound => {
//    sound.pause()
//    sound.currentTime = 0
//  })
//  window.sounds[window.sounds.length-1].play()
//}
//

window.queue = (path, id, clean = false) => {
	if (!window.sounds || clean) window.sounds = []

	var audio = new Audio(path);
	audio.preload = 'metadata';
	window.sounds.push({
		sound: audio,
		id: id
	})
}



window.play = (times = 1, multiple = false) => {
	window.sounds.forEach(sound => {
	    if (!multiple)
	    	sound.sound.pause()
	    sound.sound.currentTime = 0
	  })
	var durationTotal = 0
	var thisSound = ''
	thisSound = window.sounds[window.sounds.length - times].sound;

	thisSound.eleId = window.sounds[window.sounds.length - times].id
	thisSound.elePos = times
	window.sounds[window.sounds.length - times].sound.currentTime = 0
	thisSound.preload = 'metadata';
	var duration = 0

	thisSound.play()
	duration = (thisSound.duration) * 1000;
	durationTotal += duration
	console.log(`Play ${thisSound.eleId} Loop: ${duration}`)
	if (thisSound.eleId.length != 1)
		window.showDuration(thisSound.eleId)
	else
		window.showOptionDuration(thisSound.eleId)
	thisSound.onended = function() {
			window.hideDuration()
			window.hideOptionDuration()

		if (times > 1) {
			setTimeout(function() {
				window.play(times - 1, true)
			}, thisSound.duration);
			
		}
	//workaround for browser limitation on media objects
	//this.currentSrc = null;
        this.src = null;
        this.srcObject = null;
	thisSound = null;
        this.remove();
	if (window.sounds.length>30)
	for (var t = 1; t<= window.sounds.length-20; t++) {
		sounds.shift();
	}
	};
}



window.showDuration = function(id, i = 1) {

	let clicked = document.querySelector(`img[id='${id}']`)
	//thisSound.preload = 'metadata';
	clicked.style.borderColor = '#ff620c';
	clicked.style.opacity = '1';
	
	if (id == 'prompt') {
		document.querySelector(`img[id='instructions']`).style.opacity = '0.5';
		document.querySelector(`img[id='instructions']`).style.borderColor = 'transparent';
	} else {
		document.querySelector(`img[id='prompt']`).style.opacity = '0.5';
		document.querySelector(`img[id='prompt']`).style.borderColor = 'transparent';
	};


};


window.hideDuration = () => {
	document.querySelector(`img[id='instructions']`).style.borderColor = 'transparent';
	document.querySelector(`img[id='instructions']`).style.opacity = '1';
	document.querySelector(`img[id='prompt']`).style.borderColor = 'transparent';
	document.querySelector(`img[id='prompt']`).style.opacity = '1';


};



window.showOptionDuration = (id) => {
//    var notVal = (id == '0'?'1':'0')

		//document.querySelector(`tangy-radio-blocks`).shadowRoot.querySelector(`tangy-radio-block[name='${id}']`).shadowRoot.querySelector('label').style.borderColor = '#ff620c';
		//document.querySelector(`tangy-radio-blocks`).shadowRoot.querySelector(`tangy-radio-block[name='${notVal}']`).style.opacity = '0.5';
//the calling ID
Array.from(document.querySelector(`tangy-radio-blocks`).shadowRoot.querySelectorAll(`tangy-radio-block`)).filter(el => el.name == `${id}`).forEach(x=> {
	x.style.border = 'solid 5px #ff620c';
	x.style.boxSizing = 'border-box';	
})  
	//the rest of the elements on this input
Array.from(document.querySelector(`tangy-radio-blocks`).shadowRoot.querySelectorAll(`tangy-radio-block`)).filter(el => el.name != `${id}`).forEach(x=> x.style.opacity = '0.5')	 


};

window.hideOptionDuration = (id=1) => {
//	var notVal = (id == '0'?'1':'0')
//		document.querySelector(`tangy-radio-blocks`).shadowRoot.querySelector(`tangy-radio-block[name='${id}']`).shadowRoot.querySelector('label').style.borderColor = 'transparent';
//		document.querySelector(`tangy-radio-blocks`).shadowRoot.querySelector(`tangy-radio-block[name='${id}']`).style.opacity = '1';
//		document.querySelector(`tangy-radio-blocks`).shadowRoot.querySelector(`tangy-radio-block[name='${notVal}']`).shadowRoot.querySelector('label').style.borderColor = 'transparent';
//		document.querySelector(`tangy-radio-blocks`).shadowRoot.querySelector(`tangy-radio-block[name='${notVal}']`).style.opacity = '1';

	//reset all
Array.from(document.querySelector(`tangy-radio-blocks`).shadowRoot.querySelectorAll(`tangy-radio-block`)).forEach(x=> {
	//if (x.shadowRoot.querySelector('label').style.borderColor == 'ff620c')
	x.style.borderColor = 'transparent';
	x.style.border = 'none'
	x.style.opacity = '1';
})
	
};
