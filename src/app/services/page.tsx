import Link from "next/link";

export const metadata = {
  title: "Services & Pricing — Harish Jaiswal Photography",
  description: "Photography packages for weddings, headshots, corporate events, portraits, and commercial work. Based in Midtown Manhattan, NYC.",
};

const packages = [
  {
    category: "Portraits & Headshots",
    tiers: [
      { name: "Essential", duration: "1 hour", images: "20 edited images", price: "$350–$450", note: "Studio or location" },
      { name: "Signature", duration: "2 hours", images: "40 edited images", price: "$650–$850", note: "Location of choice" },
      { name: "Executive", duration: "Half-day", images: "80+ edited images", price: "$1,200–$1,800", note: "Multiple looks & locations" },
    ],
  },
  {
    category: "Events & Celebrations",
    tiers: [
      { name: "Mid-Range", duration: "4 hours", images: "150–200 edited images", price: "$1,200–$1,800", note: "Online gallery included" },
      { name: "Standard", duration: "6 hours", images: "250–300 edited images", price: "$2,000–$2,800", note: "Online gallery included" },
      { name: "Premium", duration: "8–10 hours", images: "400+ edited images", price: "$3,500–$5,000+", note: "Premium gallery" },
    ],
  },
  {
    category: "Weddings",
    tiers: [
      { name: "Mid-Range", duration: "6 hours", images: "350–400 edited images", price: "$2,800–$3,800", note: "Ceremony + portraits" },
      { name: "Standard", duration: "8 hours", images: "500+ edited images", price: "$4,000–$5,500", note: "Ceremony + reception" },
      { name: "Premium", duration: "Full day", images: "700+ edited images", price: "$6,500–$10,000+", note: "Engagement session + print credits" },
    ],
  },
];

const addons = [
  { item: "Engagement / Pre-event session", price: "+$500–$800" },
  { item: "Second photographer", price: "+$400–$600" },
  { item: "Rush delivery (under 7 days)", price: "+$200–$400" },
  { item: "Print products & albums", price: "Priced per project" },
];

export default function ServicesPage() {
  return (
    <div className="pt-24 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-[#c9a84c] text-xs tracking-widest uppercase mb-4">Investment</p>
        <h1 className="text-white text-3xl md:text-4xl font-light mb-4">Services & Pricing</h1>
        <p className="text-[#707070] text-sm max-w-xl mb-16 leading-relaxed">
          Price reflects craft, attention, and experience — not just hours. Every session includes professionally edited images delivered via private online gallery. Not raw files. Not bulk exports. Finished work, ready to use.
        </p>

        {packages.map((pkg) => (
          <div key={pkg.category} className="mb-16">
            <h2 className="text-white text-lg font-medium mb-6 pb-4 border-b border-white/5">
              {pkg.category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5">
              {pkg.tiers.map((tier, i) => (
                <div key={tier.name} className={`bg-[#1a1a1a] p-8 ${i === 0 ? "ring-1 ring-[#c9a84c]/20" : ""}`}>
                  {i === 0 && (
                    <p className="text-[#c9a84c] text-xs tracking-widest uppercase mb-3">Most Popular</p>
                  )}
                  <h3 className="text-white text-base font-medium mb-4">{tier.name}</h3>
                  <p className="text-[#a0a0a0] text-sm mb-1">{tier.duration}</p>
                  <p className="text-[#a0a0a0] text-sm mb-1">{tier.images}</p>
                  <p className="text-[#707070] text-xs mb-6">{tier.note}</p>
                  <p className="text-white text-xl font-light">{tier.price}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Add-ons */}
        <div className="mb-16">
          <h2 className="text-white text-lg font-medium mb-6 pb-4 border-b border-white/5">Add-Ons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
            {addons.map((addon) => (
              <div key={addon.item} className="bg-[#1a1a1a] p-6 flex justify-between items-center">
                <p className="text-[#a0a0a0] text-sm">{addon.item}</p>
                <p className="text-white text-sm ml-4 whitespace-nowrap">{addon.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Turnaround */}
        <div className="mb-16 bg-white/[0.02] border border-white/5 p-8">
          <h2 className="text-white text-sm font-medium mb-6 tracking-wide">Turnaround & Delivery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-[#c9a84c] text-xs tracking-widest uppercase mb-2">Portraits</p>
              <p className="text-[#a0a0a0] text-sm">5–7 business days</p>
            </div>
            <div>
              <p className="text-[#c9a84c] text-xs tracking-widest uppercase mb-2">Events</p>
              <p className="text-[#a0a0a0] text-sm">2–3 weeks</p>
            </div>
            <div>
              <p className="text-[#c9a84c] text-xs tracking-widest uppercase mb-2">Weddings</p>
              <p className="text-[#a0a0a0] text-sm">4–6 weeks</p>
            </div>
          </div>
          <p className="text-[#707070] text-xs mt-6">All sessions: 50% deposit to confirm · Balance due 7 days before event · Delivered via private online gallery</p>
        </div>

        <div className="text-center">
          <Link
            href="/contact"
            className="inline-block bg-[#c9a84c] text-[#1a1a1a] px-10 py-4 text-xs tracking-widest uppercase font-medium hover:bg-[#b8973b] transition-colors duration-200"
          >
            Book a Session
          </Link>
        </div>
      </div>
    </div>
  );
}
