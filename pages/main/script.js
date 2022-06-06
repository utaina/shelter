fetch('../../pets.json') 
        .then(response => {
            return response.json();
        })
        .then(data => {
            getPetsInfo(data);
        });

        function getPetsInfo(data) {








}

const burgerButton = document.getElementById('burgerButton');
const burgerMenu = document.getElementById('burgerMenu');
const overlay = document.getElementById('overlay');
const burgerLinks = document.querySelectorAll('.burger-links');

burgerButton.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    overlay.classList.toggle('active');
    burgerButton.classList.toggle('burger-rotated');
    document.body.classList.toggle('modal-open');
})
overlay.addEventListener('click', () => {
    burgerMenu.classList.remove('active');
    burgerButton.classList.remove('burger-rotated');
    overlay.classList.remove('active');
    document.body.classList.remove('modal-open');

})

burgerLinks.forEach(link => {
    link.addEventListener('click', () => {
        burgerMenu.classList.remove('active');
        burgerButton.classList.remove('burger-rotated');
        overlay.classList.remove('active');
        document.body.classList.remove('modal-open');
    })
})

