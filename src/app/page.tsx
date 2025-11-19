import React from 'react';
import { Button } from "@/components/ui/button"
import { 
  ArrowRight, Flame, Zap, Smartphone, Smile, 
  MessageCircle, Star, CheckCircle2, TrendingUp, 
  Cookie
} from 'lucide-react';

const GenZHealthLanding = () => {
  return (
    <div className="min-h-screen bg-white text-white font-sans selection:bg-lime-400 selection:text-black w-full max-w-[100vw] overflow-x-hidden">
      
      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b bg-white backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-medium text-xl tracking-tighter flex items-center gap-2 text-gray-800">
            <img src="/images/logo.svg" alt="myholo_logo" className="w-12 h-12 object-contain"/>
            MyHolo
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex gap-6 text-sm font-medium text-neutral-400">
            <a href="#feature" className="hover:text-white transition">Fitur</a>
            <a href="#flow" className="hover:text-white transition">Alur</a>
            <a href="#faq" className="hover:text-white transition">FAQ</a>
            <a href="#review" className="hover:text-white transition">Penilaian</a>
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
              Mulai Sekarang
            </Button>
          </div>
        </div>
      </main>

      {/* --- BENTO GRID FEATURES --- */}
      <section id="feature" className="px-6 py-20 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-10 gap-4">
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900">Semua kebutuhanmu <br/> <span className="text-neutral-500">dalam satu genggaman.</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:h-[500px] bg-slate-100 p-2 rounded-3xl">
          <div className="md:col-span-2 bg-white hover:bg-slate  border-white/10 rounded-2xl p-8 relative overflow-hidden group hover:border-primary transition-colors duration-300 flex flex-col justify-between h-[350px] md:h-auto">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-30 transition-opacity pointer-events-none">
              
            </div>

            <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-medium mb-2 text-gray-800">Keep the Streak Alive</h3>
                <p className="text-neutral-400 max-w-sm">Gamifikasi kesehatanmu. Dapatkan reward eksklusif (skin, badge) setiap kali kamu berhasil mencapai target.</p>
            </div>
            <div className="mt-6 bg-neutral-800/80 backdrop-blur rounded-2xl p-4 w-full max-w-sm border border-white/5 self-start md:self-auto">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-neutral-300 font-mono uppercase">Hydration Level</span>
                  <span className="text-lime-400 font-mono text-xs">85%</span>
                </div>
                <div className="h-2 w-full bg-neutral-700 rounded-full overflow-hidden">
                  <div className="h-full w-[85%] bg-lime-400 rounded-full shadow-[0_0_10px_rgba(163,230,53,0.8)]" />
                </div>
            </div>
          </div>

          <div className="bg-white border border-white/10 rounded-3xl p-8 flex flex-col justify-center hover:border-violet-500/50 transition-colors duration-300 h-[300px] md:h-auto">
            <div className = "bg-primary text-white p-2.5 rounded-full w-fit mb-4">
              <Cookie className = "size-7"/>
            </div>
            
            <h3 className="text-2xl font-medium mb-2 text-gray-800">Smart Recipe</h3>
            <p className="text-gray-500 text-base">Jurnal harian tanpa ngetik panjang. Pilih emoji, selesai.</p>
          </div>

          {/* Card 3: Sync */}
          <div className="bg-white border border-white/10 rounded-3xl p-8 flex flex-col justify-between hover:border-blue-500/50 transition-colors duration-300 h-[250px] md:h-auto">
            <div className = "p-2.5 rounded-full w-fit mb-4 text-white bg-primary">
                <Cookie className = "size-7"/>
              </div>
              
              <h3 className="text-2xl font-medium mb-2 text-gray-800">Smart Recipe</h3>
              <p className="text-neutral-400 text-base">Jurnal harian tanpa ngetik panjang. Pilih emoji, selesai.</p>
            </div>

          {/* Card 4: Community */}
          <div className="md:col-span-2 bg-white border border-white/10 rounded-3xl p-8 flex items-center justify-between relative overflow-hidden hover:border-pink-500/50 transition-colors duration-300 h-[200px] md:h-auto">
            <div className="relative z-10">
            <div className = "bg-white p-2.5 rounded-full w-fit mb-4 text-gray-800">
                <Cookie className = "size-7"/>
              </div>
              
                <h3 className="text-2xl font-medium mb-1 text-gray-800">The Circle</h3>
                <p className="text-neutral-400 max-w-xs text-base">
                  Cari teman workout, pamer streak, dan saling support.
                </p>
            </div>
            <div className="relative z-10 flex -space-x-3">
                {[1,2,3,4].map((i) => (
                  <div key={i} className={`w-10 h-10 rounded-full border-2 border-neutral-900 flex items-center justify-center text-[10px] font-bold text-black ${i % 2 === 0 ? 'bg-lime-300' : 'bg-white'}`}>
                    U{i}
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-neutral-900 bg-neutral-800 flex items-center justify-center text-xs text-white">
                    +99
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- HOW IT WORKS --- */}
      <section id="flow" className="py-20 bg-slate-100 border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-medium mb-2 text-gray-800">Cuma butuh 3 langkah</h2>
                <p className="text-neutral-400 text-lg">Nggak perlu setup ribet. Download, login, glow up.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {[
                    { icon: <CheckCircle2 className="text-white" size={32}/>, title: "1. Set Your Goals", desc: "Pilih targetmu: mau tidur lebih awal, minum air lebih banyak, atau lari pagi." },
                    { icon: <TrendingUp className="text-white" size={32}/>, title: "2. Track Daily", desc: "Log aktivitasmu cuma dalam satu tap. Visualisasi progress bikin nagih." },
                    { icon: <Star className="text-white" size={32}/>, title: "3. Claim Rewards", desc: "Tukar poin streak dengan voucher sehat atau item in-app eksklusif." }
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
            Real talk from <span className="text-primary">real people.</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-100 p-6 rounded-2xl border border-white/5 hover:border-white/10 transition">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full" />
                    <div>
                        <p className="font-medium text-sm text-gray-800">Sarah_Z</p>
                        <p className="text-xs text-gray-500">@sarahthinks</p>
                    </div>
                    <MessageCircle className="ml-auto text-neutral-600 w-4 h-4" />
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">
                    "Jujurly ini apps pertama yang nggak bikin gue stress liat progress. UI-nya adem, fiturnya to the point. Mood tracker is a lifesaver! 💯"
                </p>
            </div>

            <div className="bg-slate-100 p-6 rounded-2xl border border-white/5 hover:border-white/10 transition">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full" />
                    <div>
                        <p className="font-medium text-sm text-gray-800">Muhamad Nursalman</p>
                        <p className="text-xs text-gray-500">@mnursalman</p>
                    </div>
                    <MessageCircle className="ml-auto text-neutral-600 w-4 h-4" />
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">
                    Streak fiturnya bikin kompetitif sama diri sendiri. Udah 30 hari minum air cukup cuma demi ngejaga api-nya tetep nyala 🔥 Wajib download."
                </p>
            </div>

            <div className="bg-slate-100 p-6 rounded-2xl border border-white/5 hover:border-white/10 transition">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full" />
                    <div>
                        <p className="font-medium text-sm text-gray-800">Vinaaa</p>
                        <p className="text-xs text-gray-500">@vina_art</p>
                    </div>
                    <MessageCircle className="ml-auto text-neutral-600 w-4 h-4" />
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">
                    "Aestetik banget tolong?? 😍 Akhirnya ada app kesehatan yang dark mode-nya beneran enak di mata. 10/10 would recommend."
                </p>
            </div>
        </div>
      </section>

      {/* --- FAQ --- */}
      <section id="faq" className="px-6 py-10 max-w-3xl mx-auto border-t border-white/10">
          <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
              {[
                  "Apakah aplikasi ini gratis?", 
                  "Bisa connect ke Smartwatch?", 
                  "Datanya aman nggak?"
              ].map((q, i) => (
                  <div key={i} className="p-4 rounded-xl border border-white/5 bg-neutral-900/50 flex justify-between items-center cursor-pointer hover:bg-neutral-800 transition">
                      <span className="text-neutral-300 font-medium">{q}</span>
                      <ArrowRight className="w-4 h-4 text-neutral-500" />
                  </div>
              ))}
          </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-20 mt-10 border-t border-white/10 text-center bg-gradient-to-b from-neutral-950 to-neutral-900">
        <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Ready to level up?</h2>
            <p className="text-neutral-400 mb-8">Gabung sama 10,000+ user lain yang udah mulai perjalanan sehat mereka.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button className="h-14 px-10 rounded-full bg-white text-black hover:bg-neutral-200 font-bold text-xl w-full sm:w-auto">
                    Download for iOS
                </Button>
                <Button className="h-14 px-10 rounded-full bg-transparent border border-white/20 text-white hover:bg-white/5 font-bold text-xl w-full sm:w-auto">
                    Download for Android
                </Button>
            </div>
            <p className="mt-10 text-neutral-600 text-xs">© 2024 MyHolo Inc. All rights reserved. No vibes were harmed in the making of this app.</p>
        </div>
      </footer>

    </div>
  );
};

export default GenZHealthLanding;