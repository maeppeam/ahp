// ============================================
// DATA PROJECT GAS - LENGKAP
// ============================================
const projects = [
    {
        id: 1,
        title: "Aplikasi Manajemen Inventory",
        description: "Sistem tracking stok barang dengan notifikasi otomatis via email saat stok menipis. Terintegrasi dengan Google Sheets sebagai database real-time.",
        tech: ["Google Apps Script", "Google Sheets", "Email API", "Trigger"],
        url: "https://script.google.com/macros/s/ABCDEFG12345/exec",
        screenshot: "assets/inventory-app.jpg",
        category: "Tools",
        status: "Live",
        date: "2025-01-15",
        features: [
            "Tracking stok real-time",
            "Notifikasi email otomatis",
            "Laporan bulanan",
            "Multi-user access"
        ]
    },
    {
        id: 2,
        title: "Dashboard Penjualan Real-time",
        description: "Dashboard interaktif yang menampilkan grafik penjualan harian, mingguan, dan bulanan dari data Google Sheets dengan visualisasi yang memukau.",
        tech: ["Google Apps Script", "Chart.js", "Google Sheets API", "CSS3"],
        url: "https://script.google.com/macros/s/HIJKLMN67890/exec",
        screenshot: "assets/dashboard-app.jpg",
        category: "Dashboard",
        status: "Live",
        date: "2025-02-20",
        features: [
            "Grafik interaktif",
            "Filter tanggal",
            "Export PDF",
            "Mobile responsive"
        ]
    },
    {
        id: 3,
        title: "Form Pengaduan Customer",
        description: "Formulir pengaduan yang otomatis mengirim email ke tim support dan menyimpan data ke Google Sheets untuk tracking dan analisis.",
        tech: ["Google Apps Script", "Google Sheets", "Form Validation", "Bootstrap"],
        url: "https://script.google.com/macros/s/OPQRSTU11111/exec",
        screenshot: "assets/form-app.jpg",
        category: "Form",
        status: "Live",
        date: "2025-03-10",
        features: [
            "Validasi input",
            "Auto-reply email",
            "Dashboard admin",
            "Export ke Excel"
        ]
    },
    {
        id: 4,
        title: "Auto-Reply Email Bot",
        description: "Bot otomatis yang membalas email masuk berdasarkan keyword tertentu. Sangat berguna untuk customer service dan otomatisasi email.",
        tech: ["Google Apps Script", "Gmail API", "Google Sheets", "Regex"],
        url: "https://script.google.com/macros/s/XYZABC12345/exec",
        screenshot: "assets/email-bot.jpg",
        category: "Automation",
        status: "Live",
        date: "2025-04-05",
        features: [
            "Keyword detection",
            "Auto-reply template",
            "Logging ke sheets",
            "Analytics dashboard"
        ]
    },
    {
        id: 5,
        title: "Sistem Absensi Karyawan",
        description: "Aplikasi absensi berbasis QR Code. Karyawan scan QR dan data masuk ke Google Sheets secara real-time dengan validasi lokasi.",
        tech: ["Google Apps Script", "QR Code", "Google Sheets", "Geolocation API"],
        url: "https://script.google.com/macros/s/DEFGHI67890/exec",
        screenshot: "assets/absensi-app.jpg",
        category: "Tools",
        status: "Development",
        date: "2025-05-12",
        features: [
            "QR Code scanner",
            "Validasi lokasi",
            "Rekap absensi",
            "Notifikasi telat"
        ]
    },
    {
        id: 6,
        title: "REST API Generator dari Sheets",
        description: "Mengubah Google Sheets menjadi REST API endpoint. Bisa digunakan untuk mobile apps atau website lain.",
        tech: ["Google Apps Script", "REST API", "JSON", "Google Sheets"],
        url: "https://script.google.com/macros/s/API12345678/exec",
        screenshot: "assets/api-app.jpg",
        category: "API",
        status: "Live",
        date: "2025-06-01",
        features: [
            "RESTful endpoints",
            "Filter & sorting",
            "Authentication",
            "Rate limiting"
        ]
    },
    {
        id: 7,
        title: "Invoice Generator Otomatis",
        description: "Generate invoice otomatis dari data penjualan di Google Sheets, lengkap dengan nomor invoice unik dan email ke customer.",
        tech: ["Google Apps Script", "Google Docs", "PDF", "Email API"],
        url: "https://script.google.com/macros/s/INVOICE12345/exec",
        screenshot: "assets/invoice-app.jpg",
        category: "Automation",
        status: "Live",
        date: "2025-07-08",
        features: [
            "Generate PDF",
            "Nomor invoice unik",
            "Email otomatis",
            "Template kustom"
        ]
    },
    {
        id: 8,
        title: "Survey & Polling System",
        description: "Sistem survey online dengan hasil real-time. Bisa membuat pertanyaan multiple choice, skala, dan text. Hasil langsung di visualisasi.",
        tech: ["Google Apps Script", "Google Sheets", "Chart.js", "Form Builder"],
        url: "https://script.google.com/macros/s/SURVEY12345/exec",
        screenshot: "assets/survey-app.jpg",
        category: "Form",
        status: "Development",
        date: "2025-08-15",
        features: [
            "Builder pertanyaan",
            "Multiple question types",
            "Real-time results",
            "Export data"
        ]
    }
];

