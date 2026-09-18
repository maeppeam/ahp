// ============================================
// DATA PROJECT GAS
// ============================================
const projects = [
    {
        id: 1,
        title: "Manajement Inventory V.1",
        catKey: "internal",
        description: "Asset Management System V.1 is a web-based application for managing assets/inventory efficiently. This early version provides a basic interface for tracking and managing asset data.",
        tech: ["HTML", "CSS", "JavaScript"],
        url: "https://maeppeam.github.io/inventory-system-v1/",
        screenshots: ["assets/manajement-inventory-v1.jpg"],
        status: "Live",
        date: "2026-04-24",
        features: ["Logging", "Monitoring", "Real Time"]
    },
    {
        id: 2,
        title: "Ticketing System",
        catKey: "webutils",
        description: "Ticketing System is a web-based application for managing customer service tickets efficiently. It's designed to log, track, and follow up on requests or reports through a structured interface.",
        tech: ["HTML", "CSS", "JavaScript"],
        url: "https://maeppeam.github.io/ticketing-system/",
        screenshots: ["assets/ticketing-system.jpg"],
        status: "Live",
        date: "2026-07-13",
        features: ["Logging", "Status Tracking", "Ticket Request Handling", "Real Time"]
    },
    {
        id: 3,
        title: "Manajement Inventory V.2",
        catKey: "internal",
        description: "This version is a refinement of V.1 with improved features and performance.",
        tech: ["HTML", "CSS", "JavaScript", "API QR Code"],
        url: "https://maeppeam.github.io/inventory-system-v2/",
        screenshots: ["assets/manajement-inventory-v2.jpg"],
        status: "Live",
        date: "2026-07-15",
        features: ["Real-Time Summary Dashboard", "Full asset list with status management", "Borrow/return circulation log", "QR Code generation for every asset"]
    },
    {
        id: 4,
        title: "SABAR - Sistem Arus Barang Masuk & Keluar",
        catKey: "internal",
        description: "This system is designed to manage the full goods cycle — from master data and inbound/outbound transactions to stock opname — complete with approval features and low-stock notifications.",
        tech: ["HTML", "CSS", "JavaScript", "API QR Code", "MVC Like Architecture"],
        url: "https://sabar.afterhoursproject.my.id/",
        screenshots: ["assets/sabar.png"],
        status: "Live",
        date: "2026-07-30",
        features: ["Dashboard", "Master Data", "Goods In", "Goods Out", "Stock Opname", "Approval System", "Notifications"]
    },
    {
        id: 5,
        title: "SAHIN - Secure, Authentic, Hands-In",
        catKey: "webutils",
        description: "A web-based application for managing document/request workflows with an Electronic Signature (TTE) feature.",
        tech: ["HTML", "CSS", "JavaScript", "API QR Code", "Hash Code", "QR Code"],
        url: "https://maeppeam.github.io/sah-in/",
        screenshots: ["assets/sahin.png"],
        status: "Live",
        date: "2026-08-05",
        features: ["Document Workflow", "QR Code Verification", "Real-Time Dashboard", "Document Detail", "User Management"]
    },
    {
        id: 6,
        title: "GROO",
        catKey: "internal",
        description: "This system provides a complete dashboard with a summary of staff data (Teachers, Support Staff, GTT, GTY) along with data-completeness info such as Dapodik, NUPTK, and PPG, plus a staff directory with search.",
        tech: ["HTML", "CSS", "JavaScript", "API QR Code", "Hash Code", "Single-Page Application"],
        url: "https://maeppeam.github.io/groo/",
        screenshots: ["assets/groo.png"],
        status: "Live",
        date: "2026-08-13",
        features: ["Complete Dashboard", "Staff Categories", "Data Completeness", "Staff Directory", "Data Management"]
    },
    {
        id: 7,
        title: "HIGAT",
        catKey: "webutils",
        description: "A flexible, centralized platform for printing multi-merchant proforma invoices and invoices with professional template designs in seconds.",
        tech: ["HTML", "CSS", "JavaScript", "HTML Templating"],
        url: "https://maeppeam.github.io/higat/",
        screenshots: ["assets/higat.png"],
        status: "Live",
        date: "2026-09-02",
        features: ["Role Management", "Multi Merchant", "Proforma Invoice Generator", "Invoice Generator"]
    },
    {
        id: 8,
        title: "SIMPUL - School Information & Management Platform for Unified Learning",
        catKey: "internal",
        description: "A web-based school information management system designed to centrally manage academic data, covering student, teacher, and class administration through attendance tracking.",
        tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
        url: "https://simpul.afterhoursproject.my.id",
        screenshots: ["assets/simpul.png"],
        status: "Live",
        date: "2026-09-09",
        features: ["Student & Teacher Management", "Class & Subject Management", "Attendance Tracking", "Data Visualization"]
    }
];

