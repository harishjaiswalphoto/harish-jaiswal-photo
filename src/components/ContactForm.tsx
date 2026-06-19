"use client";
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    sessionType: "",
    date: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", phone: "", sessionType: "", date: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass = "w-full bg-transparent border border-white/10 text-[#a0a0a0] placeholder-[#707070] px-4 py-3 text-sm focus:outline-none focus:border-[#c9a84c]/50 transition-colors duration-200";

  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Your name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className={inputClass}
        />
        <input
          type="email"
          placeholder="Email address"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className={inputClass}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="tel"
          placeholder="Phone (optional)"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className={inputClass}
        />
        <select
          value={form.sessionType}
          onChange={(e) => setForm({ ...form, sessionType: e.target.value })}
          className={`${inputClass} appearance-none`}
        >
          <option value="" disabled>Session type</option>
          <option>Wedding / Engagement</option>
          <option>Executive Headshots</option>
          <option>Corporate Event</option>
          <option>Portrait / Lifestyle</option>
          <option>Brand / Commercial</option>
          <option>Team Portraits</option>
          <option>Other</option>
        </select>
      </div>
      <input
        type="text"
        placeholder="Event date or timeframe"
        value={form.date}
        onChange={(e) => setForm({ ...form, date: e.target.value })}
        className={inputClass}
      />
      <textarea
        placeholder="Tell me what you're looking for..."
        rows={5}
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        className={`${inputClass} resize-none`}
      />

      {status === "sent" ? (
        <div className="border border-[#c9a84c]/30 bg-[#c9a84c]/5 px-6 py-4">
          <p className="text-[#c9a84c] text-sm">Message received. I'll be in touch within a few hours.</p>
        </div>
      ) : (
        <button
          onClick={handleSubmit}
          disabled={status === "sending"}
          className="bg-[#c9a84c] text-[#1a1a1a] px-8 py-4 text-xs tracking-widest uppercase font-medium hover:bg-[#b8973b] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>
      )}

      {status === "error" && (
        <p className="text-red-400 text-xs">Something went wrong. Email me directly at harishjaiswalphotography@gmail.com</p>
      )}
    </div>
  );
}
