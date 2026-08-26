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
    const icons = { "Tools": "🔧", "Dashboard": "📊", "Form": "📝", "Automation": "⚡", "API": "🔌" };
    return icons[category] || "📦";
}
function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString("id-ID", { year: "numeric", month: "long", day: "numeric" });
}
function getStatusBadge(status) {
    return status === "Live" 
        ? '<span class="status status-live">🟢 Live</span>' 
        : '<span class="status status-dev">🔧 Development</span>';
}

// ============================================
// SLIDER
// ============================================
function renderSlider(screenshots, projectId) {
   
