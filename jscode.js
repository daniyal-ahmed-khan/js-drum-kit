function remove_transition(e) {
    if (e.propertyName !== 'transform') return; // skip if not a transform
    this.classList.remove('playing');
}

function play_tune(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); // attribute selector guessing a key with code
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);// select correspnding key
    if (!audio) return;

    
    audio.currentTime = 0; // rewind it to start
    audio.play();
    key.classList.add('playing'); //The classList is a read-only property of an element 
                                  //that returns a live collection of CSS classes
}
// we can listen to each key when the transition-end event happen

//now selecting all keys
const keys = document.querySelectorAll('.key');

//now listening to each key's transition-end event

keys.forEach(function(key){ key.addEventListener('transitionend', remove_transition)});
window.addEventListener('keydown', play_tune);