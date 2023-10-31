const stars = document.querySelectorAll('.star');
const ratingContainer = document.querySelectorAll('.rating');

stars.forEach(star => {
    star.addEventListener('click', () => {
        const rating = star.id[star.id.length - 1];
      
        
        // Cambia el color de las estrellas calificadas
        for (let i = 0; i < rating; i++) {
            stars[i].style.color = 'gold'; // Puedes cambiar el color deseado
        }
    });
});

