const contentPagePasso = document.querySelector('.content-page-passo');
const fechar = document.querySelector('.fechar');
const boxButtonUf = document.querySelector('.box-button-uf');
const boxButtonIndivudual = document.querySelector('.box-button-individual');
//button dos temas, e preciso fazer para cada passo?

//fechar
fechar.addEventListener('click', () => {
    contentPagePasso.style.opacity = '0';
    contentPagePasso.style.visibility = 'hidden';
})

//abrir - Outra UF
boxButtonUf.addEventListener('click', () => {
    contentPagePasso.style.opacity = '1';
    contentPagePasso.style.visibility = 'visible';
})

//abrir - Individual
boxButtonIndivudual.addEventListener('click', () => {
    contentPagePasso.style.opacity = '1';
    contentPagePasso.style.visibility = 'visible';
})

