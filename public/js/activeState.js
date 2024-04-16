var currentPage = window.location.href;
var pages = document.querySelectorAll('a');

pages.forEach(function(page) {
    var dataId = page.getAttribute('data-id');
    if (currentPage.includes(dataId)) {
        page.classList.add('active');
    }
})

