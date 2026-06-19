import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 mt-24">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <p className="text-white text-sm font-medium tracking-widest uppercase mb-2">
              Harish Jaiswal Photography
            </p>
            <p className="text-[#707070] text-sm">545 8th Avenue, Suite 650</p>
            <p className="text-[#707070] text-sm">Midtown Manhattan, New York City</p>
            <p className="text-[#707070] text-sm mt-1">By appointment only</p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-[#707070] text-xs tracking-widest uppercase mb-1">Contact</p>
            <a href="mailto:harishjaiswalphotography@gmail.com" className="text-[#a0a0a0] hover:text-white text-sm transition-colors">
              harishjaiswalphotography@gmail.com
            </a>
            <a href="tel:+13473357782" className="text-[#a0a0a0] hover:text-white text-sm transition-colors">
              (347) 335-7782
            </a>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-[#707070] text-xs tracking-widest uppercase mb-1">Navigate</p>
            {["Portfolio", "Services", "About", "Contact"].map((item) => (
              <Link key={item} href={`/${item.toLowerCase()}`} className="text-[#a0a0a0] hover:text-white text-sm transition-colors">
                {item}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#707070] text-xs">
            © {new Date().getFullYear()} Harish Jaiswal Photography. All rights reserved.
          </p>
          <p className="text-[#707070] text-xs">
            NYC · NJ · Long Island · Connecticut · Hudson Valley
          </p>
        </div>
      </div>
    </footer>
  );
}
