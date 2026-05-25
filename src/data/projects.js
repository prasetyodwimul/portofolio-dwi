import { FaGamepad, FaLaptopCode, FaUtensils } from "react-icons/fa";

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
