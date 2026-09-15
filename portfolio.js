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
        features: ["Pencatatan", "Pemantauan", "Real Time"]
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
        features: ["Pencatatan", "Pemantauan Status", "Penanganan Permintaan Tiket", "Real Time"]
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
        features: ["Dashboard Ringkasan Data Real-Time", "Daftar aset lengkap dengan manajemen status", "Log sirkulasi peminjaman/pengembalian", "Generate QR Code untuk setiap aset"]
    },
    {
        id: 4,
        title: "SABAR - Sistem Arus Barang Masuk & Keluar",
        description: "Sistem ini dirancang untuk mengelola siklus barang secara lengkap mulai dari master data, transaksi masuk/keluar, hingga stock opname dengan fitur approval dan notifikasi stok menipis.",
        tech: ["HTML", "CSS", "JavaScript", "API QR Code", "MVC Like Architecture"],
        url: "https://maeppeam.github.io/sabar/",
        screenshots: ["assets/sabar.png"],
        category: "Tools",
        status: "Live",
        date: "2026-07-30",
        features: ["Dashboard", "Master Barang", "Barang Masuk", "Barang Keluar", "Stock Opname", "Sistem Approval", "Notifikasi"]
    },
    {
        id: 5,
        title: "SAHIN - Secure, Authentic, Hands-In",
        description: "Aplikasi berbasis web untuk mengelola alur kerja dokumen/permohonan dengan fitur Tanda Tangan Elektronik (TTE)",
        tech: ["HTML", "CSS", "JavaScript", "API QR Code", "Hash Code", "QR Code"],
        url: "https://maeppeam.github.io/sah-in/",
        screenshots: ["assets/sahin.png"],
        category: "Tools",
        status: "Live",
        date: "2026-08-05",
        features: ["Alur Kerja Dokumen", "Verifikasi via QR Code", "Dashboard Real-Time", "Detail Dokumen", "Manajemen Pengguna"]
    },
    {
        id: 6,
        title: "GROO",
        description: "Sistem ini menyediakan dashboard lengkap dengan ringkasan data pegawai (Guru, Tenaga Kependidikan, GTT, GTY) serta informasi kelengkapan data seperti Dapodik, NUPTK, dan PPG, dilengkapi dengan direktori pegawai dan fitur pencarian.",
        tech: ["HTML", "CSS", "JavaScript", "API QR Code", "Hash Code", "Single-Page Application"],
        url: "https://maeppeam.github.io/groo/",
        screenshots: ["assets/groo.png"],
        category: "Dashboard",
        status: "Live",
        date: "2026-08-13",
        features: ["Dashboard Lengkap", "Kategori Pegawai", "Kelengkapan Data", "Direktori Pegawai", "Manajemen Data"]
    },
    {
        id: 7,
        title: "HIGAT",
        description: "Platform terpusat yang fleksibel untuk mencetak proforma dan invoice multi-merchant dengan desain template profesional dalam hitungan detik",
        tech: ["HTML", "CSS", "JavaScript", "HTML Templating"],
        url: "https://maeppeam.github.io/higat/",
        screenshots: ["assets/higat.png"],
        category: "Utility",
        status: "Live",
        date: "2026-09-02",
        features: ["Role Management", "Multi Merchant", "Proforma Invoice Generator", "Invoice Generator"]
    }  
];

// ============================================
// STATE
// ============================================
let state = {
    currentCategory: "Semua",
    searchQuery: "",
    sortBy: "newest",
    currentPage: 1,
    itemsPerPage: 6
};

// ============================================
// UTILITIES
// ============================================
function formatDate(dateString) {
    var options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString("id-ID", options);
}

function getStatusBadge(status) {
    return '<span class="status-live">● ' + (status === "Live" ? "Live" : "Development") + "</span>";
}

function getProject(id) {
    for (var i = 0; i < projects.length; i++) {
        if (projects[i].id === id) return projects[i];
    }
    return null;
}

