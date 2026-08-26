// ============================================
// DATA PROJECT GAS
// ============================================
const projects = [
    {
        id: 1,
        title: "Manajement Inventory V.1",
        description: "Asset Management System V.1 adalah aplikasi berbasis web untuk mengelola aset/inventaris secara efisien. Versi awal ini menyediakan antarmuka dasar untuk pelacakan dan pengelolaan data aset.",
        tech: ["HTML", "CSS", "JavaScript"],
        url: "https://maeppeam.github.io/inventory-system-v1/",
        screenshots: ["assets/manajement-inventory-v1.jpg"],
        category: "Tools",
        status: "Live",
        date: "2026-04-24",
        features: [
            "Pencatatan",
            "Pemantauan",
            "Real Time"
        ]
    },
    {
        id: 2,
        title: "Ticketing System",
        description: "Ticketing System adalah aplikasi berbasis web untuk mengelola tiket/layanan pelanggan secara efisien. Sistem ini dirancang untuk mencatat, memantau, dan menindaklanjuti permintaan atau laporan melalui antarmuka yang terstruktur.",
        tech: ["HTML", "CSS", "JavaScript"],
        url: "https://maeppeam.github.io/ticketing-system/",
        screenshots: ["assets/ticketing-system.jpg"],
        category: "Tools",
        status: "Live",
        date: "2026-07-13",
        features: [
            "Pencatatan",
            "Pemantauan Status",
            "Penanganan Permintaan Tiket",
            "Real Time"
        ]
    },
    {
        id: 3,
        title: "Manajement Inventory V.2",
        description: "Versi ini merupakan penyempurnaan dari V.1 dengan peningkatan fitur dan kinerja",
        tech: ["HTML", "CSS", "JavaScript", "API QR Code"],
        url: "https://maeppeam.github.io/inventory-system-v2/",
        screenshots: ["assets/manajement-inventory-v2.jpg"],
        category: "Tools",
        status: "Live",
        date: "2026-07-15",
        features: [
            "Dashboard Ringkasan Data Real-Time",
            "Daftar aset lengkap dengan manajemen status",
            "Log sirkulasi peminjaman/pengembalian",
            "Generate QR Code untuk setiap aset"
        ]
    },
    {
        id: 4,
        title: "SABAR - Sistem Arus Barang Masuk & Keluar",
        description: "Antarmuka sistem SABAR (Sistem Arus Barang Masuk dan Keluar) ini berfungsi sebagai dashboard manajemen logistik dan persediaan barang yang dirancang untuk memantau pergerakan stok secara terstruktur dan efisien.",
        tech: ["Coming Soon"],
        url: "https://maeppeam.github.io/sabar/",
        screenshots: ["assets/sabar-1.jpg", "assets/sabar-2.jpg"],
        category: "Automation",
        status: "Live",
        date: "2026-07-30",
        features: ["Coming Soon"]
    },
    {
        id: 5,
        title: "SAHIN - Secure, Authentic, Hands-In",
        description: "Antarmuka web app Sah In dirancang sebagai sistem Tanda Tangan Elektronik (TTE) dan pemeliharaan dokumen digital yang memfasilitasi penandatanganan serta pembubuhan stempel resmi secara visual, instan, dan aman",
        tech: ["Coming Soon"],
        url: "https://maeppeam.github.io/sah-in/",
        screenshots: ["assets/sahin-1.jpg", "assets/sahin-2.jpg"],
        category: "API",
        status: "Live",
        date: "2026-08-05",
        features: ["Coming Soon"]
    },
    {
        id: 6,
        title: "GROO",
        description: "Antarmuka Dashboard SDM (GROO - Grow Together, Work Better) ini dirancang khusus untuk mengelola data kepegawaian, memantau status kualifikasi pendidik, serta mengadministrasikan data Sumber Daya Manusia secara terstruktur dan terpusat",
        tech: ["Coming Soon"],
        url: "https://maeppeam.github.io/groo/",
        screenshots: ["assets/groo-1.jpg", "assets/groo-2.jpg"],
        category: "Dashboard",
        status: "Live",
        date: "2026-08-13",
        features: ["Coming Soon"]
    }
];

