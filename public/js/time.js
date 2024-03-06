document.addEventListener("DOMContentLoaded", function() {
    fetch('/timeToRender')
        .then(response => response.json())
        .then(data => {
            var loadTime = performance.now();
            const footerElement = document.querySelector('footer'); // Замените селектор на соответствующий вашему сайту
            var footer = document.querySelector('footer');
            var p = document.createElement('p');
            p.innerText = 'Total time: ' + loadTime + ' ms (client) + ' + data + ' ms (server) '; // Предполагается, что сервер возвращает время в миллисекундах
            footer.appendChild(p);
        })
        .catch(error => console.error('Error fetching time to render:', error));
});
