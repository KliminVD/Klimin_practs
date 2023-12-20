document.addEventListener("DOMContentLoaded", function() {
    const layers = document.querySelectorAll(".parallax-layer");
    const contents = document.querySelectorAll(".parallax-content");

    window.addEventListener("scroll", function() {
        const scrollY = window.scrollY;

        layers.forEach(layer => {
            const speed = layer.getAttribute("data-speed");
            const yPos = -(scrollY * speed);
            layer.style.transform = `translateY(${yPos}px)`;
        });

        // Update content opacity and position based on scroll
        contents.forEach(Content => {
            Content.style.opacity = 1 - scrollY / 400;
        })
        
    });
});