// ============================================
// STATE
// ============================================
let state = {
    currentCategory: "Semua",
    searchQuery: "",
    sortBy: "default",
    currentPage: 1,
    itemsPerPage: 6,
    filteredProjects: [...projects]
};

// ============================================
// UTILITY FUNCTIONS
// ============================================
function getCategoryIcon(category) {
    var icons = {
        "Tools": "🔧",
        "Dashboard": "📊",
        "Form": "📝",
        "Automation": "⚡",
        "API": "🔌"
    };
    return icons[category] || "📦";
}

function formatDate(dateString) {
    var options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("id-ID", options);
}

function getStatusBadge(status) {
    if (status === "Live") {
        return "<span class=\"status status-live\">🟢 Live</span>";
    }
    return "<span class=\"status status-dev\">🔧 Development</span>";
}

// ============================================
// RENDER SLIDER
// ============================================
function renderSlider(screenshots, projectId) {
    var defaultImage = "https://via.placeholder.com/400x250/4285f4/ffffff?text=GAS+Project";
    var images = screenshots || [defaultImage];
    
    var sliderId = "slider-" + projectId;
    var html = "<div class=\"slider-container\" id=\"" + sliderId + "\">";
    html += "<div class=\"slider-wrapper\">";
    
    for (var i = 0; i < images.length; i++) {
        var active = i === 0 ? "active" : "";
        html += "<div class=\"slide " + active + "\">";
        html += "<img src=\"" + (images[i] || defaultImage) + "\" alt=\"Screenshot " + (i+1) + "\" onerror=\"this.src='" + defaultImage + "'\" loading=\"lazy\">";
        html += "</div>";
    }
    
    html += "</div>";
    
    if (images.length > 1) {
        html += "<button class=\"slider-btn prev\" onclick=\"changeSlide(" + projectId + ", -1)\">❮</button>";
        html += "<button class=\"slider-btn next\" onclick=\"changeSlide(" + projectId + ", 1)\">❯</button>";
        html += "<div class=\"slider-dots\">";
        for (var i = 0; i < images.length; i++) {
            var active = i === 0 ? "active" : "";
            html += "<span class=\"dot " + active + "\" onclick=\"goToSlide(" + projectId + ", " + i + ")\"></span>";
        }
        html += "</div>";
    }
    
    html += "</div>";
    return html;
}

// ============================================
// SLIDER FUNCTIONS
// ============================================
function changeSlide(projectId, direction) {
    var container = document.getElementById("slider-" + projectId);
    if (!container) return;
    
    var slides = container.querySelectorAll(".slide");
    var dots = container.querySelectorAll(".dot");
    var currentIndex = 0;
    
    for (var i = 0; i < slides.length; i++) {
        if (slides[i].classList.contains("active")) {
            currentIndex = i;
            break;
        }
    }
    
    var newIndex = currentIndex + direction;
    if (newIndex < 0) newIndex = slides.length - 1;
    if (newIndex >= slides.length) newIndex = 0;
    
    goToSlide(projectId, newIndex);
}

function goToSlide(projectId, index) {
    var container = document.getElementById("slider-" + projectId);
    if (!container) return;
    
    var slides = container.querySelectorAll(".slide");
    var dots = container.querySelectorAll(".dot");
    
    for (var i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
        if (dots[i]) dots[i].classList.remove("active");
    }
    
    if (slides[index]) slides[index].classList.add("active");
    if (dots[index]) dots[index].classList.add("active");
}

