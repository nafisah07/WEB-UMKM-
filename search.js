// Data produk (dalam implementasi nyata, ini bisa diambil dari database atau API)
const products = [
    {
        id: 1,
        name: "Beras Sania 1 kg",
        price: 15000,
        category: "bahan-makanan",
        image: "image/BAHAN MAKANAN/BERAS SANIA 15rb_1kg.jpg",
        description: "Beras berkualitas tinggi dengan butiran utuh dan bersih.",
        rating: 4.5,
        reviews: 120,
        tags: ["beras", "pokok", "makanan"]
    },
    {
        id: 2,
        name: "Fortune 1/2kg",
        price: 10000,
        originalPrice: 15000,
        category: "bahan-makanan",
        image: "image/BAHAN MAKANAN/FORTUNE 1_2kg 10rb.jpg",
        description: "Minyak goreng berkualitas untuk masakan sehari-hari.",
        rating: 4.0,
        reviews: 98,
        tags: ["minyak", "goreng", "fortune"]
    },
    {
        id: 3,
        name: "Indomie Goreng",
        price: 3500,
        category: "mie",
        image: "image/Mie/INDOMIE GORENG 3500.jpg",
        description: "Mi instan favorit dengan rasa yang lezat.",
        rating: 5.0,
        reviews: 145,
        tags: ["mie", "instan", "indomie"]
    },
    {
        id: 4,
        name: "Golda",
        price: 5000,
        category: "jajanan-minuman",
        image: "image/JAJANAN & MINUMAN/GOLDA.jpg",
        description: "Minuman segar untuk menemani hari-hari Anda.",
        rating: 3.5,
        reviews: 76,
        tags: ["minuman", "segar"]
    },
    {
        id: 5,
        name: "Gula PSM 1 kg",
        price: 18000,
        category: "bahan-makanan",
        image: "image/BAHAN MAKANAN/GULA PSM 1kg 18000.jpg",
        description: "Gula pasir berkualitas untuk kebutuhan memasak dan minuman.",
        rating: 4.2,
        reviews: 85,
        tags: ["gula", "pasir", "pokok"]
    },
    {
        id: 6,
        name: "Tepung Segitiga Biru",
        price: 10000,
        category: "bahan-makanan",
        image: "image/BAHAN MAKANAN/GANDUM SEGITIGA BIRU 10000.jpg",
        description: "Tepung terigu berkualitas untuk berbagai kebutuhan memasak.",
        rating: 4.3,
        reviews: 92,
        tags: ["tepung", "terigu", "kue"]
    },
    {
        id: 7,
        name: "Bumbu Dapur Lengkap",
        price: 45000,
        category: "bumbu-masakan",
        image: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Paket lengkap bumbu dapur untuk berbagai masakan.",
        rating: 4.7,
        reviews: 65,
        tags: ["bumbu", "dapur", "masak"]
    },
    {
        id: 8,
        name: "Merica Bubuk 100g",
        price: 12000,
        category: "bumbu-masakan",
        image: "https://images.unsplash.com/photo-1599901860904-1e82e2dbc6fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Merica bubuk berkualitas untuk menambah cita rasa masakan.",
        rating: 4.4,
        reviews: 78,
        tags: ["bumbu", "merica", "bubuk"]
    },
    // Tambahkan produk lainnya sesuai kebutuhan
];

// Fungsi untuk mendapatkan parameter dari URL
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Fungsi untuk mencari produk berdasarkan query
function searchProducts(query, category = '') {
    if (!query) return [];
    
    query = query.toLowerCase();
    
    return products.filter(product => {
        // Filter berdasarkan kategori jika dipilih
        if (category && product.category !== category) {
            return false;
        }
        
        // Cari di nama produk
        if (product.name.toLowerCase().includes(query)) {
            return true;
        }
        
        // Cari di deskripsi produk
        if (product.description && product.description.toLowerCase().includes(query)) {
            return true;
        }
        
        // Cari di tag produk
        if (product.tags && product.tags.some(tag => tag.toLowerCase().includes(query))) {
            return true;
        }
        
        return false;
    });
}

// Fungsi untuk mengurutkan hasil pencarian
function sortSearchResults(results, sortBy) {
    if (!sortBy || sortBy === 'relevance') {
        return results; // Tidak perlu diurutkan
    }
    
    const sortedResults = [...results];
    
    switch (sortBy) {
        case 'price-low':
            sortedResults.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            sortedResults.sort((a, b) => b.price - a.price);
            break;
        case 'name-asc':
            sortedResults.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'name-desc':
            sortedResults.sort((a, b) => b.name.localeCompare(a.name));
            break;
        default:
            break;
    }
    
    return sortedResults;
}

