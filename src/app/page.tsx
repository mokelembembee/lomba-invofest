'use client';

import React from 'react';
import { Button } from "@/components/ui/button"
import { 
  ArrowRight, Flame, Zap, Smartphone, Smile, 
  MessageCircle, Star, CheckCircle2, TrendingUp, 
  Cookie, CookingPot,
  Dumbbell
} from 'lucide-react';

const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>,id: string) => {
  e.preventDefault(); 
  const element = document.getElementById(id);
  if(element){
    element.scrollIntoView({ 
      behavior:'smooth',
      block:'start',
    });
  }
};

const levelStreak = [
  { days: "5 hari", color: "bg-red-500", shadow: "shadow-red-500/80" },
  { days: "10 hari", color: "bg-orange-500", shadow: "shadow-orange-500/80" },
  { days: "25 hari", color: "bg-yellow-400", shadow: "shadow-yellow-400/80" },
  { days: "40 hari", color: "bg-lime-400", shadow: "shadow-lime-400/80" },
];

const users = [
  { id: 1, avatar: '/images/users/1.png' },
  { id: 2, avatar: '/images/users/2.png'},
  { id: 3, avatar: '/images/users/3.png'},
  { id: 4, avatar: '/images/users/4.png'},
];

const elYapping = [
  {
    name: "Sarah_Z",
    username: "@sarahthinks",
    avatar: "images/users/5.png",
    text: "Jujurly ini apps pertama yang nggak bikin gue stress liat progress. UI-nya adem, fiturnya to the point. Mood tracker is a lifesaver! 💯"
  },
  {
    name: "Muhamad Nursalman",
    username: "@mnursalman",
    avatar: "images/users/3.png",
    text: "Streak fiturnya bikin kompetitif sama diri sendiri. Udah 30 hari minum air cukup cuma demi ngejaga api-nya tetep nyala 🔥 Wajib download."
  },
  {
    name: "Vinaaa",
    username: "@vina_art",
    avatar: "images/users/1.png",
    text: "Aestetik banget tolong?? 😍 Akhirnya ada app kesehatan yang dark mode-nya beneran enak di mata. 10/10 would recommend."
  }
];

const faqList = [
  {
    q: "Apakah website ini gratis?",
    a: "Ya, gratis digunakan. Kami menawarkan pengalaman tanpa biaya untuk semua pengguna."
  },
  {
    q: "Apakah ada versi premium?",
    a: "Saat ini, semua fitur tersedia secara gratis. Kami berencana untuk memperkenalkan opsi premium di masa depan."
  },
  {
    q: "Apakah ada rekomendasi olahraga untuk pemula?",
    a: "Ada. Anda bisa memilih kategori ‘Pemula’ dan aplikasi akan menyesuaikan intensitas olahraga berdasarkan tingkat kebugaran Anda."
  },
  {
    q: "Apakah ada rekomendasi makanan untuk alergi dan diet tertentu?",
    a: "Ya. Anda bisa menandai alergi atau pantangan (misalnya tanpa susu, vegetarian, gluten-free) dan semua resep akan otomatis menyesuaikan."
  },
  {
    q: "Bagaimana cara menjaga streak?",
    a: "Cukup login dan log minimal satu aktivitas per hari (mood, olahraga, minum, resep, dan lainnya) untuk menjaga streak tetap menyala."
  },
  {
    q: "Datanya aman nggak?",
    a: "Semua data terenkripsi dan tidak dibagikan ke pihak ketiga tanpa izin. Keamanan dan privasi Anda adalah prioritas kami."
  },
  {
    q: "Apakah aplikasi bisa dipakai untuk program penurunan atau peningkatan berat badan?",
    a: "Bisa. MyHolo memiliki sistem target tubuh yang akan menyesuaikan rekomendasi olahraga, nutrisi, dan hidrasi."
  },
  {
    q: "Apakah aplikasi cocok untuk remaja atau lansia?",
    a: "Sangat cocok untuk semua usia. Rekomendasi olahraga serta nutrisi akan disesuaikan otomatis berdasarkan umur dan level kebugaran."
  }
];


