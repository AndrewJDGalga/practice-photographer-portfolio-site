const imgBtnEvent = (imgName) => {
    //console.log(imgName);
}

window.onload = () =>{
    const imgHost = document.getElementById('img-host');

    const imageBtns = document.getElementsByClassName('gallery-btn');
    const imagePaths = [];
    
    for(let i = 0; i < imageBtns.length; i++){
        imageBtns[i].onclick = imgBtnEvent(imageBtns[i].dataset.fullscreen);
        imagePaths.push(imageBtns[i].dataset.fullscreen);
    }

    const fragment = document.createDocumentFragment();
    imagePaths.forEach((imagePath)=>{
        const img = document.createElement('img');
        img.src = imagePath;
        fragment.appendChild(img);
    })

    imgHost.appendChild(fragment);
}
