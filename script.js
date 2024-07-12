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

// Drag and drop code
const dropZone = document.getElementById('dropZone');

dropZone.addEventListener('dragover', (event) => {
  event.preventDefault();
  event.stopPropagation();
  dropZone.classList.add('hover');
});

dropZone.addEventListener('dragleave', (event) => {
  event.preventDefault();
  event.stopPropagation();
  dropZone.classList.remove('hover');
});

dropZone.addEventListener('drop', (event) => {
  event.preventDefault();
  event.stopPropagation();
  dropZone.classList.remove('hover');

  const files = event.dataTransfer.files;
  handleFiles(files);
});

function handleFiles(files) {
  for (const file of files) {
    if(file.type == "application/pdf"){
        console.log(`File: ${file.name}, Size: ${file.size} bytes, Type: ${file.type}`);
    }
    else{
        alert("Invalid file type, file must be a PDF")
    }
  }
}