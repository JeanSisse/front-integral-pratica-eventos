// MENU-MODAL variaveis
const menu = document.querySelector('.menu-hamburguer img');
const menuLateral = document.querySelector('.menu-lateral');
const menuItemName = document.querySelectorAll('.menu__item--name');

// IMG-MODAL variaveis
const modal = document.querySelector('.modal');
const imagens = document.querySelectorAll('.imgs-galeria');
const imgModal = document.querySelector('.modal #img-modal-atual');
const prevImg = document.querySelector('#prev');
const nextImg = document.querySelector('#next');
const btnFechar = document.querySelector('.modal #close-modal');

let imgAtual = 0;

// IMG-MODAL-LIKE variaveis
const modalLike = document.querySelector('.modal-like');
const imgLike = document.querySelector('galeria-like');
let arrayLikes = [];

function abrirFecharMenuLateral(classeModal, tipoDeDisplay, src){
    menuLateral.className = classeModal;
    menuItemName.forEach(function (item){
        item.style.display = tipoDeDisplay;
    });
    menu.src = src;
}

menu.addEventListener('click', function (){
    if (menuLateral.className === 'menu-lateral') {
        const src = './assets/close-menu.svg';
        abrirFecharMenuLateral('menu-modal', 'flex', src);
    } else {
        const src = './assets/closed-menu.svg';
        abrirFecharMenuLateral('menu-lateral', 'none', src);
    }
});


function atualizarSetas(index){
    if (index > 0) {
        prevImg.classList.remove('display-none');
    } else {
        prevImg.classList.add('display-none');
    }
    
    if (index < (imagens.length - 1)) {
        nextImg.classList.remove('display-none');
    } else {
        nextImg.classList.add('display-none');
    }
}

function stopPropagation(event){
    event.stopPropagation();
}

function abrirModal(src) {
    imgModal.src = src;
	modal.style.display = 'flex';
}

function fecharModal(){
    modal.style.display = 'none';
    prevImg.classList.add('display-none');
    nextImg.classList.add('display-none');
}

imagens.forEach(function (img, index){
    img.addEventListener('click', function (event){
        atualizarSetas(index);
        imgAtual = index;
        atualizarLikes(imgAtual);
		abrirModal(event.target.src);
	});
});

function atualizarLikes(index){
    if (arrayLikes.includes(index)) {
        modalLike.classList.remove('display-none');
    } else {
        modalLike.classList.add('display-none');
    }
}

imgModal.addEventListener('dblclick', function () {
    const itemLike = imagens[imgAtual].nextElementSibling;

    if (arrayLikes.includes(imgAtual)) {
        arrayLikes = arrayLikes.filter(function (imgCurtida) {
            return imgCurtida !== imgAtual;
        });

        itemLike.classList.add('display-none');
    } else {
        itemLike.classList.remove('display-none');
        arrayLikes.push(imgAtual);
    }
    atualizarLikes(imgAtual);
        
});

imgModal.addEventListener('click', function (event) {
    stopPropagation(event);
});

prevImg.addEventListener('click', function(event){
    stopPropagation(event);
    if (imgAtual !== 0) {
        atualizarSetas(--imgAtual);
        atualizarLikes(imgAtual);
        abrirModal(imagens[imgAtual].src);
    }
});

nextImg.addEventListener('click', function(event){
    stopPropagation(event);
    if (imgAtual < imagens.length - 1) {
        atualizarSetas(++imgAtual);
        atualizarLikes(imgAtual);
        abrirModal(imagens[imgAtual].src);
    }
});

modal.addEventListener('click', function (){
    fecharModal();
});

btnFechar.addEventListener('click', function (){
    fecharModal();
});