import { useNavigate } from "react-router";
import { ChevronRight } from "lucide-react";
import { useState } from "react";

const series = [
  {
    id: "f1",
    name: "Formula 1",
    years: "2011 – Present",
    role: "Exclusive Tire Supplier",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1000&h=600&fit=crop&auto=format",
    body: "For 14 consecutive seasons, every Formula 1 car on the grid runs on Hyperion rubber. We supply five compounds per event weekend — C1 through C5 — each precisely formulated for the circuit characteristics, ambient temperature, and strategic demands of that specific race. Over 800 engineers work on our F1 program year-round.",
    facts: [
      { label: "SEASONS AS SUPPLIER", value: "14" },
      { label: "COMPOUNDS PER WEEKEND", value: "5" },
      { label: "TIRES PER RACE WEEKEND", value: "13 sets" },
      { label: "ENGINEERS ON PROGRAM", value: "800+" },
    ],
  },
  {
    id: "wsbk",
    name: "World Superbike",
    years: "2004 – Present",
    role: "Exclusive Tire Supplier",
    image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=1000&h=600&fit=crop&auto=format",
    body: "Motorcycle tire dynamics operate at completely different physical extremes to car tires. Lean angles exceeding 65°, single-contact-point load transfer, and tread temperatures that can reach 200°C. The learnings from WSBK directly inform our Moto road tire range — arguably the most directly track-to-road knowledge transfer of any motorsport we compete in.",
    facts: [
      { label: "SEASONS AS SUPPLIER", value: "20" },
      { label: "ROUNDS PER SEASON", value: "13" },
      { label: "MAX OPERATING TEMP", value: "200°C" },
      { label: "MAX LEAN ANGLE", value: "65°" },
    ],
  },
  {
    id: "wrc",
    name: "World Rally Championship",
    years: "2021 – Present",
    role: "Official Tire Partner",
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=1000&h=600&fit=crop&auto=format",
    body: "Rally is the ultimate test of a tire's structural limits. Gravel, tarmac, ice, and snow — sometimes within a single stage. The WRC program pushes our carcass engineering and all-terrain compound development further than any test track could. Scorpion all-terrain technology traces directly to WRC learnings.",
    facts: [
      { label: "SURFACES PER SEASON", value: "4" },
      { label: "SPARE TIRES PER CAR", value: "8" },
      { label: "STAGE DISTANCE / EVENT", value: "300+ km" },
      { label: "TARMAC / GRAVEL / SNOW", value: "Mixed" },
    ],
  },
];

const results = [
  { year: "2023", series: "Formula 1", highlight: "16 of 22 races won on Hyperion rubber. Constructors and Drivers championships secured." },
  { year: "2023", series: "WSBK", highlight: "Alvaro Bautista — World Superbike Champion for second consecutive year." },
  { year: "2022", series: "Formula 1", highlight: "Max Verstappen secures championship with 5 races to spare. 17 race wins." },
  { year: "2022", series: "GT World Challenge", highlight: "Hyperion-shod Ferrari 296 GT3 wins Endurance Cup overall." },
  { year: "2021", series: "Formula 1", highlight: "Dramatic title showdown. Lewis Hamilton and Max Verstappen — both on Hyperion." },
  { year: "2021", series: "WRC", highlight: "First WRC season as official partner. Sébastien Ogier takes 8th World title." },
];

