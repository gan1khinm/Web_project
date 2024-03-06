var currentPage = window.location.href;
var pages = document.querySelectorAll('a');

pages.forEach(function(page) {
    var dataId = page.getAttribute('data-id');
    if (currentPage.includes(dataId)) {
        page.classList.add('active');
    }
})

// if (currentPage.includes("chat")) {
//     document.querySelector('a[href="../html/chat.html"]').classList.add('active')
// } else if (currentPage.includes("contacts")) {
//     document.querySelector('a[href="../html/contacts.html"]').classList.add('active')
// } else if (currentPage.includes("initial")) {
//     document.querySelector('a[href="../html/index.html"]').classList.add('active')
// }
