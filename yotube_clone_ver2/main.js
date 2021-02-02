const moreBtn = document.querySelector('.info .titleAndmore .moreBtn');
const title = document.querySelector('.info .titleAndmore .title');

moreBtn.addEventListener('click', () => {
    moreBtn.classList.toggle('clicked');
    title.classList.toggle('clamp');
})
