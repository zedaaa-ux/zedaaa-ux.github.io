document.addEventListener('DOMContentLoaded', function () {
      const sections = document.querySelectorAll('.section');
      
      // Calcola e imposta l'altezza delle sezioni in base all'altezza della finestra
      sections.forEach(section => {
        section.style.height = window.innerHeight + 'px';
      });
    
      // Ascolta l'evento di ridimensionamento della finestra e aggiorna le dimensioni delle sezioni
      window.addEventListener('resize', function () {
        sections.forEach(section => {
          section.style.height = window.innerHeight + 'px';
        });
      });
    });

    document.addEventListener('DOMContentLoaded', function () {
      const timerContainer = document.querySelector('.timer');
      
      // Funzione per mostrare "scroll down"
      function showScrollDown() {
        const scrollDown = document.createElement('div');
        scrollDown.classList.add('scroll-down');
        scrollDown.innerText = 'Scroll Down';
        timerContainer.appendChild(scrollDown);
    
        // Rimuovi "scroll down" dopo 3 secondi
        setTimeout(function() {
          scrollDown.remove();
        }, 3000);
      }
    
      // Mostra "scroll down" dopo 5 secondi
      setTimeout(function() {
        showScrollDown();
      }, 5000);
    });

    document.addEventListener('DOMContentLoaded', function() {
      const animationElement = document.querySelector('.animation-text');
    
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
      };
    
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animation-visible');
            observer.unobserve(entry.target);
          }
        });
      }, options);
    
      observer.observe(animationElement);
    });
    
    