import type { Metadata } from "next";
import { Navbar } from "@/components/organisms/Navbar";
import { Footer } from "@/components/organisms/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Syarat dan Ketentuan | Paymonei",
  description:
    "Syarat dan Ketentuan yang mengatur akses dan penggunaan platform perangkat lunak penagihan dan orkestrasi pembayaran Paymonei untuk merchant di Indonesia.",
  openGraph: {
    title: "Syarat dan Ketentuan | Paymonei",
    description:
      "Syarat dan Ketentuan yang mengatur akses dan penggunaan platform perangkat lunak penagihan dan orkestrasi pembayaran Paymonei untuk merchant di Indonesia.",
    url: "https://paymonei.com/legal/terms-of-service/indonesia",
    siteName: "Paymonei",
    type: "website",
  },
};

// ─── Daftar isi ────────────────────────────────────────────────────────────────

const toc = [
  { id: "pendahuluan", label: "1. Pendahuluan dan Para Pihak" },
  { id: "layanan", label: "2. Sifat Layanan" },
  { id: "kelayakan", label: "3. Kelayakan Merchant dan Pernyataan" },
  { id: "kewajiban", label: "4. Kewajiban Merchant dan Penggunaan yang Diizinkan" },
  { id: "mitra-eksekusi", label: "5. Mitra Eksekusi Berlisensi" },
  { id: "biaya", label: "6. Biaya, Penagihan, dan Langganan" },
  { id: "kekayaan-intelektual", label: "7. Kekayaan Intelektual" },
  { id: "perlindungan-data", label: "8. Perlindungan Data dan Privasi" },
  { id: "penafian", label: "9. Penafian Jaminan" },
  { id: "tanggung-gugat", label: "10. Batasan Tanggung Gugat" },
  { id: "ganti-rugi", label: "11. Ganti Rugi" },
  { id: "pengakhiran", label: "12. Jangka Waktu, Penangguhan, dan Pengakhiran" },
  { id: "hukum-berlaku", label: "13. Hukum yang Berlaku dan Penyelesaian Sengketa" },
  { id: "ketentuan-umum", label: "14. Ketentuan Umum" },
  { id: "kontak", label: "15. Kontak" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function TermsOfServiceIndonesiaPage() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Geist:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />

      <div className="min-h-screen bg-[#FAFAF8]" style={{ fontFamily: "'Geist', system-ui, sans-serif" }}>
        <Navbar />

        {/* ── HERO ─────────────────────────────────────────────────────── */}
        <section className="pt-32 pb-16 px-5 sm:px-8 border-b border-[#EAEAE6]">
          <div className="max-w-7xl mx-auto lg:px-8">
            <p className="text-[12px] tracking-[0.14em] uppercase text-[#999] mb-5 font-medium">Legal</p>
            <h1
              className="text-[clamp(2.4rem,4vw,3.5rem)] font-light leading-[1.1] tracking-[-0.04em] text-[#0C0C0C] mb-5"
              style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
            >
              Syarat dan Ketentuan
            </h1>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-[13px] text-[#999] font-light">
              <span>Berlaku sejak: <strong className="text-[#555] font-medium">11 April 2026</strong></span>
              <span className="hidden sm:block opacity-30">·</span>
              <span>Pertanyaan hukum: <strong className="text-[#555] font-medium">legal@paymonei.com</strong></span>
            </div>
          </div>
        </section>

        {/* ── BODY ─────────────────────────────────────────────────────── */}
        <div className="max-w-7xl mx-auto lg:px-8 px-5 sm:px-8 py-16">
          <div className="flex flex-col lg:flex-row gap-16">

            {/* Sticky TOC sidebar */}
            <aside className="lg:w-56 shrink-0">
              <div className="sticky top-28 flex flex-col gap-6">

                {/* Jurisdiction switcher */}
                <div>
                  <p className="text-[11px] uppercase tracking-[0.14em] text-[#999] font-medium mb-3">Yurisdiksi</p>
                  <nav className="flex flex-col gap-1.5">
                    <Link
                      href="/legal/terms-of-service"
                      className="text-[13px] text-[#777] hover:text-[#0C0C0C] transition-colors font-light leading-snug"
                    >
                      Singapore &amp; RoW
                    </Link>
                    <span className="text-[13px] text-[#0C0C0C] font-medium leading-snug">Indonesia (Bahasa)</span>
                  </nav>
                </div>

                {/* Isi halaman */}
                <div className="border-t border-[#EAEAE6] pt-4">
                  <p className="text-[11px] uppercase tracking-[0.14em] text-[#999] font-medium mb-4">Isi halaman</p>
                  <nav className="flex flex-col gap-1.5">
                    {toc.map(item => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="text-[13px] text-[#777] hover:text-[#0C0C0C] transition-colors font-light leading-snug"
                      >
                        {item.label}
                      </a>
                    ))}
                  </nav>
                </div>

              </div>
            </aside>

            {/* Main content */}
            <article className="flex-1 min-w-0 max-w-3xl">

              {/* ── Pemberitahuan Penting ── */}
              <div className="bg-[#F5F5F2] border border-[#EAEAE6] rounded-lg p-6 mb-12">
                <p className="text-[13px] font-medium text-[#0C0C0C] mb-2">Pemberitahuan Penting</p>
                <p className="text-[14px] text-[#555] leading-relaxed font-light">
                  PT Evora Vera Teknologi adalah perusahaan teknologi. Entitas ini bukan bank, lembaga keuangan, bisnis jasa keuangan, atau penyedia aset virtual. Seluruh layanan eksekusi keuangan, termasuk pemrosesan pembayaran, pergerakan dana, dan penyelesaian transaksi, disediakan secara eksklusif oleh mitra eksekusi keuangan pihak ketiga berlisensi berdasarkan perjanjian kontraktual tersendiri.
                </p>
              </div>

              {/* ── Bagian 1: Pendahuluan dan Para Pihak ── */}
              <Section id="pendahuluan" title="1. Pendahuluan dan Para Pihak">
                <p>
                  Syarat dan Ketentuan ini (&ldquo;Syarat&rdquo; atau &ldquo;Perjanjian&rdquo;) mengatur akses dan penggunaan platform Paymonei, API, dasbor, dan layanan yang dihosting (secara kolektif, &ldquo;Layanan&rdquo;) yang disediakan oleh <strong>PT Evora Vera Teknologi</strong>, perseroan terbatas yang didirikan berdasarkan hukum Republik Indonesia, selaku mitra teknologi dan operasional resmi Paymonei di Indonesia (&ldquo;PT Evora&rdquo;, &ldquo;kami&rdquo;, atau &ldquo;kita&rdquo;).
                </p>
                <p>
                  Seluruh kekayaan intelektual atas platform Paymonei, termasuk teknologi yang mendasarinya, dimiliki oleh <strong>Omniasky Technology Pte Ltd</strong>, perseroan terbatas yang terdaftar di Singapura (&ldquo;Omniasky&rdquo;). PT Evora Vera Teknologi beroperasi sebagai mitra teknologi dan operasional resmi Omniasky di wilayah Indonesia berdasarkan perjanjian lisensi teknologi antarperusahaan.
                </p>
                <p>
                  Syarat ini berlaku secara eksklusif bagi pelaku usaha dan perwakilan yang berwenang (&ldquo;Merchant&rdquo;) yang mendaftar dan menggunakan Layanan. Layanan tidak dirancang untuk, dipasarkan kepada, atau tersedia bagi individu yang bertindak dalam kapasitas pribadi.
                </p>
                <p>
                  Dengan mengakses atau menggunakan Layanan, Anda menegaskan bahwa: (a) Anda bertindak atas nama entitas usaha yang terdaftar secara sah; (b) Anda memiliki kewenangan untuk mengikat entitas tersebut pada Perjanjian ini; dan (c) Anda telah membaca, memahami, dan setuju untuk terikat pada Syarat ini secara keseluruhan.
                </p>
                <p>
                  Kebijakan Privasi kami (tersedia di <Link href="/legal/privacy-policy">paymonei.com/legal/privacy-policy</Link>) dimasukkan ke dalam Perjanjian ini sebagai referensi. Penggunaan Layanan oleh Anda juga tunduk pada Kebijakan Privasi kami.
                </p>
              </Section>

              {/* ── Bagian 2: Sifat Layanan ── */}
              <Section id="layanan" title="2. Sifat Layanan">
                <p>
                  Paymonei adalah platform orkestrasi perangkat lunak B2B yang menyediakan otomatisasi penagihan, pembuatan faktur, konfigurasi alur pembayaran, manajemen langganan, dasbor analitik, dan alat konektivitas API kepada merchant bisnis yang terdaftar.
                </p>
                <h3>2.1 Yang Disediakan Paymonei</h3>
                <ul>
                  <li>Perangkat lunak untuk mengonfigurasi dan memantau alur penagihan serta perutean instruksi pembayaran.</li>
                  <li>Pembuatan faktur, otomatisasi dunning, dan manajemen siklus langganan.</li>
                  <li>API dan SDK yang memungkinkan merchant mengintegrasikan perangkat lunak Paymonei ke dalam sistem mereka sendiri.</li>
                  <li>Dasbor analitik yang memberikan visibilitas kepada merchant atas metrik kinerja penagihan mereka.</li>
                  <li>Konektivitas ke mitra eksekusi keuangan berlisensi yang secara mandiri melakukan eksekusi dan penyelesaian pembayaran.</li>
                </ul>
                <h3>2.2 Yang Tidak Disediakan Paymonei</h3>
                <p>
                  Paymonei tidak menyimpan, mengirimkan, menyelesaikan, atau memiliki hak wali amanat atas dana apa pun. Eksekusi pembayaran, termasuk pergerakan uang, konversi mata uang, dan penyelesaian transaksi, dilakukan secara eksklusif oleh mitra eksekusi keuangan pihak ketiga berlisensi kami (&ldquo;Mitra Eksekusi&rdquo;) berdasarkan lisensi dan kerangka regulasi mereka sendiri.
                </p>
                <p>
                  Apabila opsi penyelesaian berbasis blockchain tersedia bagi merchant melalui platform kami, transaksi tersebut difasilitasi sepenuhnya oleh Mitra Eksekusi berlisensi kami. Paymonei tidak memulai, menandatangani, atau menyiarkan transaksi blockchain secara langsung.
                </p>
                <p>
                  Paymonei bukan bank, lembaga keuangan, pengirim uang berlisensi, bisnis jasa keuangan, fasilitator pembayaran, atau penyedia aset virtual. Kami tidak memberikan saran keuangan, produk investasi, atau layanan keuangan yang diatur dalam bentuk apa pun.
                </p>
                <h3>2.3 Ketersediaan Layanan</h3>
                <p>
                  Kami akan menggunakan upaya yang secara komersial wajar untuk menjaga ketersediaan platform. Namun, kami tidak memberikan jaminan akses yang tidak terputus. Pemeliharaan terencana, gangguan infrastruktur pihak ketiga, dan peristiwa sistem Mitra Eksekusi dapat memengaruhi ketersediaan. Kami tidak bertanggung jawab atas downtime atau gangguan layanan yang disebabkan oleh faktor di luar kendali kami yang wajar.
                </p>
              </Section>

              {/* ── Bagian 3: Kelayakan Merchant dan Pendaftaran ── */}
              <Section id="kelayakan" title="3. Kelayakan Merchant, Pendaftaran, dan Pernyataan Jaminan">
                <h3>3.1 Persyaratan Kelayakan</h3>
                <p>Untuk mendaftar dan menggunakan Layanan, Anda harus:</p>
                <ul>
                  <li>Merupakan entitas usaha yang terdaftar secara sah (perseroan terbatas, persekutuan, atau struktur hukum yang setara) dengan kapasitas untuk membuat perjanjian yang mengikat.</li>
                  <li>Memiliki perwakilan resmi dengan kewenangan hukum untuk mengikat usaha pada Perjanjian ini.</li>
                  <li>Tidak terdaftar di, dikendalikan oleh, atau beroperasi untuk kepentingan entitas atau individu yang dikenakan sanksi ekonomi internasional komprehensif yang dikelola oleh Perserikatan Bangsa-Bangsa, OFAC (AS), Uni Eropa, UK OFSI, MAS (Singapura), OJK, atau PPATK (Indonesia), atau otoritas yang setara.</li>
                  <li>Tidak tercantum dalam daftar sanksi yang dikelola oleh otoritas di atas pada saat pendaftaran atau selama berlakunya Perjanjian ini.</li>
                </ul>
                <h3>3.2 Pendaftaran Akun</h3>
                <p>
                  Untuk membuat akun Paymonei, Anda harus menyediakan informasi yang akurat, lengkap, dan terkini, termasuk: nama entitas hukum usaha Anda, nomor induk berusaha atau nomor registrasi usaha, negara pendirian, jenis usaha, dan informasi kontak perwakilan resmi yang mendaftarkan akun.
                </p>
                <p>
                  Sebagai bagian dari proses orientasi merchant, verifikasi identitas perwakilan usaha resmi dan direktur dilakukan oleh mitra verifikasi pihak ketiga yang kami tunjuk. Kewajiban pelaporan AML/CFT yang bersifat regulatoris atas transaksi pembayaran, termasuk kewajiban pelaporan transaksi kepada otoritas berwenang seperti PPATK, dipenuhi oleh Mitra Eksekusi berlisensi kami berdasarkan kerangka regulasi mereka masing-masing. PT Evora mengoperasikan pengendalian risiko di tingkat teknologi secara terpisah, termasuk verifikasi merchant (KYB), pemeriksaan daftar sanksi, dan pembatasan kategori merchant berisiko tinggi sebagaimana diuraikan dalam Bagian 5.
                </p>
                <h3>3.3 Keamanan Akun</h3>
                <p>
                  Anda sepenuhnya bertanggung jawab untuk menjaga kerahasiaan dan keamanan kredensial akun, kunci API, dan token akses Anda. Anda bertanggung jawab penuh atas seluruh aktivitas yang dilakukan di bawah akun Anda, baik yang diotorisasi maupun tidak. Anda harus segera memberitahu kami di <Link href="mailto:legal@paymonei.com">legal@paymonei.com</Link> apabila Anda mengetahui adanya akses tidak sah ke akun Anda.
                </p>
                <h3>3.4 Keakuratan Informasi</h3>
                <p>
                  Anda menyatakan dan menjamin bahwa seluruh informasi yang Anda berikan saat pendaftaran dan selama penggunaan Layanan adalah akurat, lengkap, dan tidak menyesatkan. Anda setuju untuk segera memperbarui informasi akun apabila terjadi perubahan material. Kami berhak menangguhkan atau mengakhiri akses apabila kami menentukan bahwa informasi yang diberikan tidak akurat atau telah menjadi tidak akurat secara material.
                </p>
                <h3>3.5 Pernyataan dan Jaminan Merchant</h3>
                <p>Dengan menandatangani Perjanjian ini dan secara berkelanjutan selama masa berlakunya, Anda menyatakan dan menjamin kepada kami bahwa:</p>
                <ul>
                  <li><strong>Kewenangan dan kewajiban yang mengikat:</strong> Anda memiliki semua hak, kuasa, dan kewenangan yang diperlukan untuk melaksanakan Perjanjian ini dan menunaikan kewajiban Anda berdasarkannya. Perjanjian ini merupakan kewajiban yang sah, berlaku, dan mengikat yang dapat ditegakkan terhadap Anda sesuai dengan ketentuannya, serta tidak melanggar atau bertentangan dengan perjanjian lain yang mengikat Anda.</li>
                  <li><strong>Kepatuhan regulasi dan perizinan:</strong> Anda telah mematuhi dan akan terus mematuhi semua hukum, aturan, dan peraturan yang berlaku di setiap yurisdiksi tempat Anda beroperasi. Anda telah memperoleh dan akan mempertahankan sepanjang masa berlakunya Perjanjian ini semua izin usaha, izin regulasi, dan otorisasi pemerintah yang diperlukan untuk menjalankan usaha inti Anda dan menggunakan Layanan.</li>
                  <li><strong>Pemberitahuan perubahan usaha:</strong> Anda akan memberitahu kami secara tertulis dalam waktu lima (5) hari kerja apabila terjadi perubahan material pada jenis usaha, produk atau jasa utama yang ditawarkan, model bisnis, atau perubahan lain yang dapat memengaruhi penilaian risiko kami atas akun Anda. Kelalaian memberikan pemberitahuan tepat waktu menjadikan Anda sepenuhnya bertanggung jawab atas segala konsekuensi dan kerugian yang timbul dari perubahan tersebut.</li>
                  <li><strong>Kekayaan intelektual:</strong> Anda memiliki hak dan kewenangan penuh untuk menjual atau mendistribusikan produk dan jasa yang menjadi alasan Anda menggunakan Layanan. Tidak ada produk atau jasa Anda yang melanggar hak kekayaan intelektual pihak ketiga mana pun, termasuk merek dagang, hak cipta, paten, atau rahasia dagang, dan tidak mengandung konten yang melanggar hukum atau peraturan yang berlaku.</li>
                  <li><strong>Persetujuan dan pengungkapan pengguna akhir:</strong> Sebelum menyerahkan data pengguna akhir kepada kami atau kepada Mitra Eksekusi kami, Anda telah memberikan semua pengungkapan yang diperlukan kepada, dan memperoleh semua persetujuan yang diperlukan dari, setiap pengguna akhir terkait mengenai pengumpulan, penggunaan, dan pengungkapan data pribadi mereka, sesuai dengan hukum perlindungan data yang berlaku termasuk UU No. 27 Tahun 2022 tentang Perlindungan Data Pribadi (UU PDP) dan/atau peraturan privasi yang berlaku di setiap yurisdiksi tempat Anda beroperasi.</li>
                  <li><strong>Anti-penyuapan dan anti-korupsi:</strong> Anda maupun afiliasi, pejabat, direktur, karyawan, agen, atau mitra Anda tidak pernah, dan tidak akan, menawarkan, menjanjikan, memberikan, atau mengotorisasi pembayaran, hadiah, atau hal lain yang bernilai, secara langsung maupun tidak langsung, kepada pejabat pemerintah atau otoritas publik mana pun dengan tujuan memengaruhi suatu tindakan atau keputusan resmi, atau memperoleh keuntungan yang tidak semestinya. Anda telah menjalankan dan akan terus menjalankan usaha Anda sesuai dengan semua peraturan perundangan anti-penyuapan dan anti-korupsi yang berlaku.</li>
                  <li><strong>Kepatuhan APU/PPT:</strong> Operasional Anda telah atau akan selalu dilakukan sesuai dengan persyaratan pencatatan, pelaporan keuangan, dan undang-undang pemberantasan pencucian uang serta pendanaan terorisme yang berlaku di Indonesia, Singapura, dan seluruh yurisdiksi lain tempat Anda beroperasi atau bertransaksi. Tidak ada dakwaan, gugatan, atau persidangan yang sedang atau akan diajukan terhadap Anda yang berkaitan dengan pelanggaran undang-undang APU/PPT yang berlaku.</li>
                  <li><strong>Sanksi sebagai pernyataan berkelanjutan:</strong> Anda tidak, dan tidak akan selama masa berlakunya Perjanjian ini, terdaftar di, dikendalikan oleh, atau bertindak untuk kepentingan orang, entitas, atau yurisdiksi yang dikenakan sanksi ekonomi komprehensif yang dikelola oleh Perserikatan Bangsa-Bangsa, OFAC (AS), Uni Eropa, UK OFSI, MAS (Singapura), OJK, PPATK (Indonesia), atau daftar negara berisiko tinggi FATF. Anda tidak tercantum, dan tidak akan tercantum, dalam daftar Specially Designated Nationals, Consolidated Sanctions List, atau daftar setara yang dikelola oleh otoritas-otoritas tersebut.</li>
                  <li><strong>Larangan mengeksploitasi celah sistem:</strong> Anda tidak akan menggunakan Layanan untuk melakukan, memfasilitasi, atau memungkinkan tujuan yang melanggar hukum, curang, atau menipu, dan tidak akan mengeksploitasi kerentanan, celah, atau kelemahan sistem mana pun, baik milik kami maupun pihak ketiga, untuk memperoleh keuntungan yang tidak semestinya. Anda setuju untuk memberikan ganti rugi kepada kami atas seluruh klaim, biaya, pengeluaran, kerugian, dan kewajiban yang timbul dari tindakan tersebut.</li>
                  <li><strong>Penggunaan yang sah:</strong> Penggunaan Layanan oleh Anda semata-mata untuk tujuan usaha dan transaksi yang sah dan sesuai dengan hukum yang berlaku serta Syarat dan Ketentuan ini.</li>
                </ul>
                <h3>3.6 Jaminan Terbatas Paymonei</h3>
                <p>Kami menyatakan dan menjamin kepada Anda bahwa:</p>
                <ul>
                  <li>Kami telah mematuhi dan akan terus mematuhi semua hukum dan peraturan yang berlaku, serta telah memperoleh dan akan mempertahankan semua izin, lisensi, dan otorisasi pemerintah yang diperlukan untuk penyediaan Layanan.</li>
                  <li>Layanan dan API yang diberikan berdasarkan Perjanjian ini akan secara material sesuai dengan spesifikasi yang tercantum dalam Dokumentasi yang berlaku, sebagaimana dapat diubah dari waktu ke waktu atas kebijakan kami sendiri.</li>
                  <li>Paymonei tidak menyimpan, memproses, atau mentransmisikan data kartu pembayaran mentah (nomor kartu, CVV, atau tanggal kedaluwarsa). Seluruh pemrosesan kartu pembayaran dilakukan secara eksklusif oleh Mitra Eksekusi berlisensi kami, yang mempertahankan sertifikasi Standar Keamanan Data Industri Kartu Pembayaran (PCI-DSS) mereka sendiri dan tunduk pada aturan jaringan kartu berdasarkan kerangka regulasi mereka masing-masing. Paymonei sepenuhnya berada di luar lingkup PCI-DSS.</li>
                  <li>Kami tidak akan menggunakan atau mengungkapkan data pribadi non-publik pengguna akhir Anda kecuali: (i) sebagaimana diperlukan secara wajar untuk menyediakan Layanan kepada Anda; (ii) untuk menyediakan layanan pemeriksaan penipuan dan risiko transaksi secara umum tanpa mengungkapkan informasi pengguna akhir yang dapat diidentifikasi secara pribadi; atau (iii) sebagaimana diuraikan, diizinkan, atau diwajibkan oleh Kebijakan Privasi kami atau hukum yang berlaku.</li>
                </ul>
                <p>
                  <strong>Upaya pemulihan atas pelanggaran jaminan.</strong> Apabila bagian mana pun dari Layanan secara material tidak sesuai dengan jaminan dalam klausul 3.6 di atas, dan Anda melaporkan ketidaksesuaian tersebut kepada kami, kami akan, atas kebijakan kami sendiri: (i) menggunakan upaya komersial yang wajar untuk memperbaiki ketidaksesuaian tanpa biaya tambahan kepada Anda; atau (ii) mengembalikan biaya yang telah Anda bayarkan untuk Layanan yang tidak sesuai dalam sembilan puluh (90) hari sebelum tanggal Anda melaporkan ketidaksesuaian tersebut. Upaya pemulihan yang diatur dalam klausul ini merupakan satu-satunya upaya pemulihan Anda dan seluruh tanggung jawab kami sehubungan dengan pelanggaran jaminan dalam klausul 3.6.
                </p>
                <p>
                  <strong>Pengecualian jaminan.</strong> Jaminan dalam klausul 3.6 dan upaya pemulihan di atas tidak berlaku apabila: (i) Layanan digunakan secara menyimpang secara material dari Perjanjian ini, Syarat dan Ketentuan ini, atau Dokumentasi yang berlaku; (ii) bagian mana pun dari Layanan telah dimodifikasi tanpa persetujuan tertulis kami sebelumnya; atau (iii) cacat pada Layanan disebabkan oleh kerusakan peralatan Anda sendiri, perangkat lunak pihak ketiga, atau layanan pihak ketiga yang tidak disediakan oleh kami.
                </p>
              </Section>

              {/* ── Bagian 4: Kewajiban Merchant dan Penggunaan yang Diizinkan ── */}
              <Section id="kewajiban" title="4. Kewajiban Merchant dan Penggunaan yang Diizinkan">
                <h3>4.1 Tanggung Jawab Merchant</h3>
                <p>Sebagai Merchant, Anda sepenuhnya bertanggung jawab untuk:</p>
                <ul>
                  <li>Memastikan usaha Anda dan seluruh aktivitas yang dilakukan melalui Layanan mematuhi seluruh hukum dan peraturan yang berlaku di yurisdiksi tempat Anda beroperasi.</li>
                  <li>Mendapatkan dan mempertahankan seluruh lisensi, izin, dan persetujuan regulasi yang diperlukan untuk menjalankan usaha Anda.</li>
                  <li>Memberikan pengungkapan yang akurat kepada pelanggan Anda sendiri mengenai transaksi mereka dan penggunaan Anda atas perangkat lunak dan layanan pembayaran pihak ketiga.</li>
                  <li>Keakuratan dan kelengkapan seluruh data usaha dan penagihan yang Anda konfigurasikan dalam platform.</li>
                  <li>Tindakan dan konfigurasi seluruh integrasi API, webhook, dan sistem pihak ketiga yang terhubung ke Paymonei menggunakan kredensial Anda.</li>
                  <li>Tindakan karyawan, kontraktor, dan pengguna resmi Anda yang mengakses Layanan di bawah akun Anda.</li>
                </ul>
                <h3>4.2 Penggunaan yang Dilarang</h3>
                <p>Anda setuju untuk tidak menggunakan Layanan, dan tidak mengizinkan pihak ketiga mana pun untuk menggunakan Layanan, sehubungan dengan aktivitas-aktivitas terlarang berikut:</p>
                <ul>
                  <li><strong>Kegiatan ilegal:</strong> Setiap kegiatan yang melanggar hukum dan peraturan yang berlaku, termasuk penipuan, pencucian uang, pendanaan terorisme, pendanaan proliferasi senjata pemusnah massal, penghindaran pajak, suap, atau korupsi.</li>
                  <li><strong>Pelanggaran sanksi:</strong> Setiap usaha, transaksi, atau pihak lawan yang melibatkan individu, entitas, atau yurisdiksi yang dikenakan sanksi ekonomi komprehensif yang dikelola oleh Perserikatan Bangsa-Bangsa, OFAC (AS), Uni Eropa, UK OFSI, MAS (Singapura), OJK, PPATK (Indonesia), atau otoritas yang setara.</li>
                  <li><strong>Pelanggaran kekayaan intelektual dan barang palsu:</strong> Penjualan, distribusi, atau fasilitasi akses ke perangkat lunak bajakan, musik, film, atau materi berhak cipta lainnya tanpa izin dari pemegang hak; produk atau jasa yang melanggar atau memfasilitasi pelanggaran merek dagang, hak cipta, rahasia dagang, atau hak proprietary maupun privasi pihak ketiga; barang bermerek palsu atau tidak resmi.</li>
                  <li><strong>Konten dan layanan dewasa:</strong> Materi pornografi, konten seksual eksplisit, layanan pendamping (escort), atau layanan maupun materi apa pun yang bersifat dewasa-seksual.</li>
                  <li><strong>Perjudian dan taruhan daring:</strong> Kasino daring, bursa taruhan olahraga, layanan lotere, atau kegiatan apa pun yang melibatkan pertaruhan uang atau nilai, kecuali memiliki lisensi yang sesuai dan mendapatkan persetujuan tertulis dari kami sebelumnya.</li>
                  <li><strong>Zat terlarang dan narkotika:</strong> Penjualan, distribusi, impor, atau ekspor narkoba, narkotika, zat terlarang, atau obat-obatan yang memerlukan resep tanpa otorisasi regulasi yang tepat, termasuk Narkotika Golongan I, II, dan III sebagaimana diatur dalam Undang-Undang Nomor 35 Tahun 2009.</li>
                  <li><strong>Senjata api dan bahan peledak:</strong> Penjualan, distribusi, impor, atau ekspor senjata api, amunisi, bahan peledak, atau aksesori terkait, kecuali oleh distributor berlisensi yang berwenang dengan persetujuan tertulis dari kami sebelumnya.</li>
                  <li><strong>Skema piramida dan penipuan investasi:</strong> Skema piramida, skema Ponzi, penawaran efek yang tidak terdaftar, atau segala bentuk penipuan investasi.</li>
                  <li><strong>Instrumen keuangan palsu:</strong> Cek palsu, instrumen pembayaran duplikat atau kloning, mata uang palsu, instrumen nilai tersimpan yang tidak sah, atau dokumen keuangan palsu lainnya.</li>
                  <li><strong>Layanan aset virtual tidak berlisensi:</strong> Pengoperasian bursa aset kripto, platform penerbitan token, layanan stablecoin, layanan kustodian aset digital, atau bisnis Penyelenggara Jasa Aset Keuangan Digital (PJAKD) tanpa registrasi atau izin yang sah dari OJK atau otoritas berwenang yang berlaku. Entitas yang telah memiliki registrasi atau izin OJK yang sah untuk layanan aset virtual dapat mengajukan permohonan persetujuan tertulis kepada kami sebelum menggunakan Layanan untuk kegiatan tersebut.</li>
                  <li><strong>Layanan pengiriman uang tidak berlisensi:</strong> Beroperasi sebagai pengirim uang, penukaran mata uang, atau layanan serupa tanpa lisensi yang diperlukan menggunakan platform Paymonei sebagai infrastruktur, di mana kegiatan tersebut mensyaratkan lisensi regulasi yang tidak Anda miliki.</li>
                  <li><strong>Penyalahgunaan platform:</strong> Upaya rekayasa balik, melewati langkah keamanan, memasukkan malware, atau memberikan beban yang tidak wajar pada infrastruktur kami.</li>
                  <li><strong>Penyampaian informasi yang tidak benar:</strong> Memberikan informasi yang secara material palsu, menyesatkan, atau tidak akurat kepada kami, kepada Mitra Eksekusi, atau kepada pelanggan Anda sendiri.</li>
                </ul>
                <p>
                  Kami berhak menangguhkan atau mengakhiri akses segera dan tanpa pemberitahuan sebelumnya apabila kami menentukan, berdasarkan kebijakan kami yang wajar, bahwa penggunaan Layanan Anda termasuk dalam atau berkaitan dengan kategori yang dilarang di atas.
                </p>
                <p>
                  Daftar di atas dapat diperbarui dari waktu ke waktu untuk mencerminkan perubahan hukum yang berlaku atau pembatasan yang diberlakukan oleh Mitra Eksekusi kami, tanpa pemberitahuan terlebih dahulu kepada Anda. Apabila Anda tidak yakin apakah kegiatan usaha Anda termasuk yang dilarang, atau apabila Anda berkeyakinan bahwa kegiatan Anda memenuhi syarat untuk pengecualian dengan persetujuan sebelumnya sebagaimana disebutkan di atas, silakan hubungi kami di <Link href="mailto:legal@paymonei.com">legal@paymonei.com</Link> sebelum menggunakan Layanan untuk kegiatan tersebut.
                </p>
                <h3>4.3 Kewajiban Keamanan Sistem</h3>
                <p>
                  Anda wajib setiap saat memelihara dan mematuhi semua langkah keamanan yang layak dan tepat untuk melindungi sistem komputer Anda sendiri dan data yang tersimpan di dalamnya atau yang ditransmisikan melaluinya (&ldquo;Sistem Komputer Anda&rdquo;), termasuk sistem yang menangkap, menyimpan, atau mentransmisikan data pengguna akhir kepada Paymonei atau Mitra Eksekusi kami. Untuk menghindari keraguan, &ldquo;Sistem Komputer Anda&rdquo; berarti sistem komputer yang dioperasikan oleh atau atas nama Anda yang menangkap atau menyimpan data pengguna akhir, atau mentransmisikan data pengguna akhir kepada kami. Kewajiban ini mencakup kepatuhan terhadap semua hukum, aturan, dan peraturan yang berlaku, serta, apabila relevan, persyaratan keamanan jaringan kartu.
                </p>
                <p>Anda setuju untuk menerapkan, paling sedikit, praktik keamanan berikut sesuai dengan kebutuhan usaha Anda:</p>
                <ul>
                  <li>Membatasi akses ke Layanan hanya untuk pengguna terpercaya melalui kontrol akses IP yang sesuai;</li>
                  <li>Mengganti kunci akses API secara berkala sesuai dengan standar industri dan persyaratan peraturan yang berlaku;</li>
                  <li>Mengaktifkan autentikasi dua faktor (2FA) pada akun dasbor Paymonei Anda;</li>
                  <li>Melindungi semua kunci API, PIN, kata sandi, dan kredensial autentikasi lainnya yang digunakan untuk mengakses Layanan atau bertransaksi melalui API; dan</li>
                  <li>Apabila berlaku, mengaktifkan fitur keamanan transaksi di tingkat platform yang tersedia di dasbor Paymonei.</li>
                </ul>
                <p>
                  Kami dapat dari waktu ke waktu merekomendasikan praktik terbaik tambahan untuk keamanan dan pencegahan penipuan. Anda bertanggung jawab untuk secara mandiri meninjau semua rekomendasi tersebut dan menentukan apakah rekomendasi tersebut memadai dan sesuai untuk usaha spesifik Anda. Adalah tanggung jawab Anda, bukan kami, untuk menerapkan prosedur dan kontrol keamanan di luar yang tercantum di atas. Kami tidak memberikan pernyataan dan tidak menjamin bahwa rekomendasi keamanan yang kami berikan akan efektif untuk situasi spesifik Anda.
                </p>
                <p>
                  Atas permintaan kami, Anda setuju untuk memberikan kepada kami bukti yang wajar atas kepatuhan Anda terhadap kewajiban keamanan dalam klausul ini. Kegagalan memberikan bukti tersebut sesuai kepuasan wajar kami dapat mengakibatkan penangguhan Layanan atau pengakhiran Perjanjian ini.
                </p>
              </Section>

              {/* ── Bagian 5: Mitra Eksekusi Berlisensi ── */}
              <Section id="mitra-eksekusi" title="5. Mitra Eksekusi Berlisensi dan Kewajiban Turunan">
                <p>
                  Fitur pembayaran tertentu dari platform Paymonei meneruskan instruksi yang dikonfigurasi merchant ke Mitra Eksekusi berlisensi kami, yaitu lembaga keuangan dan penyedia jasa pembayaran yang diatur secara independen dan memiliki izin dari Bank Indonesia atau otoritas berwenang lainnya.
                </p>
                <h3>5.1 Peran Paymonei</h3>
                <p>
                  Perangkat lunak Paymonei meneruskan instruksi alur pembayaran yang Anda konfigurasikan kepada Mitra Eksekusi yang relevan. Paymonei bukan perantara atau wali amanat yang menyimpan dana pada tahap mana pun dalam proses ini. Mitra Eksekusi, bukan Paymonei, yang memproses, menyelesaikan, dan menanggung tanggung jawab regulasi atas transaksi keuangan berdasarkan kerangka regulasinya sendiri.
                </p>
                <h3>5.2 Syarat Turunan</h3>
                <p>
                  Dengan mengaktifkan fitur pembayaran, Anda mengakui bahwa syarat layanan, kebijakan penggunaan yang dapat diterima, dan kebijakan privasi Mitra Eksekusi yang bersangkutan (&ldquo;Syarat Turunan&rdquo;) juga mengatur komponen layanan keuangan dari penggunaan Anda. Syarat Turunan dimasukkan ke dalam Perjanjian ini sebagai referensi. Apabila terdapat konflik antara Perjanjian ini dan Syarat Turunan, Syarat Turunan berlaku khusus untuk layanan keuangan yang disediakan oleh Mitra Eksekusi yang bersangkutan.
                </p>
                <h3>5.3 Kewajiban Kepatuhan</h3>
                <p>
                  Paymonei mengoperasikan pemantauan risiko tingkat teknologi yang bekerja selaras dengan kewajiban AML/CFT, pemeriksaan sanksi, dan pemantauan transaksi menurut undang-undang yang dimiliki oleh Mitra Eksekusi berlisensi kami. Paymonei dapat menangguhkan akses ke fitur pembayaran atau mengakhiri hubungan merchant apabila kami atau Mitra Eksekusi kami menentukan bahwa akses yang berlanjut menimbulkan risiko regulasi, reputasi, atau hukum.
                </p>
                <h3>5.4 Persyaratan Mitra Eksekusi</h3>
                <p>
                  Mitra Eksekusi kami dapat menetapkan persyaratan kelayakan, pembatasan kategori merchant, batas transaksi, atau persyaratan verifikasi tambahan sebagai syarat penyediaan layanan mereka. Kami tidak bertanggung jawab atas keputusan Mitra Eksekusi untuk menolak, membatasi, atau mengakhiri layanan kepada Anda.
                </p>
              </Section>

              {/* ── Bagian 6: Biaya, Penagihan, dan Langganan ── */}
              <Section id="biaya" title="6. Biaya, Penagihan, dan Langganan">
                <h3>6.1 Biaya Berlangganan Platform</h3>
                <p>
                  Akses ke Layanan tunduk pada biaya berlangganan platform dan tingkatan harga yang dipublikasikan di <Link href="/pricing">paymonei.com/pricing</Link> (&ldquo;Biaya&rdquo;). Seluruh Biaya dideskripsikan sebagai biaya layanan teknologi untuk akses ke platform Paymonei. Biaya bukan merupakan biaya transaksi, biaya pemrosesan pembayaran, atau kompensasi dalam bentuk apa pun atas layanan keuangan.
                </p>
                <h3>6.2 Penagihan dan Pembayaran</h3>
                <p>
                  Biaya ditagihkan di muka secara bulanan atau tahunan, sesuai yang dipilih pada saat berlangganan. Anda mengotorisasi kami untuk menagih metode pembayaran yang Anda tunjuk untuk seluruh Biaya yang berlaku pada setiap tanggal penagihan. Seluruh Biaya dikutip dalam Dolar Amerika Serikat (USD) kecuali dinyatakan lain dan tidak termasuk pajak yang berlaku, termasuk Pajak Pertambahan Nilai (PPN) yang berlaku di Indonesia.
                </p>
                <h3>6.3 Keterlambatan Pembayaran dan Penangguhan</h3>
                <p>
                  Apabila suatu jumlah telah jatuh tempo lebih dari 14 hari, kami berhak menangguhkan akses Anda ke Layanan tanpa pemberitahuan lebih lanjut hingga saldo terutang dilunasi sepenuhnya. Keterlambatan pembayaran yang berulang dapat mengakibatkan pengakhiran Perjanjian ini.
                </p>
                <h3>6.4 Perubahan Biaya</h3>
                <p>
                  Kami dapat memperbarui jadwal Biaya dari waktu ke waktu. Perubahan Biaya yang material akan dikomunikasikan kepada Anda setidaknya 30 hari sebelumnya melalui email ke alamat akun terdaftar Anda.
                </p>
                <h3>6.5 Kebijakan Pengembalian Dana</h3>
                <p>
                  Biaya berlangganan platform tidak dapat dikembalikan kecuali diwajibkan oleh hukum yang berlaku. Biaya yang dibayarkan untuk akses perangkat lunak berbeda dari dan tidak terkait dengan pengembalian dana atas transaksi keuangan yang mendasarinya, yang merupakan tanggung jawab Mitra Eksekusi yang bersangkutan.
                </p>
              </Section>

              {/* ── Bagian 7: Kekayaan Intelektual ── */}
              <Section id="kekayaan-intelektual" title="7. Kekayaan Intelektual">
                <h3>7.1 Kepemilikan</h3>
                <p>
                  Seluruh hak kekayaan intelektual atas platform Paymonei, API, SDK, merek, algoritma proprietary, dokumentasi, turunannya, dan seluruh teknologi terkait (&ldquo;KI Kami&rdquo;) dimiliki secara eksklusif oleh Omniasky Technology Pte Ltd. Tidak ada dalam Perjanjian ini yang mengalihkan, menyerahkan, atau memberikan kepemilikan kekayaan intelektual apa pun kepada Anda, baik secara tersirat, melalui prinsip estoppel, maupun dengan cara lain apa pun. PT Evora Vera Teknologi beroperasi berdasarkan perjanjian lisensi teknologi dengan Omniasky dan tidak mengalihkan hak kepemilikan kekayaan intelektual apa pun kepada Merchant.
                </p>
                <h3>7.2 Pemberian Lisensi API dan Layanan</h3>
                <p>
                  Tunduk pada kepatuhan Anda terhadap Syarat ini dan pembayaran Biaya yang berlaku, kami memberikan kepada Anda lisensi terbatas, pribadi, non-eksklusif, tidak dapat dialihkan, tidak dapat disublisensikan, dan dapat dicabut untuk:
                </p>
                <ul>
                  <li>Menginstal dan menggunakan API kami pada mesin yang dipelihara di fasilitas yang dimiliki, di bawah penguasaan, atau disewa oleh Anda, sebanyak yang sewajarnya diperlukan untuk menggunakan Layanan dengan tujuan melakukan transaksi dengan pengguna akhir Anda;</li>
                  <li>Mengakses dan menggunakan Dokumentasi semata-mata untuk tujuan penggunaan API dan Layanan; dan</li>
                  <li>Membuat salinan cadangan arsip API dan Dokumentasi semata-mata untuk tujuan pengarsipan, dengan ketentuan bahwa seluruh pemberitahuan hak cipta dan proprietary direproduksi secara utuh pada setiap salinan.</li>
                </ul>
                <h3>7.3 Lisensi Merek Dagang</h3>
                <p>
                  Tunduk pada Syarat ini, kami memberikan Anda lisensi terbatas, bebas royalti, non-eksklusif, dan tidak dapat dialihkan untuk menampilkan merek dagang dan merek jasa kami (&ldquo;Materi Merek&rdquo;) semata-mata untuk tujuan mengidentifikasi integrasi Anda dengan, atau penggunaan Anda atas, Paymonei dalam materi pemasaran dan antarmuka produk Anda sendiri. Anda setuju untuk:
                </p>
                <ul>
                  <li>Mengubah, atas biaya Anda sendiri, Materi Merek apa pun yang menurut penilaian sepihak kami digunakan secara tidak tepat, menyesatkan, atau merendahkan;</li>
                  <li>Segera menghentikan penggunaan Materi Merek apa pun atas permintaan tertulis dari kami; dan</li>
                  <li>Tidak menambahkan, menghapus, atau memodifikasi Materi Merek atau Dokumentasi yang disediakan oleh kami tanpa persetujuan tertulis kami sebelumnya.</li>
                </ul>
                <p>Lisensi merek dagang ini secara otomatis berakhir dan dicabut seketika setelah pengakhiran atau berakhirnya Perjanjian ini karena alasan apa pun.</p>
                <h3>7.4 Pembatasan atas KI Kami</h3>
                <p>Anda tidak boleh, dan tidak boleh mengizinkan pihak ketiga mana pun untuk:</p>
                <ul>
                  <li>Menggunakan, mereproduksi, mendistribusikan, atau mengizinkan pihak lain menggunakan, mereproduksi, atau mendistribusikan KI Kami untuk tujuan selain yang secara tegas ditetapkan dalam Syarat ini;</li>
                  <li>Menyediakan KI Kami kepada pihak ketiga yang tidak berwenang;</li>
                  <li>Menyewakan, melease, menggunakan secara time-sharing, mengoperasikan sebagai biro layanan, atau menyediakan KI Kami melalui layanan interaktif, layanan pemrosesan jarak jauh, atau pengaturan serupa lainnya;</li>
                  <li>Memberi label putih (white-label), menjual kembali, atau mensublisensikan Layanan tanpa persetujuan tertulis kami sebelumnya;</li>
                  <li>Menggunakan Layanan untuk membangun produk atau layanan yang bersaing dengan Paymonei;</li>
                  <li>Menghapus, mengubah, atau mengaburkan pemberitahuan proprietary, merek, atau label apa pun dalam Layanan; atau</li>
                  <li>Secara langsung maupun tidak langsung memodifikasi, merekayasa balik, mendekompilasi, membongkar, atau mencoba memperoleh kode sumber dari KI Kami.</li>
                </ul>
                <h3>7.5 Konsekuensi Pelanggaran KI</h3>
                <p>
                  Apabila Anda melanggar ketentuan apa pun dalam Bagian 7 ini, kami berhak mengambil segala tindakan yang kami anggap perlu untuk melindungi kepentingan kami, termasuk namun tidak terbatas pada penangguhan dan/atau penghentian Layanan secara seketika tanpa pemberitahuan sebelumnya. Anda setuju untuk bertanggung jawab penuh, serta memberikan ganti rugi dan membebaskan kami dari seluruh kerugian, kerusakan, klaim, proses hukum, tuntutan, biaya, dan kewajiban yang timbul dari atau sehubungan dengan pelanggaran tersebut.
                </p>
                <h3>7.6 Data Merchant</h3>
                <p>
                  Anda mempertahankan kepemilikan atas seluruh data bisnis yang Anda unggah, kirimkan, atau hasilkan melalui penggunaan Layanan (&ldquo;Data Merchant&rdquo;). Anda memberikan kepada kami lisensi terbatas untuk memproses Data Merchant semata-mata sejauh yang diperlukan untuk menyediakan Layanan. Kami dapat menggunakan data penggunaan platform yang diagregasi dan dianonimkan untuk tujuan peningkatan produk dan analitik, asalkan data tersebut tidak dapat secara wajar digunakan untuk mengidentifikasi Anda.
                </p>
                <h3>7.7 Persetujuan Merek Merchant</h3>
                <p>
                  Anda mengakui dan menyetujui bahwa dengan menggunakan Layanan, Anda memberikan kepada kami lisensi non-eksklusif, bebas royalti, dan berlaku di seluruh dunia untuk menggunakan nama usaha, logo, dan nama dagang Anda di platform, situs web, halaman mitra kami, serta dalam materi pemasaran kami, semata-mata untuk tujuan mengidentifikasi Anda sebagai merchant Paymonei dan untuk tujuan pemasaran dan promosi yang sah lainnya. Kami akan menggunakan materi merek Anda sesuai dengan panduan merek yang wajar yang telah Anda komunikasikan kepada kami secara tertulis. Anda dapat mencabut persetujuan ini kapan saja dengan mengirimkan permintaan tertulis ke <Link href="mailto:legal@paymonei.com">legal@paymonei.com</Link>.
                </p>
              </Section>

              {/* ── Bagian 8: Perlindungan Data dan Privasi ── */}
              <Section id="perlindungan-data" title="8. Perlindungan Data dan Privasi">
                <p>
                  Pengumpulan, penggunaan, dan perlindungan data pribadi sehubungan dengan penggunaan Layanan Anda diatur oleh Kebijakan Privasi kami (<Link href="/legal/privacy-policy">paymonei.com/legal/privacy-policy</Link>), yang dimasukkan ke dalam Perjanjian ini sebagai referensi.
                </p>
                <h3>8.1 Hubungan Pengendali Data dan Pemroses Data</h3>
                <p>
                  Apabila Anda menggunakan platform Paymonei untuk memproses data pribadi pelanggan atau pihak ketiga Anda sendiri, Anda bertindak sebagai pengendali data dan Paymonei bertindak sebagai pemroses data Anda. Anda menjamin bahwa Anda memiliki dasar hukum yang sah untuk memproses data tersebut dan untuk menginstruksikan kami memproses data tersebut atas nama Anda. Pengolahan data pribadi tunduk pada Undang-Undang Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi (UU PDP) beserta peraturan pelaksanaannya.
                </p>
                <h3>8.2 Perjanjian Pemrosesan Data</h3>
                <p>
                  Perjanjian Pemrosesan Data (&ldquo;APD&rdquo;) yang mengatur pemrosesan data pribadi atas nama Anda tersedia atas permintaan. Merchant enterprise dan merchant yang diatur mungkin memerlukan APD untuk memenuhi kewajiban UU PDP atau peraturan perlindungan data yang berlaku.
                </p>
                <h3>8.3 Jaminan Merchant atas Data</h3>
                <p>Anda menyatakan dan menjamin bahwa:</p>
                <ul>
                  <li>Anda memiliki hak, persetujuan, dan dasar hukum yang diperlukan untuk berbagi data pribadi apa pun dengan Paymonei sehubungan dengan Layanan.</li>
                  <li>Pengumpulan dan penggunaan data pribadi yang berkaitan dengan pelanggan Anda sendiri mematuhi hukum perlindungan data yang berlaku di yurisdiksi Anda.</li>
                  <li>Anda akan segera memberitahu kami apabila Anda mengetahui adanya pelanggaran data yang memengaruhi data pribadi yang diproses oleh Paymonei atas nama Anda.</li>
                </ul>
              </Section>

              {/* ── Bagian 9: Penafian Jaminan ── */}
              <Section id="penafian" title="9. Penafian Jaminan">
                <h3>9.1 Dasar &ldquo;Sebagaimana Adanya&rdquo;</h3>
                <p>
                  KECUALI DINYATAKAN SECARA TEGAS DALAM PERJANJIAN INI, LAYANAN DISEDIAKAN ATAS DASAR &ldquo;SEBAGAIMANA ADANYA&rdquo; DAN &ldquo;SEBAGAIMANA TERSEDIA&rdquo; DENGAN SEGALA KEKURANGAN DAN TANPA PERNYATAAN ATAU JAMINAN DALAM BENTUK APA PUN. SEJAUH YANG DIIZINKAN OLEH HUKUM YANG BERLAKU, PT EVORA VERA TEKNOLOGI, OMNIASKY TECHNOLOGY PTE LTD, AFILIASI, PEJABAT, DAN PEMBERI LISENSI MEREKA SECARA TEGAS MENAFIKAN SELURUH JAMINAN, BAIK TERSURAT MAUPUN TERSIRAT, TERMASUK NAMUN TIDAK TERBATAS PADA JAMINAN TERSIRAT MENGENAI KELAYAKAN UNTUK DIPERDAGANGKAN, KESESUAIAN UNTUK TUJUAN TERTENTU, HAK KEPEMILIKAN, DAN TIDAK ADANYA PELANGGARAN, SERTA JAMINAN TERSIRAT APA PUN YANG TIMBUL DARI JALANNYA TRANSAKSI ATAU PELAKSANAANNYA.
                </p>
                <p>Kami tidak memberikan jaminan atau pernyataan bahwa:</p>
                <ul>
                  <li>Layanan akan memenuhi persyaratan bisnis spesifik Anda.</li>
                  <li>Layanan akan berjalan tanpa gangguan, tepat waktu, aman, atau bebas dari kesalahan setiap saat.</li>
                  <li>Transaksi pembayaran tertentu yang Anda ajukan akan berhasil dieksekusi atau diselesaikan; eksekusi transaksi merupakan tanggung jawab Mitra Eksekusi yang berlaku.</li>
                  <li>Data yang ditransmisikan melalui Layanan akan ditransmisikan secara aman tanpa disadap oleh pihak ketiga.</li>
                  <li>Cacat pada Layanan akan diperbaiki dalam jangka waktu tertentu.</li>
                </ul>
                <h3>9.2 Bukan Lembaga Keuangan</h3>
                <p>
                  Anda mengakui bahwa PT Evora Vera Teknologi maupun Omniasky Technology Pte Ltd bukan bank, lembaga jasa keuangan (LJK), bisnis jasa keuangan, atau lembaga keuangan berlisensi. Kami semata-mata bertanggung jawab atas penyampaian perangkat lunak dan konektivitas data. Kami memfasilitasi perutean instruksi alur pembayaran Anda ke Mitra Eksekusi berlisensi kami dan tidak bertanggung jawab atas tindakan, kelalaian, kesalahan, atau kegagalan pihak ketiga mana pun, termasuk namun tidak terbatas pada: (a) pengoperasian jaringan, sistem perbankan, atau infrastruktur keuangan; (b) keputusan Mitra Eksekusi untuk menolak, menunda, membatasi, atau membalik suatu transaksi; atau (c) gangguan pada sistem atau layanan pihak ketiga mana pun.
                </p>
                <h3>9.3 Penipuan dan Keakuratan Transaksi</h3>
                <p>
                  Anda mengakui dan menegaskan bahwa kami tidak bertanggung jawab untuk mengenali apakah suatu transaksi, instruksi pembayaran, faktur, atau pesanan tertentu adalah akurat, sah, atau khas dari usaha Anda. Anda sepenuhnya bertanggung jawab untuk: (a) memeriksa transaksi yang dilakukan oleh pengguna akhir atau pelanggan Anda terhadap penipuan, kesalahan, atau aktivitas yang mencurigakan; (b) melakukan pemeriksaan yang wajar atas transaksi yang tampak tidak biasa, dalam jumlah yang tidak lazim besar, atau diarahkan ke tujuan yang tidak biasa, sebelum memenuhi atau menyelesaikannya; dan (c) menghubungi pengguna akhir Anda mengenai transaksi yang mencurigakan atau salah sebagaimana diperlukan. Anda menanggung seluruh risiko penipuan, chargeback, dan transaksi tidak sah sehubungan dengan penggunaan Layanan Anda. Kami tidak bertanggung jawab atas kerugian yang timbul dari transaksi yang bersifat penipuan atau keliru.
                </p>
                <h3>9.4 Produk Merchant dan Hubungan dengan Pelanggan</h3>
                <p>
                  Kami tidak membuat pernyataan, jaminan, atau keterangan apa pun mengenai sifat, kualitas, keaslian, kesesuaian, atau aspek lain dari produk atau jasa yang Anda tawarkan kepada pengguna akhir atau pelanggan Anda. Anda sepenuhnya bertanggung jawab atas: (a) kualitas, keabsahan, dan pengiriman produk serta jasa Anda; (b) layanan pelanggan, pengembalian dana, pengembalian barang, dan kewajiban purna jual Anda; dan (c) mengkomunikasikan kepada pengguna akhir Anda syarat, ketentuan, dan tujuan dari setiap transaksi. Kami berhak mengakhiri Layanan seketika apabila terdapat alasan yang wajar untuk meyakini bahwa Anda terlibat dalam transaksi ilegal dengan pengguna akhir, dan kami tidak memiliki tanggung jawab atau kewajiban apa pun sehubungan dengan transaksi tersebut atau kepada pihak mana pun yang terdampak.
                </p>
                <h3>9.5 Kewajiban Perpajakan</h3>
                <p>
                  Kami tidak memberikan pernyataan atau jaminan mengenai keakuratan tarif pajak atau perhitungan pajak yang berlaku yang mungkin dihasilkan oleh atau melalui Layanan. Anda sepenuhnya bertanggung jawab untuk menentukan, memungut, dan membayar seluruh pajak yang berlaku atas penjualan produk atau jasa Anda, termasuk namun tidak terbatas pada Pajak Pertambahan Nilai (PPN), pajak penghasilan, pajak pemotongan, pungutan wajib, atau kewajiban fiskal lainnya yang berlaku di yurisdiksi Anda.
                </p>
                <h3>9.6 Keamanan Dana</h3>
                <p>
                  Kontrol keamanan kami melindungi data perangkat lunak, kredensial API, dan instruksi alur kerja yang ditransmisikan melalui platform. Keamanan, asuransi, perlindungan regulasi, dan pengamanan dana keuangan merupakan tanggung jawab tunggal Mitra Eksekusi berlisensi kami berdasarkan kerangka regulasi mereka masing-masing.
                </p>
                <h3>9.7 Tidak Ada Jaminan Bebas Penipuan</h3>
                <p>
                  Kami tidak menyatakan, menjamin, atau memberikan garansi bahwa Anda, usaha Anda, atau pengguna akhir Anda tidak akan pernah menjadi korban penipuan. Kami dan afiliasi kami tidak memiliki tanggung jawab kepada Anda atas segala kerugian finansial maupun non-finansial, kerugian langsung maupun tidak langsung, atau konsekuensi lain dari penipuan. Kami tidak dan tidak akan memberikan ganti rugi kepada Anda atas kerugian apa pun yang disebabkan oleh penipuan, terlepas dari: (a) apakah Anda telah memenuhi kewajiban keamanan dalam Bagian 4.3 Syarat ini; dan/atau (b) apakah Anda telah mengikuti rekomendasi praktik terbaik atau kontrol keamanan yang kami sarankan.
                </p>
                <h3>9.8 Bantuan Investigasi Penipuan</h3>
                <p>
                  Kami dapat, atas kebijakan kami sendiri, membantu Anda dalam penyelidikan apa pun oleh otoritas penegak hukum sehubungan dengan pemulihan dana yang hilang akibat penipuan. Anda setuju bahwa bantuan tersebut tidak dan tidak boleh ditafsirkan sebagai asumsi tanggung jawab, kewajiban, atau beban oleh kami sehubungan dengan penipuan atau kerugian tersebut.
                </p>
                <h3>9.9 Data Sinyal Penipuan</h3>
                <p>
                  Kami dapat memberikan kepada Anda data atau sinyal subjektif mengenai kemungkinan bahwa suatu transaksi tertentu mungkin merupakan transaksi penipuan, yang mungkin memerlukan tindakan atau peninjauan oleh Anda. Kami juga dapat mempertimbangkan tindakan atau kelalaian Anda dalam merespons sinyal tersebut ketika menghasilkan penilaian penipuan di masa mendatang. Anda mengakui dan setuju bahwa: (a) Anda sepenuhnya dan secara pribadi bertanggung jawab atas tindakan apa pun yang Anda pilih untuk dilakukan (atau tidak dilakukan) sehubungan dengan data tersebut; (b) kami tidak memberikan pernyataan atau jaminan bahwa data sinyal penipuan apa pun akan secara akurat mendeteksi penipuan dalam segala hal; dan (c) kami tidak bertanggung jawab atas kerugian apa pun yang timbul dari transaksi penipuan yang tidak terdeteksi oleh, atau yang terjadi meskipun telah ada, data sinyal penipuan yang diberikan kepada Anda.
                </p>
                <h3>9.10 Respons terhadap Laporan Penipuan dari Pihak Eksternal</h3>
                <p>
                  Apabila kami menerima informasi dari mitra saluran pembayaran, regulator, otoritas penegak hukum, pengguna akhir, atau anggota masyarakat yang mengindikasikan dugaan aktivitas penipuan, kecurangan, atau melanggar hukum oleh Anda atau pengguna akhir mana pun yang terkait dengan akun Anda, kami dapat, selain dari hak lain yang mungkin kami miliki berdasarkan Perjanjian ini, meminta Anda untuk: (i) melakukan tinjauan berkala atau insidental atas transaksi atau pengguna akhir yang relevan; (ii) memberikan informasi atau mengambil tindakan, remediasi, atau langkah penyelesaian sehubungan dengan aktivitas yang dilaporkan; (iii) menyampaikan rencana remediasi tertulis untuk menangani aktivitas yang dilaporkan beserta strategi manajemen risiko secara keseluruhan, dalam jangka waktu yang wajar berdasarkan kasus per kasus; dan (iv) terus memberi tahu kami tentang pelaksanaan rencana tersebut. Kegagalan mematuhi persyaratan ini dapat mengakibatkan penangguhan atau pengakhiran Layanan.
                </p>
              </Section>

              {/* ── Bagian 10: Batasan Tanggung Gugat ── */}
              <Section id="tanggung-gugat" title="10. Batasan Tanggung Gugat">
                <h3>10.1 Pengecualian Kerugian Tidak Langsung</h3>
                <p>
                  SEJAUH YANG DIIZINKAN OLEH HUKUM YANG BERLAKU, DALAM KEADAAN APA PUN PT EVORA VERA TEKNOLOGI, DIREKTUR, KARYAWAN, MITRA TEKNOLOGI RESMI, ATAU AGENNYA TIDAK AKAN BERTANGGUNG GUGAT KEPADA ANDA ATAU PIHAK KETIGA MANA PUN ATAS KERUGIAN TIDAK LANGSUNG, INSIDENTAL, KHUSUS, KONSEKUENSIAL, PATUT DICONTOH, ATAU HUKUMAN, TERMASUK NAMUN TIDAK TERBATAS PADA:
                </p>
                <ul>
                  <li>Kehilangan keuntungan, pendapatan, peluang bisnis, nama baik, atau penghematan yang diantisipasi.</li>
                  <li>Kehilangan reputasi atau gangguan bisnis.</li>
                  <li>Kehilangan atau kerusakan data atau dokumentasi.</li>
                  <li>Kerugian yang timbul akibat kegagalan, keterlambatan, pembatasan, atau penolakan Mitra Eksekusi berlisensi dalam memproses, menyelesaikan, atau menolak transaksi pembayaran.</li>
                  <li>Kerugian yang timbul akibat peristiwa jaringan blockchain, kegagalan kontrak pintar, atau sifat ireversibel transaksi on-chain.</li>
                  <li>Tindakan regulasi, denda, atau biaya kepatuhan yang dikenakan kepada Anda oleh otoritas mana pun.</li>
                </ul>
                <h3>10.2 Pengecualian Tanggung Gugat Khusus</h3>
                <p>Tanpa mengesampingkan ketentuan di atas, PT Evora Vera Teknologi tidak bertanggung jawab atas kerugian yang timbul akibat atau sehubungan dengan:</p>
                <ul>
                  <li>Kelebihan pembayaran, kesalahan pembayaran, chargeback, atau transaksi tidak sah yang disebabkan oleh Anda atau pengguna akhir maupun pelanggan Anda.</li>
                  <li>Penipuan, ketidakjujuran, atau perbuatan buruk oleh Anda, merchant Anda, karyawan, direktur, pejabat, agen, atau pihak mana pun yang bertindak atas nama Anda.</li>
                  <li>Akses atau penggunaan tidak sah atas akun, kunci API, atau token akses Anda, termasuk melalui kredensial yang hilang atau dicuri.</li>
                  <li>Kegagalan Anda untuk menerapkan atau mempertahankan pengendalian keamanan, atau memasang pembaruan (patch) maupun peningkatan (upgrade) yang kami sediakan apabila pembaruan tersebut dapat mencegah kerugian.</li>
                  <li>Kegagalan Anda untuk mematuhi ketentuan Perjanjian ini, hukum yang berlaku, atau syarat dari Mitra Eksekusi mana pun.</li>
                  <li>Keputusan Mitra Eksekusi berlisensi untuk menolak, membatasi, membekukan, atau mengakhiri layanan kepada Anda, termasuk karena alasan kepatuhan atau regulasi.</li>
                  <li>Penggunaan Layanan oleh Anda bersama dengan perangkat lunak atau perangkat keras pihak ketiga yang tidak diizinkan atau tidak kompatibel.</li>
                  <li>Kegagalan Anda untuk memperoleh atau mempertahankan lisensi, izin, atau persetujuan regulasi yang diperlukan untuk kegiatan usaha Anda.</li>
                  <li>Pelanggaran kekayaan intelektual yang dilakukan oleh Anda sehubungan dengan penggunaan Layanan.</li>
                  <li>Kerugian yang disebabkan oleh keadaan kahar sebagaimana diuraikan dalam Bagian 14.5.</li>
                </ul>
                <h3>10.3 Batas Tanggung Gugat Agregat</h3>
                <p>
                  Tanggung gugat agregat kami kepada Anda yang timbul dari atau sehubungan dengan Perjanjian ini, dari sebab apa pun dan terlepas dari bentuk tindakannya, senantiasa dibatasi pada total Biaya berlangganan platform yang telah Anda bayarkan kepada PT Evora dalam tiga (3) bulan sebelum kejadian yang menimbulkan klaim.
                </p>
                <h3>10.4 Mekanisme Pemulihan</h3>
                <p>
                  Apabila kami menderita kerugian yang disebabkan oleh tindakan atau kelalaian Anda yang menimbulkan kewajiban berdasarkan Perjanjian ini, kami dapat: (a) memperhitungkan jumlah tersebut terhadap kredit, pengembalian dana, atau jumlah lain yang terutang kepada Anda; atau (b) menerbitkan pemberitahuan tertulis untuk meminta pengembalian jumlah tersebut, dan Anda wajib mengembalikannya dalam tujuh (7) hari kalender sejak penerimaan pemberitahuan.
                </p>
                <h3>10.5 Kewajiban Pemberitahuan Klaim</h3>
                <p>
                  Setiap pihak wajib memberitahu pihak lainnya secara tertulis dalam waktu lima (5) hari kerja setelah mengetahui adanya klaim atau keadaan yang dapat menimbulkan klaim berdasarkan Perjanjian ini. Kegagalan memberikan pemberitahuan tepat waktu tidak menggugurkan hak para pihak, namun dapat mengurangi jumlah yang dapat dipulihkan apabila keterlambatan tersebut secara material merugikan kemampuan pihak lain untuk membela diri atau memitigasi kerugian.
                </p>
                <h3>10.6 Pengecualian dari Pembatasan</h3>
                <p>
                  Pembatasan dan pengecualian dalam Bagian 10 ini tidak berlaku untuk: (a) kewajiban atas kematian atau cedera fisik yang disebabkan oleh kelalaian berat atau perbuatan yang disengaja dari pihak kami; atau (b) kewajiban lain yang tidak dapat dibatasi atau dikecualikan berdasarkan hukum yang berlaku.
                </p>
                <p>
                  Beberapa yurisdiksi tidak mengizinkan pengecualian atau pembatasan jenis tanggung jawab tertentu. Sejauh hukum tersebut berlaku, pembatasan di atas berlaku hanya sejauh yang diizinkan.
                </p>
              </Section>

              {/* ── Bagian 11: Ganti Rugi ── */}
              <Section id="ganti-rugi" title="11. Ganti Rugi">
                <h3>11.1 Ganti Rugi dari PT Evora</h3>
                <p>
                  Tunduk pada kepatuhan Anda terhadap Perjanjian ini, PT Evora Vera Teknologi akan membela dan memberikan ganti rugi kepada Anda serta direktur, pejabat, dan karyawan Anda (&ldquo;Penerima Ganti Rugi Anda&rdquo;) terhadap klaim pihak ketiga yang menyatakan bahwa platform Paymonei, sebagaimana disediakan oleh kami, melanggar hak kekayaan intelektual, paten, rahasia dagang, atau hak proprietary pihak ketiga lainnya. Apabila klaim tersebut timbul atau secara wajar diperkirakan akan timbul, kami dapat, berdasarkan pilihan kami: (i) memperoleh hak agar Anda tetap dapat menggunakan Layanan; (ii) memodifikasi atau mengganti elemen yang terdampak sehingga tidak lagi melanggar; atau (iii) apabila kedua pilihan tersebut tidak layak secara komersial, mengakhiri Perjanjian ini dengan pemberitahuan yang wajar.
                </p>
                <p>
                  Kewajiban ganti rugi kami berdasarkan Bagian 11.1 ini tidak berlaku apabila dugaan pelanggaran timbul dari: (a) modifikasi atas Layanan yang dilakukan oleh Anda; (b) penggunaan Layanan oleh Anda bersama dengan produk pihak ketiga yang tidak diizinkan; (c) kelanjutan penggunaan oleh Anda setelah kami menyediakan alternatif yang tidak melanggar; atau (d) kegagalan Anda untuk memasang pembaruan keamanan atau patch yang kami sediakan.
                </p>
                <h3>11.2 Ganti Rugi dari Anda</h3>
                <p>
                  Anda setuju untuk membela, melindungi, dan memberikan ganti rugi, atas biaya Anda sendiri, kepada PT Evora Vera Teknologi, Omniasky Technology Pte Ltd, dan masing-masing direktur, pejabat, karyawan, dan agen mereka (secara kolektif, &ldquo;Penerima Ganti Rugi Kami&rdquo;) dari dan terhadap seluruh gugatan, klaim, proses hukum, tindakan berdasarkan peraturan, dan kerugian terkait (termasuk biaya penasihat hukum dan profesional, biaya pengadilan, serta biaya penyelesaian sengketa lainnya) yang diderita atau timbul sejauh didasarkan pada atau timbul dari:
                </p>
                <ul>
                  <li>Akses atau penggunaan Anda atas Layanan.</li>
                  <li>Pelanggaran Anda terhadap ketentuan Perjanjian ini.</li>
                  <li>Informasi yang tidak akurat, palsu, atau menyesatkan yang Anda berikan kepada kami atau kepada Mitra Eksekusi kami.</li>
                  <li>Pelanggaran Anda terhadap hukum atau peraturan yang berlaku sehubungan dengan penggunaan Layanan Anda.</li>
                  <li>Penipuan, ketidakjujuran, atau perbuatan yang disengaja oleh Anda, karyawan, direktur, pejabat, agen, atau pihak mana pun yang bertindak untuk dan atas nama Anda.</li>
                  <li>Pelanggaran Anda terhadap hak pihak ketiga mana pun, termasuk pelanggan Anda sendiri.</li>
                  <li>Kegagalan Anda untuk memperoleh atau mempertahankan lisensi atau persetujuan regulasi yang diperlukan untuk kegiatan usaha Anda.</li>
                  <li>Pelanggaran kekayaan intelektual yang dilakukan oleh Anda sehubungan dengan penggunaan Layanan.</li>
                </ul>
                <h3>11.3 Prosedur Ganti Rugi</h3>
                <p>
                  Pihak yang meminta ganti rugi (&ldquo;Pihak Penerima Ganti Rugi&rdquo;) wajib: (a) memberitahu pihak pemberi ganti rugi secara tertulis dalam waktu tiga (3) hari kerja setelah mengetahui klaim tersebut; (b) memberikan kendali tunggal atas pembelaan dan penyelesaian kepada pihak pemberi ganti rugi, dengan ketentuan bahwa Pihak Penerima Ganti Rugi harus memberikan persetujuan tertulis sebelumnya atas penyelesaian apa pun yang membebankan kewajiban kepada Pihak Penerima Ganti Rugi atau mencakup pengakuan kewajiban; dan (c) memberikan kerja sama dan informasi yang wajar dalam mendukung pembelaan. Kegagalan memberikan pemberitahuan tepat waktu tidak menggugurkan hak atas ganti rugi, kecuali apabila keterlambatan tersebut secara material merugikan kemampuan pembelaan pihak pemberi ganti rugi.
                </p>
              </Section>

              {/* ── Bagian 12: Jangka Waktu, Penangguhan, dan Pengakhiran ── */}
              <Section id="pengakhiran" title="12. Jangka Waktu, Penangguhan, dan Pengakhiran">
                <h3>12.1 Jangka Waktu</h3>
                <p>
                  Perjanjian ini mulai berlaku sejak aktivasi akun Anda dan berlanjut hingga diakhiri oleh salah satu pihak sesuai dengan bagian ini.
                </p>
                <h3>12.2 Pengakhiran atas Kehendak Sendiri</h3>
                <p>
                  Kedua belah pihak dapat mengakhiri Perjanjian ini kapan saja dengan memberikan pemberitahuan tertulis 30 hari kepada pihak lainnya. Anda dapat memulai pengakhiran dengan menghubungi kami di <Link href="mailto:legal@paymonei.com">legal@paymonei.com</Link>.
                </p>
                <h3>12.3 Pengakhiran Segera</h3>
                <p>Kami dapat menangguhkan atau mengakhiri akses Anda segera dan tanpa pemberitahuan sebelumnya apabila:</p>
                <ul>
                  <li>Anda melanggar ketentuan kebijakan penggunaan yang dilarang (Bagian 4.2).</li>
                  <li>Anda memberikan informasi yang secara material palsu, tidak akurat, atau menyesatkan saat pendaftaran atau pada waktu kapan pun selama penggunaan Layanan Anda.</li>
                  <li>Mitra Eksekusi berlisensi mengakhiri atau membatasi layanan mereka kepada Anda.</li>
                  <li>Kami menerima perintah hukum yang sah, arahan regulasi, atau permintaan penegak hukum yang mensyaratkan penangguhan atau pengakhiran.</li>
                  <li>Anda menjadi tidak mampu membayar utang, masuk dalam kepailitan atau PKPU, atau melakukan penggabungan untuk kepentingan kreditur.</li>
                  <li>Kami secara wajar menentukan bahwa penggunaan Layanan Anda yang berlanjut menimbulkan risiko hukum, regulasi, atau reputasi yang material bagi kami atau Mitra Eksekusi kami.</li>
                </ul>
                <h3>12.4 Akibat Pengakhiran</h3>
                <p>
                  Setelah pengakhiran, hak Anda untuk mengakses dan menggunakan Layanan berakhir segera. Anda akan memiliki jangka waktu 30 hari setelah pengakhiran untuk mengekspor Data Merchant Anda. Setelah jangka waktu ini, data Anda akan dihapus atau dianonimkan sesuai jadwal retensi dalam Kebijakan Privasi kami. Biaya yang telah terhutang dan jumlah terutang lainnya tetap harus dibayarkan.
                </p>
              </Section>

              {/* ── Bagian 13: Hukum yang Berlaku dan Penyelesaian Sengketa ── */}
              <Section id="hukum-berlaku" title="13. Hukum yang Berlaku dan Penyelesaian Sengketa">
                <h3>13.1 Hukum yang Berlaku</h3>
                <p>
                  Perjanjian ini dan setiap sengketa atau klaim yang timbul dari atau sehubungan dengan Perjanjian ini atau pokok perkaranya atau pembentukannya, termasuk sengketa atau klaim non-kontraktual, diatur dan ditafsirkan berdasarkan hukum Republik Indonesia.
                </p>
                <h3>13.2 Negosiasi dengan Itikad Baik</h3>
                <p>
                  Sebelum memulai penyelesaian sengketa secara formal, para pihak sepakat untuk berupaya menyelesaikan sengketa, kontroversi, atau klaim yang timbul dari atau berkaitan dengan Perjanjian ini melalui negosiasi langsung dengan itikad baik. Salah satu pihak dapat memulai proses ini melalui pemberitahuan tertulis kepada pihak lainnya. Apabila sengketa tidak terselesaikan dalam 30 hari sejak pemberitahuan tersebut, salah satu pihak dapat melanjutkan ke arbitrase sebagaimana diatur di bawah.
                </p>
                <h3>13.3 Arbitrase</h3>
                <p>
                  Setiap sengketa, kontroversi, atau klaim yang timbul dari atau berkaitan dengan Perjanjian ini, atau pelanggaran, pengakhiran, atau ketidakabsahannya, yang tidak dapat diselesaikan melalui negosiasi, akan diselesaikan secara final melalui arbitrase mengikat yang dikelola oleh <strong>Badan Arbitrase Nasional Indonesia (BANI)</strong> sesuai dengan Peraturan dan Prosedur BANI yang berlaku. Majelis terdiri dari seorang arbitrator tunggal. Tempat arbitrase adalah Jakarta, Indonesia. Bahasa arbitrase adalah Bahasa Indonesia.
                </p>
                <h3>13.4 Dasar Individual</h3>
                <p>
                  Seluruh sengketa diselesaikan secara individual. Anda setuju untuk tidak mengajukan atau berpartisipasi dalam gugatan atau arbitrase class action, kolektif, konsolidasi, atau representatif terhadap kami yang timbul dari atau berkaitan dengan Perjanjian ini.
                </p>
              </Section>

              {/* ── Bagian 14: Ketentuan Umum ── */}
              <Section id="ketentuan-umum" title="14. Ketentuan Umum">
                <h3>14.1 Perjanjian Seluruhnya</h3>
                <p>
                  Perjanjian ini, bersama dengan Kebijakan Privasi kami dan Syarat Turunan dari Mitra Eksekusi yang berlaku, merupakan keseluruhan perjanjian antara Anda dan PT Evora Vera Teknologi sehubungan dengan Layanan dan menggantikan seluruh perjanjian, pernyataan, dan kesepahaman sebelumnya dan yang berlaku bersamaan.
                </p>
                <h3>14.2 Perubahan</h3>
                <p>
                  Kami dapat memperbarui Syarat ini dari waktu ke waktu untuk mencerminkan perubahan dalam Layanan kami, persyaratan hukum, atau operasi bisnis. Apabila perubahan bersifat material, kami akan memberikan pemberitahuan setidaknya 14 hari sebelumnya melalui email ke alamat akun terdaftar Anda dan melalui pemberitahuan yang jelas di situs web kami sebelum Syarat yang direvisi mulai berlaku. Akses atau penggunaan Layanan Anda yang berlanjut setelah tanggal efektif Syarat yang direvisi merupakan penerimaan Anda atas perubahan tersebut. Apabila Anda tidak setuju, Anda harus berhenti menggunakan Layanan sebelum tanggal efektif dan memberitahu kami di <Link href="mailto:legal@paymonei.com">legal@paymonei.com</Link>.
                </p>
                <h3>14.3 Pemisahan Ketentuan</h3>
                <p>
                  Apabila ketentuan apa pun dalam Perjanjian ini ditemukan melanggar hukum, batal, atau tidak dapat dilaksanakan berdasarkan hukum yang berlaku, ketentuan tersebut dianggap dapat dipisahkan dan tidak memengaruhi keabsahan dan keberlakuan ketentuan-ketentuan yang tersisa.
                </p>
                <h3>14.4 Tidak Ada Pengabaian</h3>
                <p>
                  Kegagalan kami untuk menegakkan hak atau ketentuan apa pun dalam Perjanjian ini tidak merupakan pengabaian hak atau ketentuan tersebut kecuali diakui dan disetujui oleh kami secara tertulis.
                </p>
                <h3>14.5 Keadaan Kahar</h3>
                <p>
                  Tidak ada pihak yang bertanggung jawab atas keterlambatan atau kegagalan memenuhi kewajiban berdasarkan Perjanjian ini apabila keterlambatan atau kegagalan tersebut disebabkan oleh keadaan di luar kendali yang wajar dari salah satu pihak, termasuk namun tidak terbatas pada bencana alam, perang, kerusuhan sipil, tindakan pemerintah, perubahan regulasi, pandemi, pemogokan, gangguan infrastruktur, atau gangguan layanan internet.
                </p>
                <h3>14.6 Pengalihan</h3>
                <p>
                  PT Evora Vera Teknologi dapat mengalihkan atau menova Perjanjian ini, sebagian atau seluruhnya, kepada afiliasi atau entitas penerus sehubungan dengan merger, akuisisi, atau penjualan aset yang secara substansial, tanpa persetujuan Anda. Anda tidak dapat mengalihkan atau mentransfer hak atau kewajiban apa pun berdasarkan Perjanjian ini tanpa persetujuan tertulis kami sebelumnya.
                </p>
                <h3>14.7 Pemberitahuan</h3>
                <p>
                  Pemberitahuan hukum kepada Paymonei harus dikirimkan ke <Link href="mailto:legal@paymonei.com">legal@paymonei.com</Link>. Pemberitahuan berlaku sejak diterima dengan konfirmasi. Kami akan mengirimkan pemberitahuan kepada Anda ke alamat email yang terkait dengan akun terdaftar Anda.
                </p>
                <h3>14.8 Bahasa</h3>
                <p>
                  Perjanjian ini dibuat dalam Bahasa Indonesia. Versi Bahasa Indonesia ini adalah dokumen yang mengikat secara hukum bagi merchant yang berdomisili atau beroperasi di Indonesia. Terjemahan bahasa Inggris dari ketentuan ini tersedia di <Link href="/legal/terms-of-service">paymonei.com/legal/terms-of-service</Link> sebagai referensi.
                </p>
              </Section>

              {/* ── Bagian 15: Kontak ── */}
              <Section id="kontak" title="15. Kontak">
                <p>
                  Untuk pertanyaan, kekhawatiran, atau permintaan apa pun yang berkaitan dengan Syarat dan Ketentuan ini atau penggunaan Layanan Anda, silakan hubungi kami melalui saluran yang relevan di bawah:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 not-prose mt-6">
                  <div className="bg-[#F5F5F2] border border-[#EAEAE6] rounded-lg p-5">
                    <p className="text-[11px] uppercase tracking-wider text-[#999] font-medium mb-3">Legal &amp; Kontrak</p>
                    <p className="text-[15px] text-[#0C0C0C] font-medium mb-1">Paymonei</p>
                    <Link href="mailto:legal@paymonei.com" className="text-[14px] text-[#0C0C0C] underline underline-offset-2 hover:opacity-70 block">
                      legal@paymonei.com
                    </Link>
                  </div>
                  <div className="bg-[#F5F5F2] border border-[#EAEAE6] rounded-lg p-5">
                    <p className="text-[11px] uppercase tracking-wider text-[#999] font-medium mb-3">Pertanyaan Privasi</p>
                    <p className="text-[15px] text-[#0C0C0C] font-medium mb-1">Paymonei</p>
                    <Link href="mailto:privacy@paymonei.com" className="text-[14px] text-[#0C0C0C] underline underline-offset-2 hover:opacity-70 block">
                      privacy@paymonei.com
                    </Link>
                  </div>
                  <div className="bg-[#F5F5F2] border border-[#EAEAE6] rounded-lg p-5">
                    <p className="text-[11px] uppercase tracking-wider text-[#999] font-medium mb-3">Dukungan Umum</p>
                    <p className="text-[15px] text-[#0C0C0C] font-medium mb-1">Paymonei</p>
                    <Link href="mailto:support@paymonei.com" className="text-[14px] text-[#0C0C0C] underline underline-offset-2 hover:opacity-70 block">
                      support@paymonei.com
                    </Link>
                  </div>
                </div>
                <p className="text-[14px] text-[#777] mt-6 font-light">
                  Syarat dan Ketentuan ini diterbitkan oleh PT Evora Vera Teknologi, perseroan terbatas yang didirikan di Indonesia, selaku mitra teknologi dan operasional resmi Paymonei di Indonesia. Teknologi platform Paymonei dimiliki oleh Omniasky Technology Pte Ltd, terdaftar di Singapura.
                </p>
              </Section>

            </article>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

// ─── Sub-components ──────────────────────────────────────────────────────────

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mb-14 scroll-mt-28">
      <div className="border-b border-[#EAEAE6] pb-4 mb-8">
        <h2
          className="text-[clamp(1.4rem,2.5vw,1.8rem)] font-light tracking-[-0.02em] text-[#0C0C0C]"
          style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
        >
          {title}
        </h2>
      </div>
      <div className="text-[15px] text-[#555] leading-[1.8] font-light space-y-4">
        <LegalProse>{children}</LegalProse>
      </div>
    </section>
  );
}

