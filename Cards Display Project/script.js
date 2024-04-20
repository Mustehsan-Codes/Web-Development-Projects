'use strict';
const model = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModel = document.querySelector('.close-modal');
const btnsShowModel = document.querySelectorAll('.show-modal');
const closeModel = () => {
  model.classList.add('hidden');
  overlay.classList.add('hidden');
};
const openModel = () => {
  model.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
for (let i = 0; i < btnsShowModel.length; i++) {
  btnsShowModel[i].addEventListener('click', openModel);
}
btnCloseModel.addEventListener('click', closeModel);
overlay.addEventListener('click', closeModel);
//Escape to remove modal
document.addEventListener('keypress', function (e) {
  console.log(e.key);
  if (e.key === 'Escape' && !model.classList.contains('hidden')) {
    closeModel();
  }
});
