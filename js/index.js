document.querySelector('.modalwindow .modal-btn').addEventListener('click', function () {
    document.querySelector('.modalwindow').classList.toggle('active');
});

document.querySelector('.modalfade .fade-btn').addEventListener('click', function () {
    document.querySelector('.modalwindow').classList.remove('active');
});
document.querySelector('.modalfade .img-btn').addEventListener('click', function () {
    document.querySelector('.modalwindow').classList.remove('active');
});