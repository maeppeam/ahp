// ============================================
// JOURNEY PAGE — dark mode + footer year
// (mirrors the logic in portfolio.js, without any
// dependency on project data so this page can stand alone)
// ============================================
document.addEventListener("DOMContentLoaded", function () {
    var darkBtn = document.getElementById("darkModeToggle");

    if (localStorage.getItem("darkMode") === "true") {
        document.body.classList.add("dark-mode");
        if (darkBtn) darkBtn.textContent = "☀️";
    }

    if (darkBtn) {
        darkBtn.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");
            var isDark = document.body.classList.contains("dark-mode");
            darkBtn.textContent = isDark ? "☀️" : "🌙";
            localStorage.setItem("darkMode", isDark ? "true" : "false");
        });
    }

    var yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();
});
