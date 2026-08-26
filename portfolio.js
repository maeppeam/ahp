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
        screenshots: ["assets/sabar-1.jpg", "assets/sabar-2.jpg"],
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
        screenshots: ["assets/sahin-1.jpg", "assets/sahin-2.jpg"],
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
        screenshots: ["assets/groo-1.jpg", "assets/groo-2.jpg"],
        category: "Dashboard",
        status: "Live",
        date: "2026-08-13",
        features: ["Dashboard Lengkap", "Kategori Pegawai", "Kelengkapan Data", "Direktori Pegawai", "Manajemen Data"]
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
    var images = screenshots || [];
    if (images.length === 0) {
        return "<div class=\"slider-container\" id=\"slider-" + projectId + "\"><div class=\"slider-wrapper\"><div class=\"slide active\"><div class=\"no-image\">📷 Tidak ada screenshot</div></div></div></div>";
    }
    
    var sliderId = "slider-" + projectId;
    var html = "<div class=\"slider-container\" id=\"" + sliderId + "\">";
    html += "<div class=\"slider-wrapper\">";
    
    for (var i = 0; i < images.length; i++) {
        var active = i === 0 ? "active" : "";
        html += "<div class=\"slide " + active + "\">";
        html += "<img src=\"" + images[i] + "\" alt=\"Screenshot " + (i+1) + "\" onerror=\"this.style.display='none'\" loading=\"lazy\">";
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
// RENDER PROJECTS
// ============================================
function renderProjects(projectList) {
    var container = document.getElementById("projectContainer");
    
    if (projectList.length === 0) {
        container.innerHTML = "<div class=\"empty-state\"><div class=\"empty-icon\">🔍</div><h2>Tidak ada project yang ditemukan</h2><p>Coba cari dengan keyword lain atau reset filter</p><button
