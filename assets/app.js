import './bootstrap.js';
/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */
import './styles/app.css';

console.log('This log comes from assets/app.js - welcome to AssetMapper! 🎉');

document.addEventListener('DOMContentLoaded', function() {
    const progressBar = document.getElementById('progress-bar');
    const currentTimeElement = document.getElementById('current-time');
    const totalTimeElement = document.getElementById('total-time');
    const totalDuration = parseFloat(totalTimeElement.getAttribute('data-duration'));
    let elapsedTime = parseFloat(currentTimeElement.getAttribute('data-time'));

    function updateProgress() {
        if (elapsedTime < totalDuration) {
            const progressPercent = (elapsedTime / totalDuration) * 100;
            progressBar.style.width = progressPercent + '%';

            const minutes = Math.floor(elapsedTime / 60);
            const seconds = Math.floor(elapsedTime % 60);
            currentTimeElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

            elapsedTime += 1;
        } else {
            location.reload();
        }
    }

    setInterval(updateProgress, 1000);
});


document.addEventListener('DOMContentLoaded', function() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const container = document.getElementById('playlists-container');

    let scrollAmount = 0;
    const scrollStep = 300; // Distance de défilement pour chaque clic

    // Duplique les éléments pour un défilement infini
    function duplicateItems() {
        const items = Array.from(container.children);
        items.forEach(item => {
            const clone = item.cloneNode(true);
            container.appendChild(clone);
        });
    }

    // Fonction de défilement fluide
    function scrollContainer(direction) {
        const containerWidth = container.scrollWidth / 2;
        scrollAmount += direction * scrollStep;
        
        // Ajuste le défilement si nécessaire pour créer l'effet infini
        if (scrollAmount > containerWidth) {
            container.scrollLeft = 0;
            scrollAmount = 0;
        } else if (scrollAmount < 0) {
            container.scrollLeft = containerWidth;
            scrollAmount = containerWidth;
        } else {
            container.scrollTo({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }
    }

    // Duplique les éléments au chargement
    duplicateItems();

    prevBtn.addEventListener('click', function() {
        scrollContainer(-1);
    });

    nextBtn.addEventListener('click', function() {
        scrollContainer(1);
    });
});

