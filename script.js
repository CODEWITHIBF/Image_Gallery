const images = [
    'images/image1.jfif',
    'images/image2.jfif',
    'images/image3.jfif',
    'images/image4.jfif',
    'images/image5.jfif',
    'images/image6.jfif',
    'images/image7.jfif',
    'images/image8.jfif',
    'images/image9.jfif'
    
];

let currentIndex = 0;

function showImage(index) {
    const imageElement = document.getElementById('current-image');
    imageElement.src = images[index];
    currentIndex = index;
}

function prevImage() {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    showImage(currentIndex);
}

function nextImage() {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    showImage(currentIndex);
}
