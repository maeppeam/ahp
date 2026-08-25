// ============================================
// DATA PROJECT GAS - LENGKAP
// ============================================
const projects = [
    {
        id: 1,
        title: "Manajement Inventory V.1",
        description: "Aplikasi berbasis web ini dirancang untuk mempermudah pencatatan, pelacakan, dan pengawasan status inventaris serta aset secara real-time, efisien, dan terstruktur.",
        tech: ["Coming Soon"],
        url: "https://script.google.com/macros/s/AKfycbww6LjEAP-Slaz0NLO1OaVhrBh_vtwhg9W6XYKnz1IvXoyF1XM21mIv8JcVDcDabfI/exec",
        screenshot: "assets/inventory-app.jpg",
        category: "Coming Soon",
        status: "Live",
        date: "2026-04-24",
        features: [
            "Coming Soon"
        ]
    },
    {
        id: 2,
        title: "Ticketing System",
        description: "Antarmuka Pusat Bantuan & Laporan ini berfungsi sebagai portal pengaduan dan tiket layanan pelanggan yang dirancang untuk memudahkan wali murid serta siswa dalam menyampaikan kendala secara terstruktur",
        tech: ["Coming Soon"],
        url: "https://script.google.com/macros/s/AKfycbw_VFHI-k87QzbCPMV0To4a8Sqm_Rox6YVK8p1oGDHW6p17PY_VUgch0ZHSsODiYlo/exec",
        screenshot: "assets/dashboard-app.jpg",
        category: "Coming Soon",
        status: "Live",
        date: "2026-07-13",
        features: [
            "Coming Soon"
        ]
    },
    {
        id: 3,
        title: "Manajement Inventory V.2",
        description: "Antarmuka Dashboard Sarana dan Prasarana ini dirancang khusus untuk mengelola, memantau sirkulasi, serta mencatat kelayakan aset operasional sekolah secara real-time dan terpusat",
        tech: ["Coming Soon"],
        url: "https://script.google.com/macros/s/AKfycbxowBfgs9xvyMNTbN24KR6p2KzGssDUntHv4rGUOOO1VCMZCFZg7TbNMScuvrlZ6mEw/exec",
        screenshot: "assets/form-app.jpg",
        category: "Coming Soon",
        status: "Live",
        date: "2026-07-15",
        features: [
            "Coming Soon"
        ]
    },
    {
        id: 4,
        title: "SABAR - Sistem Arus Barang Masuk & Keluar",
        description: "Antarmuka sistem SABAR (Sistem Arus Barang Masuk dan Keluar) ini berfungsi sebagai dashboard manajemen logistik dan persediaan barang yang dirancang untuk memantau pergerakan stok secara terstruktur dan efisien.",
        tech: ["Coming Soon"],
        url: "https://script.google.com/macros/s/AKfycbxqBjuuCdrOUbjfeBxoWLqFzerNPlyZ_mEWHKatwI5STBjzIJ2Vb01MOUUoURWmK-c/exec",
        screenshot: "assets/email-bot.jpg",
        category: "Coming Soon",
        status: "Live",
        date: "2026-07-30",
        features: [
            "Coming Soon"
        ]
    },
    {
        id: 5,
        title: "SAHIN - Secure, Authentic, Hands-In",
        description: "Antarmuka web app Sah In dirancang sebagai sistem Tanda Tangan Elektronik (TTE) dan pemeliharaan dokumen digital yang memfasilitasi penandatanganan serta pembubuhan stempel resmi secara visual, instan, dan aman",
        tech: ["Coming Soon"],
        url: "https://script.google.com/macros/s/AKfycbxMciO7OR6mKZcgEKaEg_rgQOjqoJI3X12drJciYhEIkhlzGyhOiSCvjs5BOINhVlEz/exec",
        screenshot: "assets/absensi-app.jpg",
        category: "Coming Soon",
        status: "Live",
        date: "2026-08-05",
        features: [
            "Coming Soon"
        ]
    },
    {
        id: 6,
        title: "GROO",
        description: "Antarmuka Dashboard SDM (GROO - Grow Together, Work Better) ini dirancang khusus untuk mengelola data kepegawaian, memantau status kualifikasi pendidik, serta mengadministrasikan data Sumber Daya Manusia secara terstruktur dan terpusat",
        tech: ["Coming Soon"],
        url: "https://script.google.com/macros/s/AKfycbwwTlxg56WFLLE-_shY6s6iI3DQmKGRoUCwpzE1BaaYF_imsQ5WxenWUBxI-fVsz-dS/exec",
        screenshot: "assets/api-app.jpg",
        category: "Coming Soon",
        status: "Live",
        date: "2026-08-13",
        features: [
            "Coming Soon"
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
