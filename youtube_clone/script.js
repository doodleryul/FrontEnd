const moreBtn = document.querySelector('.infoAndUpnext .info .metadata .titleAndButton .moreBtn');
const title = document.querySelector('.infoAndUpnext .info .metadata .titleAndButton .title');

moreBtn.addEventListener('click', () => {
  moreBtn.classList.toggle('clicked');
  title.classList.toggle('clamp');
});
