const imgHost = document.getElementById('img-host');

const imgBtnEvent = (imgName) => {
    console.log(imgName);
    //imgHost.classList.remove('hide');
}

window.onload = () =>{
    
    const carousel = new bootstrap.Carousel(imgHost);

    const carouselInner = document.getElementsByClassName('carousel-inner')[0];
    carouselInner.addEventListener('click', ()=>{
        imgHost.classList.add('hide');
    });

    const imageBtns = document.getElementsByClassName('gallery-btn');
    for(let i = 0; i < imageBtns.length; i++){
        imageBtns[i].onclick = () => {
            console.log('clicked');
            imgHost.classList.remove('hide');
        }; //imgBtnEvent(imageBtns[i].dataset.fullscreen);
    }

    /*
    const imgHost = document.getElementById('img-host');

    const imageBtns = document.getElementsByClassName('gallery-btn');
    const imagePaths = [];
    
    for(let i = 0; i < imageBtns.length; i++){
        imageBtns[i].onclick = imgBtnEvent(imageBtns[i].dataset.fullscreen);
        imagePaths.push(imageBtns[i].dataset.fullscreen);
    }

    const fragment = document.createDocumentFragment();

    const carouselHost = document.createElement('div');
    fragment.appendChild(carouselHost);
    
    carouselHost.setAttribute('id', 'hiddenCarousel');
    carouselHost.classList.add('carousel');
    carouselHost.classList.add('slide');



    imagePaths.forEach((imagePath)=>{
        const img = document.createElement('img');
        img.src = imagePath;
        fragment.appendChild(img);
    })

    imgHost.appendChild(fragment);
    */
}
