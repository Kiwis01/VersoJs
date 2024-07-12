function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("active");
}
function redirectTo(page) {
    window.location.href = page;
}

// Highlight the active sidebar button based on the current page
window.onload = function() {
    const currentPage = window.location.pathname.split("/").pop(); // Get current page name
    if (currentPage === "askpdf.html") {
        document.getElementById("pdf-btn").classList.add("active-btn");
    }
    if (currentPage === "flashcards.html") {
        document.getElementById("flashcards-btn").classList.add("active-btn");
    }
    if (currentPage === "audio.html") {
        document.getElementById("audio-btn").classList.add("active-btn");
    }
    if (currentPage === "faq.html") {
        document.getElementById("faq-btn").classList.add("active-btn");
    }
};