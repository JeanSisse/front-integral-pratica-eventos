// MENU-MODAL variaveis
const menu = document.querySelector('.menu-hamburguer img');
const menuLateral = document.querySelector('.menu-lateral');
const menuItemName = document.querySelectorAll('.menu__item--name');


menu.addEventListener('click', function (){
    console.log('ok')
    if(menuLateral.className === 'menu-lateral'){
        menuLateral.className = 'menu-modal';
        menuItemName.forEach(function (item){
            item.style.display = 'flex';
        });
        menu.src = './assets/close-menu.svg'
    } else {
        menuLateral.className = 'menu-lateral'
        menuItemName.forEach(function (item){
            item.style.display = 'none';
        });
        menu.src = './assets/closed-menu.svg';
    }
});

// IMG-MODAL variaveis
const modal = document.querySelector('.modal');
const imagens = document.querySelectorAll('.galeria img');
const imgModal = document.querySelector('.modal #img-modal-atual');
const prevImg = document.querySelector('.img-navegacao #prev');
const nextImg = document.querySelector('.img-navegacao #next');
const btnFechar = document.querySelector('.modal #close-modal');

function abrirModal(src) {
    imgModal.src = src;

    

	modal.style.display = 'flex';
}

function fecharModal(){
    modal.style.display = 'none';
    prevImg.removeAttribute('src');
    nextImg.removeAttribute('src');
}

imagens.forEach(function (img, index){
	img.addEventListener('click', function (event){
        
        if(index > 0){
            prevImg.src = './assets/prev.svg'
        }
    
        if(index < (imagens.length - 1)){
            nextImg.src = './assets/next.svg'
        }
		abrirModal(event.target.src);
	});
});

prevImg.addEventListener('click', function(){
    // const index = imagens.indexOf(imgModal.src);
    console.log(imagens);
    abrirModal(imagens.previousSimblig);
});

modal.addEventListener('click', function (){
    fecharModal();
});

btnFechar.addEventListener('click', function (){
    fecharModal();
});

// linkModal.addEventListener('click', function (event) {
// 	event.stopPropagation();
// });

/**
* Resolver action nos botões prev e next para passar próximas
* imagens
* */