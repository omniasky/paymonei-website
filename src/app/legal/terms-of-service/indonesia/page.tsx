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
  { id: "kelayakan", label: "3. Kelayakan Merchant dan Pendaftaran" },
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
              <Section id="kelayakan" title="3. Kelayakan Merchant dan Pendaftaran Akun">
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
                  Sebagai bagian dari proses orientasi merchant, verifikasi identitas perwakilan usaha resmi dan direktur dilakukan oleh mitra verifikasi pihak ketiga yang kami tunjuk. Verifikasi ini merupakan langkah kontrol akses platform perangkat lunak. Kewajiban kepatuhan AML/CFT yang berlaku atas transaksi pembayaran dipenuhi oleh Mitra Eksekusi berlisensi kami berdasarkan kerangka regulasi mereka masing-masing.
                </p>
                <h3>3.3 Keamanan Akun</h3>
                <p>
                  Anda sepenuhnya bertanggung jawab untuk menjaga kerahasiaan dan keamanan kredensial akun, kunci API, dan token akses Anda. Anda bertanggung jawab penuh atas seluruh aktivitas yang dilakukan di bawah akun Anda, baik yang diotorisasi maupun tidak. Anda harus segera memberitahu kami di <Link href="mailto:legal@paymonei.com">legal@paymonei.com</Link> apabila Anda mengetahui adanya akses tidak sah ke akun Anda.
                </p>
                <h3>3.4 Keakuratan Informasi</h3>
                <p>
                  Anda menyatakan dan menjamin bahwa seluruh informasi yang Anda berikan saat pendaftaran dan selama penggunaan Layanan adalah akurat, lengkap, dan tidak menyesatkan. Anda setuju untuk segera memperbarui informasi akun apabila terjadi perubahan material. Kami berhak menangguhkan atau mengakhiri akses apabila kami menentukan bahwa informasi yang diberikan tidak akurat atau telah menjadi tidak akurat secara material.
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
                  <li><strong>Kegiatan ilegal:</strong> Setiap kegiatan yang melanggar hukum dan peraturan yang berlaku, termasuk penipuan, pencucian uang, pendanaan terorisme, penghindaran pajak, atau pelanggaran sanksi.</li>
                  <li><strong>Konten dan layanan dewasa:</strong> Hiburan dewasa, konten pornografi, layanan pendamping, atau materi seksual eksplisit.</li>
                  <li><strong>Perjudian dan taruhan daring:</strong> Kasino daring, taruhan olahraga, layanan lotere, atau segala bentuk perjudian di mana uang atau nilai berisiko, kecuali memiliki lisensi yang sesuai dan mendapat persetujuan tertulis dari kami sebelumnya.</li>
                  <li><strong>Zat terlarang:</strong> Penjualan atau distribusi narkoba ilegal, zat terlarang, atau obat resep tanpa otorisasi regulasi yang tepat.</li>
                  <li><strong>Senjata dan senjata api:</strong> Penjualan atau transfer senjata api, amunisi, bahan peledak, atau aksesori terkait.</li>
                  <li><strong>Skema piramida dan penipuan keuangan:</strong> Skema piramida, skema Ponzi, penawaran efek yang tidak terdaftar, atau penipuan investasi.</li>
                  <li><strong>Kegiatan yang dikenakan sanksi:</strong> Setiap usaha, transaksi, atau pihak lawan yang melibatkan individu, entitas, atau yurisdiksi yang dikenakan sanksi ekonomi internasional komprehensif.</li>
                  <li><strong>Layanan pengiriman uang tidak berlisensi:</strong> Beroperasi sebagai pengirim uang tidak berlisensi, penukaran mata uang, atau layanan serupa menggunakan platform Paymonei sebagai infrastruktur.</li>
                  <li><strong>Penyalahgunaan platform:</strong> Upaya rekayasa balik, melewati langkah keamanan, memasukkan malware, atau memberikan beban yang tidak wajar pada infrastruktur kami.</li>
                  <li><strong>Penyampaian informasi yang tidak benar:</strong> Memberikan informasi yang salah, menyesatkan, atau tidak akurat secara material kepada kami, kepada Mitra Eksekusi, atau kepada pelanggan Anda sendiri.</li>
                </ul>
                <p>
                  Kami berhak menangguhkan atau mengakhiri akses segera dan tanpa pemberitahuan sebelumnya apabila kami menentukan, berdasarkan kebijakan kami yang wajar, bahwa penggunaan Layanan Anda termasuk dalam kategori yang dilarang di atas.
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
                  Seluruh hak kekayaan intelektual atas platform Paymonei, API, SDK, merek, algoritma proprietary, dokumentasi, dan teknologi terkait dimiliki secara eksklusif oleh Omniasky Technology Pte Ltd. Tidak ada dalam Perjanjian ini yang mengalihkan kepemilikan kekayaan intelektual apa pun kepada Anda. PT Evora Vera Teknologi beroperasi berdasarkan perjanjian lisensi teknologi dengan Omniasky dan tidak mengalihkan hak kepemilikan kekayaan intelektual kepada Merchant.
                </p>
                <h3>7.2 Pemberian Lisensi</h3>
                <p>
                  Tunduk pada kepatuhan Anda terhadap Syarat ini dan pembayaran Biaya yang berlaku, kami memberikan kepada Anda lisensi terbatas, non-eksklusif, tidak dapat dialihkan, tidak dapat disublisensikan, dan dapat dicabut untuk mengakses serta menggunakan Layanan semata-mata untuk operasi bisnis internal Anda selama masa berlangganan aktif Anda.
                </p>
                <h3>7.3 Pembatasan</h3>
                <p>Anda tidak boleh, dan tidak boleh mengizinkan pihak ketiga mana pun untuk:</p>
                <ul>
                  <li>Menyalin, memodifikasi, mengadaptasi, merekayasa balik, mendekompilasi, atau membongkar bagian mana pun dari Layanan.</li>
                  <li>Memberi label putih (white-label), menjual kembali, atau mensublisensikan Layanan tanpa persetujuan tertulis kami sebelumnya.</li>
                  <li>Menggunakan Layanan untuk membangun produk atau layanan yang bersaing dengan Paymonei.</li>
                  <li>Menghapus, mengubah, atau mengaburkan pemberitahuan proprietary, merek, atau label apa pun dalam Layanan.</li>
                </ul>
                <h3>7.4 Data Merchant</h3>
                <p>
                  Anda mempertahankan kepemilikan atas seluruh data bisnis yang Anda unggah, kirimkan, atau hasilkan melalui penggunaan Layanan (&ldquo;Data Merchant&rdquo;). Anda memberikan kepada kami lisensi terbatas untuk memproses Data Merchant semata-mata sejauh yang diperlukan untuk menyediakan Layanan. Kami dapat menggunakan data penggunaan platform yang diagregasi dan dianonimkan untuk tujuan peningkatan produk dan analitik, asalkan data tersebut tidak dapat secara wajar digunakan untuk mengidentifikasi Anda.
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
                <p>
                  LAYANAN DISEDIAKAN ATAS DASAR &ldquo;SEBAGAIMANA ADANYA&rdquo; DAN &ldquo;SEBAGAIMANA TERSEDIA&rdquo;. SEJAUH YANG DIIZINKAN OLEH HUKUM YANG BERLAKU, PT EVORA VERA TEKNOLOGI, OMNIASKY TECHNOLOGY PTE LTD, AFILIASI, PEJABAT, DAN PEMBERI LISENSI MEREKA SECARA TEGAS MENAFIKAN SELURUH JAMINAN, BAIK TERSURAT MAUPUN TERSIRAT, TERMASUK NAMUN TIDAK TERBATAS PADA JAMINAN TERSIRAT MENGENAI KELAYAKAN UNTUK DIPERDAGANGKAN, KESESUAIAN UNTUK TUJUAN TERTENTU, DAN TIDAK ADANYA PELANGGARAN.
                </p>
                <p>Kami tidak memberikan jaminan atau pernyataan bahwa:</p>
                <ul>
                  <li>Layanan akan memenuhi persyaratan bisnis spesifik Anda.</li>
                  <li>Layanan akan berjalan tanpa gangguan, tepat waktu, aman, atau bebas dari kesalahan setiap saat.</li>
                  <li>Transaksi pembayaran tertentu yang Anda ajukan akan berhasil dieksekusi atau diselesaikan; eksekusi transaksi merupakan tanggung jawab Mitra Eksekusi yang berlaku.</li>
                  <li>Cacat pada Layanan akan diperbaiki dalam jangka waktu tertentu.</li>
                </ul>
                <p>
                  Kontrol keamanan kami melindungi data perangkat lunak dan instruksi alur kerja. Keamanan, asuransi, dan perlindungan regulasi atas dana keuangan itu sendiri merupakan tanggung jawab Mitra Eksekusi berlisensi kami berdasarkan kerangka regulasi mereka masing-masing.
                </p>
              </Section>

              {/* ── Bagian 10: Batasan Tanggung Gugat ── */}
              <Section id="tanggung-gugat" title="10. Batasan Tanggung Gugat">
                <p>
                  SEJAUH YANG DIIZINKAN OLEH HUKUM YANG BERLAKU, DALAM KEADAAN APA PUN PT EVORA VERA TEKNOLOGI, DIREKTUR, KARYAWAN, MITRA TEKNOLOGI RESMI, ATAU AGENNYA TIDAK AKAN BERTANGGUNG GUGAT KEPADA ANDA ATAU PIHAK KETIGA MANA PUN ATAS:
                </p>
                <ul>
                  <li>Kerugian tidak langsung, insidental, khusus, konsekuensial, atau hukuman.</li>
                  <li>Kehilangan keuntungan, pendapatan, peluang bisnis, atau nama baik.</li>
                  <li>Kehilangan atau kerusakan data.</li>
                  <li>Kerugian yang timbul akibat kegagalan, keterlambatan, atau kesalahan Mitra Eksekusi berlisensi dalam memproses transaksi pembayaran.</li>
                  <li>Kerugian yang timbul akibat peristiwa jaringan blockchain, kegagalan kontrak pintar, atau sifat ireversibel transaksi on-chain.</li>
                  <li>Tindakan regulasi, denda, atau biaya kepatuhan yang dikenakan kepada Anda oleh otoritas yang berwenang.</li>
                </ul>
                <p>
                  Tanggung gugat agregat kami kepada Anda yang timbul dari atau sehubungan dengan Perjanjian ini, dari sebab apa pun dan terlepas dari bentuk tindakannya, senantiasa dibatasi pada jumlah yang lebih besar dari: (a) total Biaya berlangganan platform yang telah Anda bayarkan kepada PT Evora dalam tiga (3) bulan sebelum kejadian yang menimbulkan klaim; atau (b) IDR tiga puluh juta (IDR 30.000.000).
                </p>
                <p>
                  Beberapa yurisdiksi tidak mengizinkan pengecualian atau pembatasan jenis tanggung jawab tertentu. Sejauh hukum tersebut berlaku, pembatasan di atas berlaku hanya sejauh yang diizinkan.
                </p>
              </Section>

              {/* ── Bagian 11: Ganti Rugi ── */}
              <Section id="ganti-rugi" title="11. Ganti Rugi">
                <p>
                  Anda setuju untuk membela, memberikan ganti rugi, dan membebaskan PT Evora Vera Teknologi, Omniasky Technology Pte Ltd, dan masing-masing direktur, pejabat, karyawan, dan agen mereka (secara kolektif, &ldquo;Pihak yang Diberi Ganti Rugi&rdquo;) dari dan terhadap seluruh klaim, kerugian, kehilangan, tanggung jawab, biaya, dan pengeluaran (termasuk biaya hukum yang wajar) yang timbul dari atau berkaitan dengan:
                </p>
                <ul>
                  <li>Akses atau penggunaan Anda atas Layanan.</li>
                  <li>Pelanggaran Anda terhadap ketentuan Perjanjian ini.</li>
                  <li>Informasi yang tidak akurat, palsu, atau menyesatkan yang Anda berikan kepada kami atau kepada Mitra Eksekusi kami.</li>
                  <li>Pelanggaran Anda terhadap hukum atau peraturan yang berlaku sehubungan dengan penggunaan Layanan Anda.</li>
                  <li>Pelanggaran Anda terhadap hak pihak ketiga mana pun, termasuk pelanggan Anda sendiri.</li>
                  <li>Kegagalan Anda untuk memperoleh atau mempertahankan lisensi atau persetujuan regulasi yang diperlukan untuk kegiatan usaha Anda.</li>
                </ul>
                <p>
                  Kami berhak, atas biaya kami sendiri, untuk mengambil alih kendali eksklusif atas setiap perkara yang seharusnya menjadi subjek ganti rugi oleh Anda. Anda setuju untuk bekerja sama sepenuhnya dalam pembelaan kami atas klaim tersebut.
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