// Indonesian content for each project (description + features).
// Titles, tech names, and URLs stay the same across languages.
const projectsID = {
    1: {
        description: "Sistem Manajemen Aset V.1 adalah aplikasi berbasis web untuk mengelola aset/inventaris secara efisien. Versi awal ini menyediakan antarmuka dasar untuk melacak dan mengelola data aset.",
        features: ["Pencatatan Log", "Pemantauan", "Real Time"]
    },
    2: {
        description: "Ticketing System adalah aplikasi berbasis web untuk mengelola tiket layanan pelanggan secara efisien. Dirancang untuk mencatat, melacak, dan menindaklanjuti permintaan atau laporan melalui antarmuka yang terstruktur.",
        features: ["Pencatatan Log", "Pelacakan Status", "Penanganan Permintaan Tiket", "Real Time"]
    },
    3: {
        description: "Versi ini merupakan penyempurnaan dari V.1 dengan fitur dan performa yang lebih baik.",
        features: ["Dashboard Ringkasan Real-Time", "Daftar aset lengkap dengan manajemen status", "Log peminjaman/pengembalian barang", "Pembuatan QR Code untuk setiap aset"]
    },
    4: {
        description: "Sistem ini dirancang untuk mengelola seluruh siklus barang — mulai dari data master dan transaksi barang masuk/keluar hingga stok opname — lengkap dengan fitur persetujuan dan notifikasi stok menipis.",
        features: ["Dashboard", "Data Master", "Barang Masuk", "Barang Keluar", "Stok Opname", "Sistem Persetujuan", "Notifikasi"]
    },
    5: {
        description: "Aplikasi berbasis web untuk mengelola alur kerja dokumen/permohonan dengan fitur Tanda Tangan Elektronik (TTE).",
        features: ["Alur Kerja Dokumen", "Verifikasi QR Code", "Dashboard Real-Time", "Detail Dokumen", "Manajemen Pengguna"]
    },
    6: {
        description: "Sistem ini menyediakan dashboard lengkap berisi ringkasan data pegawai (Guru, Tenaga Kependidikan, GTT, GTY) beserta informasi kelengkapan data seperti Dapodik, NUPTK, dan PPG, dilengkapi direktori pegawai dengan fitur pencarian.",
        features: ["Dashboard Lengkap", "Kategori Pegawai", "Kelengkapan Data", "Direktori Pegawai", "Manajemen Data"]
    },
    7: {
        description: "Platform terpusat dan fleksibel untuk mencetak proforma invoice dan invoice multi-merchant dengan desain template profesional hanya dalam hitungan detik.",
        features: ["Manajemen Peran", "Multi Merchant", "Pembuat Proforma Invoice", "Pembuat Invoice"]
    },
    8: {
        description: "Sistem informasi manajemen sekolah berbasis web yang dirancang untuk mengelola data akademik secara terpusat, mencakup administrasi siswa, guru, dan kelas melalui pencatatan kehadiran.",
        features: ["Manajemen Siswa & Guru", "Manajemen Kelas & Mata Pelajaran", "Pencatatan Kehadiran", "Visualisasi Data"]
    }
};

// Returns the description in the current language.
function pDesc(p) {
    if (currentLang === "id" && projectsID[p.id]) return projectsID[p.id].description;
    return p.description;
}
// Returns the feature list in the current language.
function pFeatures(p) {
    if (currentLang === "id" && projectsID[p.id]) return projectsID[p.id].features;
    return p.features;
}

