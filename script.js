function scrollLeftCustom() {
    const scrollContainer = document.querySelector('.thumbs-div');
    const scrollAmount = window.innerWidth <= 450 ? -350 : -490; // Valor negativo para rolar à esquerda

    console.log("Scroll Left - Current Scroll Position:", scrollContainer.scrollLeft);
    console.log("Scroll Left - Scroll Amount:", scrollAmount);

    scrollContainer.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });

    console.log("Scroll Left - New Scroll Position:", scrollContainer.scrollLeft);
}

function scrollRightCustom() {
    const scrollContainer = document.querySelector('.thumbs-div');
    const scrollAmount = window.innerWidth <= 450 ? 350 : 490; // Valor positivo para rolar à direita

    console.log("Scroll Right - Current Scroll Position:", scrollContainer.scrollLeft);
    console.log("Scroll Right - Scroll Amount:", scrollAmount);

    scrollContainer.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });

    console.log("Scroll Right - New Scroll Position:", scrollContainer.scrollLeft);
}
document.querySelectorAll('.thumb-img').forEach(function (img) {
    let tapped = false;

    img.addEventListener('click', function (event) {
        if (!tapped) {
            tapped = true;
            img.classList.add('hover');
            setTimeout(function () { tapped = false; }, 1500); // Redefine o estado de toque após 300ms
        } else {
            window.location.href = img.getAttribute('data-link'); // Redireciona para a URL armazenada no atributo data-link
        }
        event.preventDefault(); // Impede o comportamento padrão
    });
});
function redirectToPage(imgElement) {
const url = imgElement.getAttribute('data-url');
if (url) {
    window.location.href = url;
}
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
        scrollLeftCustom();
    } else if (event.key === 'ArrowRight') {
        scrollRightCustom();
    }
});