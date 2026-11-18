export interface ProjectItem {
  id: string;
  title: string;
  badge: string;
  description: string;
  highlights: string[];
  tags: string[];
  liveUrl?: string;
  codeUrl: string;
  image: string;
}

export interface SkillItem {
  name: string;
  sublabel?: string;
  iconName: string;
  category: 'frontend' | 'backend' | 'database' | 'tools';
  color?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  score: string;
  period: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  description: string;
  period: string;
}

export const portfolioData = {
  profile: {
    name: "Eka Setya",
    fullName: "Eka Setya Purnama Putra",
    role: "Siswa SMK PGRI 2 Ponorogo | Web & Full-Stack Developer",
    availability: "Terbuka untuk Peluang & Proyek",
    shortBio:
      "Siswa jurusan Rekayasa Perangkat Lunak (RPL) di SMK PGRI 2 Ponorogo dengan pengalaman magang industri di PT Inosoft Transistem Surabaya. Memiliki ketertarikan mendalam pada pengembangan aplikasi web modern menggunakan Laravel, React, PHP, dan basis data terstruktur.",
    fullBio:
      "Saya adalah Eka Setya Purnama Putra, seorang pengembang web yang antusias dan disiplin. Memiliki dasar yang kuat dalam rekayasa perangkat lunak, pemrograman berorientasi objek, serta perancangan database. Pengalaman praktik kerja lapangan (magang) di PT Inosoft Transistem Surabaya telah membekali saya dengan pemahaman standar industri dalam merancang sistem web yang andal, efisien, dan siap pakai.",
    email: "ekasetyapurnamaputra27@gmail.com",
    phone: "+62 812-3456-7890",
    location: "Ponorogo, Jawa Timur, Indonesia",
    educationBrief: "SMK PGRI 2 Ponorogo (Rekayasa Perangkat Lunak)",
    internshipBrief: "Eks-Magang di PT Inosoft Transistem Surabaya",
    socialLinks: {
      github: "https://github.com/Ekasetyapurnamaputra",
      portfolio: "#",
      email: "mailto:ekasetyapurnamaputra27@gmail.com"
    },
    floatingBadge1: {
      tag: "</>",
      title: "Mengubah Ide",
      subtitle: "Menjadi Aplikasi Nyata"
    },
    floatingBadge2: {
      tag: "⚡",
      title: "Bangun • Belajar",
      subtitle: "Kembangkan • Ulangi"
    }
  },

  skills: [
    { name: "HTML5", sublabel: "(Semantik & Struktur)", iconName: "Layout", category: "frontend", color: "#e34f26" },
    { name: "CSS3", sublabel: "(Styling & Animasi)", iconName: "Palette", category: "frontend", color: "#1572b6" },
    { name: "JavaScript", sublabel: "(ES6+ Modern)", iconName: "FileCode2", category: "frontend", color: "#f7df1e" },
    { name: "React.js", sublabel: "(Komponen Interaktif)", iconName: "Atom", category: "frontend", color: "#61dafb" },
    { name: "PHP", sublabel: "(Server-side Logic)", iconName: "Server", category: "backend", color: "#777bb4" },
    { name: "Laravel", sublabel: "(Framework Utama)", iconName: "Flame", category: "backend", color: "#ff2d20" },
    { name: "MySQL", sublabel: "(Relational Database)", iconName: "Database", category: "database", color: "#4479a1" },
    { name: "MongoDB", sublabel: "(NoSQL Database)", iconName: "Leaf", category: "database", color: "#47a248" },
    { name: "Tailwind CSS", sublabel: "(Modern Styling)", iconName: "Wind", category: "frontend", color: "#06b6d4" },
    { name: "Git & GitHub", sublabel: "(Version Control)", iconName: "GitBranch", category: "tools", color: "#f05032" },
  ] as SkillItem[],

  projects: [
    {
      id: "pustakakita",
      title: "PustakaKita",
      badge: "Sistem Manajemen Perpustakaan",
      description:
        "Sistem Informasi Pengelolaan Perpustakaan Digital berbasis web yang dirancang untuk mempermudah katalogisasi buku, transaksi peminjaman dan pengembalian, manajemen data anggota, serta rekapitulasi denda dan laporan secara otomatis.",
      highlights: [
        "Pengelolaan data buku, kategori, dan anggota secara terstruktur",
        "Sirkulasi transaksi peminjaman & pengembalian buku otomatis",
        "Perhitungan denda keterlambatan dan status ketersediaan buku",
        "Pencarian cepat judul dan pengarang dengan integrasi database yang efisien"
      ],
      tags: ["PHP", "Laravel", "MySQL", "Tailwind CSS", "Blade"],
      codeUrl: "https://github.com/Ekasetyapurnamaputra/PustakaKita.git",
      image: "https://images.unsplash.com/photo-1507842229452-9721867e0e7a?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "parkirpintar",
      title: "Parkir Pintar",
      badge: "Sistem Manajemen Parkir Cerdas",
      description:
        "Aplikasi sistem parkir pintar berbasis web untuk pencatatan kendaraan masuk dan keluar secara akurat, pemantauan ketersediaan slot parkir secara real-time, pencetakan struk tiket, serta perhitungan tarif parkir otomatis.",
      highlights: [
        "Pencatatan nomor plat kendaraan dan waktu parkir otomatis",
        "Monitoring kapasitas dan ketersediaan slot parkir kendaraan",
        "Perhitungan tarif biaya parkir berdasarkan durasi waktu",
        "Laporan rekapitulasi pendapatan dan statistik kendaraan terintegrasi"
      ],
      tags: ["PHP", "Laravel", "MySQL", "JavaScript", "Bootstrap/Tailwind"],
      codeUrl: "https://github.com/Ekasetyapurnamaputra/ParkirPintar.git",
      image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=800&auto=format&fit=crop"
    }
  ] as ProjectItem[],

  education: [
    {
      degree: "Rekayasa Perangkat Lunak (RPL)",
      institution: "SMK PGRI 2 Ponorogo",
      score: "Siswa Aktif & Berprestasi di Bidang Pemrograman Web",
      period: "2023 - 2026"
    }
  ] as EducationItem[],

  experience: [
    {
      role: "Web Developer Intern (Praktik Kerja Industri)",
      company: "PT Inosoft Transistem Surabaya",
      description: "Terlibat langsung dalam siklus pengembangan aplikasi web enterprise, pengujian modul backend Laravel, pemeliharaan basis data MySQL, dan kolaborasi tim profesional.",
      period: "Masa Praktik Kerja Lapangan (PKL)"
    },
    {
      role: "Sertifikasi Kompetensi Magang Industri",
      company: "Inosoft Transistem Surabaya",
      description: "Penghargaan dan pengakuan kompetensi resmi atas keberhasilan menyelesaikan program magang pengembangan sistem informasi berbasis web.",
      period: "Sertifikat Resmi"
    }
  ] as ExperienceItem[]
};
