document.addEventListener('DOMContentLoaded', function () {
    let elemento = document.getElementById('Remedios');

    elemento.addEventListener('mouseenter', function () {
        this.classList.add('hovered');
    });

    elemento.addEventListener('mouseleave', function () {
        this.classList.remove('hovered');
    });
});
