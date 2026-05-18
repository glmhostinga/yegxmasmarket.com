export default function XMASMRKTWebsite() {
  return (
    <div className="min-h-screen bg-[#f4f1e8] text-[#1d1d1d] font-sans">
      {/* Top Bar */}
      <div className="bg-[#006d68] text-white text-sm py-2 px-6 flex justify-between items-center">
        <div className="flex gap-6">

        </div>
        <div className="flex gap-4 text-xs">

        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-[#00877f] text-white px-8 py-4 flex items-center justify-between shadow-lg sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="text-3xl font-black tracking-widest text-[#ffe28a]">XMASMRKT</div>
        
        </div>

        <div className="hidden md:flex gap-8 text-sm uppercase tracking-wide font-semibold">
          <a href="#home" className="hover:text-[#ffe28a] transition">Home</a>
          <a href="#vendors" className="hover:text-[#ffe28a] transition">Vendors</a>
          <a href="#experience" className="hover:text-[#ffe28a] transition">Experience</a>
          <a href="#market" className="hover:text-[#ffe28a] transition">Market Info</a>
          <a href="#contact" className="hover:text-[#ffe28a] transition">Contact</a>
        </div>

        <a
  href="https://forms.gle/z3VgyUqBrgjuYHPJ8"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-[#ff2d55] hover:bg-[#e61d48] transition px-5 py-2 rounded-full text-sm font-bold shadow-md inline-block"
>
  Apply Now
</a>
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="relative h-[80vh] overflow-hidden flex items-center justify-center"
      >
        <img
          src="https://images.unsplash.com/photo-1512389142860-9c449e58a543?q=80&w=1600&auto=format&fit=crop"
          alt="Holiday Market"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/45"></div>

        <div className="relative z-10 text-center text-white px-6 max-w-5xl">
          <div className="inline-block bg-[#ff2d55] px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-6 shadow-lg">
            2026 Vendor Applications Open
          </div>

          <h1 className="text-5xl md:text-7xl font-black uppercase leading-tight drop-shadow-2xl">
           Christmas
            <br />
            Holiday Market
          </h1>

          <p className="mt-6 text-lg md:text-2xl max-w-3xl mx-auto text-[#f2f2f2] leading-relaxed">
            A magical winter shopping experience bringing together artisans,
            food vendors, holiday entertainment, and festive traditions.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 justify-center">
           <a
  href="https://forms.gle/z3VgyUqBrgjuYHPJ8"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-[#ff2d55] hover:bg-[#e61d48] px-8 py-4 rounded-full font-bold text-lg transition shadow-2xl inline-block"
>
  Become a Vendor
</a>

            <a
  href="https://www.canva.com/design/DAHFjqHbzkM/OzGw62gkxLhra48y0rSkjA/view?utm_content=DAHFjqHbzkM&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h46044d5e05"
  target="_blank"
  rel="noopener noreferrer"
  className="border-2 border-white hover:bg-white hover:text-black px-8 py-4 rounded-full font-bold text-lg transition inline-block"
>
  Explore Event
</a>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 px-6 md:px-20 bg-[#f4f1e8]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div>
            <div className="text-[#00877f] uppercase tracking-[0.3em] text-sm font-bold mb-4">
              About XMASMRKT
            </div>

            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              Celebrate the Holiday Season With Thousands of Visitors
            </h2>

            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              XMASMRKT transforms the city into a festive destination filled with
              handcrafted gifts, warm drinks, holiday lights, and unforgettable
              experiences. Vendors get the opportunity to showcase products to a
              highly engaged seasonal audience.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="bg-white rounded-3xl p-6 shadow-md">
                <div className="text-4xl font-black text-[#00877f]">40K+</div>
                <div className="mt-2 text-sm uppercase tracking-wide text-gray-600">
                  Expected Visitors
                </div>
              </div>

              <div className="bg-white rounded-3xl p-6 shadow-md">
                <div className="text-4xl font-black text-[#00877f]">150+</div>
                <div className="mt-2 text-sm uppercase tracking-wide text-gray-600">
                  Vendors & Artisans
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1543589077-47d81606c1bf?q=80&w=1200&auto=format&fit=crop"
              alt="Christmas Market"
              className="rounded-[2rem] shadow-2xl w-full h-[520px] object-cover"
            />

            <div className="absolute -bottom-8 -left-8 bg-[#00877f] text-white p-8 rounded-[2rem] shadow-2xl max-w-xs">
              <div className="text-2xl font-black mb-2">Vendor Opportunities</div>
              <p className="text-sm leading-relaxed text-white/90">
                Retail, food, beverage, artisan booths, food trucks, and holiday activations available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vendor Categories */}
      <section id="vendors" className="bg-[#00877f] py-20 px-6 md:px-20 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="uppercase tracking-[0.3em] text-sm font-bold text-[#ffe28a] mb-4">
              Vendor Categories
            </div>

            <h2 className="text-4xl md:text-5xl font-black">
              Opportunities For Every Business
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                title: 'Retail Vendors',
                text: 'Handcrafted goods, fashion, gifts, home decor, and holiday collections.',
              },
              {
                title: 'Food Vendors',
                text: 'Festive food experiences, desserts, snacks, and international cuisine.',
              },
              {
                title: 'Beverage Booths',
                text: 'Coffee, cocoa, specialty drinks, mocktails, and seasonal beverages.',
              },
              {
                title: 'Food Trucks',
                text: 'High-traffic outdoor vendor spaces for mobile food experiences.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-[2rem] p-8 border border-white/10 hover:translate-y-[-6px] transition duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#ffe28a] text-[#00877f] flex items-center justify-center text-2xl font-black mb-6">
                  {index + 1}
                </div>

                <h3 className="text-2xl font-black mb-4">{item.title}</h3>
                <p className="text-white/85 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-20 px-6 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
          {[
            {
              image:
                'https://images.unsplash.com/photo-1482517967863-00e15c9b44be?q=80&w=1000&auto=format&fit=crop',
              title: 'Festive Atmosphere',
            },
            {
              image:
                'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1000&auto=format&fit=crop',
              title: 'Holiday Shopping',
            },
            {
              image:
                'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1000&auto=format&fit=crop',
              title: 'Family Entertainment',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-[2rem] shadow-xl relative"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[480px] object-cover group-hover:scale-105 transition duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

              <div className="absolute bottom-0 p-8 text-white">
                <div className="text-3xl font-black">{item.title}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="market" className="py-24 px-6 bg-[#ff2d55] text-white text-center">
        <div className="max-w-4xl mx-auto">
          <div className="uppercase tracking-[0.3em] text-sm font-bold mb-5 text-white/80">
            Join XMASMRKT 2026
          </div>

          <h2 className="text-5xl md:text-6xl font-black leading-tight mb-6">
            Applications Are Open
          </h2>

          <p className="text-xl text-white/90 leading-relaxed mb-10">
            Secure your place at one of the region’s most exciting holiday markets.
            Limited vendor spaces available.
          </p>

          <a
  href="https://forms.gle/z3VgyUqBrgjuYHPJ8"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-white text-[#ff2d55] hover:scale-105 transition px-10 py-5 rounded-full font-black text-lg shadow-2xl inline-block"
>
  Start Your Application
</a>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-[#0c2b2a] text-white px-6 md:px-20 py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
          <div>
            <div className="text-4xl font-black text-[#ffe28a] mb-4">XMASMRKT</div>
            <p className="text-white/70 leading-relaxed">
              Bringing holiday magic, local shopping, and unforgettable experiences together.
            </p>
          </div>

          <div>
            <div className="font-black uppercase tracking-wide mb-4">Explore</div>
            <div className="space-y-3 text-white/70">
              <div>Vendor Info</div>
              <div>Event Schedule</div>
              <div>Tickets</div>
              <div>Experiences</div>
            </div>
          </div>

          <div>
            <div className="font-black uppercase tracking-wide mb-4">Vendors</div>
            <div className="space-y-3 text-white/70">
              <div>Retail</div>
              <div>Food</div>
              <div>Beverage</div>
              <div>Food Trucks</div>
            </div>
          </div>

          <div>
            <div className="font-black uppercase tracking-wide mb-4">Contact</div>
            <div className="space-y-3 text-white/70">
              <div>markets@yegxmasmarket.org</div>
              <div>Edmonton, Alberta</div>
              <div>Instagram / TikTok</div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 text-sm text-white/50 text-center">
          © 2026 XMASMRKT Holiday Market. All Rights Reserved.
        </div>
      </footer>
    </div>
  )
}
