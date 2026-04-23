export default function Home() {
  return (
    <>
      {/* Top Navigation Anchor from JSON */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 rounded-full border border-surface-variant px-6 py-2 z-50 bg-background/80 backdrop-blur-xl inner-glow shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] shadow-2xl flex items-center gap-8">
        <div className="text-xl font-bold tracking-tighter text-primary">
          Cauceus
        </div>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 text-label-caps font-label-caps text-on-surface-variant">
          <a
            className="hover:text-primary transition-colors duration-300"
            href="#"
          >
            Our story
          </a>
          <a
            className="hover:text-primary transition-colors duration-300"
            href="#"
          >
            Collective
          </a>
          <a
            className="hover:text-primary transition-colors duration-300"
            href="#"
          >
            Workshops
          </a>
          <a
            className="text-primary font-bold border-b border-primary pb-0.5"
            href="#"
          >
            Programs
          </a>
          <a
            className="hover:text-primary transition-colors duration-300"
            href="#"
          >
            Inquiries
          </a>
        </div>
        <button className="bg-primary text-background px-4 py-2 rounded-full text-label-caps font-label-caps font-bold hover:scale-95 active:scale-90 transition-transform hidden md:block">
          Start Project
        </button>
      </nav>
      {/* Main Content Canvas */}
      <main className="w-full">
        {/* Hero Section */}
        <section className="relative h-screen w-full p-4 md:p-8 flex items-end">
          {/* Inset Container */}
          <div className="absolute inset-4 md:inset-8 rounded-xl overflow-hidden shadow-[inset_0_0_100px_rgba(0,0,0,0.8)]">
            {/* Background Video */}
            <video
              autoPlay
              className="absolute inset-0 w-full h-full object-cover"
              loop
              muted
              playsInline
            >
              <source
                src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
                type="video/mp4"
              />
            </video>
            {/* Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent"></div>
            <div className="noise-overlay"></div>
          </div>
          {/* Hero Content */}
          <div className="relative z-20 w-full grid grid-cols-1 md:grid-cols-12 gap-gutter px-4 md:px-8 pb-8 md:pb-12 items-end">
            <div className="col-span-1 md:col-span-7 lg:col-span-8">
              <h1 className="text-display-xl font-display-xl text-primary-container leading-none flex items-start">
                Cauceus
                <span className="text-headline-md font-headline-md text-primary mt-4 ml-2 md:text-4xl lg:text-5xl">
                  *
                </span>
              </h1>
            </div>
            <div className="col-span-1 md:col-span-5 lg:col-span-4 flex flex-col items-start gap-6 min-w-0">
              <p className="text-body-lg font-body-lg text-on-surface-variant max-w-sm w-full">
                Defining narrative through tactical motion. A sanctuary for
                high-value creative execution.
              </p>
              <button className="bg-primary text-background px-8 py-4 rounded-full text-body-sm font-body-sm font-bold hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_rgba(222,219,200,0.2)] hover:shadow-[0_0_40px_rgba(222,219,200,0.4)]">
                Join the lab
              </button>
            </div>
          </div>
        </section>
        {/* About Section */}
        <section className="w-full py-xl px-margin flex justify-center">
          <div className="w-full max-w-6xl bg-surface rounded-xl p-lg md:p-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] border border-surface-variant/30">
            <h2 className="text-headline-lg font-headline-lg text-primary-container mb-12 max-w-4xl leading-tight">
              I am Marcus Chen, a self-taught director crafting{" "}
              <span className="font-accent-italic text-accent-italic text-primary italic">
                cinematic
              </span>{" "}
              experiences for the elite.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
              <div></div>
              <p className="text-body-lg font-body-lg text-on-surface-variant leading-relaxed">
                We reject the digital flatness of modern web. We embrace the
                tactical, the textured, and the deliberate. Every frame is
                considered. Every transition has weight. This is not just a
                studio; it is a movement back to craftsmanship.
              </p>
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section className="relative w-full py-xl px-margin bg-noise bg-surface-container-lowest">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 flex justify-between items-end">
              <h2 className="text-headline-md font-headline-md text-primary-container">
                Studio-grade workflows...
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
              {/* Card 1: Video Card (Spans 8 cols) */}
              <div className="col-span-1 md:col-span-8 rounded-xl overflow-hidden relative h-[500px] border border-surface-variant/30 group cursor-pointer">
                <video
                  autoPlay
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loop
                  muted
                  playsInline
                >
                  <source
                    src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4"
                    type="video/mp4"
                  />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
                <div className="absolute bottom-8 left-8">
                  <h3 className="text-headline-md font-headline-md text-primary mb-2">
                    Cinematic Direction
                  </h3>
                  <p className="text-body-sm font-body-sm text-on-surface-variant">
                    Mastering light and shadow.
                  </p>
                </div>
              </div>
              {/* Card 2 (Spans 4 cols) */}
              <div className="col-span-1 md:col-span-4 bg-surface-container-high rounded-xl p-8 border border-surface-variant/30 flex flex-col justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] hover:bg-surface-variant transition-colors duration-300">
                <div>
                  <span className="material-symbols-outlined text-4xl text-primary mb-6">
                    movie_filter
                  </span>
                  <h3 className="text-body-lg font-body-lg text-primary-container mb-4 font-bold">
                    Grading Suite
                  </h3>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-3 text-body-sm font-body-sm text-on-surface-variant">
                      <span className="material-symbols-outlined text-primary text-sm">
                        check
                      </span>{" "}
                      DaVinci Resolve
                    </li>
                    <li className="flex items-center gap-3 text-body-sm font-body-sm text-on-surface-variant">
                      <span className="material-symbols-outlined text-primary text-sm">
                        check
                      </span>{" "}
                      Film Print Emulation
                    </li>
                    <li className="flex items-center gap-3 text-body-sm font-body-sm text-on-surface-variant">
                      <span className="material-symbols-outlined text-primary text-sm">
                        check
                      </span>{" "}
                      Look Development
                    </li>
                  </ul>
                </div>
                <button className="flex items-center justify-between w-full border-b border-outline-variant pb-2 text-label-caps font-label-caps text-primary hover:border-primary transition-colors">
                  <span>Learn more</span>
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </button>
              </div>
              {/* Card 3 (Spans 6 cols) */}
              <div className="col-span-1 md:col-span-6 bg-surface-container-high rounded-xl p-8 border border-surface-variant/30 flex flex-col justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] hover:bg-surface-variant transition-colors duration-300">
                <div>
                  <span className="material-symbols-outlined text-4xl text-primary mb-6">
                    graphic_eq
                  </span>
                  <h3 className="text-body-lg font-body-lg text-primary-container mb-4 font-bold">
                    Sound Design
                  </h3>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-3 text-body-sm font-body-sm text-on-surface-variant">
                      <span className="material-symbols-outlined text-primary text-sm">
                        check
                      </span>{" "}
                      Foley Recording
                    </li>
                    <li className="flex items-center gap-3 text-body-sm font-body-sm text-on-surface-variant">
                      <span className="material-symbols-outlined text-primary text-sm">
                        check
                      </span>{" "}
                      Spatial Audio Mixing
                    </li>
                  </ul>
                </div>
                <button className="flex items-center justify-between w-full border-b border-outline-variant pb-2 text-label-caps font-label-caps text-primary hover:border-primary transition-colors">
                  <span>Learn more</span>
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </button>
              </div>
              {/* Card 4 (Spans 6 cols) */}
              <div className="col-span-1 md:col-span-6 bg-surface-container-high rounded-xl p-8 border border-surface-variant/30 flex flex-col justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] hover:bg-surface-variant transition-colors duration-300">
                <div>
                  <span className="material-symbols-outlined text-4xl text-primary mb-6">
                    view_in_ar
                  </span>
                  <h3 className="text-body-lg font-body-lg text-primary-container mb-4 font-bold">
                    VFX Integration
                  </h3>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-3 text-body-sm font-body-sm text-on-surface-variant">
                      <span className="material-symbols-outlined text-primary text-sm">
                        check
                      </span>{" "}
                      3D Tracking
                    </li>
                    <li className="flex items-center gap-3 text-body-sm font-body-sm text-on-surface-variant">
                      <span className="material-symbols-outlined text-primary text-sm">
                        check
                      </span>{" "}
                      Compositing
                    </li>
                  </ul>
                </div>
                <button className="flex items-center justify-between w-full border-b border-outline-variant pb-2 text-label-caps font-label-caps text-primary hover:border-primary transition-colors">
                  <span>Learn more</span>
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Footer Anchor from JSON */}
      <footer className="w-full py-12 px-8 border-t border-surface-variant bg-background tonal-inset flat flex flex-col md:flex-row justify-between items-center gap-6 z-10 relative">
        <div className="text-lg font-black text-primary">Cauceus</div>
        <div className="flex items-center gap-6">
          <a
            className="text-label-caps font-label-caps text-on-surface-variant hover:text-on-surface transition-colors opacity-80 hover:opacity-100"
            href="#"
          >
            Instagram
          </a>
          <a
            className="text-label-caps font-label-caps text-on-surface-variant hover:text-on-surface transition-colors opacity-80 hover:opacity-100"
            href="#"
          >
            Behance
          </a>
          <a
            className="text-label-caps font-label-caps text-on-surface-variant hover:text-on-surface transition-colors opacity-80 hover:opacity-100"
            href="#"
          >
            Vimeo
          </a>
          <a
            className="text-label-caps font-label-caps text-on-surface-variant hover:text-on-surface transition-colors opacity-80 hover:opacity-100"
            href="#"
          >
            LinkedIn
          </a>
        </div>
        <div className="text-label-caps font-label-caps text-on-surface-variant">
          © 2024 Cauceus Creative Studio. Defined by Motion.
        </div>
      </footer>
    </>
  );
}
