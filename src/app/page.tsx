import Link from "next/link";

const services = [
  { title: "Weddings & Engagements", desc: "Full-day coverage to intimate ceremonies — every moment, nothing staged.", from: "$2,800" },
  { title: "Executive Headshots", desc: "LinkedIn, press, and corporate profiles. Clean, confident, current.", from: "$350" },
  { title: "Corporate Events", desc: "Conferences, galas, product launches. Coverage that works for marketing.", from: "$1,200" },
  { title: "Portraits & Lifestyle", desc: "Families, actors, artists, pets. Sessions that feel like a conversation.", from: "$350" },
  { title: "Brand & Commercial", desc: "Product, jewelry, and brand campaigns. Precision-lit for professional use.", from: "$1,200" },
  { title: "Team Portraits", desc: "Consistent, premium headshots for your entire team. Studio or on-location.", from: "$350/person" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center px-6 pt-16">
        <div className="max-w-6xl mx-auto w-full">
          <div className="max-w-3xl">
            <p className="text-[#c9a84c] text-xs tracking-widest uppercase mb-8">
              Boutique Photography · Midtown Manhattan
            </p>
            <h1 className="text-white text-5xl md:text-7xl font-light leading-tight mb-8">
              You work with me —<br />
              <em className="text-[#c9a84c] not-italic">not an agency.</em>
            </h1>
            <p className="text-[#a0a0a0] text-lg md:text-xl leading-relaxed max-w-xl mb-4">
              Every client gets my direct attention — from first conversation to final gallery.
              No associates. No hand-offs. Ever.
            </p>
            <p className="text-[#707070] text-base leading-relaxed max-w-xl mb-12">
              Because I limit my roster, every client gets the full version of me — not a distracted one.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-block bg-[#c9a84c] text-[#1a1a1a] px-8 py-4 text-xs tracking-widest uppercase font-medium hover:bg-[#b8973b] transition-colors duration-200"
              >
                Book a Session
              </Link>
              <Link
                href="/portfolio"
                className="inline-block border border-white/10 text-[#a0a0a0] px-8 py-4 text-xs tracking-widest uppercase hover:border-white/30 hover:text-white transition-all duration-200"
              >
                See the Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Social proof bar */}
      <section className="border-y border-white/5 py-6">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-center">
            <div>
              <p className="text-white text-2xl font-light">10+</p>
              <p className="text-[#707070] text-xs tracking-wide mt-1">Years in NYC</p>
            </div>
            <div className="hidden md:block w-px h-8 bg-white/10" />
            <div>
              <p className="text-white text-2xl font-light">25</p>
              <p className="text-[#707070] text-xs tracking-wide mt-1">Five-Star Reviews</p>
            </div>
            <div className="hidden md:block w-px h-8 bg-white/10" />
            <div>
              <p className="text-white text-2xl font-light">Direct</p>
              <p className="text-[#707070] text-xs tracking-wide mt-1">You work with Harish</p>
            </div>
            <div className="hidden md:block w-px h-8 bg-white/10" />
            <div>
              <p className="text-white text-2xl font-light">NYC → CT</p>
              <p className="text-[#707070] text-xs tracking-wide mt-1">Metro Area Coverage</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#c9a84c] text-xs tracking-widest uppercase mb-4">What I Shoot</p>
          <h2 className="text-white text-3xl md:text-4xl font-light mb-16">
            Every session, led personally.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
            {services.map((service) => (
              <div key={service.title} className="bg-[#1a1a1a] p-8 hover:bg-white/[0.02] transition-colors duration-200 group">
                <h3 className="text-white text-base font-medium mb-3 group-hover:text-[#c9a84c] transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="text-[#707070] text-sm leading-relaxed mb-6">{service.desc}</p>
                <p className="text-[#a0a0a0] text-xs tracking-wide">From {service.from}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/services" className="text-[#a0a0a0] hover:text-white text-sm tracking-wide border-b border-[#707070] hover:border-white pb-px transition-colors duration-200">
              View full pricing →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="bg-white/[0.02] border-y border-white/5 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-[#c9a84c] text-xs tracking-widest uppercase mb-6">Ready?</p>
          <h2 className="text-white text-3xl md:text-4xl font-light mb-6">
            You show up. We make something worth keeping.
          </h2>
          <p className="text-[#707070] text-base mb-10 max-w-lg mx-auto">
            Message me with your date. I respond within a few hours — and I'll tell you honestly if I'm the right fit.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#c9a84c] text-[#1a1a1a] px-10 py-4 text-xs tracking-widest uppercase font-medium hover:bg-[#b8973b] transition-colors duration-200"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
