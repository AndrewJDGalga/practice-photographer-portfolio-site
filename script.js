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
    const carousel = document.getElementById('carousel-host');
    
    const carouselIndicatorHost = document.getElementsByClassName('carousel-indicators')[0];
    const carouselImgHost = document.getElementsByClassName('carousel-inner')[0];
    
    const indicatorFragment = document.createDocumentFragment();
    const imageFragment = document.createDocumentFragment();

    const imageButtons = document.getElementsByClassName('image-button');

    for(let i = 0; i < imageButtons.length; i++){
        imageButtons[i].onclick = ()=>{ console.log(imageButtons[i].dataset.position); }
    }
}