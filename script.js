const imgBtnEvent = (imgName) => {
    console.log(imgName);
}

window.onload = () =>{
    const imageBtns = document.getElementsByClassName('gallery-btn');
    
    for(let i = 0; i < imageBtns.length; i++){
        imageBtns[i].onclick = imgBtnEvent(imageBtns[i].dataset.fullscreen);
    }
}
