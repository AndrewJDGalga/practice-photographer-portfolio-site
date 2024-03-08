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

        <div class="carousel-indicators">
            <button type="button" data-bs-target="#img-host" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#img-host" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#img-host" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="converted_data/allec-gomes-e2rat0wVx80-unsplash-medium.webp" class="d-block" alt="...">
            </div>
            <div class="carousel-item">
                <img src="converted_data/allec-gomes-W0I7BSKfyaA-unsplash-medium.webp" class="d-block" alt="...">
            </div>
            <div class="carousel-item">
                <img src="converted_data/ivan-rudoy-CMt0aRROQ6o-unsplash-medium.webp" class="d-block" alt="...">
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#img-host" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
*/

window.onload = () => {
    const carouselID = 'carousel-host';
    const carousel = document.getElementById(carouselID);
    
    const carouselIndicatorHost = document.getElementsByClassName('carousel-indicators')[0];
    const carouselImgHost = document.getElementsByClassName('carousel-inner')[0];
    
    const indicatorFragment = document.createDocumentFragment();
    const imageFragment = document.createDocumentFragment();

    const imageButtons = document.getElementsByClassName('image-button');

    let activeImg, activeIndicator;

    for(let i = 0; i < imageButtons.length; i++){
        
        const indicator = document.createElement('button');
        indicator.type = 'button';
        indicator.dataset.bsTarget = '#' + carouselID;
        indicator.dataset.bsSlideTo = String(i);
        indicator.ariaLabel = 'Slide ' + (i + 1);
        

        const carouselItem = document.createElement('div');
        carouselItem.classList.add('carousel-item');

        const carouselImg = document.createElement('img');
        carouselImg.src = imageButtons[i].dataset.fullscreen;
        carouselImg.alt = imageButtons[i].alt;
        carouselImg.classList.add('d-block');

        if(i === 0) {
            
            indicator.classList.add('active');
            indicator.ariaCurrent = 'true';

            //activeIndicator = indicator;
            
            
            carouselItem.classList.add('active');

            //activeImg = carouselItem;
        }

        carouselItem.appendChild(carouselImg);

        indicatorFragment.appendChild(indicator);
        imageFragment.appendChild(carouselItem);


        //imageButtons[i].dataset.position = i;
        imageButtons[i].onclick = () => {
            //console.log(carouselImgHost)
            //carousel.classList.remove('hide');

            //activeImg.classList.remove('active');
            //activeIndicator.classList.remove('active');
            //activeIndicator.ariaCurrent = 'false';

            //console.log(carouselIndicatorHost.children[i]);

            /*
            activeImg.classList.remove('active');
            activeImg = carouselImgHost.children[i];
            activeImg.classList.add('active');
            */
            //activeImg.classList.add('carousel-item-prev');
            //activeImg.classList.add('carousel-item-start');
            //activeImg.classList.remove('active');
            //activeImg = carouselImgHost.children[i];
            //activeImg.classList.add('carousel-item-next');
            //activeImg.classList.add('carousel-item-end');
            //activeImg.classList.add('active');
            //activeIndicator = carouselIndicatorHost.children[i];
            //activeImg.classList.add('active');
            //activeIndicator.classList.add('active');
            //activeIndicator.ariaCurrent = 'true';
            
            //carouselImgHost.children[i].dataset.bsSlideTo = String(i);
            carouselIndicatorHost.children[i].click();
            carousel.classList.remove('hide');
            //console.log(activeIndicator);
        }
        /*
        carouselImgHost.onclick = () =>{
            carousel.classList.add('hide');
        }
        */
    }
    carouselImgHost.onclick = () =>{
        carousel.classList.add('hide');
    }

    /*
    const testBtn1 = document.getElementById('test1');
    testBtn1.addEventListener('click', ()=>{
        console.log(carouselImgHost);
    });
    */

    carouselIndicatorHost.appendChild(indicatorFragment);
    carouselImgHost.appendChild(imageFragment);

    //console.log(activeIndicator);
    //console.log(activeImg);

    const bsCarousel = new bootstrap.Carousel(carousel);
}