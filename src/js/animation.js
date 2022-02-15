export default function animation() {
  const btn = document.querySelector('.btn');

  btn.addEventListener('click', (e) => {
    document.querySelector('.collapsible').classList.add('anim_and');
  });
}