// Fungsi untuk menampilkan hasil pencarian
function displaySearchResults(results) {
    const resultsContainer = document.getElementById('search-results-container');
    const emptyResults = document.getElementById('empty-results');
    const resultsCount = document.getElementById('results-count');
    
    // Update jumlah hasil
    resultsCount.textContent = results.length;
    
    // Tampilkan pesan jika tidak ada hasil
    if (results.length === 0) {
        resultsContainer.style.display = 'none';
        emptyResults.style.display = 'block';
        return;
    }
    
    // Tampilkan hasil
    resultsContainer.style.display = 'grid';
    emptyResults.style.display = 'none';
    
    // Bersihkan container
    resultsContainer.innerHTML = '';
    
    // Tambahkan setiap produk ke container
    results.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        // Tentukan tag produk jika ada
        let tagHTML = '';
        if (product.originalPrice) {
            tagHTML = `<div class="product-tag promo">Promo</div>`;
        } else if (product.rating >= 4.5) {
            tagHTML = `<div class="product-tag bestseller">Terlaris</div>`;
        }
        
        // Format harga
        const formattedPrice = product.price.toLocaleString('id-ID');
        let priceHTML = `<span class="price">Rp ${formattedPrice}</span>`;
        
        if (product.originalPrice) {
            const formattedOriginalPrice = product.originalPrice.toLocaleString('id-ID');
            priceHTML = `
                <span class="original-price">Rp ${formattedOriginalPrice}</span>
                <span class="price">Rp ${formattedPrice}</span>
            `;
        }
        
        // Buat rating stars
        const fullStars = Math.floor(product.rating);
        const hasHalfStar = product.rating % 1 >= 0.5;
        let ratingStars = '';
        
        for (let i = 0; i < 5; i++) {
            if (i < fullStars) {
                ratingStars += '<i class="fas fa-star"></i>';
            } else if (i === fullStars && hasHalfStar) {
                ratingStars += '<i class="fas fa-star-half-alt"></i>';
            } else {
                ratingStars += '<i class="far fa-star"></i>';
            }
        }
        
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
                ${tagHTML}
            </div>
            <div class="product-content">
                <h3>${product.name}</h3>
                <div class="product-rating">
                    ${ratingStars}
                    <span>(${product.reviews})</span>
                </div>
                <div class="product-price">
                    ${priceHTML}
                </div>
                <div class="product-stock">
                    <i class="fas fa-check-circle"></i> Stok Tersedia
                </div>
                <button class="btn-add-cart" data-product-id="${product.id}">
                    <i class="fas fa-shopping-cart"></i> Tambah ke Keranjang
                </button>
            </div>
        `;
        
        resultsContainer.appendChild(productCard);
    });
    
    // Tambahkan event listener untuk tombol "Tambah ke Keranjang"
    const addToCartButtons = document.querySelectorAll('.btn-add-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.dataset.productId);
            const product = products.find(p => p.id === productId);
            
            if (product) {
                // Gunakan fungsi addToCart dari script.js jika tersedia
                if (window.addToCart && typeof window.addToCart === 'function') {
                    window.addToCart(product.name, `Rp ${product.price}`, product.image);
                } else {
                    alert(`${product.name} telah ditambahkan ke keranjang!`);
                }
            }
        });
    });
}

// Fungsi untuk menginisialisasi halaman hasil pencarian
function initSearchResults() {
    const query = getQueryParam('query');
    const searchQueryElement = document.getElementById('search-query');
    const categoryFilter = document.getElementById('category-filter');
    const sortFilter = document.getElementById('sort-filter');
    
    // Tampilkan query pencarian
    if (searchQueryElement) {
        searchQueryElement.textContent = query || '';
    }
    
    // Jika tidak ada query, tampilkan pesan kosong
    if (!query) {
        const resultsContainer = document.getElementById('search-results-container');
        const emptyResults = document.getElementById('empty-results');
        
        if (resultsContainer) resultsContainer.style.display = 'none';
        if (emptyResults) emptyResults.style.display = 'block';
        return;
    }
    
    // Cari produk
    let results = searchProducts(query);
    
    // Tampilkan hasil
    displaySearchResults(results);
    
    // Event listener untuk filter kategori
    if (categoryFilter) {
        categoryFilter.addEventListener('change', function() {
            const selectedCategory = this.value;
            results = searchProducts(query, selectedCategory);
            
            // Urutkan hasil jika ada filter urutan
            if (sortFilter) {
                results = sortSearchResults(results, sortFilter.value);
            }
            
            displaySearchResults(results);
        });
    }
    
    // Event listener untuk filter urutan
    if (sortFilter) {
        sortFilter.addEventListener('change', function() {
            const selectedSort = this.value;
            
            // Filter berdasarkan kategori jika dipilih
            if (categoryFilter) {
                results = searchProducts(query, categoryFilter.value);
            } else {
                results = searchProducts(query);
            }
            
            // Urutkan hasil
            results = sortSearchResults(results, selectedSort);
            displaySearchResults(results);
        });
    }
}

// Fungsi untuk menginisialisasi form pencarian di semua halaman
function initSearchForm() {
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    
    if (searchForm && searchInput) {
        // Isi input dengan query dari URL jika ada
        const query = getQueryParam('query');
        if (query) {
            searchInput.value = query;
        }
        
        // Event listener untuk form submit
        searchForm.addEventListener('submit', function(e) {
            const searchValue = searchInput.value.trim();
            
            // Validasi input
            if (!searchValue) {
                e.preventDefault();
                alert('Silakan masukkan kata kunci pencarian');
                return false;
            }
        });
    }
}

// Jalankan fungsi inisialisasi saat dokumen siap
document.addEventListener('DOMContentLoaded', function() {
    // Inisialisasi form pencarian di semua halaman
    initSearchForm();
    
    // Inisialisasi halaman hasil pencarian jika berada di halaman tersebut
    if (window.location.pathname.includes('search-results.html')) {
        initSearchResults();
    }
});