function LegalProse({ children }: { children: React.ReactNode }) {
  return (
    <div className="
      [&_p]:text-[15px] [&_p]:text-[#555] [&_p]:leading-[1.8] [&_p]:font-light
      [&_h3]:text-[15px] [&_h3]:font-semibold [&_h3]:text-[#0C0C0C] [&_h3]:mt-8 [&_h3]:mb-3
      [&_ul]:list-disc [&_ul]:list-outside [&_ul]:pl-5 [&_ul]:space-y-2
      [&_li]:text-[15px] [&_li]:text-[#555] [&_li]:leading-[1.8] [&_li]:font-light
      [&_strong]:text-[#333] [&_strong]:font-medium
      [&_a]:text-[#0C0C0C] [&_a]:underline [&_a]:underline-offset-2 [&_a]:hover:opacity-70 [&_a]:transition-opacity
      [&_table]:w-full [&_table]:border-collapse [&_table]:mt-2 [&_table]:mb-4 [&_table]:text-[14px]
      [&_th]:text-left [&_th]:py-2.5 [&_th]:px-4 [&_th]:text-[11px] [&_th]:uppercase [&_th]:tracking-wider [&_th]:text-[#999] [&_th]:font-medium [&_th]:border-b [&_th]:border-[#EAEAE6]
      [&_td]:py-3 [&_td]:px-4 [&_td]:text-[#555] [&_td]:border-b [&_td]:border-[#F5F5F2] [&_td]:align-top [&_td]:leading-relaxed
      [&_tr:last-child_td]:border-0
    ">
      {children}
    </div>
  );
}
