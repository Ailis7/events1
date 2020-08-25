import Listners from './Listners';

export default class ShowAndHide {
  constructor() {
    this.arr = [...document.querySelectorAll('.square')];
    this.img = document.querySelector('.goblin');
    this.squareWithGoblin = this.img.closest('.square');
  }

  hide() {
    this.squareWithGoblin.innerHTML = '';
    Listners.click();
    Listners.mouse();
    const timer = setInterval(() => {
      function randomInteger(min, max) {
        return Math.round(Math.random() * (max - min) + min);
      }

      const newSquareWithGoblin = this.arr[randomInteger(0, 3)];
      newSquareWithGoblin.appendChild(this.img);
      setTimeout(() => {
        if (document.querySelector('.goblin') !== null) {
          const lose = document.querySelector('.loses');
          lose.textContent = 1 + +lose.textContent;
          if (lose.textContent === '5') {
            alert('Проигрыш');
            clearInterval(timer);
          }
        }
        document.body.style.cursor = 'auto';
        newSquareWithGoblin.innerHTML = '';
      }, 1000);
    }, 2000);
  }
}
