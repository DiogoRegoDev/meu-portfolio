// Menu Hamburger - Versão Corrigida
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    console.log('Script carregado!'); // Para debug
    
    if (hamburger && navMenu) {
        console.log('Elementos encontrados!'); // Para debug
        
        hamburger.addEventListener('click', function() {
            console.log('Hamburger clicado!');
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Debug para ver as classes
            console.log('Hamburger classes:', hamburger.classList);
            console.log('NavMenu classes:', navMenu.classList);
        });

        // Fechar menu ao clicar num link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Fechar menu ao carregar a página (para garantir que começa fechado)
        window.addEventListener('load', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });

    } else {
        console.error('Elementos do menu não encontrados!');
        console.log('Hamburger:', hamburger);
        console.log('NavMenu:', navMenu);
    }
});