import { TopNav } from "./_components/top-nav";

export default function Home() {
  return (
    <>
      <TopNav />
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

          {/* Mobile / tablet layout — vertical stack, left-aligned */}
          <div className="lg:hidden absolute inset-x-6 bottom-10 top-10 z-20 flex flex-col justify-between">
            <div className="flex items-center gap-3">
              <span className="inline-block w-8 h-px bg-brown-light"></span>
              <span className="text-label-caps font-label-caps text-white opacity-95">
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
                <button className="bg-brown text-on-brown px-6 py-3 rounded-full text-body-sm font-body-sm font-bold hover:bg-brown-dim transition-all duration-300 shadow-[0_0_30px_rgba(168,138,68,0.3)]">
                  Join Waitlist
                </button>
                <a
                  href="/docs"
                  className="bg-background text-brown-light border border-brown-dim px-6 py-3 rounded-full text-body-sm font-body-sm font-bold hover:bg-brown-surface hover:border-brown-light transition-colors duration-300"
                >
                  Read Whitepaper
                </a>
              </div>
            </div>
          </div>

          {/* Desktop layout — corner anchored */}
          <div className="hidden lg:block">
            {/* Eyebrow — top-left */}
            <div className="absolute top-16 left-16 z-20 flex items-center gap-3">
              <span className="inline-block w-8 h-px bg-white"></span>
              <span className="text-label-caps font-label-caps text-white opacity-95">
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
                <button className="bg-brown text-on-brown px-8 py-4 rounded-full text-body-sm font-body-sm font-bold hover:bg-brown-dim hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(168,138,68,0.3)] hover:shadow-[0_0_40px_rgba(168,138,68,0.45)]">
                  Join Waitlist
                </button>
                <a
                  href="/docs"
                  className="bg-background text-brown-light border border-brown-dim px-8 py-4 rounded-full text-body-sm font-body-sm font-bold hover:bg-brown-surface hover:border-brown-light transition-colors duration-300"
                >
                  Read Whitepaper
                </a>
              </div>
            </div>

            {/* Tagline strip — top-right, xl only so it doesn't fight the description column */}
            <div className="absolute top-16 right-16 z-20 max-w-[18rem] text-right hidden xl:block border-r-2 border-white pr-5">
              <p className="text-label-caps font-label-caps text-white opacity-95 leading-relaxed">
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
        <section id="protocol" className="w-full min-h-screen py-xl px-margin flex items-center justify-center">
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
        <section id="technology" className="relative w-full min-h-screen py-xl px-margin bg-noise bg-surface-container-lowest flex items-center justify-center">
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

        {/* Read the Whitepaper CTA */}
        <section id="features" className="w-full min-h-screen py-xl px-margin flex items-center justify-center">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <div className="text-label-caps font-label-caps text-brown-light mb-4 opacity-90">
                PROTOCOL SURFACE · TEN PRIMITIVES
              </div>
              <h2 className="text-headline-lg font-headline-lg text-primary-container max-w-3xl leading-tight">
                The full DeFi stack —{' '}
                <span className="font-accent-italic text-accent-italic text-brown-light italic">
                  privately.
                </span>
              </h2>
              <p className="text-body-sm font-body-sm text-on-surface-variant w-full  mt-6">
                Each primitive — from shielded pools up through governance and
                compliance — has its own spec in the whitepaper.
              </p>
            </div>
            <a
              href="/docs"
              className="block bg-surface-container rounded-xl border border-brown-dim/50 hover:border-brown-light transition-colors duration-300 p-10 md:p-12 group"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div className="flex-1">
                  <div className="text-label-caps font-label-caps text-brown-light opacity-90 mb-4">
                    READ THE WHITEPAPER
                  </div>
                  <h3 className="text-headline-md font-headline-md text-primary-container mb-3 leading-tight">
                    Ten primitives. One protocol.
                  </h3>
                  <p className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl">
                    Shielded pools · Private swaps · Perpetuals · Lending ·
                    Sealed-bid auctions · MEV protection · Private yield ·
                    Governance · Selective disclosure · RWA tokenization.
                  </p>
                </div>
                <div className="flex items-center gap-3 px-6 py-4 rounded-full bg-brown text-on-brown text-body-sm font-body-sm font-bold group-hover:bg-brown-dim transition-colors shrink-0">
                  <span>Open whitepaper</span>
                  <span className="material-symbols-outlined">arrow_forward</span>
                </div>
              </div>
            </a>
          </div>
        </section>


        {/* Why Now — Comparison */}
        <section
          id="why-now"
          className="w-full min-h-screen py-xl px-margin relative bg-cover bg-center bg-no-repeat flex items-center justify-center"
          style={{ backgroundImage: "url('/diffimg.png')" }}
        >
          <div className="absolute inset-0 bg-background/80 pointer-events-none"></div>
          <div className="relative max-w-7xl mx-auto">
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
        <section className="w-full min-h-screen py-xl px-margin flex items-center justify-center">
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
        <section id="status" className="w-full min-h-screen py-xl px-margin bg-noise bg-surface-container-lowest flex items-center justify-center">
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
        <section className="w-full min-h-screen py-xl px-margin flex items-center justify-center">
          <div
            className="w-full max-w-6xl rounded-xl p-lg md:p-xl border border-brown-dim/40 relative overflow-hidden text-center bg-cover bg-center"
            style={{ backgroundImage: "url('/cta.png')" }}
          >
            <div className="absolute inset-0 bg-background/70 pointer-events-none"></div>
            <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none"></div>
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
             
              <div className="flex items-center justify-center gap-3 flex-wrap">
                <button className="bg-brown text-on-brown px-8 py-4 rounded-full text-body-sm font-body-sm font-bold hover:bg-brown-dim hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(168,138,68,0.3)] hover:shadow-[0_0_40px_rgba(168,138,68,0.45)]">
                  Request Access
                </button>
                <a
                  href="/docs"
                  className="border border-brown-dim bg-background/40 backdrop-blur-md text-brown-light px-8 py-4 rounded-full text-body-sm font-body-sm font-bold hover:border-brown-light transition-colors duration-300"
                >
                  Read the Docs
                </a>
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
            href="/docs"
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
