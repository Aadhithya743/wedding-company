import React from "react";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      {/* NAVBAR */}
      <header className="fixed inset-x-0 top-0 z-20 bg-white/80 backdrop-blur border-b border-zinc-100">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#hero" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full border border-pink-400 flex items-center justify-center text-xs font-semibold text-pink-600">
              WC
            </div>
            <span className="font-semibold tracking-tight">
              Wedding Company
            </span>
          </a>

          <div className="flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-pink-600">
              Services
            </a>
            <a href="#gallery" className="hover:text-pink-600">
              Gallery
            </a>
            <a href="#testimonials" className="hover:text-pink-600">
              Testimonials
            </a>
            <a
              href="#contact"
              className="rounded-full border border-pink-500 px-4 py-2 text-xs font-medium text-pink-600 hover:bg-pink-500 hover:text-white"
            >
              Book a Call
            </a>
          </div>
        </nav>
      </header>

      <main className="pt-24">
        {/* HERO */}
        <section
          id="hero"
          className="bg-gradient-to-br from-pink-50 via-white to-rose-50"
        >
          <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-12 px-6 py-16">
            <div className="flex-1">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pink-600">
                Wedding Planning Studio
              </p>
              <h1 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight">
                Creating timeless weddings
                <br />
                for modern couples.
              </h1>
              <p className="mt-4 text-sm text-zinc-600 max-w-xl">
                We plan, design and manage beautiful wedding experiences so that
                you can relax and enjoy your special day with your loved ones.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="rounded-full bg-zinc-900 px-6 py-3 text-sm text-white hover:bg-zinc-800"
                >
                  Schedule a consultation
                </a>
                <a
                  href="#gallery"
                  className="text-sm font-medium text-zinc-800 underline underline-offset-4"
                >
                  View our weddings
                </a>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-4 text-xs text-zinc-600">
                <div>
                  <p className="font-semibold text-zinc-900">150+ weddings</p>
                  <p>Planned end-to-end for couples worldwide.</p>
                </div>
                <div>
                  <p className="font-semibold text-zinc-900">4.9 / 5 rating</p>
                  <p>From couples and their families.</p>
                </div>
                <div>
                  <p className="font-semibold text-zinc-900">8+ years</p>
                  <p>Experience in luxury wedding design.</p>
                </div>
              </div>
            </div>

            <div className="flex-1">
              <div className="aspect-[3/4] w-full rounded-3xl border border-rose-100 bg-rose-50 shadow-lg flex items-center justify-center text-sm text-zinc-500 text-center px-4">
                Hero image placeholder
                <br />
                (replace with actual couple / wedding photo from Figma)
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="border-t border-zinc-100 bg-white">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <div className="flex flex-col md:flex-row items-end justify-between gap-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pink-600">
                  Services
                </p>
                <h2 className="mt-2 text-2xl md:text-3xl font-semibold">
                  Everything you need
                  <br />
                  for a seamless celebration.
                </h2>
              </div>
              <p className="text-sm text-zinc-600 max-w-md">
                Choose full-service planning or tailored support based on where
                you need the most help — from design to vendor coordination.
              </p>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Full-Service Planning",
                  desc: "Venue search, vendor management, timelines, logistics and more — we take care of everything.",
                },
                {
                  title: "Design & Styling",
                  desc: "Moodboards, decor, florals and lighting that reflect your story and culture.",
                },
                {
                  title: "Day-of Coordination",
                  desc: "We run the full wedding day schedule so that you and your families can relax.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-zinc-100 bg-zinc-50 p-5 hover:border-pink-200 hover:bg-white shadow-sm transition"
                >
                  <h3 className="text-sm font-semibold text-zinc-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs text-zinc-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section id="gallery" className="border-t border-zinc-100 bg-zinc-50">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <div className="flex flex-col md:flex-row items-end justify-between gap-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pink-600">
                  Gallery
                </p>
                <h2 className="mt-2 text-2xl md:text-3xl font-semibold">
                  A glimpse into our weddings.
                </h2>
              </div>
              <p className="text-sm text-zinc-600 max-w-md">
                Each celebration is customised, but they all share one thing:
                couples who feel fully present and cared for.
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                "Beach ceremony – Goa",
                "Palace wedding – Jaipur",
                "Intimate mandap – Bangalore",
                "Reception dinner – Chennai",
                "Sangeet night – Hyderabad",
                "Haldi decor – Kochi",
              ].map((label) => (
                <div
                  key={label}
                  className="rounded-2xl bg-zinc-200 h-40 flex items-center justify-center text-xs text-zinc-600 text-center px-3"
                >
                  {label}
                  <br />
                  (replace with real image)
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section
          id="testimonials"
          className="border-t border-zinc-100 bg-white"
        >
          <div className="mx-auto max-w-6xl px-6 py-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pink-600">
              Testimonials
            </p>
            <h2 className="mt-2 text-2xl md:text-3xl font-semibold">
              Loved by couples and families.
            </h2>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {[
                {
                  name: "Ananya & Arjun",
                  detail: "Destination wedding · Goa",
                  quote:
                    "They anticipated every detail. Our families could simply enjoy the days without stress.",
                },
                {
                  name: "Meera & Rahul",
                  detail: "Heritage venue · Jaipur",
                  quote:
                    "The decor looked exactly like our moodboard. Everything felt personal and intentional.",
                },
              ].map((t) => (
                <div
                  key={t.name}
                  className="rounded-2xl border border-zinc-100 bg-zinc-50 p-5 text-sm text-zinc-700"
                >
                  <p>“{t.quote}”</p>
                  <p className="mt-3 text-xs text-zinc-600">
                    <span className="font-semibold text-zinc-900">
                      {t.name}
                    </span>{" "}
                    · {t.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="border-t border-zinc-100 bg-gradient-to-r from-zinc-900 to-zinc-800 text-white"
        >
          <div className="mx-auto max-w-6xl px-6 py-16 flex flex-col md:flex-row items-start gap-10">
            <div className="flex-1">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pink-200">
                Get in touch
              </p>
              <h2 className="mt-2 text-2xl md:text-3xl font-semibold">
                Ready to start planning your day?
              </h2>
              <p className="mt-4 text-sm text-zinc-300 max-w-md">
                Share your date, location and a few details about your dream
                celebration. We’ll get back to you within 24 hours.
              </p>
            </div>

            <form className="w-full max-w-md space-y-4 bg-white/5 rounded-2xl p-6 backdrop-blur">
              <div className="text-sm space-y-1">
                <label htmlFor="name" className="block text-zinc-100">
                  Your name
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
                  placeholder="e.g., Ananya Sharma"
                />
              </div>

              <div className="text-sm space-y-1">
                <label htmlFor="email" className="block text-zinc-100">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
                  placeholder="you@example.com"
                />
              </div>

              <div className="text-sm space-y-1">
                <label htmlFor="details" className="block text-zinc-100">
                  Wedding details
                </label>
                <textarea
                  id="details"
                  rows={3}
                  className="w-full rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
                  placeholder="Date, city, guest count, anything else…"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-pink-500 py-2.5 text-sm font-medium text-white hover:bg-pink-600"
              >
                Request a consultation
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-4 text-xs text-zinc-500 flex items-center justify-between">
          <p>
            © {new Date().getFullYear()} Wedding Company. All rights reserved.
          </p>
          <p>Frontend assignment build.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