const GenZHealthLanding = () => {
  const [openFAQ, setOpenFAQ] = React.useState<number | null>(null);
  return (
    <div className="min-h-screen bg-white text-white font-sans selection:bg-lime-400 selection:text-black w-full max-w-[100vw] overflow-x-hidden">
      
      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b bg-white backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-medium text-xl tracking-tighter flex items-center gap-2 text-gray-800">
            <img src="/images/logo.svg" alt="myholo_logo" className="w-12 h-12 object-contain"/>
            MyHolo
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex gap-6 text-sm font-medium text-gray-700">
            <a href="#feature" onClick={(e) => scrollToSection(e, 'feature')} className="hover:text-gray-500 transition cursor-pointer">Fitur</a>
            <a href="#flow" onClick={(e) => scrollToSection(e, 'flow')} className="hover:text-gray-500 transition cursor-pointer">Alur</a>
            <a href="#faq" onClick={(e) => scrollToSection(e, 'faq')} className="hover:text-gray-500 transition cursor-pointer">FAQ</a>
            <a href="#review" onClick={(e) => scrollToSection(e, 'review')} className="hover:text-gray-500 transition cursor-pointer">Penilaian</a>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      {/* FIX 2: overflow-hidden DITAMBAHKAN DI SINI. Ini kunci agar blob background tidak melebar keluar layar HP */}
      <main className="pt-32 pb-20 px-6 relative w-full overflow-hidden">
        
        {/* Background Gradient Blob */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-lime-500/20 rounded-full blur-[100px] -z-10 pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border/10 text-sm text-gray-500 mb-4 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-primary"></span>
            Your Holistic Health Companion
          </div>
          
          <h1 className="text-5xl md:text-7xl font-medium tracking-tight leading-[1.1] text-gray-800">
            Level Up Your Health. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-300 to-primary">
              Glow Up Inside Out.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-500 max-w-2xl leading-relaxed mt-2">
            Aplikasi Kesehatan All-in-One Anda. Lacak aktivitas, kelola nutrisi, dan konsultasi dengan dokter, semuanya dalam satu genggaman.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto px-0 sm:px-0">
            <Button className="h-14 px-8 rounded-full text-white text-lg w-full sm:w-auto transition-transform hover:scale-105">
              <a href="/home">Mulai Sekarang</a>
            </Button>
          </div>
        </div>
      </main>

      {/* --- BENTO GRID FEATURES --- */}
      <section id="feature" className="px-6 py-20 max-w-6xl mx-auto">
        <div className="flex items-center text-center flex-col md:flex-row justify-center mb-10 gap-4">
            <h2 className="text-3xl justify-center md:text-4xl font-medium text-gray-900">Semua kebutuhanmu <br/> <span className="text-primary">dalam satu genggaman.</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:h-[500px] bg-slate-100 p-2 rounded-3xl">
          {/* streak */}
          <div className="md:col-span-2 group bg-slate-200 rounded-2xl p-8 relative overflow-hidden group border-1 hover:border-orange-500 transition-colors duration-300 flex flex-col justify-between h-[350px] md:h-auto">
            <div className="absolute  top-0 right-0 p-8 opacity-30 group-hover:opacity-80 transition-opacity pointer-events-none">
              <Flame size={120} className="text-orange-500" />
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl font-medium mb-2 text-gray-800">Sehat dan Menyenangkan</h3>
              <p className="text-neutral-400 max-w-sm">Gamifikasi kesehatanmu. Pilih avatar unik-mu dan raih streak dengan mengunjungi MyHolo setiap hari.</p>
            </div>

            <div className="mt-2 bg-slate-300/30 backdrop-blur rounded-2xl p-2 group-hover:bg-orange-400/30  w-full max-w-sm self-start md:self-auto ">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-700 font-outfit uppercase">Streak Level</span>
                </div>
                <div className="flex w-full mb-1 gap-0.5">
                    {levelStreak.map((level, index) => (
                        <div key={index} className="w-full text-center text-[10px] font-outfit text-gray-700">
                            {level.days}
                        </div>
                    ))}
                </div>
                <div className="flex h-2 w-full bg-neutral-700 rounded-full overflow-hidden gap-0.5">
                  {levelStreak.map((level, index) => (
                    <div key={index} className={`h-full w-full ${level.color} shadow-[0_0_10px] ${level.shadow}`}/>
                  ))}
                </div>
            </div>
          </div>
          {/* recipe */}
          <div className="relative group overflow-hidden bg-slate-200 border border-white/10 rounded-3xl p-8 flex flex-col hover:border-primary transition-colors duration-300 h-[300px] md:h-auto">
            <div className="relative z-10">
              <h3 className="text-2xl font-medium mb-2 text-gray-800">Personalisasi Resep</h3>
              <p className="text-gray-500 text-base max-w-[75%]">Tidak suka atau bahkan alergi dengan bahan tertentu? Kami akan modifikasi resepnya</p>
            </div>
            <div className="absolute bottom-0 right-0 p-8 opacity-30 group-hover:opacity-80 transition-opacity pointer-events-none">
              <CookingPot size={100} className="text-primary translate-x-4 -translate-y-4" />
            </div>
          </div>

          {/* sport */}
          <div className="relative group overflow-hidden bg-slate-200 border border-white/10 rounded-3xl p-8 flex flex-col hover:border-violet-500/50 transition-colors duration-300 h-[300px] md:h-auto">
            <div className="relative z-10">
              <h3 className="text-2xl font-medium mb-2 text-gray-800">Program Olahraga</h3>
              <p className="text-gray-500 text-base max-w-[65%]">Bingung mau workout kaya gimana? Tinggal pilih saja.</p>
            </div>
            <div className="absolute bottom-0 right-0 p-8 opacity-30 group-hover:opacity-80 transition-opacity pointer-events-none">
              <Dumbbell size={100} className="text-blue-500 translate-x-4 -translate-y-4" />
            </div>
          </div>

          {/* social */}
          <div className="md:col-span-2 group bg-slate-200 rounded-2xl p-8 relative overflow-hidden group border-1 hover:border-yellow-500 transition-colors duration-300 flex flex-col justify-between h-[350px] md:h-auto">
            <div className="relative z-10">
            <div className="absolute top-0 right-0 p-8 pointer-events-none">
              <Smile size={120} className="text-yellow-400 opacity-30 group-hover:opacity-80 transition-opacity" />
            </div>
                <h3 className="text-2xl font-medium mb-1 text-gray-800">The Guild</h3>
                <p className="text-neutral-400 max-w-xs text-base">
                  Bergabung bersama teman. Dapatkan motivasi, berbagi pengetahuan, dukungan, tantangan seru, dan capai tujuan kesehatan bersama-sama!
                </p>
                <div className="relative mt-4 z-10 flex -space-x-3">
                {users.map((user) => (
                  <div key={user.id} className={`w-10 h-10 rounded-full flex items-center justify-center overflow-hidden`}>
                    <img src={user.avatar} alt={`ava`} className="w-full h-full object-cover scale-130"/>
                  </div>
                ))}
                  <div className="w-10 h-10 rounded-full z-10 bg-neutral-800 flex items-center justify-center text-xs text-white">
                      +99
                  </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* --- HOW IT WORKS --- */}
      <section id="flow" className="py-20 bg-slate-100 border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-medium mb-2 text-gray-800">Cuma butuh <span className="text-primary">3 langkah.</span></h2>
                <p className="text-neutral-400 text-lg">Nggak perlu set-up ribet. Login, Isi Data, Glow Up.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {[
                    { icon: <CheckCircle2 className="text-white" size={32}/>, title: "1. Buat Akun", desc: "Login akun dan pilih avatar yang kamu inginkan." },
                    { icon: <TrendingUp className="text-white" size={32}/>, title: "2. Pantau Progress", desc: "Log aktivitasmu cuma dalam satu tap. Visualisasi progress bikin nagih." },
                    { icon: <Star className="text-white" size={32}/>, title: "3. Nikmati Fitur", desc: "Akses ratusan resep sehat dan tantangan harian yang bikin hidupmu makin berwarna." }
                ].map((item, idx) => (
                    <div key={idx} className="flex flex-col items-center text-center gap-2">
                        <div className="aspect-square p-4 rounded-2xl bg-primary mb-2">
                            {item.icon}
                        </div>
                        
                        <h3 className="text-xl font-medium text-gray-700">{item.title}</h3>
                        <p className="text-gray-500 text-base leading-relaxed max-w-xs">
                            {item.desc}
                        </p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      <section id="review" className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-medium text-center mb-12 text-gray-800">
            Review <span className="text-primary">Pengguna.</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {elYapping.map((testimonial, index) => (
            <div key={index} className="bg-slate-100 p-6 rounded-2xl border border-white/5 hover:border-white/10 transition">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-200">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover"/>
                </div>
                <div>
                  <p className="font-medium text-sm text-gray-800">{testimonial.name}</p>
                  <p className="text-xs text-gray-500">{testimonial.username}</p>
                </div>
                <MessageCircle className="ml-auto text-neutral-600 w-4 h-4" />
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- FAQ --- */}
      <section id="faq" className="px-6 py-10 max-w-3xl mx-auto border-t border-white/10">
        <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {faqList.map((item, index) => (
            <div key={index} className="rounded-xl border border-white/10 bg-neutral-900/40 hover:bg-neutral-800 transition">
              <button onClick={() => setOpenFAQ(openFAQ === index ? null : index)} className="w-full flex justify-between items-center p-4">
                <span className="text-neutral-300 text-left">{item.q}</span>
                <ArrowRight className={`w-4 h-4 text-neutral-500 transition-transform ${openFAQ === index ? "rotate-90" : ""}`}/>
              </button>

              {openFAQ === index && (
                <div className="px-4 pb-4 text-sm text-neutral-400 leading-relaxed">
                  {item.a}
                </div>
              )}

            </div>
          ))}
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-20 mt-10 border-t border-white/10 text-center bg-gradient-to-b from-neutral-950 to-neutral-900">
        <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Ready to level up?</h2>
            <p className="text-neutral-400 mb-8">Gabung sama 10,000+ user lain yang udah mulai perjalanan sehat mereka.</p>

            <p className="mt-10 text-neutral-600 text-xs">© 2025 MyHolo Inc. All rights reserved. No vibes were harmed in the making of this app.</p>
        </div>
      </footer>

    </div>
  );
};

export default GenZHealthLanding;
