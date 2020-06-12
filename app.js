const menuButtons = document.querySelectorAll('.menu-button');
const hotkeys = document.querySelectorAll('.hotkey');
console.log(hotkeys);
const keysPressed = {};


window.addEventListener('click', (event) => {
  [...menuButtons].forEach((button) => {
    (button == event.target) ? button.classList.add('active') : button.classList.remove('active');
  });
});

document.addEventListener('keydown', (event) => {
  event.preventDefault();
  event.stopPropagation();
  if (event.keyCode == 27) {
    [...menuButtons].forEach((button) => { button.classList.remove('active') });
  } else {
    keysPressed[event.key] = true;
    if (keysPressed['Alt'] == true) {
      [...hotkeys].forEach((hotkey) => {
        hotkey.classList.add('underline');
        (event.key == hotkey.firstChild.data.toLowerCase()) ? hotkey.parentElement.classList.add('active') : hotkey.parentElement.classList.remove('active');
      });
    }
  }
});

document.addEventListener('keyup', (event) => {
  delete keysPressed[event.key];
  [...hotkeys].forEach((hotkey) => {
    hotkey.classList.remove('underline');
  });
});