/*
const imgHost = document.getElementById('img-host');

window.onload = () =>{
    const carousel = new bootstrap.Carousel(imgHost);

    const carouselInner = document.getElementsByClassName('carousel-inner')[0];
    carouselInner.addEventListener('click', ()=>{
        imgHost.classList.add('hide');
    });

    const imageBtns = document.getElementsByClassName('gallery-btn');
    for(let i = 0; i < imageBtns.length; i++){
        imageBtns[i].onclick = () => {
            imgHost.classList.remove('hide');
        };
    }
}
*/

window.onload = () => {
    const imgHost = document.getElementById('img-host');
    const fragment = document.createDocumentFragment();
    const dataSources = document.getElementsByClassName('gallery-btn');

    
}