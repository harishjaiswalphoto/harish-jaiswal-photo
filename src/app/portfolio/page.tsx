import PortfolioGrid from "@/components/PortfolioGrid";
import { portfolioSlides } from "@/data/portfolio";

export const metadata = {
  title: "Portfolio — Harish Jaiswal Photography",
  description: "Wedding, portrait, headshot, corporate, pet, and commercial photography by Harish Jaiswal. Based in Midtown Manhattan, NYC.",
};

export default function PortfolioPage() {
  return (
    <div className="pt-24 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-[#c9a84c] text-xs tracking-widest uppercase mb-4">The Work</p>
        <h1 className="text-white text-3xl md:text-4xl font-light mb-4">Portfolio</h1>
        <p className="text-[#707070] text-sm max-w-lg mb-16">
          Every image below was shot and edited personally. No associates, no stock, no AI.
        </p>
        <PortfolioGrid slides={portfolioSlides} />
      </div>
    </div>
  );
}