// ============================================
// RENDER PROJECT CARDS
// ============================================
function renderProjects(projectList) {
    var container = document.getElementById("projectContainer");
    var defaultImage = "https://via.placeholder.com/400x250/4285f4/ffffff?text=GAS+Project";
    
    if (projectList.length === 0) {
        container.innerHTML = "<div class=\"empty-state\"><div class=\"empty-icon\">🔍</div><h2>Tidak ada project yang ditemukan</h2><p>Coba cari dengan keyword lain atau reset filter</p><button onclick=\"resetAllFilters()\" class=\"btn-reset\">🔄 Reset Filter</button></div>";
        updatePagination(0);
        return;
    }
    
    var start = (state.currentPage - 1) * state.itemsPerPage;
    var end = start + state.itemsPerPage;
    var paginatedItems = projectList.slice(start, end);
    
    var html = "";
    for (var i = 0; i < paginatedItems.length; i++) {
        var project = paginatedItems[i];
        var delay = i * 0.08;
        
        var screenshots = project.screenshots || [];
        if (screenshots.length === 0 && project.screenshot) {
            screenshots = [project.screenshot];
        }
        if (screenshots.length === 0) {
            screenshots = [defaultImage];
        }
        
        var sliderHtml = renderSlider(screenshots, project.id);
        
        html += "<div class=\"project-card\" style=\"animation-delay: " + delay + "s\">";
        html += sliderHtml;
        html += "<div class=\"card-content\">";
        html += "<div class=\"card-header\">";
        html += "<span class=\"category\">" + getCategoryIcon(project.category) + " " + project.category + "</span>";
        html += getStatusBadge(project.status);
        html += "</div>";
        html += "<h2>" + project.title + "</h2>";
        html += "<p>" + project.description + "</p>";
        html += "<div class=\"tech-tags\">";
        for (var j = 0; j < project.tech.length; j++) {
            html += "<span>" + project.tech[j] + "</span>";
        }
        html += "</div>";
        html += "<div class=\"project-meta\">";
        html += "<span>📅 " + formatDate(project.date) + "</span>";
        html += "<span>#" + project.id + "</span>";
        html += "</div>";
        html += "<div class=\"card-actions\">";
        html += "<a href=\"" + project.url + "\" target=\"_blank\" class=\"btn-demo\">🚀 Lihat Demo</a>";
        html += "<button class=\"btn-detail\" onclick=\"showDetail(" + project.id + ")\">📖 Detail</button>";
        html += "<button class=\"btn-share\" onclick=\"shareProject(" + project.id + ")\">📤 Share</button>";
        html += "</div></div></div>";
    }
    
    container.innerHTML = html;
    updatePagination(projectList.length);
    updateProjectCount(projectList.length);
}

// ============================================
// PAGINATION
// ============================================
function updatePagination(totalItems) {
    var container = document.getElementById("pagination");
    var totalPages = Math.ceil(totalItems / state.itemsPerPage);
    
    if (totalPages <= 1) {
        container.innerHTML = "";
        return;
    }
    
    var html = "";
    html += "<button class=\"page-btn\" onclick=\"changePage(" + (state.currentPage - 1) + ")\" " + (state.currentPage === 1 ? "disabled" : "") + ">◀</button>";
    
    for (var i = 1; i <= totalPages; i++) {
        html += "<button class=\"page-btn " + (i === state.currentPage ? "active" : "") + "\" onclick=\"changePage(" + i + ")\">" + i + "</button>";
    }
    
    html += "<button class=\"page-btn\" onclick=\"changePage(" + (state.currentPage + 1) + ")\" " + (state.currentPage === totalPages ? "disabled" : "") + ">▶</button>";
    
    container.innerHTML = html;
}

function changePage(page) {
    var totalPages = Math.ceil(state.filteredProjects.length / state.itemsPerPage);
    if (page < 1 || page > totalPages) return;
    state.currentPage = page;
    renderProjects(state.filteredProjects);
    document.querySelector("main").scrollIntoView({ behavior: "smooth", block: "start" });
}

