"use client";
import Image from "next/image";
import { useState } from "react";

interface Slide {
  filename: string;
  caption?: string;
  arc?: string;
}

export default function PortfolioGrid({ slides }: { slides: Slide[] }) {
  const [selected, setSelected] = useState<Slide | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
        {slides.map((slide, i) => (
          <div
            key={i}
            className="aspect-square relative overflow-hidden cursor-pointer group bg-white/5"
            onClick={() => setSelected(slide)}
          >
            <Image
              src={`/portfolio/${slide.filename}`}
              alt={slide.caption || `Portfolio image ${i + 1}`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
            {slide.caption && (
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end">
                <p className="text-white text-xs px-3 py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  {slide.caption}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full h-full">
            <Image
              src={`/portfolio/${selected.filename}`}
              alt={selected.caption || "Portfolio image"}
              fill
              className="object-contain"
            />
          </div>
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white text-xs tracking-widest uppercase"
            onClick={() => setSelected(null)}
          >
            Close
          </button>
        </div>
      )}
    </>
  );
}
