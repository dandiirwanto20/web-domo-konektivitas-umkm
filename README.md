# Domo Konektivitas - Website Penjualan Tas (Static Site)

Website landing page modern untuk penjualan tas yang dibuat dengan **HTML, CSS, dan JavaScript murni**.  
Struktur dibuat agar **mudah di-deploy ke Netlify** tanpa konfigurasi tambahan.

## Fitur

- **Landing page modern & responsif**
- **Koleksi produk tas** (wanita, pria, kerja, casual)
- **Filter kategori produk**
- **Section Best Seller**
- **Keranjang belanja (simulasi)**  
  Tambah / kurangi qty dan hitung total harga (hanya di sisi frontend).
- **Testimoni pelanggan**
- **Form kontak** yang sudah disiapkan untuk **Netlify Forms**

## Struktur Proyek

- `index.html` — Halaman utama
- `styles.css` — Styling dan layout
- `script.js` — Data produk dan interaksi UI (filter, keranjang, dsb.)
- `README.md` — Dokumen ini

Semua file ada di **root folder** sehingga Netlify dapat menyajikan langsung sebagai static site.

## Cara Menjalankan Secara Lokal

1. Buka folder proyek:

   ```bash
   cd web-penjualan-tas
   ```

2. Buka `index.html` dengan browser (double click di Windows)  
   atau gunakan ekstensi "Live Server" di VSCode/Cursor untuk auto reload.

## Deploy ke Netlify

Ada dua cara utama:

### 1. Drag & Drop (paling cepat)

1. Buka dashboard Netlify: `https://app.netlify.com/`
2. Login / daftar.
3. Pilih **"Add new site" → "Deploy manually"**.
4. Zip seluruh isi folder proyek ini atau drag folder `web-penjualan-tas` langsung ke area upload.
5. Netlify akan otomatis:
   - Menggunakan `index.html` sebagai halaman utama.
   - Tidak membutuhkan build command (kosongkan saja).

### 2. Melalui Git (GitHub/GitLab/Bitbucket)

1. Inisialisasi git di folder ini:

   ```bash
   git init
   git add .
   git commit -m "Initial commit - Domo Konektivitas"
   git branch -M main
   ```

2. Push ke GitHub (contoh):

   ```bash
   git remote add origin https://github.com/username/web-penjualan-tas.git
   git push -u origin main
   ```

3. Di Netlify:
   - **Add new site → Import from Git**
   - Pilih repo `web-penjualan-tas`
   - **Build command**: (kosongkan / `none`)
   - **Publish directory**: `./` (root)

## Netlify Forms

Form kontak di section **Kontak** sudah diberi atribut:

- `name="contact"`
- `method="POST"`
- `data-netlify="true"`
- hidden input `form-name` dengan nilai `contact`

Sehingga Netlify akan otomatis mendeteksi form ini dan menyimpan submission di dashboard Netlify.

## Kustomisasi

- Ubah teks dan harga produk di `script.js` (array `products`).
- Ganti URL gambar produk dengan foto tas milik Anda (bisa upload ke storage sendiri atau gunakan CDN).
- Ubah warna dan tema di `styles.css` (variabel CSS di bagian `:root`).