// ============================================
// FILTER & SEARCH
// ============================================
function filterProjects(category) {
    state.currentCategory = category;
    state.currentPage = 1;
    
    var btns = document.querySelectorAll(".filter-btn");
    for (var i = 0; i < btns.length; i++) {
        var btn = btns[i];
        if (btn.dataset.category === category) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    }
    
    applyFilters();
}

function searchProjects(query) {
    state.searchQuery = query.toLowerCase().trim();
    state.currentPage = 1;
    applyFilters();
}

function sortProjects(sortBy) {
    state.sortBy = sortBy;
    applyFilters();
}

function applyFilters() {
    var filtered = [];
    for (var i = 0; i < projects.length; i++) {
        filtered.push(projects[i]);
    }
    
    if (state.currentCategory !== "Semua") {
        var temp = [];
        for (var i = 0; i < filtered.length; i++) {
            if (filtered[i].category === state.currentCategory) {
                temp.push(filtered[i]);
            }
        }
        filtered = temp;
    }
    
    if (state.searchQuery) {
        var temp = [];
        for (var i = 0; i < filtered.length; i++) {
            var p = filtered[i];
            var match = false;
            if (p.title.toLowerCase().indexOf(state.searchQuery) !== -1) match = true;
            if (p.description.toLowerCase().indexOf(state.searchQuery) !== -1) match = true;
            if (p.category.toLowerCase().indexOf(state.searchQuery) !== -1) match = true;
            if (p.status.toLowerCase().indexOf(state.searchQuery) !== -1) match = true;
            for (var j = 0; j < p.tech.length; j++) {
                if (p.tech[j].toLowerCase().indexOf(state.searchQuery) !== -1) match = true;
            }
            if (match) temp.push(p);
        }
        filtered = temp;
    }
    
    if (state.sortBy === "title") {
        filtered.sort(function(a, b) { return a.title.localeCompare(b.title); });
    } else if (state.sortBy === "title-desc") {
        filtered.sort(function(a, b) { return b.title.localeCompare(a.title); });
    } else if (state.sortBy === "newest") {
        filtered.sort(function(a, b) { return new Date(b.date) - new Date(a.date); });
    } else if (state.sortBy === "oldest") {
        filtered.sort(function(a, b) { return new Date(a.date) - new Date(b.date); });
    }
    
    state.filteredProjects = filtered;
    renderProjects(filtered);
}

function resetAllFilters() {
    state.currentCategory = "Semua";
    state.searchQuery = "";
    state.sortBy = "default";
    state.currentPage = 1;
    
    document.getElementById("searchInput").value = "";
    document.getElementById("sortSelect").value = "default";
    
    var btns = document.querySelectorAll(".filter-btn");
    for (var i = 0; i < btns.length; i++) {
        if (btns[i].dataset.category === "Semua") {
            btns[i].classList.add("active");
        } else {
            btns[i].classList.remove("active");
        }
    }
    
    applyFilters();
}

// ============================================
// SHARE PROJECT
// ============================================
function shareProject(id) {
    var project = null;
    for (var i = 0; i < projects.length; i++) {
        if (projects[i].id === id) {
            project = projects[i];
            break;
        }
    }
    if (!project) return;
    
    if (navigator.share) {
        navigator.share({
            title: project.title,
            text: "Cek project GAS keren: " + project.title + "\n" + project.description,
            url: project.url
        }).catch(function() {});
    } else {
        navigator.clipboard.writeText(project.url).then(function() {
            alert("✅ URL project telah disalin ke clipboard!");
        }).catch(function() {
            var text = project.title + "\n" + project.url;
            var textarea = document.createElement("textarea");
            textarea.value = text;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand("copy");
            document.body.removeChild(textarea);
            alert("✅ Text project telah disalin!");
        });
    }
}