// ============================================
// CATEGORY CHIPS
// ============================================
function renderChips() {
    var seen = {};
    var cats = ["Semua"];
    for (var ci = 0; ci < projects.length; ci++) {
        if (seen[projects[ci].category]) continue;
        seen[projects[ci].category] = true;
        cats.push(projects[ci].category);
    }
    var el = document.getElementById("chipBar");
    var html = "";
    for (var i = 0; i < cats.length; i++) {
        html += '<button class="chip' + (cats[i] === state.currentCategory ? " active" : "") + '" data-cat="' + cats[i] + '">' + cats[i] + "</button>";
    }
    el.innerHTML = html;

    var chips = el.querySelectorAll(".chip");
    for (var j = 0; j < chips.length; j++) {
        chips[j].addEventListener("click", function () {
            state.currentCategory = this.getAttribute("data-cat");
            renderChips();
            applyFilters();
        });
    }
}

// ============================================
// FILTERS
// ============================================
function applyFilters() {
    var filtered = projects.slice();

    if (state.currentCategory !== "Semua") {
        filtered = filtered.filter(function (p) { return p.category === state.currentCategory; });
    }

    if (state.searchQuery) {
        var q = state.searchQuery;
        filtered = filtered.filter(function (p) {
            var haystack = (p.title + " " + p.description + " " + p.category + " " + p.status + " " + p.tech.join(" ")).toLowerCase();
            return haystack.indexOf(q) !== -1;
        });
    }

    if (state.sortBy === "title") filtered.sort(function (a, b) { return a.title.localeCompare(b.title); });
    else if (state.sortBy === "title-desc") filtered.sort(function (a, b) { return b.title.localeCompare(a.title); });
    else if (state.sortBy === "newest") filtered.sort(function (a, b) { return new Date(b.date) - new Date(a.date); });
    else if (state.sortBy === "oldest") filtered.sort(function (a, b) { return new Date(a.date) - new Date(b.date); });

    state.currentPage = 1;
    state.filteredProjects = filtered;
    renderProjects(filtered);
}

function renderProjects(items) {
    var container = document.getElementById("projectContainer");
    var empty = document.getElementById("emptyState");
    var totalPages = Math.max(1, Math.ceil(items.length / state.itemsPerPage));

    if (state.currentPage > totalPages) state.currentPage = totalPages;

    if (items.length === 0) {
        container.innerHTML = "";
        empty.hidden = false;
        updatePagination(0);
        return;
    }
    empty.hidden = true;

    var start = (state.currentPage - 1) * state.itemsPerPage;
    var pageItems = items.slice(start, start + state.itemsPerPage);

    var html = "";
    for (var i = 0; i < pageItems.length; i++) {
        var p = pageItems[i];
        var img = (p.screenshots && p.screenshots.length > 0) ? p.screenshots[0] : "";
        var count = (p.screenshots || []).length;

        html += '<article class="card" style="animation-delay:' + (i * 0.06) + 's">';
        html += '<div class="card-media">';
        if (img) {
            html += '<img src="' + img + '" alt="' + p.title + '" loading="lazy" onerror="this.style.display=\'none\'">';
        }
        if (count > 1) html += '<span class="card-count">' + count + " foto</span>";
        html += "</div>";
        html += '<div class="card-body">';
        html += '<div class="card-top"><span class="category">' + p.category + "</span>" + getStatusBadge(p.status) + "</div>";
        html += "<h3>" + p.title + "</h3>";
        html += "<p>" + p.description + "</p>";
        html += '<div class="tech-tags">';
        for (var j = 0; j < p.tech.length; j++) html += "<span>" + p.tech[j] + "</span>";
        html += "</div>";
        html += '<div class="card-actions">';
        html += '<a href="' + p.url + '" target="_blank" rel="noopener" class="btn btn-card btn-card-demo">Lihat Demo →</a>';
        html += '<button class="btn btn-card btn-card-detail" onclick="showDetail(' + p.id + ')">Detail</button>';
        html += "</div></div></article>";
    }
    container.innerHTML = html;
    updatePagination(items.length);
}

// ============================================
// PAGINATION
// ============================================
function updatePagination(totalItems) {
    var container = document.getElementById("pagination");
    var totalPages = Math.max(1, Math.ceil(totalItems / state.itemsPerPage));

    if (totalPages <= 1) {
        container.innerHTML = "";
        return;
    }

    var html = "";
    html += '<button class="page-btn" onclick="changePage(' + (state.currentPage - 1) + ')"' + (state.currentPage === 1 ? " disabled" : "") + ">◀</button>";

    for (var i = 1; i <= totalPages; i++) {
        html += '<button class="page-btn' + (i === state.currentPage ? " active" : "") + '" onclick="changePage(' + i + ')">' + i + "</button>";
    }

    html += '<button class="page-btn" onclick="changePage(' + (state.currentPage + 1) + ')"' + (state.currentPage === totalPages ? " disabled" : "") + ">▶</button>";

    container.innerHTML = html;
}