// ============================================
// I18N
// ============================================
const translations = {
    en: {
        "meta.description": "MAEP's portfolio — building web apps from real problems, the result of vibe coding.",
        "meta.aboutDescription": "About MAEP — not just coding, but solving problems.",
        "meta.journeyDescription": "The Journey So Far — MAEP's career path from school administrative staff to indie hacker.",
        "meta.projectsDescription": "All projects built by MAEP — 8 web apps born from real, everyday problems.",
        "journey.kicker": "Journey",
        "journey.titleMain": "The Journey",
        "journey.titleGradient": "So Far",
        "journey.intro": "From handling everyday school administration and Dapodik data, to building my own internal application ecosystem.",
        "journey.education": "Education",
        "journey.j1.year": "2026 — Present",
        "journey.j1.title": "Indie Hacker & Product Builder",
        "journey.j1.tag": "Side Job",
        "journey.j1.role": "Leveraging firsthand experience as a School Admin, Education Data Administrator, & ICT Coordinator to build impactful EdTech solutions.",
        "journey.j1.b1": "Spearheaded the digital transformation of school administrative workflows by developing bespoke software solutions.",
        "journey.j1.b2": "Architected, developed, and shipped 8+ internal productivity tools (including SIMPUL, GROO, and SAH-IN) from concept to deployment using rapid prototyping.",
        "journey.j1.b3": "Bridged the gap between administration and IT by engineering a cohesive web app ecosystem, significantly accelerating institutional performance and efficiency.",
        "journey.j2.year": "2023 — Present",
        "journey.j2.title": "ICT Coordinator",
        "journey.j2.role": "Alongside: School Admin (TAS) & Dapodik Operator (OPS)",
        "journey.j2.b1": "Took on additional responsibility to lead and manage the school's technology infrastructure.",
        "journey.j2.b2": "Started analyzing efficiency gaps and mapping integrated digital system needs from both a technical and administrative perspective.",
        "journey.j3.year": "2019 — Present",
        "journey.j3.title": "School Administrative Staff & Education Data Administrator",
        "journey.j3.b1": "Fully responsible for smooth school administration and management of Indonesia's national education data system (Dapodik).",
        "journey.j3.b2": "Dealt directly with the root causes of everyday bureaucracy and manual data management — now the foundation (problem-first mindset) of every application I build.",
        "journey.j4.role": "State University of Malang — Educational Administration",
        "nav.home": "Home",
        "nav.techstack": "Tech Stack",
        "nav.projects": "Projects",
        "nav.journey": "Journey",
        "nav.about": "About",
        "theme.aria": "Toggle light/dark mode",
        "lang.aria": "Switch language",
        "lang.label": "ID",
        "hero.badge": " live projects",
        "hero.title": "Hi, I'm",
        "hero.subtitle": "Simplifying complex processes into clean, modern, and functional digital work.",
        "hero.viewProjects": "View Projects",
        "hero.journey": "The Journey So Far",
        "techstack.introHtml": "All the projects here are built with a <em>vibe coding</em> approach — turning everyday school administration needs into <strong>functional, ready-to-use digital systems</strong>.",
        "techstack.cat1": "Language & Frontend",
        "techstack.cat2": "Backend & Data",
        "techstack.cat3": "Tools & Approach",
        "techstack.mvc": "MVC-like Architecture",
        "projects.title": "Recent Projects",
        "projects.titleAll": "All Projects",
        "projects.introAll": "Every application here — 8 in total — was built to solve a real, everyday problem.",
        "projects.viewAll": "View All Projects →",
        "projects.search": "Search projects...",
        "projects.sortNewest": "Newest",
        "projects.sortOldest": "Oldest",
        "projects.all": "All",
        "projects.empty": "😕 No matching projects.",
        "projects.reset": "Reset Filter",
        "card.viewDemo": "View Demo →",
        "card.details": "Details",
        "card.photos": "photos",
        "status.live": "Live",
        "status.dev": "In Development",
        "category.internal": "Internal Tool",
        "category.webutils": "Web Utilities",
        "about.title": "Not just coding, but",
        "about.titleGradient": "solving problems",
        "about.body": "No project here is made without a reason. Every piece is born from a real problem that needed solving — starting from everyday needs, growing into a practical, modern, and easy-to-use digital system.",
        "about.total": "Total Projects",
        "about.live": "Live Projects",
        "modal.description": "Description",
        "modal.technology": "Technology",
        "modal.features": "Key Features",
        "modal.close": "Close",
        "footer.updated": "Last updated",
        "footer.views": "views"
    },
    id: {
        "meta.description": "Portofolio MAEP — pembuatan aplikasi web dari masalah nyata, hasil vibe coding.",
        "meta.aboutDescription": "Tentang MAEP — bukan sekadar coding, tapi memecahkan masalah.",
        "meta.journeyDescription": "The Journey So Far — perjalanan karier MAEP dari staf administrasi sekolah menjadi indie hacker.",
        "meta.projectsDescription": "Seluruh proyek yang sudah dibuat MAEP — 8 aplikasi web lahir dari masalah nyata sehari-hari.",
        "journey.kicker": "Perjalanan",
        "journey.titleMain": "Perjalanan",
        "journey.titleGradient": "Sejauh Ini",
        "journey.intro": "Dari mengurus administrasi sekolah dan data Dapodik sehari-hari, sampai membangun ekosistem aplikasi internal sendiri.",
        "journey.education": "Pendidikan",
        "journey.j1.year": "2026 — Sekarang",
        "journey.j1.title": "Indie Hacker & Product Builder",
        "journey.j1.tag": "Sampingan",
        "journey.j1.role": "Memanfaatkan pengalaman langsung sebagai Tenaga Administrasi Sekolah, Operator Dapodik, & Koordinator TIK untuk membangun solusi EdTech yang berdampak.",
        "journey.j1.b1": "Memelopori transformasi digital alur kerja administrasi sekolah melalui pengembangan solusi perangkat lunak khusus.",
        "journey.j1.b2": "Merancang, mengembangkan, dan merilis 8+ alat produktivitas internal (termasuk SIMPUL, GROO, dan SAH-IN) dari konsep hingga deployment dengan pendekatan rapid prototyping.",
        "journey.j1.b3": "Menjembatani administrasi dan TI dengan membangun ekosistem aplikasi web yang kohesif, mempercepat kinerja dan efisiensi institusi secara signifikan.",
        "journey.j2.year": "2023 — Sekarang",
        "journey.j2.title": "Koordinator TIK",
        "journey.j2.role": "Merangkap: Tenaga Administrasi Sekolah (TAS) & Operator Dapodik (OPS)",
        "journey.j2.b1": "Mengemban tanggung jawab tambahan untuk memimpin dan mengelola infrastruktur teknologi sekolah.",
        "journey.j2.b2": "Mulai menganalisis celah efisiensi dan memetakan kebutuhan sistem digital terintegrasi dari sisi teknis maupun administratif.",
        "journey.j3.year": "2019 — Sekarang",
        "journey.j3.title": "Tenaga Administrasi Sekolah & Administrator Data Pendidikan",
        "journey.j3.b1": "Bertanggung jawab penuh atas kelancaran administrasi sekolah dan pengelolaan data pokok pendidikan nasional (Dapodik).",
        "journey.j3.b2": "Berhadapan langsung dengan akar masalah birokrasi dan pengelolaan data manual sehari-hari — kini menjadi fondasi (problem-first mindset) dari setiap aplikasi yang saya bangun.",
        "journey.j4.role": "Universitas Negeri Malang — Administrasi Pendidikan",
        "nav.home": "Beranda",
        "nav.techstack": "Tech Stack",
        "nav.projects": "Proyek",
        "nav.journey": "Journey",
        "nav.about": "Tentang",
        "theme.aria": "Ganti mode terang/gelap",
        "lang.aria": "Ganti bahasa",
        "lang.label": "EN",
        "hero.badge": " proyek live",
        "hero.title": "Halo, aku",
        "hero.subtitle": "Menyederhanakan proses yang kompleks menjadi karya digital yang rapi, modern, dan fungsional.",
        "hero.viewProjects": "Lihat Proyek",
        "hero.journey": "Perjalanan Sejauh Ini",
        "techstack.introHtml": "Semua proyek di sini dibangun dengan pendekatan <em>vibe coding</em> — dari kebutuhan administrasi sekolah sehari-hari menjadi sistem digital yang <strong>fungsional dan siap pakai</strong>.",
        "techstack.cat1": "Bahasa & Frontend",
        "techstack.cat2": "Backend & Data",
        "techstack.cat3": "Tools & Pendekatan",
        "techstack.mvc": "Arsitektur MVC-like",
        "projects.title": "Proyek Terbaru",
        "projects.titleAll": "Semua Proyek",
        "projects.introAll": "Setiap aplikasi di sini — 8 total — dibangun untuk memecahkan masalah nyata sehari-hari.",
        "projects.viewAll": "Lihat Semua Proyek →",
        "projects.search": "Cari proyek...",
        "projects.sortNewest": "Terbaru",
        "projects.sortOldest": "Terlama",
        "projects.all": "Semua",
        "projects.empty": "😕 Tidak ada proyek yang cocok.",
        "projects.reset": "Reset Filter",
        "card.viewDemo": "Lihat Demo →",
        "card.details": "Detail",
        "card.photos": "foto",
        "status.live": "Live",
        "status.dev": "Dalam Pengembangan",
        "category.internal": "Alat Internal",
        "category.webutils": "Utilitas Web",
        "about.title": "Bukan sekadar coding, tapi",
        "about.titleGradient": "memecahkan masalah",
        "about.body": "Tidak ada proyek yang dibuat tanpa alasan. Setiap karya di sini lahir dari masalah nyata yang perlu dipecahkan — berawal dari kebutuhan sehari-hari, berkembang menjadi sistem digital yang praktis, modern, dan mudah digunakan.",
        "about.total": "Total Proyek",
        "about.live": "Status Live",
        "modal.description": "Deskripsi",
        "modal.technology": "Teknologi",
        "modal.features": "Fitur Utama",
        "modal.close": "Tutup",
        "footer.updated": "Terakhir diperbarui",
        "footer.views": "dilihat"
    }
};

