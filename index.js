function showFullScreen(image){
    const fullScreenContainer = document.createElement("div");
    fullScreenContainer.classList.add("fullscreen-container")

    const fullScreenImage = document.createElement("img");
    fullScreenImage.src = image.src;
    fullScreenImage.alt = image.alt;
    fullScreenImage.classList.add('fullscreen-image');

    fullScreenContainer.appendChild(fullScreenImage);
    document.body.appendChild(fullScreenContainer);

    fullScreenContainer.addEventListener("click",()=>{
        document.body.removeChild(fullScreenContainer);
    });
}