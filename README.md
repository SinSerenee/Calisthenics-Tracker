# Tracker Latihan Calisthenics

Aplikasi web sederhana untuk mencatat dan memantau perkembangan latihan calisthenics harian seperti Push-Up, Pull-Up, dan Sit-Up. Data latihan akan tersimpan di browser (localStorage) dan ditampilkan dalam bentuk tabel serta grafik perkembangan.

## Fitur

- Input jumlah Push-Up, Pull-Up, dan Sit-Up harian beserta tanggalnya.
- Riwayat latihan ditampilkan dalam tabel.
- Baris pada hari Rabu, Jumat, dan Minggu akan di-highlight.
- Grafik perkembangan latihan menggunakan Chart.js.
- Data tersimpan secara lokal di browser (tidak perlu backend).

## Cara Menggunakan

1. Buka file `index.html` di browser.
2. Isi form dengan tanggal dan jumlah latihan, lalu klik **Simpan Latihan**.
3. Riwayat latihan akan muncul di tabel, dan grafik akan ter-update otomatis.
4. Data akan tetap tersimpan selama tidak menghapus data browser.

## Struktur Proyek

- `index.html` — Halaman utama aplikasi.
- `style.css` — Styling tampilan aplikasi.
- `script.js` — Logika aplikasi (penyimpanan data, update tabel & grafik).
- `.vscode/extensions.json` — Rekomendasi ekstensi untuk pengembangan di VS Code.

## Teknologi

- HTML, CSS, JavaScript
- [Chart.js](https://www.chartjs.org/) untuk visualisasi grafik

---

Aplikasi ini cocok untuk pemantauan latihan pribadi tanpa perlu instalasi atau akun.