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
        category: "Internal Tool",
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
        category: "Web Utilities",
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
        category: "Internal Tool",
        status: "Live",
        date: "2026-07-15",
        features: ["Dashboard Ringkasan Data Real-Time", "Daftar aset lengkap dengan manajemen status", "Log sirkulasi peminjaman/pengembalian", "Generate QR Code untuk setiap aset"]
    },
    {
        id: 4,
        title: "SABAR - Sistem Arus Barang Masuk & Keluar",
        description: "Sistem ini dirancang untuk mengelola siklus barang secara lengkap mulai dari master data, transaksi masuk/keluar, hingga stock opname dengan fitur approval dan notifikasi stok menipis.",
        tech: ["HTML", "CSS", "JavaScript", "API QR Code", "MVC Like Architecture"],
        url: "https://sabar.afterhoursproject.my.id/",
        screenshots: ["assets/sabar.png"],
        category: "Internal Tool",
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
        category: "Web Utilities",
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
        category: "Internal Tool",
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
        category: "Web Utilities",
        status: "Live",
        date: "2026-09-02",
        features: ["Role Management", "Multi Merchant", "Proforma Invoice Generator", "Invoice Generator"]
    },
    {
        id: 8,
        title: "SIMPUL - School Information & Management Platform for Unified Learning",
        description: "Sistem informasi manajemen sekolah berbasis web yang dirancang untuk mengelola data akademik secara terpusat, mencakup administrasi siswa, guru, kelas, hingga pencatatan presensi",
        tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
        url: "https://simpul.afterhoursproject.my.id",
        screenshots: ["assets/simpul.png"],
        category: "Internal Tool",
        status: "Live",
        date: "2026-09-09",
        features: ["Student & Teacher Management", "Class & Subject Management", "Attendance Tracking", "Data Visualization"]
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

var categoryIconPaths = {
    "Internal Tool": '<path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z"/>',
    "Web Utilities": '<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>'
};
var defaultIconPath = '<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z"/>';

function getCategoryIcon(category) {
    var path = categoryIconPaths[category] || defaultIconPath;
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' + path + "</svg>";
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
        html += '<div class="card-icon-badge">' + getCategoryIcon(p.category) + "</div>";
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
// VISITOR COUNT
// ============================================
var firebaseConfig = {
    apiKey: "AIzaSyA8SNOA6xzB2LZ8-vx6Xni55N-gJ4FwF04",
    authDomain: "afterhoursproject-3f0c4.firebaseapp.com",
    projectId: "afterhoursproject-3f0c4",
    storageBucket: "afterhoursproject-3f0c4.firebasestorage.app",
    messagingSenderId: "1012159782297",
    appId: "1:1012159782297:web:a62bc12e31e917a4e2c708"
};
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
var visitorCounterRef = db.collection("counters").doc("visitors");

function loadVisitorCount() {
    // Tambah 1 setiap kali halaman ini dibuka
    visitorCounterRef.update({
        count: firebase.firestore.FieldValue.increment(1)
    }).catch(function (err) {
        console.error("Gagal menambah visitor count:", err);
    });

    // Dengarkan perubahan secara real-time (update instan tanpa refresh)
    visitorCounterRef.onSnapshot(function (doc) {
        if (doc.exists) {
            document.getElementById("visitorCount").textContent = doc.data().count + " kali dilihat";
        }
    }, function (err) {
        console.error("Gagal membaca visitor count:", err);
    });
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
    loadVisitorCount();
    document.getElementById("lastUpdated").textContent =
        (document.getElementById("lastUpdated").textContent || "Update terakhir") + " " +
        new Date().toLocaleDateString("id-ID");
});
