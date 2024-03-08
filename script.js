//create in-carousel button navigation elements in accordance with public Bootstrap standards
//https://getbootstrap.com/docs/5.3/components/carousel/
const createBSCarouselIndicator = (hostID, index) => {
    const indicator = document.createElement('button');
    indicator.type = 'button';
    indicator.dataset.bsTarget = '#' + hostID;
    indicator.dataset.bsSlideTo = String(index);
    indicator.ariaLabel = 'Slide ' + (index + 1);
    return indicator;
}

//create img element intended for fullscreen bootstrap carousel
const createBSCarouselImage = (imagePath, imageAlt) => {
    const carouselImg = document.createElement('img');
    carouselImg.src = imagePath;
    carouselImg.alt = imageAlt;
    carouselImg.classList.add('d-block');
    return carouselImg;
}

window.onload = () => {
    const carouselID = 'carousel-host';
    const carousel = document.getElementById(carouselID);
    
    const carouselIndicatorHost = document.getElementsByClassName('carousel-indicators')[0];
    const carouselImgHost = document.getElementsByClassName('carousel-inner')[0];
    
    const indicatorFragment = document.createDocumentFragment();
    const imageFragment = document.createDocumentFragment();

    const imageButtons = document.getElementsByClassName('image-button');

    for(let i = 0; i < imageButtons.length; i++){
        const indicator = createBSCarouselIndicator(carouselID, i);

        //recommended for images to have div.carousel-item parent
        const carouselItem = document.createElement('div');
        carouselItem.classList.add('carousel-item');

        const carouselImg = createBSCarouselImage(imageButtons[i].dataset.fullscreen, imageButtons[i].alt);

        if(i === 0) {
            //one of the created images and indicators must be labeled with the following
            indicator.classList.add('active');
            indicator.ariaCurrent = 'true';
            carouselItem.classList.add('active');
        }

        carouselItem.appendChild(carouselImg);

        indicatorFragment.appendChild(indicator);
        imageFragment.appendChild(carouselItem);

        imageButtons[i].onclick = () => {
            carouselIndicatorHost.children[i].click();
            carousel.classList.remove('hide');
        }
    }
    carouselImgHost.onclick = () =>{
        carousel.classList.add('hide');
    }

    carouselIndicatorHost.appendChild(indicatorFragment);
    carouselImgHost.appendChild(imageFragment);

    //required for bootstrap carousel
    const bsCarousel = new bootstrap.Carousel(carousel);
}