// ============================================
// STATE
// ============================================
let state = {
    currentCategory: 'Semua',
    searchQuery: '',
    sortBy: 'default',
    currentPage: 1,
    itemsPerPage: 6,
    isDarkMode: false,
    filteredProjects: [...projects]
};

// ============================================
// UTILITY FUNCTIONS
// ============================================
function getCategoryIcon(category) {
    const icons = {
        'Tools': '🔧',
        'Dashboard': '📊',
        'Form': '📝',
        'Automation': '⚡',
        'API': '🔌'
    };
    return icons[category] || '📦';
}

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('id-ID', options);
}

function getStatusBadge(status) {
    if (status === 'Live') {
        return '<span class="status status-live">🟢 Live</span>';
    }
    return '<span class="status status-dev">🔧 Development</span>';
}

// ============================================
// RENDER PROJECT CARDS
// ============================================
function renderProjects(projectList) {
    const container = document.getElementById('projectContainer');
    const defaultImage = 'https://via.placeholder.com/400x250/4285f4/ffffff?text=GAS+Project';
    
    if (projectList.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">🔍</div>
                <h2>Tidak ada project yang ditemukan</h2>
                <p>Coba cari dengan keyword lain atau reset filter</p>
                <button onclick="resetAllFilters()" class="btn-reset">🔄 Reset Filter</button>
            </div>
        `;
        updatePagination(0);
        return;
    }
    
    // Pagination
    const start = (state.currentPage - 1) * state.itemsPerPage;
    const end = start + state.itemsPerPage;
    const paginatedItems = projectList.slice(start, end);
    
    let html = '';
    paginatedItems.forEach((project, index) => {
        const delay = index * 0.08;
        html += `
            <div class="project-card" style="animation-delay: ${delay}s">
                <img src="${project.screenshot || defaultImage}" 
                     alt="${project.title}" 
                     onerror="this.src='${defaultImage}'"
                     loading="lazy">
                <div class="card-content">
                    <div class="card-header">
                        <span class="category">${getCategoryIcon(project.category)} ${project.category}</span>
                        ${getStatusBadge(project.status)}
                    </div>
                    <h2>${project.title}</h2>
                    <p>${project.description}</p>
                    <div class="tech-tags">
                        ${project.tech.map(t => `<span>${t}</span>`).join('')}
                    </div>
                    <div class="project-meta">
                        <span>📅 ${formatDate(project.date)}</span>
                        <span>#${project.id}</span>
                    </div>
                    <div class="card-actions">
                        <a href="${project.url}" target="_blank" class="btn-demo">
                            🚀 Lihat Demo
                        </a>
                        <button class="btn-detail" onclick="showDetail(${project.id})">
                            📖 Detail
                        </button>
                        <button class="btn-share" onclick="shareProject(${project.id})">
                            📤 Share
                        </button>
                    </div>
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
    updatePagination(projectList.length);
    updateProjectCount(projectList.length);
}

// ============================================
// PAGINATION
// ============================================
function updatePagination(totalItems) {
    const container = document.getElementById('pagination');
    const totalPages = Math.ceil(totalItems / state.itemsPerPage);
    
    if (totalPages <= 1) {
        container.innerHTML = '';
        return;
    }
    
    let html = '';
    // Prev button
    html += `<button class="page-btn" onclick="changePage(${state.currentPage - 1})" 
                    ${state.currentPage === 1 ? 'disabled' : ''}>◀</button>`;
    
    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
        html += `<button class="page-btn ${i === state.currentPage ? 'active' : ''}" 
                        onclick="changePage(${i})">${i}</button>`;
    }
    
    // Next button
    html += `<button class="page-btn" onclick="changePage(${state.currentPage + 1})" 
                    ${state.currentPage === totalPages ? 'disabled' : ''}>▶</button>`;
    
    container.innerHTML = html;
}

function changePage(page) {
    const totalPages = Math.ceil(state.filteredProjects.length / state.itemsPerPage);
    if (page < 1 || page > totalPages) return;
    state.currentPage = page;
    renderProjects(state.filteredProjects);
    
    // Scroll ke atas
    document.querySelector('main').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ============================================
// FILTER & SEARCH
// ============================================
function filterProjects(category) {
    state.currentCategory = category;
    state.currentPage = 1;
    
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.category === category);
    });
    
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
    let filtered = [...projects];
    
    // Filter kategori
    if (state.currentCategory !== 'Semua') {
        filtered = filtered.filter(p => p.category === state.currentCategory);
    }
    
    // Filter search
    if (state.searchQuery) {
        filtered = filtered.filter(p => 
            p.title.toLowerCase().includes(state.searchQuery) ||
            p.description.toLowerCase().includes(state.searchQuery) ||
            p.category.toLowerCase().includes(state.searchQuery) ||
            p.tech.some(t => t.toLowerCase().includes(state.searchQuery)) ||
            p.status.toLowerCase().includes(state.searchQuery)
        );
    }
    
    // Sorting
    switch(state.sortBy) {
        case 'title':
            filtered.sort((a, b) => a.title.localeCompare(b.title));
            break;
        case 'title-desc':
            filtered.sort((a, b) => b.title.localeCompare(a.title));
            break;
        case 'newest':
            filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
            break;
        case 'oldest':
            filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
            break;
        default:
            // Default sorting by ID
            filtered.sort((a, b) => a.id - b.id);
    }
    
    state.filteredProjects = filtered;
    renderProjects(filtered);
}

