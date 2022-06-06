const burgerButtonPets = document.getElementById('burgerButtonPets');
const burgerMenuPets = document.getElementById('burgerMenuPets');
const overlayPets = document.getElementById('overlayPets');
const burgerLinks = document.querySelectorAll('.burger-links');

burgerButtonPets.addEventListener('click', () => {
    burgerMenuPets.classList.toggle('active');
    overlayPets.classList.toggle('active');
    burgerButtonPets.classList.toggle('burger-rotated');
    document.body.classList.toggle('modal-open');
})
overlayPets.addEventListener('click', () => {
    burgerMenuPets.classList.remove('active');
    burgerButtonPets.classList.remove('burger-rotated');
    overlayPets.classList.remove('active');
    document.body.classList.remove('modal-open');
})

burgerLinks.forEach(link => {
    link.addEventListener('click', () => {
        burgerMenuPets.classList.remove('active');
        burgerButtonPets.classList.remove('burger-rotated');
        overlayPets.classList.remove('active');
        document.body.classList.remove('modal-open');
    })
})

fetch('../../pets.json') 
        .then(response => {
            return response.json();
        })
        .then(data => {
            getPetsInfo(data);
        });

        function getPetsInfo(data) {
            data.forEach(pet => {
                let modal = document.createElement('div');
                
            })
        }