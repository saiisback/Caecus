export default function Home() {
  return (
    <>
      {/* Top Navigation Anchor */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 rounded-full border border-surface-variant px-6 py-2 z-50 bg-background/80 backdrop-blur-xl inner-glow shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] shadow-2xl flex items-center gap-8">
        <div className="text-xl font-bold tracking-tighter text-primary">
          Caecus
        </div>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 text-label-caps font-label-caps text-on-surface-variant">
          <a
            className="hover:text-primary transition-colors duration-300"
            href="#protocol"
          >
            Protocol
          </a>
          <a
            className="hover:text-primary transition-colors duration-300"
            href="#features"
          >
            Features
          </a>
          <a
            className="hover:text-primary transition-colors duration-300"
            href="#technology"
          >
            Technology
          </a>
          <a
            className="text-primary font-bold border-b border-primary pb-0.5"
            href="#why-now"
          >
            Why Now
          </a>
          <a
            className="hover:text-primary transition-colors duration-300"
            href="#status"
          >
            Status
          </a>
        </div>
        <button className="bg-brown text-on-brown px-4 py-2 rounded-full text-label-caps font-label-caps font-bold hover:bg-brown-dim hover:scale-95 active:scale-90 transition-all hidden md:block">
          Join Waitlist
        </button>
      </nav>
      {/* Main Content Canvas */}
      <main className="w-full">
        {/* Hero Section */}
        <section className="relative h-screen w-full p-4 md:p-8">
          {/* Inset Container */}
          <div className="absolute inset-4 md:inset-8 rounded-xl overflow-hidden shadow-[inset_0_0_100px_rgba(0,0,0,0.8)]">
            {/* Background Image */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/hero.svg"
              alt="Caecus — classical temple by water at sunset"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="noise-overlay"></div>
          </div>

          {/* Mobile layout — vertical stack, left-aligned */}
          <div className="md:hidden absolute inset-x-6 bottom-10 top-10 z-20 flex flex-col justify-between">
            <div className="flex items-center gap-3">
              <span className="inline-block w-8 h-px bg-brown-light"></span>
              <span className="text-label-caps font-label-caps text-brown-light opacity-95">
                THE BLIND PROTOCOL · BUILT ON FHENIX
              </span>
            </div>
            <div className="flex flex-col gap-6">
              <h1 className="text-display-xl font-display-xl text-primary-container leading-none flex items-start">
                Caecus
                <span className="text-headline-md font-headline-md text-brown-light mt-4 ml-2">
                  *
                </span>
              </h1>
              <p className="text-body-lg font-body-lg text-on-surface max-w-md">
                The first fully private DeFi protocol. Every trade, position,
                swap, and vote is encrypted on-chain — invisible to the world,
                but fully verifiable.
              </p>
              <div className="flex items-center gap-3 flex-wrap">
                <button className="bg-brown text-on-brown px-6 py-3 rounded-full text-body-sm font-body-sm font-bold hover:bg-brown-dim transition-all duration-300 shadow-[0_0_30px_rgba(139,111,71,0.35)]">
                  Join Waitlist
                </button>
                <button className="bg-background text-brown-light border border-brown-dim px-6 py-3 rounded-full text-body-sm font-body-sm font-bold hover:bg-brown-surface hover:border-brown-light transition-colors duration-300">
                  Read Whitepaper
                </button>
              </div>
            </div>
          </div>

          {/* Desktop layout — corner anchored */}
          <div className="hidden md:block">
            {/* Eyebrow — top-left */}
            <div className="absolute top-16 left-16 z-20 flex items-center gap-3">
              <span className="inline-block w-8 h-px bg-brown-light"></span>
              <span className="text-label-caps font-label-caps text-brown-light opacity-95">
                THE BLIND PROTOCOL · BUILT ON FHENIX
              </span>
            </div>

            {/* Caecus wordmark — bottom-left, dominant */}
            <div className="absolute bottom-16 left-16 z-20 max-w-[60vw]">
              <h1 className="text-display-xl font-display-xl text-primary-container leading-none flex items-start">
                Caecus
                <span className="text-headline-md font-headline-md text-brown-light mt-4 ml-2 text-4xl lg:text-5xl">
                  *
                </span>
              </h1>
            </div>

            {/* Description + CTAs — anchored bottom-right */}
            <div className="absolute bottom-16 right-16 z-20 w-[22rem] lg:w-[26rem] flex flex-col gap-6 items-end text-right">
              <p className="text-body-lg font-body-lg text-on-surface">
                The first fully private DeFi protocol. Every trade, position,
                swap, and vote is encrypted on-chain — invisible to the world,
                but fully verifiable.
              </p>
              <div className="flex items-center gap-3 flex-wrap justify-end">
                <button className="bg-brown text-on-brown px-8 py-4 rounded-full text-body-sm font-body-sm font-bold hover:bg-brown-dim hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(139,111,71,0.35)] hover:shadow-[0_0_40px_rgba(139,111,71,0.55)]">
                  Join Waitlist
                </button>
                <button className="bg-background text-brown-light border border-brown-dim px-8 py-4 rounded-full text-body-sm font-body-sm font-bold hover:bg-brown-surface hover:border-brown-light transition-colors duration-300">
                  Read Whitepaper
                </button>
              </div>
            </div>

            {/* Tagline strip — top-right, xl only so it doesn't fight the description column */}
            <div className="absolute top-16 right-16 z-20 max-w-[18rem] text-right hidden xl:block border-r-2 border-brown pr-5">
              <p className="text-label-caps font-label-caps text-brown-light opacity-95 leading-relaxed">
                Caecus — Latin for &ldquo;blind.&rdquo;
                <br />
                The chain sees everything.
                <br />
                It understands nothing.
              </p>
            </div>
          </div>
        </section>

        {/* About / Protocol Intro */}
        <section id="protocol" className="w-full py-xl px-margin flex justify-center">
          <div
            className="w-full max-w-6xl rounded-xl border border-brown-dim/40 relative overflow-hidden bg-cover bg-center p-lg md:p-xl"
            style={{ backgroundImage: "url('/building.png')" }}
          >
            <div className="absolute inset-0 bg-background/65 pointer-events-none"></div>
            <div className="relative">
              <div className="text-label-caps font-label-caps text-brown-light mb-6 opacity-95">
                WHAT WE&apos;RE BUILDING
              </div>
              <h2 className="text-headline-lg font-headline-lg text-primary-container mb-12 max-w-4xl leading-tight">
                A complete DeFi suite where{" "}
                <span className="font-accent-italic text-accent-italic text-brown-light italic">
                  nothing
                </span>{" "}
                is visible on-chain. Not your balance. Not your position. Not
                your strategy.
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                <p className="text-body-lg font-body-lg text-on-surface leading-relaxed">
                  Pools, swaps, lending, perpetuals, governance — every
                  primitive you expect from DeFi, now with institutional-grade
                  confidentiality baked in at the protocol level.
                </p>
                <p className="text-body-lg font-body-lg text-on-surface leading-relaxed">
                  Caecus is not wrapping privacy on top of existing protocols.
                  We are building privacy-first from the ground up on Fhenix,
                  using Fully Homomorphic Encryption — the only cryptographic
                  approach that lets you compute directly on encrypted data
                  without ever decrypting it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Technology */}
        <section id="technology" className="relative w-full py-xl px-margin bg-noise bg-surface-container-lowest">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 flex flex-col md:flex-row justify-between md:items-end gap-6">
              <div>
                <div className="text-label-caps font-label-caps text-brown-light mb-4 opacity-90">
                  THE CORE TECHNOLOGY
                </div>
                <h2 className="text-headline-md font-headline-md text-primary-container max-w-3xl">
                  Fully Homomorphic Encryption via{" "}
                  <span className="font-accent-italic text-accent-italic text-brown-light italic">
                    Fhenix CoFHE
                  </span>
                </h2>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
              {/* CoFHE — full-bleed astronaut video card */}
              <div className="relative rounded-xl border border-surface-variant/30 overflow-hidden flex flex-col justify-end min-h-[32rem] group">
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
               
              </div>

              {/* Asset Layer — 3 primitives */}
              <div className="bg-surface-container-high rounded-xl p-8 border border-surface-variant/30 flex flex-col justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] hover:bg-surface-variant transition-colors duration-300">
                <div>
                  <span className="material-symbols-outlined text-4xl text-brown-light mb-6">
                    inventory_2
                  </span>
                  <h3 className="text-body-lg font-body-lg text-primary-container mb-4 font-bold">
                    Asset Layer
                  </h3>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-3 text-body-sm font-body-sm text-on-surface-variant">
                      <span className="material-symbols-outlined text-brown-light text-sm mt-0.5">
                        check
                      </span>{" "}
                      Shielded Liquidity Pools
                    </li>
                    <li className="flex items-start gap-3 text-body-sm font-body-sm text-on-surface-variant">
                      <span className="material-symbols-outlined text-brown-light text-sm mt-0.5">
                        check
                      </span>{" "}
                      Private Yield & LP Positions
                    </li>
                    <li className="flex items-start gap-3 text-body-sm font-body-sm text-on-surface-variant">
                      <span className="material-symbols-outlined text-brown-light text-sm mt-0.5">
                        check
                      </span>{" "}
                      Private RWA Tokenization
                    </li>
                  </ul>
                </div>
                <div className="flex items-center justify-between w-full border-b border-outline-variant pb-2 text-label-caps font-label-caps text-brown-light">
                  <span>fhERC-20 standard</span>
                  <span className="material-symbols-outlined text-sm">
                    shield_lock
                  </span>
                </div>
              </div>

              {/* Trading & Credit Layer — 4 primitives */}
              <div className="bg-surface-container-high rounded-xl p-8 border border-surface-variant/30 flex flex-col justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] hover:bg-surface-variant transition-colors duration-300">
                <div>
                  <span className="material-symbols-outlined text-4xl text-brown-light mb-6">
                    candlestick_chart
                  </span>
                  <h3 className="text-body-lg font-body-lg text-primary-container mb-4 font-bold">
                    Trading & Credit Layer
                  </h3>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-3 text-body-sm font-body-sm text-on-surface-variant">
                      <span className="material-symbols-outlined text-brown-light text-sm mt-0.5">
                        check
                      </span>{" "}
                      Private Swaps · Uniswap v4 hooks
                    </li>
                    <li className="flex items-start gap-3 text-body-sm font-body-sm text-on-surface-variant">
                      <span className="material-symbols-outlined text-brown-light text-sm mt-0.5">
                        check
                      </span>{" "}
                      Private Perpetuals
                    </li>
                    <li className="flex items-start gap-3 text-body-sm font-body-sm text-on-surface-variant">
                      <span className="material-symbols-outlined text-brown-light text-sm mt-0.5">
                        check
                      </span>{" "}
                      Private Lending Market
                    </li>
                    <li className="flex items-start gap-3 text-body-sm font-body-sm text-on-surface-variant">
                      <span className="material-symbols-outlined text-brown-light text-sm mt-0.5">
                        check
                      </span>{" "}
                      Sealed-Bid Auctions & Dark Pools
                    </li>
                  </ul>
                </div>
                <div className="flex items-center justify-between w-full border-b border-outline-variant pb-2 text-label-caps font-label-caps text-brown-light">
                  <span>AMM · Derivatives · Credit</span>
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </div>
              </div>

              {/* Infra, Governance & Compliance Layer — 3 primitives */}
              <div className="bg-surface-container-high rounded-xl p-8 border border-surface-variant/30 flex flex-col justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] hover:bg-surface-variant transition-colors duration-300">
                <div>
                  <span className="material-symbols-outlined text-4xl text-brown-light mb-6">
                    security
                  </span>
                  <h3 className="text-body-lg font-body-lg text-primary-container mb-4 font-bold">
                    Infra, Governance & Compliance
                  </h3>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-3 text-body-sm font-body-sm text-on-surface-variant">
                      <span className="material-symbols-outlined text-brown-light text-sm mt-0.5">
                        check
                      </span>{" "}
                      MEV Protection · encrypted mempool
                    </li>
                    <li className="flex items-start gap-3 text-body-sm font-body-sm text-on-surface-variant">
                      <span className="material-symbols-outlined text-brown-light text-sm mt-0.5">
                        check
                      </span>{" "}
                      Confidential Governance
                    </li>
                    <li className="flex items-start gap-3 text-body-sm font-body-sm text-on-surface-variant">
                      <span className="material-symbols-outlined text-brown-light text-sm mt-0.5">
                        check
                      </span>{" "}
                      Selective Disclosure & Audit Keys
                    </li>
                  </ul>
                </div>
                <div className="flex items-center justify-between w-full border-b border-outline-variant pb-2 text-label-caps font-label-caps text-brown-light">
                  <span>Ten primitives · one protocol</span>
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Set Intro */}
        <section id="features" className="w-full pt-xl px-margin">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="text-label-caps font-label-caps text-brown-light mb-4 opacity-90">
                PROTOCOL SURFACE · TEN PRIMITIVES
              </div>
              <h2 className="text-headline-lg font-headline-lg text-primary-container max-w-3xl leading-tight">
                The full DeFi stack —{" "}
                <span className="font-accent-italic text-accent-italic text-brown-light italic">
                  privately.
                </span>
              </h2>
            </div>
          </div>
        </section>

        {/* Feature 01 — Shielded Pools */}
        <section className="w-full py-lg px-margin">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter items-stretch">
            <div className="col-span-1 md:col-span-5 bg-surface rounded-xl p-8 md:p-10 border border-surface-variant/30 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] flex flex-col justify-between min-h-[28rem]">
              <div>
                <div className="text-label-caps font-label-caps text-brown-light opacity-90 mb-6">
                  01 · FOUNDATION LAYER
                </div>
                <h3 className="text-headline-md font-headline-md text-primary-container mb-4">
                  Shielded Liquidity Pools
                </h3>
                <p className="text-body-sm font-body-sm text-brown-light opacity-95 mb-6">
                  fhERC-20 Standard
                </p>
                <p className="text-body-lg font-body-lg text-on-surface-variant leading-relaxed">
                  Every asset in Caecus lives as an{" "}
                  <span className="text-brown-light font-bold">fhERC-20 token</span> — an
                  encrypted version of ERC-20 where balances are ciphertexts,
                  not plaintext numbers. Anyone can provide liquidity. Nobody
                  can see how much.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-outline-variant">
                <div className="text-label-caps font-label-caps text-on-surface-variant opacity-70 mb-3">
                  WHY IT MATTERS
                </div>
                <p className="text-body-sm font-body-sm text-on-surface-variant">
                  On transparent chains, whale wallets are tracked in real
                  time. With shielded pools, your liquidity is invisible — you
                  retain full informational advantage.
                </p>
              </div>
            </div>
            <div className="col-span-1 md:col-span-7 grid grid-cols-2 gap-gutter">
              <div className="bg-surface-container-high rounded-xl p-6 border border-surface-variant/30">
                <span className="material-symbols-outlined text-3xl text-primary mb-4">
                  visibility_off
                </span>
                <h4 className="text-body-lg font-body-lg text-primary-container font-bold mb-2">
                  Encrypted balances
                </h4>
                <p className="text-body-sm font-body-sm text-on-surface-variant">
                  Wallets show directional updates without revealing amounts.
                </p>
              </div>
              <div className="bg-surface-container-high rounded-xl p-6 border border-surface-variant/30">
                <span className="material-symbols-outlined text-3xl text-primary mb-4">
                  waves
                </span>
                <h4 className="text-body-lg font-body-lg text-primary-container font-bold mb-2">
                  Deep, consolidated liquidity
                </h4>
                <p className="text-body-sm font-body-sm text-on-surface-variant">
                  Real pool reserves — not fragmented across anonymous UTXOs.
                </p>
              </div>
              <div className="bg-surface-container-high rounded-xl p-6 border border-surface-variant/30">
                <span className="material-symbols-outlined text-3xl text-primary mb-4">
                  swap_horiz
                </span>
                <h4 className="text-body-lg font-body-lg text-primary-container font-bold mb-2">
                  Private flows
                </h4>
                <p className="text-body-sm font-body-sm text-on-surface-variant">
                  Deposits, withdrawals, and transfers happen inside encrypted
                  state.
                </p>
              </div>
              <div className="bg-surface-container-high rounded-xl p-6 border border-surface-variant/30">
                <span className="material-symbols-outlined text-3xl text-primary mb-4">
                  enhanced_encryption
                </span>
                <h4 className="text-body-lg font-body-lg text-primary-container font-bold mb-2">
                  Invisible to explorers
                </h4>
                <p className="text-body-sm font-body-sm text-on-surface-variant">
                  Block explorers, competitors, bots — none can see the
                  amounts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Feature 02 — Private Swaps */}
        <section className="w-full py-lg px-margin bg-noise bg-surface-container-lowest">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter">
            <div className="col-span-1 md:col-span-7 bg-surface-container rounded-xl p-8 md:p-10 border border-surface-variant/30 relative overflow-hidden min-h-[28rem] flex flex-col justify-between">
              <div>
                <div className="text-label-caps font-label-caps text-brown-light opacity-90 mb-6">
                  02 · AMM LAYER
                </div>
                <h3 className="text-headline-md font-headline-md text-primary-container mb-4">
                  Private Swaps
                </h3>
                <p className="text-body-sm font-body-sm text-brown-light opacity-95 mb-6">
                  Uniswap v4 Hooks + FHE
                </p>
                <p className="text-body-lg font-body-lg text-on-surface-variant leading-relaxed max-w-2xl">
                  Private swaps plug into Uniswap v4&apos;s existing liquidity
                  via FHE hooks. You don&apos;t give up deep liquidity for
                  privacy — you get both. Swap inputs, outputs, and token pairs
                  are encrypted before hitting the mempool.
                </p>
              </div>
              <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
                {["Who is swapping", "What they swap", "How much", "At what price"].map(
                  (item) => (
                    <div
                      key={item}
                      className="border border-outline-variant rounded-lg p-4 bg-background/40"
                    >
                      <div className="text-label-caps font-label-caps text-on-surface-variant opacity-60 mb-2">
                        HIDDEN
                      </div>
                      <div className="text-body-sm font-body-sm text-primary-container">
                        {item}
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
            <div className="col-span-1 md:col-span-5 bg-surface rounded-xl p-8 md:p-10 border border-surface-variant/30 flex flex-col justify-between">
              <div>
                <span className="material-symbols-outlined text-4xl text-primary mb-6">
                  bolt
                </span>
                <h4 className="text-headline-md font-headline-md text-primary-container mb-4">
                  MEV, cryptographically impossible.
                </h4>
                <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed mb-6">
                  Every swap on a transparent AMM is a signal. MEV bots read
                  your intent and extract value before your trade settles.
                  Sandwich attacks can&apos;t exist for data bots cannot read.
                </p>
              </div>
              <ul className="space-y-3 pt-6 border-t border-outline-variant">
                <li className="flex items-center gap-3 text-body-sm font-body-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary text-sm">
                    check
                  </span>
                  Encrypted mempool intent
                </li>
                <li className="flex items-center gap-3 text-body-sm font-body-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary text-sm">
                    check
                  </span>
                  Slippage & routing privacy
                </li>
                <li className="flex items-center gap-3 text-body-sm font-body-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary text-sm">
                    check
                  </span>
                  Private LP fee accrual
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Feature 03 — Private Perpetuals */}
        <section className="w-full py-lg px-margin">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter">
            <div className="col-span-1 md:col-span-5 bg-surface rounded-xl p-8 md:p-10 border border-surface-variant/30 flex flex-col justify-between min-h-[28rem]">
              <div>
                <div className="text-label-caps font-label-caps text-brown-light opacity-90 mb-6">
                  03 · DERIVATIVES LAYER
                </div>
                <h3 className="text-headline-md font-headline-md text-primary-container mb-4">
                  Private Perpetuals
                </h3>
                <p className="text-body-sm font-body-sm text-brown-light opacity-95 mb-6">
                  Encrypted Margin + Positions
                </p>
                <p className="text-body-lg font-body-lg text-on-surface-variant leading-relaxed">
                  Full-featured perps where position sizes, leverage, PnL, and
                  funding rates are all encrypted on-chain. Liquidations
                  triggered via CoFHE booleans — keepers see only{" "}
                  <span className="text-brown-light font-bold">
                    &ldquo;position underwater: yes / no&rdquo;
                  </span>
                  .
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-outline-variant">
                <div className="text-label-caps font-label-caps text-on-surface-variant opacity-70 mb-3">
                  WHY IT MATTERS
                </div>
                <p className="text-body-sm font-body-sm text-on-surface-variant">
                  On public perp platforms, whale positions get hunted. With
                  private perps, nobody knows where your stop is — or that
                  you&apos;re even in a trade.
                </p>
              </div>
            </div>
            <div className="col-span-1 md:col-span-7 bg-surface-container-high rounded-xl p-8 md:p-10 border border-surface-variant/30 relative overflow-hidden">
              <div className="text-label-caps font-label-caps text-on-surface-variant opacity-60 mb-6">
                WHAT&apos;S HIDDEN
              </div>
              <div className="space-y-4">
                {[
                  { label: "Position direction", detail: "Long or short — undisclosed" },
                  { label: "Position size & leverage", detail: "Notional value encrypted" },
                  { label: "Entry & liquidation price", detail: "No observable stop levels" },
                  { label: "Accumulated PnL", detail: "Gains and losses remain private" },
                  { label: "Margin balance", detail: "Collateral as encrypted fhERC-20" },
                ].map((row, i) => (
                  <div
                    key={row.label}
                    className="flex items-center justify-between gap-6 border-b border-outline-variant pb-4 last:border-0"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-label-caps font-label-caps text-brown-light opacity-80 w-6">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <div className="text-body-lg font-body-lg text-primary-container font-bold">
                          {row.label}
                        </div>
                        <div className="text-body-sm font-body-sm text-on-surface-variant">
                          {row.detail}
                        </div>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-primary">
                      visibility_off
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Feature 04 — Private Lending */}
        <section className="w-full py-lg px-margin bg-noise bg-surface-container-lowest">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter">
            <div className="col-span-1 md:col-span-7 bg-surface-container rounded-xl p-8 md:p-10 border border-surface-variant/30 min-h-[28rem] flex flex-col justify-between">
              <div>
                <div className="text-label-caps font-label-caps text-brown-light opacity-90 mb-6">
                  04 · CREDIT LAYER
                </div>
                <h3 className="text-headline-md font-headline-md text-primary-container mb-4">
                  Private Lending Market
                </h3>
                <p className="text-body-sm font-body-sm text-brown-light opacity-95 mb-6">
                  Encrypted Borrow / Lend
                </p>
                <p className="text-body-lg font-body-lg text-on-surface-variant leading-relaxed max-w-2xl">
                  A full lending protocol — think Aave — where every
                  collateral position, borrow amount, interest rate, and health
                  factor is encrypted. Institutions can borrow at scale without
                  revealing strategy or counterparty exposure.
                </p>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-4">
                <div className="bg-background/40 rounded-lg p-4 border border-outline-variant">
                  <div className="text-label-caps font-label-caps text-brown-light opacity-80 mb-1">
                    COLLATERAL
                  </div>
                  <div className="text-body-sm font-body-sm text-primary-container">
                    Type & amount encrypted
                  </div>
                </div>
                <div className="bg-background/40 rounded-lg p-4 border border-outline-variant">
                  <div className="text-label-caps font-label-caps text-brown-light opacity-80 mb-1">
                    BORROW
                  </div>
                  <div className="text-body-sm font-body-sm text-primary-container">
                    Size & asset hidden
                  </div>
                </div>
                <div className="bg-background/40 rounded-lg p-4 border border-outline-variant">
                  <div className="text-label-caps font-label-caps text-brown-light opacity-80 mb-1">
                    HEALTH FACTOR
                  </div>
                  <div className="text-body-sm font-body-sm text-primary-container">
                    Private LTV & threshold
                  </div>
                </div>
                <div className="bg-background/40 rounded-lg p-4 border border-outline-variant">
                  <div className="text-label-caps font-label-caps text-brown-light opacity-80 mb-1">
                    INTEREST
                  </div>
                  <div className="text-body-sm font-body-sm text-primary-container">
                    Accrued silently
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1 md:col-span-5 bg-surface rounded-xl p-8 md:p-10 border border-surface-variant/30 flex flex-col justify-between">
              <div>
                <span className="material-symbols-outlined text-4xl text-primary mb-6">
                  account_balance
                </span>
                <h4 className="text-headline-md font-headline-md text-primary-container mb-4">
                  Liquidations by boolean.
                </h4>
                <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                  Liquidation bots check health factors via CoFHE and receive
                  only a boolean signal. Position details remain sealed, even
                  from the keeper that triggers the call.
                </p>
              </div>
              <div className="pt-6 border-t border-outline-variant">
                <div className="text-label-caps font-label-caps text-on-surface-variant opacity-70 mb-3">
                  ELIMINATES
                </div>
                <p className="text-body-sm font-body-sm text-on-surface-variant">
                  Protocol-level front-running of liquidations. Competitor
                  surveillance of institutional risk profiles.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Feature 05 — Sealed-Bid Auctions */}
        <section className="w-full py-lg px-margin">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter">
            <div className="col-span-1 md:col-span-5 flex flex-col gap-gutter">
              <div className="bg-surface rounded-xl p-8 border border-surface-variant/30">
                <div className="text-label-caps font-label-caps text-brown-light opacity-90 mb-6">
                  05 · INSTITUTIONAL LAYER
                </div>
                <h3 className="text-headline-md font-headline-md text-primary-container mb-4">
                  Sealed-Bid Auctions & Dark Pools
                </h3>
                <p className="text-body-sm font-body-sm text-brown-light opacity-95 mb-6">
                  Encrypted Order Flow
                </p>
                <p className="text-body-lg font-body-lg text-on-surface-variant leading-relaxed">
                  Dark pools exist in TradFi precisely because large orders
                  move markets when visible. For the first time, on-chain dark
                  pool mechanics are possible.
                </p>
              </div>
              <div className="bg-surface-container-high rounded-xl p-8 border border-surface-variant/30">
                <div className="text-label-caps font-label-caps text-on-surface-variant opacity-70 mb-3">
                  USE CASES
                </div>
                <ul className="space-y-2 text-body-sm font-body-sm text-on-surface-variant">
                  <li>• Large block trades</li>
                  <li>• NFT auctions</li>
                  <li>• Token launches</li>
                  <li>• Protocol liquidations</li>
                </ul>
              </div>
            </div>
            <div className="col-span-1 md:col-span-7 bg-surface-container rounded-xl p-8 md:p-10 border border-surface-variant/30 flex flex-col justify-between">
              <div>
                <span className="material-symbols-outlined text-4xl text-primary mb-6">
                  gavel
                </span>
                <h4 className="text-headline-md font-headline-md text-primary-container mb-6">
                  Bids stay sealed. Only the winner is revealed.
                </h4>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary mt-1">
                      mail_lock
                    </span>
                    <div>
                      <div className="text-body-lg font-body-lg text-primary-container font-bold">
                        Encrypted intents
                      </div>
                      <p className="text-body-sm font-body-sm text-on-surface-variant">
                        Institutional traders post large orders with size and
                        price hidden until settlement.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary mt-1">
                      hourglass_top
                    </span>
                    <div>
                      <div className="text-body-lg font-body-lg text-primary-container font-bold">
                        Sealed auction window
                      </div>
                      <p className="text-body-sm font-body-sm text-on-surface-variant">
                        All bids remain encrypted during the auction; only the
                        winner is revealed at close.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary mt-1">
                      sync_alt
                    </span>
                    <div>
                      <div className="text-body-lg font-body-lg text-primary-container font-bold">
                        Dark pool matching
                      </div>
                      <p className="text-body-sm font-body-sm text-on-surface-variant">
                        Orders match inside CoFHE without either side learning
                        the other&apos;s parameters until execution.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature 06 — MEV Protection */}
        <section className="w-full py-lg px-margin">
          <div className="max-w-7xl mx-auto bg-brown-surface rounded-xl border border-brown-dim/50 overflow-hidden relative">
            <div className="absolute inset-0 bg-noise opacity-40 pointer-events-none"></div>
            <div className="relative grid grid-cols-1 md:grid-cols-12 gap-0">
              <div className="col-span-1 md:col-span-6 p-10 md:p-14 border-b md:border-b-0 md:border-r border-brown-dim/50">
                <div className="text-label-caps font-label-caps text-brown-light opacity-90 mb-6">
                  06 · INFRASTRUCTURE LAYER
                </div>
                <h3 className="text-headline-lg font-headline-lg text-primary-container mb-6 leading-tight">
                  MEV protection as a{" "}
                  <span className="font-accent-italic text-accent-italic text-brown-light italic">
                    structural property.
                  </span>
                </h3>
                <p className="text-body-lg font-body-lg text-on-surface-variant leading-relaxed">
                  Not a bolt-on. Not a protected relay. Because transactions
                  are encrypted before entering the mempool, front-running and
                  sandwich attacks are cryptographically impossible.
                </p>
              </div>
              <div className="col-span-1 md:col-span-6 p-10 md:p-14 flex flex-col justify-between">
                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary text-2xl">
                      shield
                    </span>
                    <div>
                      <div className="text-body-lg font-body-lg text-primary-container font-bold">
                        Encrypted at submission
                      </div>
                      <p className="text-body-sm font-body-sm text-on-surface-variant">
                        Sequencers see only ciphertexts.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary text-2xl">
                      visibility_off
                    </span>
                    <div>
                      <div className="text-body-lg font-body-lg text-primary-container font-bold">
                        Unreadable intent
                      </div>
                      <p className="text-body-sm font-body-sm text-on-surface-variant">
                        No bot can read a pending swap, perp order, or
                        liquidation before it settles.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary text-2xl">
                      balance
                    </span>
                    <div>
                      <div className="text-body-lg font-body-lg text-primary-container font-bold">
                        Fair ordering by math
                      </div>
                      <p className="text-body-sm font-body-sm text-on-surface-variant">
                        Not by policy — by the underlying cryptography.
                      </p>
                    </div>
                  </li>
                </ul>
                <div className="mt-10 pt-6 border-t border-outline-variant text-body-sm font-body-sm text-on-surface-variant italic opacity-80">
                  Bots can&apos;t front-run what they can&apos;t see.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature 07 — Private Yield */}
        <section className="w-full py-lg px-margin bg-noise bg-surface-container-lowest">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter">
            <div className="col-span-1 md:col-span-4 bg-surface rounded-xl p-8 border border-surface-variant/30 flex flex-col justify-between">
              <div>
                <div className="text-label-caps font-label-caps text-brown-light opacity-90 mb-6">
                  07 · YIELD LAYER
                </div>
                <h3 className="text-headline-md font-headline-md text-primary-container mb-4">
                  Private Yield & LP Positions
                </h3>
                <p className="text-body-sm font-body-sm text-brown-light opacity-95 mb-6">
                  Hidden Fee Accrual
                </p>
                <p className="text-body-lg font-body-lg text-on-surface-variant leading-relaxed">
                  LP positions and yield-bearing receipts are encrypted
                  fhERC-20 tokens. Your yield farming activity is completely
                  private.
                </p>
              </div>
            </div>
            <div className="col-span-1 md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-gutter">
              {[
                {
                  icon: "stacks",
                  title: "LP position sizes",
                  copy: "Across all pools — nobody can see your allocation.",
                },
                {
                  icon: "savings",
                  title: "Accumulated fees & yield",
                  copy: "Fee accrual happens inside encrypted state.",
                },
                {
                  icon: "lock_clock",
                  title: "Staking amounts & durations",
                  copy: "Stake and unstake without revealing position size.",
                },
                {
                  icon: "route",
                  title: "Yield strategy composition",
                  copy: "Execute without signaling to copy traders.",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="bg-surface-container-high rounded-xl p-8 border border-surface-variant/30 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] hover:bg-surface-variant transition-colors duration-300"
                >
                  <span className="material-symbols-outlined text-3xl text-primary mb-4">
                    {card.icon}
                  </span>
                  <h4 className="text-body-lg font-body-lg text-primary-container font-bold mb-2">
                    {card.title}
                  </h4>
                  <p className="text-body-sm font-body-sm text-on-surface-variant">
                    {card.copy}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature 08 — Confidential Governance */}
        <section className="w-full py-lg px-margin">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter items-stretch">
            <div className="col-span-1 md:col-span-6 bg-surface rounded-xl p-10 border border-surface-variant/30 flex flex-col justify-between min-h-[28rem]">
              <div>
                <div className="text-label-caps font-label-caps text-brown-light opacity-90 mb-6">
                  08 · GOVERNANCE LAYER
                </div>
                <h3 className="text-headline-md font-headline-md text-primary-container mb-4">
                  Confidential Governance
                </h3>
                <p className="text-body-sm font-body-sm text-brown-light opacity-95 mb-6">
                  Encrypted Voting
                </p>
                <p className="text-body-lg font-body-lg text-on-surface-variant leading-relaxed">
                  Votes, voter identities, and token weights can all remain
                  private — until (or after) a vote concludes. A genuine secret
                  ballot for on-chain governance.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-outline-variant italic text-body-sm font-body-sm text-on-surface-variant">
                &ldquo;On-chain governance today is theatrics. Whales signal
                early, others follow. Private governance makes outcomes
                reflect actual conviction.&rdquo;
              </div>
            </div>
            <div className="col-span-1 md:col-span-6 bg-surface-container-high rounded-xl p-10 border border-surface-variant/30">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary text-2xl mt-1">
                    how_to_vote
                  </span>
                  <div>
                    <div className="text-body-lg font-body-lg text-primary-container font-bold mb-1">
                      Encrypted voting power
                    </div>
                    <p className="text-body-sm font-body-sm text-on-surface-variant">
                      Governance token balances stay hidden until you choose to
                      reveal.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary text-2xl mt-1">
                    ballot
                  </span>
                  <div>
                    <div className="text-body-lg font-body-lg text-primary-container font-bold mb-1">
                      Sealed ballots
                    </div>
                    <p className="text-body-sm font-body-sm text-on-surface-variant">
                      Votes encrypted on submission — nobody can see how anyone
                      voted during the window.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary text-2xl mt-1">
                    verified
                  </span>
                  <div>
                    <div className="text-body-lg font-body-lg text-primary-container font-bold mb-1">
                      Decrypted results at close
                    </div>
                    <p className="text-body-sm font-body-sm text-on-surface-variant">
                      Full verifiability, zero coercion.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary text-2xl mt-1">
                    diversity_3
                  </span>
                  <div>
                    <div className="text-body-lg font-body-lg text-primary-container font-bold mb-1">
                      No visible whale blocs
                    </div>
                    <p className="text-body-sm font-body-sm text-on-surface-variant">
                      No social pressure on smaller holders — applies to fees,
                      listings, risk params, upgrades.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature 09 — Selective Disclosure */}
        <section className="w-full py-lg px-margin bg-noise bg-surface-container-lowest">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter">
            <div className="col-span-1 md:col-span-7 bg-surface rounded-xl p-10 border border-surface-variant/30">
              <div className="text-label-caps font-label-caps text-brown-light opacity-90 mb-6">
                09 · COMPLIANCE LAYER
              </div>
              <h3 className="text-headline-md font-headline-md text-primary-container mb-4">
                Selective Disclosure & Audit Keys
              </h3>
              <p className="text-body-sm font-body-sm text-primary opacity-80 mb-8">
                Institutional-Grade Transparency Controls
              </p>
              <p className="text-body-lg font-body-lg text-on-surface-variant leading-relaxed mb-10">
                Every user can generate private viewing keys that selectively
                reveal positions to specific parties — auditors, regulators,
                counterparties — without making anything public. This is the
                feature that makes private DeFi viable for institutions.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="border border-outline-variant rounded-lg p-5 bg-background/40">
                  <span className="material-symbols-outlined text-primary mb-3 block">
                    vpn_key
                  </span>
                  <div className="text-body-sm font-body-sm text-primary-container font-bold mb-1">
                    Time-bounded viewing keys
                  </div>
                  <p className="text-label-caps font-label-caps text-on-surface-variant opacity-70">
                    Scoped & revocable
                  </p>
                </div>
                <div className="border border-outline-variant rounded-lg p-5 bg-background/40">
                  <span className="material-symbols-outlined text-primary mb-3 block">
                    fact_check
                  </span>
                  <div className="text-body-sm font-body-sm text-primary-container font-bold mb-1">
                    Audit-ready
                  </div>
                  <p className="text-label-caps font-label-caps text-on-surface-variant opacity-70">
                    Without breaking privacy
                  </p>
                </div>
                <div className="border border-outline-variant rounded-lg p-5 bg-background/40">
                  <span className="material-symbols-outlined text-primary mb-3 block">
                    assured_workload
                  </span>
                  <div className="text-body-sm font-body-sm text-primary-container font-bold mb-1">
                    Solvency proofs
                  </div>
                  <p className="text-label-caps font-label-caps text-on-surface-variant opacity-70">
                    To counterparties, privately
                  </p>
                </div>
                <div className="border border-outline-variant rounded-lg p-5 bg-background/40">
                  <span className="material-symbols-outlined text-primary mb-3 block">
                    policy
                  </span>
                  <div className="text-body-sm font-body-sm text-primary-container font-bold mb-1">
                    Regulator access
                  </div>
                  <p className="text-label-caps font-label-caps text-on-surface-variant opacity-70">
                    Chain still shows ciphertext
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-1 md:col-span-5 bg-surface-container rounded-xl p-10 border border-surface-variant/30 flex flex-col justify-between">
              <div>
                <span className="material-symbols-outlined text-4xl text-primary mb-6">
                  key
                </span>
                <h4 className="text-headline-md font-headline-md text-primary-container mb-4 leading-tight">
                  You choose who sees what.
                </h4>
                <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                  Share plaintext with the parties that need it. Everyone else
                  — the chain, competitors, the public — sees only encrypted
                  state.
                </p>
              </div>
              <div className="mt-10 pt-6 border-t border-outline-variant">
                <div className="text-label-caps font-label-caps text-brown-light opacity-95 mb-3">
                  PRIVACY WITHOUT OPACITY
                </div>
                <p className="text-body-sm font-body-sm text-on-surface-variant">
                  Compliance, counterparty trust, and on-chain privacy —
                  without trade-offs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Feature 10 — Private RWA */}
        <section className="w-full py-lg px-margin">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter">
            <div className="col-span-1 md:col-span-5 bg-surface rounded-xl p-10 border border-surface-variant/30 flex flex-col justify-between min-h-[26rem]">
              <div>
                <div className="text-label-caps font-label-caps text-brown-light opacity-90 mb-6">
                  10 · ASSET LAYER
                </div>
                <h3 className="text-headline-md font-headline-md text-primary-container mb-4">
                  Private RWA Tokenization
                </h3>
                <p className="text-body-sm font-body-sm text-brown-light opacity-95 mb-6">
                  Confidential Real-World Assets
                </p>
                <p className="text-body-lg font-body-lg text-on-surface-variant leading-relaxed">
                  A wrapper layer for tokenizing treasuries, private credit,
                  and real estate inside the shielded pool ecosystem.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-outline-variant text-body-sm font-body-sm text-on-surface-variant italic">
                &ldquo;J.P. Morgan has explored tokenizing $1.5T AUM on-chain —
                but customer-level privacy is a hard requirement. Transparent
                blockchains can&apos;t meet that bar.&rdquo;
              </div>
            </div>
            <div className="col-span-1 md:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-gutter">
              <div className="bg-surface-container-high rounded-xl p-8 border border-surface-variant/30">
                <span className="material-symbols-outlined text-3xl text-primary mb-4">
                  workspace_premium
                </span>
                <h4 className="text-body-lg font-body-lg text-primary-container font-bold mb-2">
                  fhERC-20 issuance
                </h4>
                <p className="text-body-sm font-body-sm text-on-surface-variant">
                  RWA tokens issued with encrypted holder identities and
                  balances.
                </p>
              </div>
              <div className="bg-surface-container-high rounded-xl p-8 border border-surface-variant/30">
                <span className="material-symbols-outlined text-3xl text-primary mb-4">
                  apartment
                </span>
                <h4 className="text-body-lg font-body-lg text-primary-container font-bold mb-2">
                  Institutional onboarding
                </h4>
                <p className="text-body-sm font-body-sm text-on-surface-variant">
                  Bring real-world collateral on-chain without revealing
                  counterparty relationships.
                </p>
              </div>
              <div className="bg-surface-container-high rounded-xl p-8 border border-surface-variant/30">
                <span className="material-symbols-outlined text-3xl text-primary mb-4">
                  payments
                </span>
                <h4 className="text-body-lg font-body-lg text-primary-container font-bold mb-2">
                  Encrypted yield
                </h4>
                <p className="text-body-sm font-body-sm text-on-surface-variant">
                  RWA yield accrues privately — earnings invisible to
                  observers.
                </p>
              </div>
              <div className="bg-surface-container-high rounded-xl p-8 border border-surface-variant/30">
                <span className="material-symbols-outlined text-3xl text-primary mb-4">
                  verified_user
                </span>
                <h4 className="text-body-lg font-body-lg text-primary-container font-bold mb-2">
                  Compliance-ready
                </h4>
                <p className="text-body-sm font-body-sm text-on-surface-variant">
                  Compatible with selective disclosure for regulatory oversight.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Now — Comparison */}
        <section id="why-now" className="w-full py-xl px-margin bg-noise bg-surface-container-lowest">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <div className="text-label-caps font-label-caps text-brown-light mb-4 opacity-90">
                WHY NOW
              </div>
              <h2 className="text-headline-lg font-headline-lg text-primary-container max-w-4xl leading-tight">
                The problems with transparent DeFi are{" "}
                <span className="font-accent-italic text-accent-italic text-brown-light italic">
                  structural.
                </span>{" "}
                So is our answer.
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {[
                {
                  problem:
                    "Every trade is visible — MEV bots extract billions per year",
                  solution:
                    "Encrypted mempool — front-running is cryptographically impossible",
                },
                {
                  problem: "Whale positions are tracked in real time",
                  solution: "Shielded pools — balances are ciphertexts on-chain",
                },
                {
                  problem: "Large orders move markets before execution",
                  solution:
                    "Sealed-bid dark pools — order size hidden until settlement",
                },
                {
                  problem:
                    "Institutions can't use DeFi without exposing strategy",
                  solution:
                    "Selective disclosure — show auditors what you want, hide the rest",
                },
                {
                  problem:
                    "Governance is dominated by visible whale coordination",
                  solution:
                    "Private voting — secret ballot, genuine conviction",
                },
              ].map((row, i) => (
                <div
                  key={i}
                  className="grid grid-cols-1 md:grid-cols-12 gap-gutter bg-surface rounded-xl p-6 md:p-8 border border-surface-variant/30"
                >
                  <div className="col-span-1 md:col-span-1 text-label-caps font-label-caps text-brown-light opacity-80">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="col-span-1 md:col-span-5 flex flex-col gap-2">
                    <div className="text-label-caps font-label-caps text-on-surface-variant opacity-60">
                      PROBLEM TODAY
                    </div>
                    <div className="text-body-lg font-body-lg text-on-surface-variant">
                      {row.problem}
                    </div>
                  </div>
                  <div className="col-span-1 md:col-span-6 flex flex-col gap-2 md:border-l-2 border-brown md:pl-8">
                    <div className="text-label-caps font-label-caps text-brown-light opacity-95 flex items-center gap-2">
                      <span className="inline-block w-6 h-px bg-brown-light"></span>
                      CAECUS
                    </div>
                    <div className="text-body-lg font-body-lg text-primary-container">
                      {row.solution}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who It's For */}
        <section className="w-full py-xl px-margin">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <div className="text-label-caps font-label-caps text-brown-light mb-4 opacity-90">
                  BUILT FOR
                </div>
                <h2 className="text-headline-lg font-headline-lg text-primary-container leading-tight max-w-3xl">
                  Every participant who operates better{" "}
                  <span className="font-accent-italic text-accent-italic text-brown-light italic">
                    unseen.
                  </span>
                </h2>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
              <div className="col-span-1 md:col-span-4 bg-surface-container-high rounded-xl p-8 border border-surface-variant/30">
                <div className="text-label-caps font-label-caps text-brown-light opacity-80 mb-4">
                  01
                </div>
                <h3 className="text-body-lg font-body-lg text-primary-container font-bold mb-3">
                  Sophisticated Traders
                </h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant">
                  Execute strategy without telegraphing positions to bots and
                  competitors.
                </p>
              </div>
              <div className="col-span-1 md:col-span-4 bg-surface-container-high rounded-xl p-8 border border-surface-variant/30">
                <div className="text-label-caps font-label-caps text-brown-light opacity-80 mb-4">
                  02
                </div>
                <h3 className="text-body-lg font-body-lg text-primary-container font-bold mb-3">
                  Institutions
                </h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant">
                  Participate in DeFi with the same privacy expectations as
                  TradFi dark pools.
                </p>
              </div>
              <div className="col-span-1 md:col-span-4 bg-surface-container-high rounded-xl p-8 border border-surface-variant/30">
                <div className="text-label-caps font-label-caps text-brown-light opacity-80 mb-4">
                  03
                </div>
                <h3 className="text-body-lg font-body-lg text-primary-container font-bold mb-3">
                  LPs
                </h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant">
                  Provide liquidity without revealing capital allocation across
                  pools.
                </p>
              </div>
              <div className="col-span-1 md:col-span-6 bg-surface rounded-xl p-8 border border-surface-variant/30">
                <div className="text-label-caps font-label-caps text-brown-light opacity-80 mb-4">
                  04
                </div>
                <h3 className="text-body-lg font-body-lg text-primary-container font-bold mb-3">
                  Protocols
                </h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant">
                  Build on top of private primitives without rebuilding
                  cryptography from scratch.
                </p>
              </div>
              <div className="col-span-1 md:col-span-6 bg-surface rounded-xl p-8 border border-surface-variant/30">
                <div className="text-label-caps font-label-caps text-brown-light opacity-80 mb-4">
                  05
                </div>
                <h3 className="text-body-lg font-body-lg text-primary-container font-bold mb-3">
                  Regulated Entities
                </h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant">
                  Use selective disclosure to meet compliance requirements
                  without sacrificing on-chain privacy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Current Status */}
        <section id="status" className="w-full py-xl px-margin bg-noise bg-surface-container-lowest">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter items-start">
            <div className="col-span-1 md:col-span-5">
              <div className="text-label-caps font-label-caps text-brown-light mb-4 opacity-90">
                CURRENT STATUS
              </div>
              <h2 className="text-headline-lg font-headline-lg text-primary-container leading-tight">
                Testnet live.{" "}
                <span className="font-accent-italic text-accent-italic text-brown-light italic">
                  Mainnet next.
                </span>
              </h2>
            </div>
            <div className="col-span-1 md:col-span-7 space-y-4">
              <div className="bg-surface rounded-xl p-6 border border-surface-variant/30 border-l-4 border-l-brown flex items-center justify-between gap-6">
                <div>
                  <div className="text-label-caps font-label-caps text-brown-light opacity-80 mb-2">
                    TECHNOLOGY
                  </div>
                  <div className="text-body-lg font-body-lg text-primary-container">
                    Built on Fhenix CoFHE — live on Arbitrum Sepolia testnet
                  </div>
                </div>
                <span className="material-symbols-outlined text-brown-light">
                  bolt
                </span>
              </div>
              <div className="bg-surface rounded-xl p-6 border border-surface-variant/30 border-l-4 border-l-brown flex items-center justify-between gap-6">
                <div>
                  <div className="text-label-caps font-label-caps text-brown-light opacity-80 mb-2">
                    STACK
                  </div>
                  <div className="text-body-lg font-body-lg text-primary-container">
                    Solidity + fhERC-20 + Uniswap v4 hooks + CoFHE SDK
                  </div>
                </div>
                <span className="material-symbols-outlined text-brown-light">
                  code
                </span>
              </div>
              <div className="bg-surface rounded-xl p-6 border border-surface-variant/30 border-l-4 border-l-brown flex items-center justify-between gap-6">
                <div>
                  <div className="text-label-caps font-label-caps text-brown-light opacity-80 mb-2">
                    STAGE
                  </div>
                  <div className="text-body-lg font-body-lg text-primary-container">
                    Protocol design & testnet development
                  </div>
                </div>
                <span className="material-symbols-outlined text-brown-light">
                  timeline
                </span>
              </div>
              <div className="bg-surface rounded-xl p-6 border border-surface-variant/30 border-l-4 border-l-brown flex items-center justify-between gap-6">
                <div>
                  <div className="text-label-caps font-label-caps text-brown-light opacity-80 mb-2">
                    NEXT
                  </div>
                  <div className="text-body-lg font-body-lg text-primary-container">
                    Private beta → Waitlist → Mainnet
                  </div>
                </div>
                <span className="material-symbols-outlined text-brown-light">
                  rocket_launch
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="w-full py-xl px-margin flex justify-center">
          <div className="w-full max-w-6xl bg-surface rounded-xl p-lg md:p-xl border border-surface-variant/30 relative overflow-hidden text-center">
            <div className="absolute inset-0 bg-noise opacity-40 pointer-events-none"></div>
            <div className="relative">
              <div className="text-label-caps font-label-caps text-brown-light mb-6 opacity-90">
                JOIN THE WAITLIST
              </div>
              <h2 className="text-headline-lg font-headline-lg text-primary-container leading-tight mb-6 max-w-4xl mx-auto">
                The chain is blind.
                <br />
                Your{" "}
                <span className="font-accent-italic text-accent-italic text-brown-light italic">
                  strategy
                </span>{" "}
                is not.
              </h2>
              <p className="text-body-lg font-body-lg text-on-surface-variant max-w-xl mx-auto mb-10">
                Early access to Caecus — the first fully private DeFi protocol,
                built on Fhenix.
              </p>
              <div className="flex items-center justify-center gap-3 flex-wrap">
                <button className="bg-brown text-on-brown px-8 py-4 rounded-full text-body-sm font-body-sm font-bold hover:bg-brown-dim hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(139,111,71,0.35)] hover:shadow-[0_0_40px_rgba(139,111,71,0.55)]">
                  Request Access
                </button>
                <button className="border border-brown-dim bg-background/40 backdrop-blur-md text-brown-light px-8 py-4 rounded-full text-body-sm font-body-sm font-bold hover:border-brown-light transition-colors duration-300">
                  Read the Docs
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="w-full py-12 px-8 border-t border-surface-variant bg-background tonal-inset flat flex flex-col md:flex-row justify-between items-center gap-6 z-10 relative">
        <div className="flex flex-col md:flex-row items-center gap-3">
          <div className="text-lg font-black text-primary">Caecus</div>
          <div className="text-label-caps font-label-caps text-on-surface-variant opacity-70">
            THE BLIND PROTOCOL · BUILT ON FHENIX
          </div>
        </div>
        <div className="flex items-center gap-6">
          <a
            className="text-label-caps font-label-caps text-on-surface-variant hover:text-on-surface transition-colors opacity-80 hover:opacity-100"
            href="#"
          >
            Twitter
          </a>
          <a
            className="text-label-caps font-label-caps text-on-surface-variant hover:text-on-surface transition-colors opacity-80 hover:opacity-100"
            href="#"
          >
            GitHub
          </a>
          <a
            className="text-label-caps font-label-caps text-on-surface-variant hover:text-on-surface transition-colors opacity-80 hover:opacity-100"
            href="#"
          >
            Discord
          </a>
          <a
            className="text-label-caps font-label-caps text-on-surface-variant hover:text-on-surface transition-colors opacity-80 hover:opacity-100"
            href="#"
          >
            Docs
          </a>
        </div>
        <div className="text-label-caps font-label-caps text-on-surface-variant">
          © 2026 Caecus Protocol. The chain sees everything. It understands nothing.
        </div>
      </footer>
    </>
  );
}
