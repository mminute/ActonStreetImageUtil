const offset = 941;
let currentOffset = 0;
const srcs = [];

function getCurrentSrc() {
  const parentElement = Array.from(
    document.querySelectorAll('div.pswp__item')
  ).find((el) => {
    console.log(el.style.transform.includes(`translate3d(${currentOffset}px`));
    return el.style.transform.includes(`translate3d(${currentOffset}px`);
  });

  const imgTag = parentElement.getElementsByTagName('img')[0];

  srcs.push(imgTag.src)

  currentOffset+=offset;
}

function addButton() {
  const wrapper = document.getElementsByClassName('pswp pswp--supports-fs pswp--open pswp--notouch pswp--css_animation pswp--svg pswp--animated-in pswp--zoom-allowed pswp--visible pswp--has_mouse')[0];

  const btn = document.createElement('button');
  btn.textContent = 'GET SRC';
  btn.style.backgroundColor = 'red';
  btn.style.height = "60px";
  btn.style.width = "60px";
  btn.style.zIndex = "999";
  btn.style.position = "absolute";

  wrapper.appendChild(btn);

  btn.addEventListener('click', () => {
    getCurrentSrc();
    document.getElementsByClassName('pswp__button pswp__button--arrow--right')[0].click();
  });
}
