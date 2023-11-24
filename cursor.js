const emojiCursor = document.querySelector(".emoji-cursor");
const containers = document.querySelectorAll(".grid-item");

containers.forEach((container) => {
    container.addEventListener("mouseenter", () => {
        // Show the custom cursor when entering a container
        emojiCursor.style.display = "block";
    });

    container.addEventListener("mousemove", (e) => {
        // Move the custom cursor along with the mouse
        emojiCursor.style.left = e.pageX + "px";
        emojiCursor.style.top = e.pageY + "px";
    });

    container.addEventListener("mouseleave", () => {
        // Hide the custom cursor when leaving a container
        emojiCursor.style.display = "none";
    });
});

// Optional: Hide the system cursor
document.body.style.cursor = "context-menu";