// ============================================
// SHOW DETAIL MODAL
// ============================================
function showDetail(id) {
    var project = null;
    for (var i = 0; i < projects.length; i++) {
        if (projects[i].id === id) {
            project = projects[i];
            break;
        }
    }
    if (!project) return;
    
    var modal = document.getElementById("modal");
    var modalBody = document.getElementById("modalBody");
    
    var html = "<div class=\"modal-header\"><h2>" + project.title + "</h2><span class=\"modal-status\">" + getStatusBadge(project.status) + "</span></div>";
    html += "<div class=\"modal-content-body\">";
    html += "<div class=\"modal-section\"><h3>📝 Deskripsi</h3><p>" + project.description + "</p></div>";
    html += "<div class=\"modal-section\"><h3>🔧 Teknologi</h3><div class=\"tech-tags\">";
    for (var i = 0; i < project.tech.length; i++) {
        html += "<span>" + project.tech[i] + "</span>";
    }
    html += "</div></div>";
    html += "<div class=\"modal-section\"><h3>✨ Fitur Unggulan</h3><ul class=\"feature-list\">";
    for (var i = 0; i < project.features.length; i++) {
        html += "<li>✅ " + project.features[i] + "</li>";
    }
    html += "</ul></div>";
    html += "<div class=\"modal-section\"><h3>📊 Informasi</h3>";
    html += "<p><strong>Kategori:</strong> " + getCategoryIcon(project.category) + " " + project.category + "</p>";
    html += "<p><strong>Tanggal:</strong> " + formatDate(project.date) + "</p>";
    html += "<p><strong>Status:</strong> " + project.status + "</p>";
    html += "<p><strong>Project ID:</strong> #" + project.id + "</p></div>";
    html += "<div class=\"modal-actions\">";
    html += "<a href=\"" + project.url + "\" target=\"_blank\" class=\"btn-demo\">🚀 Buka Demo</a>";
    html += "<button onclick=\"shareProject(" + project.id + ")\" class=\"btn-share-modal\">📤 Share</button>";
    html += "<button onclick=\"closeModal()\" class=\"btn-close-modal\">✕ Tutup</button>";
    html += "</div></div>";
    
    modalBody.innerHTML = html;
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
    document.body.style.overflow = "auto";
}

// ============================================
// UPDATE COUNTER
// ============================================
function updateProjectCount(count) {
    var el = document.getElementById("projectCount");
    if (el) {
        el.textContent = "📦 " + count + " dari " + projects.length + " project ditampilkan";
    }
}

// ============================================
// DARK MODE
// ============================================
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    var btn = document.getElementById("darkModeToggle");
    var isDark = document.body.classList.contains("dark-mode");
    btn.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("darkMode", isDark ? "true" : "false");
}

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener("DOMContentLoaded", function() {
    applyFilters();
    
    var filterBtns = document.querySelectorAll(".filter-btn");
    for (var i = 0; i < filterBtns.length; i++) {
        filterBtns[i].addEventListener("click", function() {
            filterProjects(this.dataset.category);
        });
    }
    
    var searchInput = document.getElementById("searchInput");
    var debounceTimer;
    searchInput.addEventListener("input", function() {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(function() {
            searchProjects(searchInput.value);
        }, 300);
    });
    
    document.getElementById("sortSelect").addEventListener("change", function(e) {
        sortProjects(e.target.value);
    });
    
    var darkBtn = document.getElementById("darkModeToggle");
    darkBtn.addEventListener("click", toggleDarkMode);
    
    if (localStorage.getItem("darkMode") === "true") {
        document.body.classList.add("dark-mode");
        darkBtn.textContent = "☀️";
    }
    
    document.querySelector(".modal-close").addEventListener("click", closeModal);
    document.getElementById("modal").addEventListener("click", function(e) {
        if (e.target === document.getElementById("modal")) {
            closeModal();
        }
    });
    
    document.addEventListener("keydown", function(e) {
        if (e.key === "Escape") closeModal();
    });
    
    document.getElementById("lastUpdated").textContent = new Date().toLocaleDateString("id-ID", {
        day: "numeric", month: "long", year: "numeric"
    });
});
