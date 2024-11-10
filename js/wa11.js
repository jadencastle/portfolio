console.log("JavaScript is loaded!");

const imageFilenames = [
    "/img/photos5/1.jpg", 
    "/img/photos5/2.jpg", 
    "/img/photos5/3.jpg", 
    "/img/photos5/4.jpg", 
    "/img/photos5/5.jpg"
];

const thumbBar = document.querySelector('.thumb-bar');
const displayedImg = document.querySelector('.displayed-img');
const btn = document.querySelector('button'); 
const overlay = document.querySelector('.overlay');


let currentImageIndex = 0;
displayedImg.setAttribute('src', imageFilenames[currentImageIndex]);
displayedImg.setAttribute('alt', `Image ${currentImageIndex + 1}`);

for (let i = 0; i < imageFilenames.length; i++) {
    const newImage = document.createElement('img');
    const imagePath = imageFilenames[i];
    newImage.setAttribute('src', imagePath);
    newImage.setAttribute('alt', `Image ${i + 1}`);
    thumbBar.appendChild(newImage);

    
    newImage.addEventListener('click', () => {
        currentImageIndex = i; // Update the current image index based on the clicked thumbnail
        displayedImg.setAttribute('src', imagePath);
        displayedImg.setAttribute('alt', `Image ${i + 1}`);
        console.log(`Displayed image changed to: ${imagePath}`);
    });
}


displayedImg.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % imageFilenames.length; // Cycle through images
    displayedImg.setAttribute('src', imageFilenames[currentImageIndex]);
    displayedImg.setAttribute('alt', `Image ${currentImageIndex + 1}`);
    console.log(`Displayed image cycled to: ${imageFilenames[currentImageIndex]}`);
});


btn.addEventListener('click', () => {
    console.log("Darken button clicked");
    const currentClass = btn.classList.contains('dark'); 
    if (currentClass) {
        btn.classList.remove('dark');
        btn.classList.add('light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    } else {
        btn.classList.remove('light');
        btn.classList.add('dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgb(0 0 0 / 0%)';
    }
});
