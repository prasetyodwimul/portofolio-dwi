import { FaAndroid, FaDatabase, FaGamepad, FaLaptopCode, FaUtensils } from "react-icons/fa";

export const projects = [
  {
    title: "Aplikasi Pemesanan Makanan",
    categories: ["Web", "Desktop App"],
    description: "Sistem pemilihan menu, pengaturan jumlah pesanan, dan perhitungan total harga dengan alur transaksi yang jelas.",
    tech: ["Visual Basic", "SQL", "UI Logic"],
    icon: FaUtensils,
    glow: "from-amber-300 to-amber-500"
  },
  {
    title: "Aplikasi Android Lomba Semaphore",
    categories: ["Mobile"],
    description: "Aplikasi keyboard semaphore berbasis gambar dengan integrasi Firebase untuk mendukung latihan dan perlombaan semaphore.",
    tech: ["Android Studio", "Java", "Firebase"],
    icon: FaAndroid,
    glow: "from-emerald-300 to-amber-200"
  },
  {
    title: "Sistem Lelang Django + MongoDB",
    categories: ["Backend", "Web"],
    description: "Sistem lelang digital dengan pengelolaan data produk, autentikasi dasar, dan fitur unggah gambar.",
    tech: ["Django", "MongoDB", "Python"],
    icon: FaDatabase,
    glow: "from-amber-200 to-stone-400"
  },
  {
    title: "KurShop Food & Drink App",
    categories: ["Mobile", "Backend"],
    description: "Aplikasi e-commerce makanan dan minuman dengan fitur login, kategori produk, keranjang, transaksi, dan pengelolaan data backend.",
    tech: ["Mobile", "Firebase", "Backend"],
    icon: FaLaptopCode,
    glow: "from-amber-300 to-emerald-300"
  },
  {
    title: "Unity VR Networking Project",
    categories: ["Unity", "VR"],
    description: "Simulasi VR jaringan komputer dengan sistem grab dan snap object untuk mendukung pengalaman belajar yang interaktif.",
    tech: ["Unity", "VR", "Interaction"],
    icon: FaGamepad,
    glow: "from-emerald-300 to-stone-300"
  }
];

export const projectFilters = ["All", "Web", "Mobile", "Backend", "Unity"];
