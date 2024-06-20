// SCRIPT DO BOTÃO DE VOLTAR 
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("topBtn").style.display = "block";
    } else {
        document.getElementById("topBtn").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0; // Para Safari
    document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE e Opera
}
// FIM DO SCRIPT DO BOTÃO DE VOLTAR 

// SCRIPT MUDAR COR DA ESTRELA
document.querySelectorAll('.hover-content .fa-star').forEach(star => {
    star.addEventListener('click', function() {
        const downContentStars = this.closest('.item').querySelector('.down-content .stars .fa-star');

        downContentStars.classList.toggle('star-yellow');
    });
});
// FIM DO SCRIPT DE MUDAR COR DA ESTRELA

// SCRIPT DE PUXAR A NAVBAR PRA CIMA 
document.getElementById('navbarToggle').addEventListener('click', function() {
    var navbarContent = document.getElementById('navbarContent');
    var toggleButton = this;
    navbarContent.classList.toggle('collapsed');
    toggleButton.classList.toggle('collapsed');
});
// FIM DO SCRIPT DE PUXAR A NAVBAR PRA CIMA 