let currentLang = localStorage.getItem("lang") === "id" ? "id" : "en";

function t(key) {
    return (translations[currentLang] && translations[currentLang][key]) || translations.en[key] || key;
}

function applyStaticTranslations() {
    document.documentElement.lang = currentLang;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
        el.textContent = t(el.getAttribute("data-i18n"));
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
        el.innerHTML = t(el.getAttribute("data-i18n-html"));
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
        el.setAttribute("placeholder", t(el.getAttribute("data-i18n-placeholder")));
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
        el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria")));
    });
    document.querySelectorAll("[data-i18n-content]").forEach(function (el) {
        el.setAttribute("content", t(el.getAttribute("data-i18n-content")));
    });

    var langBtn = document.getElementById("langToggle");
    if (langBtn) langBtn.textContent = t("lang.label");

    updateLastUpdated();
}

function setLanguage(lang) {
    currentLang = lang === "id" ? "id" : "en";
    localStorage.setItem("lang", currentLang);
    applyStaticTranslations();
    updateStats();
    refreshProjectsUI();
}

// Re-renders whichever project UI is present on the current page.
function refreshProjectsUI() {
    if (document.getElementById("chipBar")) {
        renderChips();
        applyFilters();
    } else if (document.getElementById("projectContainer")) {
        renderPreviewProjects();
    }
}

