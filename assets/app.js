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