function changePage(page) {
    var totalPages = Math.max(1, Math.ceil(state.filteredProjects.length / state.itemsPerPage));
    if (page < 1 || page > totalPages || page === state.currentPage) return;
    state.currentPage = page;
    renderProjects(state.filteredProjects);
    var grid = document.getElementById("projects");
    if (grid) grid.scrollIntoView({ behavior: "smooth", block: "start" });
}

function resetAllFilters() {
    state.currentCategory = "Semua";
    state.searchQuery = "";
    state.sortBy = "newest";
    state.currentPage = 1;
    document.getElementById("searchInput").value = "";
    document.getElementById("sortSelect").value = "newest";
    renderChips();
    applyFilters();
}

// ============================================
// MODAL
// ============================================
function showDetail(id) {
    var p = getProject(id);
    if (!p) return;

    var html = '<div class="modal-body">';
    html += '<div class="card-top"><span class="category">' + p.category + "</span>" + getStatusBadge(p.status) + "</div>";
    html += "<h2>" + p.title + "</h2>";
    html += '<div class="modal-meta">' + formatDate(p.date) + "</div>";

    html += '<div class="modal-section"><h4>Deskripsi</h4><p>' + p.description + "</p></div>";

    html += '<div class="modal-section"><h4>Teknologi</h4><div class="tech-tags">';
    for (var i = 0; i < p.tech.length; i++) html += "<span>" + p.tech[i] + "</span>";
    html += "</div></div>";

    if (p.features && p.features.length) {
        html += '<div class="modal-section"><h4>Fitur Unggulan</h4><ul class="feature-list">';
        for (var j = 0; j < p.features.length; j++) html += "<li>" + p.features[j] + "</li>";
        html += "</ul></div>";
    }

    html += '<div class="modal-actions">';
    html += '<a href="' + p.url + '" target="_blank" rel="noopener" class="btn btn-primary" style="flex:1">Buka Demo →</a>';
    html += '<button class="btn btn-ghost" onclick="closeModal()">Tutup</button>';
    html += "</div></div>";

    document.getElementById("modalBody").innerHTML = html;
    document.getElementById("modal").classList.add("open");
    document.body.style.overflow = "hidden";
}

function closeModal() {
    document.getElementById("modal").classList.remove("open");
    document.body.style.overflow = "";
}

// ============================================
// DARK MODE
// ============================================
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    var isDark = document.body.classList.contains("dark-mode");
    document.getElementById("darkModeToggle").textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("darkMode", isDark ? "true" : "false");
}

// ============================================
// STATS
// ============================================
function updateStats() {
    var live = projects.filter(function (p) { return p.status === "Live"; }).length;
    document.getElementById("totalProjects").textContent = projects.length;
    document.getElementById("liveProjects").textContent = live;
    document.getElementById("heroCount").textContent = live;
}

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener("DOMContentLoaded", function () {
    renderChips();
    applyFilters();
    updateStats();

    var searchInput = document.getElementById("searchInput");
    var debounceTimer;
    searchInput.addEventListener("input", function () {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(function () {
            state.searchQuery = searchInput.value.trim().toLowerCase();
            applyFilters();
        }, 300);
    });

    document.getElementById("sortSelect").addEventListener("change", function (e) {
        state.sortBy = e.target.value;
        applyFilters();
    });

    var darkBtn = document.getElementById("darkModeToggle");
    darkBtn.addEventListener("click", toggleDarkMode);
    if (localStorage.getItem("darkMode") === "true") {
        document.body.classList.add("dark-mode");
        darkBtn.textContent = "☀️";
    }

    document.querySelector(".modal-close").addEventListener("click", closeModal);
    document.getElementById("modal").addEventListener("click", function (e) {
        if (e.target === this) closeModal();
    });
    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") closeModal();
    });

    document.getElementById("year").textContent = new Date().getFullYear();
    document.getElementById("lastUpdated").textContent =
        (document.getElementById("lastUpdated").textContent || "Update terakhir") + " " +
        new Date().toLocaleDateString("id-ID");
});
