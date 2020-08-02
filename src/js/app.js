import ShowAndHide from './classes/ShowAndHide';

const ss = document.querySelector('.game');
// ss.style.cursor = "url('http://wiki-devel.sugarlabs.org/images/e/e2/Arrow.cur') 100 100, auto";
// ss.style.cursor = "url('../img/hammer.cur'), pointer";
// console.log(ss.style.cursor);
// url(https://c7.hotpng.com/preview/865/412/1004/hammer-tool-cartoon-drawing-clip-art-hammer.jpg)
const game = new ShowAndHide();
game.hide();
