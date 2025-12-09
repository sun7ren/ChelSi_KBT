"use client";

import Link from "next/link";
import Header from "@/components/ui/Header";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-sans">
      <Header
        center={null}
        right={
          <Link
            href="/"
            className="px-4 py-2 text-blue-600 border border-blue-600 rounded hover:bg-blue-50 transition flex items-center gap-2"
          >
            Kembali ke Beranda
          </Link>
        }
      />

      <main className="flex-1 w-full max-w-6xl mx-auto py-6 md:py-12 px-4 md:px-0">
        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-12">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">Tentang ChelSi</h1>

          <div className="prose max-w-none text-gray-700 space-y-6">
            <p className="text-lg leading-relaxed">
              <strong>ChelSi (Simulasi Kimia)</strong> adalah platform laboratorium virtual canggih yang dirancang untuk menghadirkan pengalaman eksperimen kimia ke layar Anda. Baik Anda seorang pelajar, pendidik, atau penggemar sains, ChelSi menyediakan lingkungan yang aman dan interaktif untuk menjelajahi konsep kimia yang kompleks.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">Fitur Utama</h2>

            <div className="grid md:grid-cols-2 gap-6 mt-4">
              <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
                <h3 className="font-bold text-blue-800 mb-2">Eksperimen Virtual</h3>
                <p>Lakukan eksperimen dengan aman tanpa risiko bahan kimia berbahaya. Mencampur asam dan basa, mengamati reaksi, dan banyak lagi.</p>
              </div>

              <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
                <h3 className="font-bold text-blue-800 mb-2">Pembelajaran Interaktif</h3>
                <p>Berinteraksi dengan visualisasi dinamis atom, ikatan, dan molekul untuk memahami dunia mikroskopis.</p>
              </div>

              <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
                <h3 className="font-bold text-blue-800 mb-2">Aksesibilitas</h3>
                <p>Akses laboratorium Anda kapan saja, di mana saja. ChelSi mendobrak hambatan fisik dalam pendidikan sains.</p>
              </div>

              <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
                <h3 className="font-bold text-blue-800 mb-2">Topik Lengkap</h3>
                <p>Mencakup berbagai topik termasuk Asam & Basa, Elektrokimia, Termodinamika, dan Kinetika Reaksi.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">Misi Kami</h2>
            <p>
              Kami bertujuan untuk mendemokratisasi akses ke pendidikan sains berkualitas. Dengan memanfaatkan teknologi web modern, kami membuat belajar kimia menjadi intuitif, menarik, dan dapat diakses oleh semua orang.
            </p>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/payment"
            className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 hover:shadow-xl transition transform hover:-translate-y-0.5"
          >
            Mulai Sekarang
          </Link>
        </div>
      </main>

      <footer className="flex justify-center items-center bg-blue-800 text-white p-4 mt-8 shadow-inner text-sm">
        Teknik Informatika × Teknik Kimia 2025
      </footer>
    </div>
  );
}
