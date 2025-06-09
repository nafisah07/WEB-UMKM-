import { useState, useMemo } from "react";

// Data produk (bisa diimpor dari file lain atau API)
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
    tags: ["beras", "pokok", "makanan"],
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
    tags: ["minyak", "goreng", "fortune"],
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
    tags: ["mie", "instan", "indomie"],
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
    tags: ["minuman", "segar"],
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
    tags: ["gula", "pasir", "pokok"],
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
    tags: ["tepung", "terigu", "kue"],
  },
  {
    id: 7,
    name: "Bumbu Dapur Lengkap",
    price: 45000,
    category: "bumbu-masakan",
    image:
      "https://images.unsplash.com/photo-1532336414038-cf19250c5757?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "Paket lengkap bumbu dapur untuk berbagai masakan.",
    rating: 4.7,
    reviews: 65,
    tags: ["bumbu", "dapur", "masak"],
  },
  {
    id: 8,
    name: "Merica Bubuk 100g",
    price: 12000,
    category: "bumbu-masakan",
    image:
      "https://images.unsplash.com/photo-1599901860904-1e82e2dbc6fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "Merica bubuk berkualitas untuk menambah cita rasa masakan.",
    rating: 4.4,
    reviews: 78,
    tags: ["bumbu", "merica", "bubuk"],
  },
];

// Fungsi pencarian produk
function searchProducts(query, category = "") {
  if (!query) return [];
  query = query.toLowerCase();
  return products.filter((product) => {
    if (category && product.category !== category) return false;
    if (product.name.toLowerCase().includes(query)) return true;
    if (
      product.description &&
      product.description.toLowerCase().includes(query)
    )
      return true;
    if (
      product.tags &&
      product.tags.some((tag) => tag.toLowerCase().includes(query))
    )
      return true;
    return false;
  });
}

// Fungsi sorting
function sortSearchResults(results, sortBy) {
  if (!sortBy || sortBy === "relevance") return results;
  const sortedResults = [...results];
  switch (sortBy) {
    case "price-low":
      sortedResults.sort((a, b) => a.price - b.price);
      break;
    case "price-high":
      sortedResults.sort((a, b) => b.price - a.price);
      break;
    case "name-asc":
      sortedResults.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "name-desc":
      sortedResults.sort((a, b) => b.name.localeCompare(a.name));
      break;
    default:
      break;
  }
  return sortedResults;
}

// Custom hook untuk pencarian produk
export function useSearch(initialQuery = "", initialCategory = "", initialSort = "relevance") {
  const [query, setQuery] = useState(initialQuery);
  const [category, setCategory] = useState(initialCategory);
  const [sort, setSort] = useState(initialSort);

  // Memoize hasil pencarian dan sort
  const results = useMemo(() => {
    const searched = searchProducts(query, category);
    return sortSearchResults(searched, sort);
  }, [query, category, sort]);

  return {
    query,
    setQuery,
    category,
    setCategory,
    sort,
    setSort,
    results,
  };
}