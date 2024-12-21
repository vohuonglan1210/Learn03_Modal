'use strict';

document.querySelector('.open').addEventListener('click', function () {
  document.querySelector('.container').classList.remove('modal-container');
});

document.querySelector('.close').addEventListener('click', function () {
  document.querySelector('.container').classList.add('modal-container');
});