export default function Racing() {
  const navigate = useNavigate();
  const [activeSeries, setActiveSeries] = useState("f1");

  const active = series.find((s) => s.id === activeSeries)!;

  return (
    <div>
      {/* Hero */}
      <div className="relative overflow-hidden border-b border-border min-h-[60vh] flex items-end">
        <img
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1600&h=800&fit=crop&auto=format"
          alt="Formula 1 race"
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 to-transparent" />
        <div className="relative z-10 px-6 md:px-12 pb-16">
          <div className="text-xs text-primary tracking-widest mb-4" style={{ fontFamily: "'DM Mono', monospace" }}>
            MOTORSPORT — F1 · WSBK · WRC · GT
          </div>
          <h1
            className="text-7xl md:text-[10rem] font-black leading-none tracking-tighter"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", lineHeight: 0.88 }}
          >
            THE RACE IS<br /><span className="text-primary">OUR LAB.</span>
          </h1>
        </div>
        <div className="absolute right-0 top-0 h-full w-1 bg-primary opacity-60" />
      </div>

      {/* Series selector */}
      <div className="border-b border-border flex overflow-x-auto" style={{ scrollbarWidth: "none" }}>
        {series.map((s) => (
          <button
            key={s.id}
            onClick={() => setActiveSeries(s.id)}
            className={`flex-shrink-0 px-8 py-5 border-r border-border last:border-r-0 transition-colors text-left ${activeSeries === s.id ? "bg-card" : "hover:bg-card/50"}`}
          >
            <div className={`text-sm font-black tracking-tight mb-0.5 transition-colors ${activeSeries === s.id ? "text-primary" : "text-foreground"}`} style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              {s.name}
            </div>
            <div className="text-xs text-muted-foreground" style={{ fontFamily: "'DM Mono', monospace" }}>{s.years}</div>
          </button>
        ))}
      </div>

      {/* Active series detail */}
      <div className="grid grid-cols-1 lg:grid-cols-2 border-b border-border">
        <div className="relative overflow-hidden min-h-72 bg-secondary">
          <img src={active.image} alt={active.name} className="w-full h-full object-cover opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
          <div className="absolute bottom-6 left-6 text-xs font-bold tracking-widest px-3 py-1.5 bg-primary text-white" style={{ fontFamily: "'DM Mono', monospace" }}>
            {active.role.toUpperCase()}
          </div>
        </div>
        <div className="p-10 md:p-14 border-l border-border flex flex-col justify-between gap-8">
          <div>
            <div className="text-xs text-muted-foreground tracking-widest mb-2" style={{ fontFamily: "'DM Mono', monospace" }}>{active.years}</div>
            <h2 className="text-5xl font-black tracking-tighter mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{active.name}</h2>
            <p className="text-sm text-muted-foreground leading-relaxed font-light">{active.body}</p>
          </div>
          <div className="grid grid-cols-2 gap-0 border border-border">
            {active.facts.map((f, i) => (
              <div key={i} className={`p-5 ${i % 2 === 0 ? "border-r border-border" : ""} ${i < 2 ? "border-b border-border" : ""}`}>
                <div className="text-2xl font-black text-primary" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{f.value}</div>
                <div className="text-xs text-muted-foreground tracking-widest mt-1" style={{ fontFamily: "'DM Mono', monospace" }}>{f.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Results log */}
      <div className="px-6 md:px-12 py-20">
        <div className="text-xs text-primary tracking-widest mb-10" style={{ fontFamily: "'DM Mono', monospace" }}>RECENT RESULTS</div>
        <div className="flex flex-col border border-border">
          {results.map((r, i) => (
            <div key={i} className="flex gap-0 border-b border-border last:border-b-0 hover:bg-card transition-colors">
              <div className="flex-shrink-0 w-20 border-r border-border flex items-center justify-center">
                <span className="text-sm font-black text-primary rotate-90 block" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{r.year}</span>
              </div>
              <div className="flex-shrink-0 w-36 md:w-48 border-r border-border px-5 py-5 flex items-center">
                <span className="text-xs font-bold tracking-widest text-muted-foreground" style={{ fontFamily: "'DM Mono', monospace" }}>{r.series.toUpperCase()}</span>
              </div>
              <div className="px-6 py-5 flex items-center flex-1">
                <p className="text-sm font-medium">{r.highlight}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Race-to-road */}
      <div className="border-t border-border bg-card px-6 md:px-12 py-20">
        <div className="text-xs text-primary tracking-widest mb-6" style={{ fontFamily: "'DM Mono', monospace" }}>RACE-TO-ROAD TECHNOLOGY TRANSFER</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-border">
          {[
            { from: "F1 DRS Wing Load Testing", to: "P Zero sidewall stiffness calibration", arrow: true },
            { from: "WSBK Lean-angle Compound", to: "Cinturato wet-grip matrix", arrow: true },
            { from: "WRC Gravel Self-Cleaning", to: "Scorpion all-terrain tread pattern", arrow: true },
          ].map((item, i) => (
            <div key={i} className="p-8 border-b md:border-b-0 md:border-r border-border last:border-0">
              <div className="text-xs text-muted-foreground tracking-widest mb-3" style={{ fontFamily: "'DM Mono', monospace" }}>RACING INPUT</div>
              <div className="text-sm font-bold mb-4">{item.from}</div>
              <div className="w-6 h-0.5 bg-primary mb-4" />
              <div className="text-xs text-muted-foreground tracking-widest mb-3" style={{ fontFamily: "'DM Mono', monospace" }}>ROAD APPLICATION</div>
              <div className="text-sm font-bold text-primary">{item.to}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="border-t border-border px-6 md:px-12 py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <h2 className="text-4xl font-black tracking-tighter" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            ROAD TIRES BORN FROM RACING.
          </h2>
          <p className="text-muted-foreground font-light mt-2">Explore the P Zero — our most race-derived road tire.</p>
        </div>
        <button
          onClick={() => navigate("/products/p-zero")}
          className="flex items-center gap-3 bg-primary text-primary-foreground px-10 py-4 text-sm font-bold tracking-widest hover:bg-red-700 transition-colors group flex-shrink-0"
        >
          P ZERO <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
