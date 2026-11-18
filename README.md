# Portfolio Eka - Modern & Interactive Portfolio Website

Website portofolio interaktif yang terinspirasi dari referensi desain modern dengan aksen warna warm amber/yellow, dipadukan dengan komponen interaktif dari **React Bits** (reactbits.dev).

---

## ✨ Fitur & Komponen Interaktif (React Bits)

1. **SpotlightCard** (`src/components/react-bits/SpotlightCard.tsx`):
   - Efek radial spotlight hangat yang mengikuti posisi kursor mouse secara presisi saat mengarahkan pointer ke kartu informasi, skill, dan proyek.
2. **TiltedCard** (`src/components/react-bits/TiltedCard.tsx`):
   - Efek tilt 3D interaktif pada foto profil hero section dan kartu proyek.
3. **DecryptedText** (`src/components/react-bits/DecryptedText.tsx`):
   - Animasi teks acak / enkripsi-ke-dekripsi sci-fi saat nama "Eka" muncul di layar.
4. **ShinyText** (`src/components/react-bits/ShinyText.tsx`):
   - Efek kilauan cahaya keemasan (light sweep) yang mengalir secara mulus di atas teks highlight.
5. **Magnet Button** (`src/components/react-bits/Magnet.tsx`):
   - Tombol magnetik yang tertarik ke arah kursor mouse saat didekati ("Download CV", "View Projects", "Contact Me", dan ikon media sosial).
6. **ClickSpark** (`src/components/react-bits/ClickSpark.tsx`):
   - Partikel kilatan percikan (sparks) warna amber saat pengguna mengklik di mana saja pada layar.
7. **DotPattern** (`src/components/react-bits/DotPattern.tsx`):
   - Pola titik latar belakang halus dan elegan bergaya website desainer modern.

---

## 🎨 Struktur Halaman (Sesuai Referensi Gambar)

- **Header / Navbar**: Brand "EKA •", menu navigasi responsif, dan tombol interaktif "Download CV" (membuka modal CV interaktif / opsi cetak & unduh).
- **Hero Section**:
  - Badge status "● Available for Opportunities"
  - Headline "Hi, I'm Eka" dengan efek DecryptedText dan wavy underline
  - Peran "Aspiring Software Development Engineer"
  - Tombol CTA: "View My Projects" & "Contact Me"
  - Ikon jejaring sosial (LinkedIn, GitHub, Coding, Website)
  - Visual profil dengan golden halo aura dan 2 badge melayang ("Turning Ideas into Real Applications" & "Build • Learn • Improve • Repeat").
- **About Me ("Get to know me")**:
  - Deskripsi profil lengkap
  - 6 kartu spotlight info (Name, Email, Location, Phone, Education, CGPA).
- **Technical Skills**:
  - Filter kategori: All, Frontend, Backend & DB, Core CS & DSA, Tools
  - Kartu skill rapi dengan logo warna dan sublabel (Java, React, Tailwind, MySQL, Git, Figma, dsb).
- **Featured Projects**:
  - Desain kartu proyek dengan mockup browser interaktif, tag kategori, poin-poin fitur, tech stack badges, serta tombol "Live Demo" dan "View Code".
- **Education & Certifications**:
  - 2 kolom berdampingan menampilkan riwayat pendidikan dan sertifikasi resmi.
- **Let's Work Together (Footer CTA)**:
  - Kartu aksen amber lebar dengan opsi salin email sekali klik dan modal formulir kontak langsung.

---

## 🚀 Cara Menjalankan

### Mode Pengembangan (Dev Server):
```bash
npm run dev
```
Akses di browser: `http://localhost:5173`

### Mode Produksi (Build):
```bash
npm run build
npm run preview
```