// ============================================
// STATE
// ============================================
let state = {
    currentCategory: "All",
    searchQuery: "",
    sortBy: "newest"
};

// ============================================
// UTILITIES
// ============================================
function formatDate(dateString) {
    var options = { year: "numeric", month: "short", day: "numeric" };
    var locale = currentLang === "id" ? "id-ID" : "en-US";
    return new Date(dateString).toLocaleDateString(locale, options);
}

function getStatusBadge(status) {
    return '<span class="status-live">● ' + (status === "Live" ? t("status.live") : t("status.dev")) + "</span>";
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
    var el = document.getElementById("chipBar");
    if (!el) return;

    var seen = {};
    var cats = ["All"];
    for (var ci = 0; ci < projects.length; ci++) {
        if (seen[projects[ci].catKey]) continue;
        seen[projects[ci].catKey] = true;
        cats.push(projects[ci].catKey);
    }
    var html = "";
    for (var i = 0; i < cats.length; i++) {
        var label = cats[i] === "All" ? t("projects.all") : t("category." + cats[i]);
        html += '<button class="chip' + (cats[i] === state.currentCategory ? " active" : "") + '" data-cat="' + cats[i] + '">' + label + "</button>";
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
// FILTERS (full projects page)
// ============================================
function applyFilters() {
    if (!document.getElementById("projectContainer")) return;

    var filtered = projects.slice();

    if (state.currentCategory !== "All") {
        filtered = filtered.filter(function (p) { return p.catKey === state.currentCategory; });
    }

    if (state.searchQuery) {
        var q = state.searchQuery;
        filtered = filtered.filter(function (p) {
            var haystack = (p.title + " " + pDesc(p) + " " + t("category." + p.catKey) + " " + p.status + " " + p.tech.join(" ")).toLowerCase();
            return haystack.indexOf(q) !== -1;
        });
    }

    if (state.sortBy === "title") filtered.sort(function (a, b) { return a.title.localeCompare(b.title); });
    else if (state.sortBy === "title-desc") filtered.sort(function (a, b) { return b.title.localeCompare(a.title); });
    else if (state.sortBy === "newest") filtered.sort(function (a, b) { return new Date(b.date) - new Date(a.date); });
    else if (state.sortBy === "oldest") filtered.sort(function (a, b) { return new Date(a.date) - new Date(b.date); });

    renderProjects(filtered);
}

// Builds the HTML markup for a single project card.
function buildCardHtml(p, i) {
    var img = (p.screenshots && p.screenshots.length > 0) ? p.screenshots[0] : "";
    var count = (p.screenshots || []).length;

    var html = '<article class="card" style="animation-delay:' + (i * 0.06) + 's">';
    html += '<div class="card-media">';
    if (img) {
        html += '<img src="' + img + '" alt="' + p.title + '" loading="lazy" onerror="this.style.display=\'none\'">';
    }
    if (count > 1) html += '<span class="card-count">' + count + " " + t("card.photos") + "</span>";
    html += "</div>";
    html += '<div class="card-body">';
    html += '<div class="card-top"><span class="category">' + t("category." + p.catKey) + "</span>" + getStatusBadge(p.status) + "</div>";
    html += "<h3>" + p.title + "</h3>";
    html += "<p>" + pDesc(p) + "</p>";
    html += '<div class="tech-tags">';
    for (var j = 0; j < p.tech.length; j++) html += "<span>" + p.tech[j] + "</span>";
    html += "</div>";
    html += '<div class="card-actions">';
    html += '<a href="' + p.url + '" target="_blank" rel="noopener" class="btn btn-card btn-card-demo">' + t("card.viewDemo") + '</a>';
    html += '<button class="btn btn-card btn-card-detail" onclick="showDetail(' + p.id + ')">' + t("card.details") + '</button>';
    html += "</div></div></article>";
    return html;
}

// Renders the full, unpaginated project grid (used on the dedicated Projects page).
function renderProjects(items) {
    var container = document.getElementById("projectContainer");
    if (!container) return;
    var empty = document.getElementById("emptyState");

    if (items.length === 0) {
        container.innerHTML = "";
        if (empty) empty.hidden = false;
        return;
    }
    if (empty) empty.hidden = true;

    var html = "";
    for (var i = 0; i < items.length; i++) html += buildCardHtml(items[i], i);
    container.innerHTML = html;
}

// Renders a small newest-first preview of projects (used on the home page).
function renderPreviewProjects(limit) {
    var container = document.getElementById("projectContainer");
    if (!container) return;
    var n = limit || 3;
    var items = projects.slice().sort(function (a, b) { return new Date(b.date) - new Date(a.date); }).slice(0, n);
    var html = "";
    for (var i = 0; i < items.length; i++) html += buildCardHtml(items[i], i);
    container.innerHTML = html;
}

function resetAllFilters() {
    state.currentCategory = "All";
    state.searchQuery = "";
    state.sortBy = "newest";
    var searchInput = document.getElementById("searchInput");
    var sortSelect = document.getElementById("sortSelect");
    if (searchInput) searchInput.value = "";
    if (sortSelect) sortSelect.value = "newest";
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
    html += '<div class="card-top"><span class="category">' + t("category." + p.catKey) + "</span>" + getStatusBadge(p.status) + "</div>";
    html += "<h2>" + p.title + "</h2>";
    html += '<div class="modal-meta">' + formatDate(p.date) + "</div>";

    html += '<div class="modal-section"><h4>' + t("modal.description") + '</h4><p>' + pDesc(p) + "</p></div>";

    html += '<div class="modal-section"><h4>' + t("modal.technology") + '</h4><div class="tech-tags">';
    for (var i = 0; i < p.tech.length; i++) html += "<span>" + p.tech[i] + "</span>";
    html += "</div></div>";

    var features = pFeatures(p);
    if (features && features.length) {
        html += '<div class="modal-section"><h4>' + t("modal.features") + '</h4><ul class="feature-list">';
        for (var j = 0; j < features.length; j++) html += "<li>" + features[j] + "</li>";
        html += "</ul></div>";
    }

    html += '<div class="modal-actions">';
    html += '<a href="' + p.url + '" target="_blank" rel="noopener" class="btn btn-primary" style="flex:1">' + t("card.viewDemo") + '</a>';
    html += '<button class="btn btn-ghost" onclick="closeModal()">' + t("modal.close") + '</button>';
    html += "</div></div>";

    var modalBody = document.getElementById("modalBody");
    var modal = document.getElementById("modal");
    if (!modalBody || !modal) return;
    modalBody.innerHTML = html;
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
}

function closeModal() {
    var modal = document.getElementById("modal");
    if (!modal) return;
    modal.classList.remove("open");
    document.body.style.overflow = "";
}

// ============================================
// DARK MODE
// ============================================
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    var isDark = document.body.classList.contains("dark-mode");
    var btn = document.getElementById("darkModeToggle");
    if (btn) btn.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("darkMode", isDark ? "true" : "false");
}

// ============================================
// STATS
// ============================================
function updateStats() {
    var live = projects.filter(function (p) { return p.status === "Live"; }).length;
    var totalEl = document.getElementById("totalProjects");
    var liveEl = document.getElementById("liveProjects");
    var heroEl = document.getElementById("heroCount");
    if (totalEl) totalEl.textContent = projects.length;
    if (liveEl) liveEl.textContent = live;
    if (heroEl) heroEl.textContent = live;
}

// ============================================
// FOOTER: LAST UPDATED
// ============================================
function updateLastUpdated() {
    var el = document.getElementById("lastUpdated");
    if (!el) return;
    var locale = currentLang === "id" ? "id-ID" : "en-US";
    el.textContent = t("footer.updated") + " " + new Date().toLocaleDateString(locale);
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
var firebaseReady = typeof firebase !== "undefined";
var visitorCounterRef = null;
if (firebaseReady) {
    firebase.initializeApp(firebaseConfig);
    var db = firebase.firestore();
    visitorCounterRef = db.collection("counters").doc("visitors");
}

function loadVisitorCount() {
    if (!firebaseReady || !visitorCounterRef) return;
    // Increment by 1 every time this page is opened
    visitorCounterRef.set({
        count: firebase.firestore.FieldValue.increment(1)
    }, { merge: true }).catch(function (err) {
        console.error("Failed to increment visitor count:", err);
    });

    // Listen for real-time changes (instant update without refresh)
    visitorCounterRef.onSnapshot(function (doc) {
        var el = document.getElementById("visitorCount");
        if (el && doc.exists) {
            el.textContent = doc.data().count + " " + t("footer.views");
        }
    }, function (err) {
        console.error("Failed to read visitor count:", err);
    });
}

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener("DOMContentLoaded", function () {
    applyStaticTranslations();
    updateStats();
    refreshProjectsUI();

    var searchInput = document.getElementById("searchInput");
    if (searchInput) {
        var debounceTimer;
        searchInput.addEventListener("input", function () {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(function () {
                state.searchQuery = searchInput.value.trim().toLowerCase();
                applyFilters();
            }, 300);
        });
    }

    var sortSelect = document.getElementById("sortSelect");
    if (sortSelect) {
        sortSelect.addEventListener("change", function (e) {
            state.sortBy = e.target.value;
            applyFilters();
        });
    }

    var darkBtn = document.getElementById("darkModeToggle");
    if (darkBtn) {
        darkBtn.addEventListener("click", toggleDarkMode);
        if (localStorage.getItem("darkMode") === "true") {
            document.body.classList.add("dark-mode");
            darkBtn.textContent = "☀️";
        }
    }

    var langBtn = document.getElementById("langToggle");
    if (langBtn) {
        langBtn.addEventListener("click", function () {
            setLanguage(currentLang === "en" ? "id" : "en");
        });
    }

    var modalClose = document.querySelector(".modal-close");
    if (modalClose) modalClose.addEventListener("click", closeModal);
    var modalEl = document.getElementById("modal");
    if (modalEl) {
        modalEl.addEventListener("click", function (e) {
            if (e.target === this) closeModal();
        });
    }
    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") closeModal();
    });

    var yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    loadVisitorCount();
});
