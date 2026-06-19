import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact — Harish Jaiswal Photography",
  description: "Book a photography session with Harish Jaiswal. Weddings, headshots, corporate events, and portraits in NYC and the metro area.",
};

export default function ContactPage() {
  return (
    <div className="pt-24 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-[#c9a84c] text-xs tracking-widest uppercase mb-4">Let's Talk</p>
        <h1 className="text-white text-3xl md:text-4xl font-light mb-4">Get in Touch</h1>
        <p className="text-[#707070] text-sm mb-16 max-w-lg leading-relaxed">
          Message me with your date and what you're looking for. I respond within a few hours — and I'll tell you honestly if I'm the right fit.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Form */}
          <ContactForm />

          {/* Info */}
          <div className="flex flex-col gap-10">
            <div>
              <p className="text-[#c9a84c] text-xs tracking-widest uppercase mb-4">Direct Contact</p>
              <a href="mailto:harishjaiswalphotography@gmail.com" className="block text-[#a0a0a0] hover:text-white text-sm mb-2 transition-colors">
                harishjaiswalphotography@gmail.com
              </a>
              <a href="tel:+13473357782" className="block text-[#a0a0a0] hover:text-white text-sm transition-colors">
                (347) 335-7782
              </a>
            </div>

            <div>
              <p className="text-[#c9a84c] text-xs tracking-widest uppercase mb-4">Studio</p>
              <p className="text-[#a0a0a0] text-sm">545 8th Avenue, Suite 650</p>
              <p className="text-[#a0a0a0] text-sm">Midtown Manhattan, NY 10018</p>
              <p className="text-[#707070] text-xs mt-2">By appointment only</p>
            </div>

            <div>
              <p className="text-[#c9a84c] text-xs tracking-widest uppercase mb-4">Payment</p>
              <p className="text-[#707070] text-xs leading-relaxed">50% deposit to confirm your date. Balance due 7 days before the event.</p>
              <p className="text-[#707070] text-xs leading-relaxed mt-2">Accepted: Zelle · Venmo (@HarishJaiswalPhoto) · Stripe</p>
            </div>

            <div>
              <p className="text-[#c9a84c] text-xs tracking-widest uppercase mb-4">Coverage Area</p>
              <p className="text-[#707070] text-xs leading-relaxed">
                NYC · New Jersey · Long Island · Connecticut · Hudson Valley
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