function resetAllFilters() {
    state.currentCategory = 'Semua';
    state.searchQuery = '';
    state.sortBy = 'default';
    state.currentPage = 1;
    
    document.getElementById('searchInput').value = '';
    document.getElementById('sortSelect').value = 'default';
    
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.category === 'Semua');
    });
    
    applyFilters();
}

// ============================================
// SHARE PROJECT
// ============================================
function shareProject(id) {
    const project = projects.find(p => p.id === id);
    if (!project) return;
    
    if (navigator.share) {
        navigator.share({
            title: project.title,
            text: `Cek project GAS keren: ${project.title}\n${project.description}`,
            url: project.url
        }).catch(() => {});
    } else {
        // Fallback: copy URL
        navigator.clipboard.writeText(project.url).then(() => {
            alert('✅ URL project telah disalin ke clipboard!');
        }).catch(() => {
            // Jika clipboard tidak support
            const text = `${project.title}\n${project.url}`;
            const textarea = document.createElement('textarea');
            textarea.value = text;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            alert('✅ Text project telah disalin!');
        });
    }
}

// ============================================
// SHOW DETAIL MODAL
// ============================================
function showDetail(id) {
    const project = projects.find(p => p.id === id);
    if (!project) return;
    
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modalBody');
    
    modalBody.innerHTML = `
        <div class="modal-header">
            <h2>${project.title}</h2>
            <span class="modal-status">${getStatusBadge(project.status)}</span>
        </div>
        <div class="modal-content-body">
            <div class="modal-section">
                <h3>📝 Deskripsi</h3>
                <p>${project.description}</p>
            </div>
            <div class="modal-section">
                <h3>🔧 Teknologi</h3>
                <div class="tech-tags">
                    ${project.tech.map(t => `<span>${t}</span>`).join('')}
                </div>
            </div>
            <div class="modal-section">
                <h3>✨ Fitur Unggulan</h3>
                <ul class="feature-list">
                    ${project.features.map(f => `<li>✅ ${f}</li>`).join('')}
                </ul>
            </div>
            <div class="modal-section">
                <h3>📊 Informasi</h3>
                <p><strong>Kategori:</strong> ${getCategoryIcon(project.category)} ${project.category}</p>
                <p><strong>Tanggal:</strong> ${formatDate(project.date)}</p>
                <p><strong>Status:</strong> ${project.status}</p>
                <p><strong>Project ID:</strong> #${project.id}</p>
            </div>
            <div class="modal-actions">
                <a href="${project.url}" target="_blank" class="btn-demo">🚀 Buka Demo</a>
                <button onclick="shareProject(${project.id})" class="btn-share-modal">📤 Share</button>
                <button onclick="closeModal()" class="btn-close-modal">✕ Tutup</button>
            </div>
        </div>
    `;
    
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// ============================================
// UPDATE COUNTER
// ============================================
function updateProjectCount(count) {
    const el = document.getElementById('projectCount');
    if (el) {
        const total = projects.length;
        el.textContent = `📦 ${count} dari ${total} project ditampilkan`;
    }
}

// ============================================
// DARK MODE
// ============================================
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const btn = document.getElementById('darkModeToggle');
    const isDark = document.body.classList.contains('dark-mode');
    btn.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('darkMode', isDark ? 'true' : 'false');
}

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Render awal
    applyFilters();
    
    // Event: Filter
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            filterProjects(btn.dataset.category);
        });
    });
    
    // Event: Search (debounce)
    const searchInput = document.getElementById('searchInput');
    let debounceTimer;
    searchInput.addEventListener('input', () => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            searchProjects(searchInput.value);
        }, 300);
    });
    
    // Event: Sort
    document.getElementById('sortSelect').addEventListener('change', (e) => {
        sortProjects(e.target.value);
    });
    
    // Event: Dark Mode
    const darkBtn = document.getElementById('darkModeToggle');
    darkBtn.addEventListener('click', toggleDarkMode);
    
    // Restore dark mode
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
        darkBtn.textContent = '☀️';
    }
    
    // Event: Modal close
    document.querySelector('.modal-close').addEventListener('click', closeModal);
    document.getElementById('modal').addEventListener('click', (e) => {
        if (e.target === document.getElementById('modal')) {
            closeModal();
        }
    });
    
    // Event: Keyboard Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });
    
    // Last updated
    document.getElementById('lastUpdated').textContent = new Date().toLocaleDateString('id-ID', {
        day: 'numeric', month: 'long', year: 'numeric'
    });
});
