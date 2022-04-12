'use strict';

window.addEventListener('keydown', (e) => {
    handleKeyDown(e);
});

/**
 * @param {*} e Event-Object
 * @returns false, if property name is false
 */
const keys = document.querySelectorAll('.key-button');
keys.forEach((key) => {
    key.addEventListener('transitionend', (e) => {
        if (e.propertyName !== 'transform') return;
        const key = document.querySelector(`.key-button[data-key="${e.keyCode}"]`);
        e.target.classList.remove('play');
    });
});


const handleKeyDown = (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key-button[data-key="${e.keyCode}"]`);
    if (!audio) { return false; }
    key.classList.add('play');
    audio.currentTime = 0;
    audio.play();
}

