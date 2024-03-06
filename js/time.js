(function () {
    window.addEventListener('load', function() {
        var loadTime = performance.now();
        var footer = document.querySelector('footer');
        var p = document.createElement('p');
        p.innerText = 'Страница загрузилась за ' + loadTime + ' мс';
        footer.appendChild(p);
    });
})();
