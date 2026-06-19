import Link from "next/link";

export const metadata = {
  title: "About — Harish Jaiswal Photography",
  description: "Harish Jaiswal is a boutique photographer based in Midtown Manhattan with 10+ years of experience across weddings, headshots, corporate events, and commercial work.",
};

export default function AboutPage() {
  return (
    <div className="pt-24 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-[#c9a84c] text-xs tracking-widest uppercase mb-4">The Photographer</p>
        <h1 className="text-white text-3xl md:text-4xl font-light mb-16">About</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mb-20">
          {/* Photo placeholder */}
          <div className="aspect-[3/4] bg-white/5 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-[#707070] text-xs tracking-wide">Photo</p>
            </div>
          </div>

          {/* Bio */}
          <div className="flex flex-col gap-6">
            <h2 className="text-white text-2xl font-light leading-snug">
              You get a calm, collaborative experience — where I do the thinking, the guiding, and the heavy lifting.
            </h2>
            <p className="text-[#a0a0a0] text-sm leading-relaxed">
              I'm Harish Jaiswal, a boutique photographer based in Midtown Manhattan. Over 10 years, I've shot weddings, executive headshots, corporate events, brand campaigns, and family sessions across NYC and the metro area.
            </p>
            <p className="text-[#a0a0a0] text-sm leading-relaxed">
              Every client I take on gets my direct attention — from first conversation to final gallery. No associates. No hand-offs. Ever.
            </p>
            <p className="text-[#a0a0a0] text-sm leading-relaxed">
              Because I limit my roster, every client gets the full version of me — not a distracted one. You show up. We make something worth keeping.
            </p>
            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-block bg-[#c9a84c] text-[#1a1a1a] px-8 py-4 text-xs tracking-widest uppercase font-medium hover:bg-[#b8973b] transition-colors duration-200"
              >
                Work With Me
              </Link>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="border-t border-white/5 pt-16">
          <p className="text-[#c9a84c] text-xs tracking-widest uppercase mb-10">What Makes This Different</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Personal", body: "You work directly with me — not an associate, not a second shooter handed the job." },
              { title: "Calm & Collaborative", body: "No pressure, no rush, no upsell. The session should feel as good as the images look." },
              { title: "NYC-Based with Studio", body: "Midtown Manhattan studio, by appointment. On-location across NYC, NJ, Long Island, Connecticut, and the Hudson Valley." },
              { title: "Finished Work", body: "Curated, edited galleries — not raw files, not bulk exports. Images ready to use the moment they arrive." },
            ].map((item) => (
              <div key={item.title} className="border-l-2 border-[#c9a84c]/30 pl-6">
                <h3 className="text-white text-sm font-medium mb-2">{item.title}</h3>
                <p className="text-[#707070] text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Studio info */}
        <div className="mt-16 bg-white/[0.02] border border-white/5 p-8">
          <p className="text-[#c9a84c] text-xs tracking-widest uppercase mb-6">Studio</p>
          <p className="text-[#a0a0a0] text-sm mb-1">545 8th Avenue, Suite 650</p>
          <p className="text-[#a0a0a0] text-sm mb-4">Midtown Manhattan, New York City 10018</p>
          <p className="text-[#707070] text-xs">By appointment only · Available on-location across NYC, NJ, Long Island, Connecticut, and the Hudson Valley</p>
        </div>
      </div>
    </div>
  );
}
