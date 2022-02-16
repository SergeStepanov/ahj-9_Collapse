export default function animation() {
  const btn = document.querySelector('.btn');

  btn.addEventListener('click', () => {
    const jsCollapsible = document.querySelector('.js__collapsible');
    const box = document.querySelector('.js__box');
    jsCollapsible.classList.toggle('anim');
    box.classList.toggle('box__anim');
  });
}
