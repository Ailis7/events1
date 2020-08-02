export default class Listners {

  static click() {
    const mainParent = document.querySelector('.game');
    mainParent.addEventListener('click', (event) => {
      const { target } = event;
      if (target.classList.contains('goblin')) {
        const hit = document.querySelector('.hits');
        hit.textContent = 1 + +(hit.textContent);
        target.closest('.square').innerHTML = '';
      }
    });
  }
  
  static mouse() {
    const mainParent = document.querySelector('.game');

    const hammer = (event) => {
      const { target } = event;

      if (target.classList.contains('goblin')) {
        document.body.style.cursor = "url('../img/hammer.cur'), pointer";
      } else {
        document.body.style.cursor = 'auto';
      }
    }

    mainParent.addEventListener('mouseover', hammer);
    mainParent.addEventListener('mouseout', hammer);
  }
}
