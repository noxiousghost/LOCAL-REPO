// Add event listener for each gallery item
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('full');
    });
});
