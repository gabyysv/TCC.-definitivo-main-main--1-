const scroll = document.getElementById("scrollCategorias");

document.querySelector(".btn-scroll.right").addEventListener("click", () => {
    scroll.scrollBy({
        left: 300,
        behavior: "smooth"
    });
});

document.querySelector(".btn-scroll.left").addEventListener("click", () => {
    scroll.scrollBy({
        left: -300,
        behavior: "smooth"
    });
});
