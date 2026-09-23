// ============================================
// DATA PROJECT GAS
// ============================================
const projects = [
    {
        id: 1,
        title: "Manajement Inventory V.1",
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
        description: "A web-based school information management system designed to centrally manage academic data, covering student, teacher, and class administration through attendance tracking.",
        tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
        url: "https://simpul.afterhoursproject.my.id",
        screenshots: ["assets/simpul.png"],
        status: "Live",
        date: "2026-09-09",
        features: ["Student & Teacher Management", "Class & Subject Management", "Attendance Tracking", "Data Visualization"]
    },
    {
        id: 9,
        title: "POS Ngasir",
        description: "A web-based POS system for store operations and sales transactions, featuring separate access rights for the admin panel and cashier interface.",
        tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
        url: "https://ngasir.afterhoursproject.my.id",
        screenshots: ["assets/ngasir.png"],
        status: "Live",
        date: "2026-09-21",
        features: ["Multi-Role Authentication System (Admin & Cashier)", "Cashier Transaction Interface (Point of Sale)", "Admin Dashboard & Management", "Centralized Database Management"]
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
    },
    9: {
        description: "Sistem POS berbasis web untuk manajemen operasional toko dan transaksi penjualan, dengan hak akses terpisah antara panel admin dan antarmuka kasir.",
        features: ["Sistem Autentikasi Multi-Peran (Admin & Kasir)", "Antarmuka Transaksi Kasir (Point of Sale)", "Dasbor & Manajemen Admin", "Pengelolaan Basis Data Terpusat"]
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
        "meta.aboutDescription": "About MAEP — the journey from school administrative staff to indie hacker.",
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
        "contact.aria": "Contact me",
        "contact.title": "Get in touch",
        "contact.intro": "Have a question, need a web app built, or want to request a demo? Send me a message and I'll get back to you.",
        "contact.name": "Name",
        "contact.namePh": "Your name",
        "contact.email": "Email",
        "contact.emailPh": "you@example.com",
        "contact.message": "Message",
        "contact.messagePh": "Write your message here...",
        "contact.send": "Send Message",
        "contact.sending": "Sending...",
        "contact.success": "Thank you! Your message has been sent.",
        "contact.error": "Something went wrong. Please try again in a moment.",
        "contact.demoSubject": "Demo request: {title}",
        "contact.demoMessage": "Hi, I'd like to request a demo for \"{title}\".",
        "meta.techstackDescription": "Tech Stack & My Skills — building systems through logic, flow, and AI orchestration.",
        "tspage.hero.desc": "I'm not a traditional programmer — I'm a system builder. My vibe coding approach means focusing on problem-solving and designing logical flows. I make full use of artificial intelligence (AI) to translate my way of thinking into functional, ready-to-use digital systems. Focused on solutions, executed with technology.",
        "tspage.core.kicker": "Logic & Orchestration",
        "tspage.c1": "My core skill is designing system structure. Before anything is built, I map out how data should move, how users will interact, and which logic rules are needed so an operational system runs efficiently and hits its target.",
        "tspage.c2": "Translating complex system flows into highly specific, structured instructions (prompts) for AI. This takes a strong grasp of logic so the AI produces systems that are precise and have minimal bugs.",
        "tspage.c3": "Through AI orchestration, I build and manage a system ecosystem using PHP, MySQL, and Vanilla JavaScript. Although the code is AI-generated, I understand how the architecture works, manage the database, and make sure every component connects properly.",
        "tspage.applied.kicker": "Approach & Tools",
        "tspage.a1": "Designing flows for data verification and quick access. I instruct the AI to build a QR Code API and hash-based verification methods to guarantee data integrity and make recording or validation run automatically.",
        "tspage.a2": "Keeping AI-built projects to a high standard. I make sure the AI follows an MVC-like architecture so the structure stays tidy and easy to maintain. For features that need instant (real-time) updates, I design the integration flow with Firebase (Firestore).",
        "tspage.s1": "Identifying an operational problem or business need, then breaking it down into the simplest logical steps (computational thinking).",
        "tspage.s2": "Designing the database structure and interface, then writing comprehensive instructions (prompts) so the AI understands the system's context and goals in full.",
        "tspage.s3": "Collaborating with the AI on iteration and debugging. When a technical issue comes up, I trace the root cause from the logic side, then direct the AI to carry out the fix.",
        "tspage.s4": "Assembling the AI-generated pieces into one cohesive application (including applying a Single-Page Application experience), testing the flow, and launching it so it makes a real impact right away.",
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
        "card.viewDemo": "Visit →",
        "card.requestDemo": "Request Demo",
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
        "meta.aboutDescription": "Tentang MAEP — perjalanan dari staf administrasi sekolah menjadi indie hacker.",
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
        "contact.aria": "Hubungi saya",
        "contact.title": "Hubungi Saya",
        "contact.intro": "Punya pertanyaan, membuat web aplikasi, atau request demo? Kirim pesan dan saya akan membalasnya.",
        "contact.name": "Nama",
        "contact.namePh": "Nama kamu",
        "contact.email": "Email",
        "contact.emailPh": "kamu@contoh.com",
        "contact.message": "Pesan",
        "contact.messagePh": "Tulis pesanmu di sini...",
        "contact.send": "Kirim Pesan",
        "contact.sending": "Mengirim...",
        "contact.success": "Terima kasih! Pesanmu sudah terkirim.",
        "contact.error": "Terjadi kesalahan. Coba lagi sebentar lagi.",
        "contact.demoSubject": "Permintaan demo: {title}",
        "contact.demoMessage": "Halo, saya ingin request demo untuk \"{title}\".",
        "meta.techstackDescription": "Tech Stack & Skill saya — membangun sistem lewat logika, alur, dan orkestrasi AI.",
        "tspage.hero.desc": "Saya bukan programmer tradisional, saya adalah system builder. Pendekatan vibe coding saya berarti fokus pada pemecahan masalah dan perancangan alur (flow) yang logis. Saya memanfaatkan kecerdasan buatan (AI) secara penuh untuk menerjemahkan kerangka berpikir saya menjadi sistem digital yang fungsional dan siap pakai. Fokus pada solusi, dieksekusi dengan teknologi.",
        "tspage.core.kicker": "Keahlian Logika & Orkestrasi",
        "tspage.c1": "Keahlian utama saya adalah merancang struktur sistem. Sebelum eksekusi dilakukan, saya memetakan bagaimana data harus bergerak, interaksi pengguna, dan aturan logika apa yang dibutuhkan agar sebuah sistem operasional berjalan dengan efisien dan tepat sasaran.",
        "tspage.c2": "Menerjemahkan alur sistem yang kompleks menjadi instruksi (prompt) yang sangat spesifik dan terstruktur untuk AI. Ini membutuhkan pemahaman logika yang kuat agar AI menghasilkan sistem yang presisi dan minim bug.",
        "tspage.c3": "Melalui orkestrasi AI, saya membangun dan mengelola ekosistem sistem menggunakan PHP, MySQL, dan Vanilla JavaScript. Meskipun kode di-generate oleh AI, saya memahami cara kerja arsitekturnya, mengelola database, dan memastikan setiap komponen terhubung dengan sempurna.",
        "tspage.applied.kicker": "Pendekatan & Alat",
        "tspage.a1": "Merancang alur verifikasi data dan akses cepat. Saya menginstruksikan AI untuk membangun API QR Code dan metode verifikasi Hash-based guna memastikan integritas data terjamin dan proses pencatatan atau validasi berjalan otomatis.",
        "tspage.a2": "Menjaga agar proyek hasil AI memiliki standar yang tinggi. Saya memastikan AI mematuhi arsitektur mirip MVC agar struktur tetap rapi dan mudah di-maintain. Untuk fitur yang membutuhkan pembaruan seketika (real-time), saya merancang alur integrasi dengan Firebase (Firestore).",
        "tspage.s1": "Mengidentifikasi masalah operasional atau kebutuhan bisnis, lalu memecahnya menjadi langkah-langkah logika yang paling sederhana (computational thinking).",
        "tspage.s2": "Merancang struktur database dan antarmuka, lalu menyusun instruksi (prompt) yang komprehensif agar AI memahami konteks dan tujuan sistem secara utuh.",
        "tspage.s3": "Berkolaborasi dengan AI untuk iterasi dan debugging. Jika ada kendala teknis, saya melacak akar masalahnya dari sisi logika, lalu mengarahkan AI untuk mengeksekusi perbaikannya.",
        "tspage.s4": "Merakit potongan-potongan hasil AI menjadi satu kesatuan aplikasi (termasuk penerapan pengalaman Single-Page Application), melakukan uji coba alur, dan meluncurkannya agar segera memberikan dampak nyata.",
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
        "card.viewDemo": "Kunjungi →",
        "card.requestDemo": "Request Demo",
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
    if (document.getElementById("searchInput")) {
        applyFilters();
    } else if (document.getElementById("projectContainer")) {
        renderPreviewProjects();
    }
}

// ============================================
// STATE
// ============================================
let state = {
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
// FILTERS (full projects page)
// ============================================
function applyFilters() {
    if (!document.getElementById("projectContainer")) return;

    var filtered = projects.slice();

    if (state.searchQuery) {
        var q = state.searchQuery;
        filtered = filtered.filter(function (p) {
            var haystack = (p.title + " " + pDesc(p) + " " + p.status + " " + p.tech.join(" ")).toLowerCase();
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
    html += '<div class="card-top">' + getStatusBadge(p.status) + "</div>";
    html += "<h3>" + p.title + "</h3>";
    html += "<p>" + pDesc(p) + "</p>";
    html += '<div class="tech-tags">';
    for (var j = 0; j < p.tech.length; j++) html += "<span>" + p.tech[j] + "</span>";
    html += "</div>";
    html += '<div class="card-actions">';
    html += '<a href="' + p.url + '" target="_blank" rel="noopener" class="btn btn-card btn-card-demo">' + t("card.viewDemo") + '</a>';
    html += '<button class="btn btn-card btn-card-request" onclick="requestDemo(' + p.id + ')">' + t("card.requestDemo") + '</button>';
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
    state.searchQuery = "";
    state.sortBy = "newest";
    var searchInput = document.getElementById("searchInput");
    var sortSelect = document.getElementById("sortSelect");
    if (searchInput) searchInput.value = "";
    if (sortSelect) sortSelect.value = "newest";
    applyFilters();
}

// ============================================
// MODAL
// ============================================
function showDetail(id) {
    var p = getProject(id);
    if (!p) return;

    var html = '<div class="modal-body">';
    html += '<div class="card-top">' + getStatusBadge(p.status) + "</div>";
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

// Opens the contact modal pre-filled as a demo request for a specific project.
function requestDemo(id) {
    var p = getProject(id);
    if (!p) return;
    openContact(p.title);
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

// Counts at most once per browser per calendar day (visitor's local date),
// no matter how many pages they open. The date is stored in localStorage.
var VISITOR_KEY = "visitorCountedDate";

function todayKey() {
    var d = new Date();
    var m = d.getMonth() + 1, day = d.getDate();
    return d.getFullYear() + "-" + (m < 10 ? "0" : "") + m + "-" + (day < 10 ? "0" : "") + day;
}

function shouldCountVisit() {
    try {
        if (localStorage.getItem(VISITOR_KEY) === todayKey()) return false;
        // Mark BEFORE incrementing so pages/tabs opened at the same time don't double count.
        localStorage.setItem(VISITOR_KEY, todayKey());
    } catch (e) {
        // Storage blocked (e.g. strict private mode): can't remember the visit, so count it.
    }
    return true;
}

function loadVisitorCount() {
    if (!firebaseReady || !visitorCounterRef) return;

    if (shouldCountVisit()) {
        visitorCounterRef.set({
            count: firebase.firestore.FieldValue.increment(1)
        }, { merge: true }).catch(function (err) {
            console.error("Failed to increment visitor count:", err);
            // Increment failed: forget today's mark so the next page load can try again.
            try { localStorage.removeItem(VISITOR_KEY); } catch (e) {}
        });
    }

    // Always listen for real-time changes so the number shows on every page
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
// FOOTER SOCIAL LINKS + CONTACT FORM (Formspree)
// ============================================
// >>> EDIT HERE: form endpoint & social media URLs <<<
var CONTACT_ENDPOINT = "https://formspree.io/f/meaoegjr";
var SOCIAL_LINKS = {
    instagram: "https://www.instagram.com/maeppeam",
    github: "https://github.com/maeppeam",
    tiktok: "https://www.tiktok.com/@maeppeam"
};
// Links that still contain "USERNAME_KAMU" are hidden until you fill them in.

var ICONS = {
    mail: '<svg class="icon-stroke" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="m3 7 9 6 9-6"></path></svg>',
    instagram: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"/></svg>',
    github: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',
    tiktok: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>'
};

var lastContactTrigger = null;

function renderFooterSocial() {
    var box = document.getElementById("footerSocial");
    if (!box) return;
    var html = '<button type="button" id="contactOpen" data-i18n-aria="contact.aria" aria-label="Contact me">' + ICONS.mail + "</button>";
    var labels = { instagram: "Instagram", github: "GitHub", tiktok: "TikTok" };
    Object.keys(labels).forEach(function (key) {
        var url = SOCIAL_LINKS[key];
        if (!url || url.indexOf("USERNAME_KAMU") !== -1) return;
        html += '<a href="' + url + '" target="_blank" rel="noopener noreferrer" aria-label="' + labels[key] + '" title="' + labels[key] + '">' + ICONS[key] + "</a>";
    });
    box.innerHTML = html;
    document.getElementById("contactOpen").addEventListener("click", function () { openContact(); });
}

function buildContactModal() {
    if (document.getElementById("contactModal")) return;
    var wrap = document.createElement("div");
    wrap.id = "contactModal";
    wrap.className = "modal";
    wrap.setAttribute("role", "dialog");
    wrap.setAttribute("aria-modal", "true");
    wrap.setAttribute("aria-labelledby", "contactTitle");
    wrap.innerHTML =
        '<div class="modal-content">' +
        '<button type="button" class="modal-close" data-i18n-aria="modal.close" aria-label="Close">&times;</button>' +
        '<div class="modal-body">' +
        '<h2 id="contactTitle" data-i18n="contact.title">Get in touch</h2>' +
        '<p class="contact-intro" data-i18n="contact.intro">Have a question, an idea, or a project in mind? Send me a message and I\'ll get back to you.</p>' +
        '<form id="contactForm" class="contact-form">' +
        '<label><span data-i18n="contact.name">Name</span>' +
        '<input type="text" name="name" required maxlength="100" autocomplete="name" data-i18n-placeholder="contact.namePh" placeholder="Your name"></label>' +
        '<label><span data-i18n="contact.email">Email</span>' +
        '<input type="email" name="email" required maxlength="150" autocomplete="email" data-i18n-placeholder="contact.emailPh" placeholder="you@example.com"></label>' +
        '<label><span data-i18n="contact.message">Message</span>' +
        '<textarea name="message" rows="5" required maxlength="3000" data-i18n-placeholder="contact.messagePh" placeholder="Write your message here..."></textarea></label>' +
        '<input type="hidden" name="_subject" value="New message from MAEP portfolio">' +
        '<input type="text" name="_gotcha" class="contact-hp" tabindex="-1" autocomplete="off" aria-hidden="true">' +
        '<div class="contact-status" id="contactStatus" role="status" aria-live="polite"></div>' +
        '<button type="submit" class="btn btn-primary" id="contactSend" data-i18n="contact.send">Send Message</button>' +
        "</form></div></div>";
    document.body.appendChild(wrap);

    wrap.addEventListener("click", function (e) { if (e.target === wrap) closeContact(); });
    wrap.querySelector(".modal-close").addEventListener("click", closeContact);
    document.getElementById("contactForm").addEventListener("submit", submitContact);
}

function openContact(projectTitle) {
    var modal = document.getElementById("contactModal");
    if (!modal) return;
    lastContactTrigger = document.activeElement;
    modal.classList.add("open");
    document.body.style.overflow = "hidden";

    var subjectInput = modal.querySelector('input[name="_subject"]');
    var messageInput = modal.querySelector('textarea[name="message"]');
    if (projectTitle) {
        if (subjectInput) subjectInput.value = t("contact.demoSubject").replace("{title}", projectTitle);
        if (messageInput) messageInput.value = t("contact.demoMessage").replace("{title}", projectTitle);
    } else {
        if (subjectInput) subjectInput.value = "New message from MAEP portfolio";
        if (messageInput) messageInput.value = "";
    }

    var first = modal.querySelector("input[name=name]");
    if (first) setTimeout(function () { first.focus(); }, 50);
}

function closeContact() {
    var modal = document.getElementById("contactModal");
    if (!modal) return;
    modal.classList.remove("open");
    document.body.style.overflow = "";
    if (lastContactTrigger && lastContactTrigger.focus) lastContactTrigger.focus();
}

function setContactStatus(kind, text) {
    var el = document.getElementById("contactStatus");
    if (!el) return;
    el.className = "contact-status" + (kind ? " is-" + kind : "");
    el.textContent = text || "";
}

function submitContact(e) {
    e.preventDefault();
    var form = e.target;
    var btn = document.getElementById("contactSend");
    if (!form.checkValidity()) { form.reportValidity(); return; }

    btn.disabled = true;
    btn.textContent = t("contact.sending");
    setContactStatus("", "");

    fetch(CONTACT_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
    }).then(function (res) {
        if (!res.ok) throw new Error("HTTP " + res.status);
        form.reset();
        setContactStatus("success", t("contact.success"));
    }).catch(function () {
        setContactStatus("error", t("contact.error"));
    }).then(function () {
        btn.disabled = false;
        btn.textContent = t("contact.send");
    });
}

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener("DOMContentLoaded", function () {
    renderFooterSocial();
    buildContactModal();
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
        if (e.key === "Escape") { closeModal(); closeContact(); }
    });

    var yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    loadVisitorCount();
});
