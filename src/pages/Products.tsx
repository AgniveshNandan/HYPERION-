import { useState } from "react";
import { ChevronRight, SlidersHorizontal } from "lucide-react";
import { useNavigate } from "react-router";

const allTires = [
  {
    slug: "p-zero",
    name: "P Zero",
    line: "Performance",
    tagline: "Ultra High Performance",
    description: "Born on the track, refined for the road. The tire choice of Formula 1 teams and supercar manufacturers worldwide.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=450&fit=crop&auto=format",
    badge: "F1 APPROVED",
    badgeColor: "#e20a17",
    specs: { speed: "Y (300+)", wet: "A", noise: "68 dB", season: "Summer" },
    price: "From €189",
    vehicles: ["Sports Car", "Supercar", "Sedan"],
  },
  {
    slug: "cinturato",
    name: "Cinturato",
    line: "Touring",
    tagline: "All-Season Touring",
    description: "Italian craftsmanship meets everyday performance. Engineered for comfort, economy, and safety across all seasons.",
    image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=600&h=450&fit=crop&auto=format",
    badge: "ECO CERTIFIED",
    badgeColor: "#2a7a3b",
    specs: { speed: "H (240)", wet: "A", noise: "70 dB", season: "All-Season" },
    price: "From €109",
    vehicles: ["Sedan", "Hatchback", "Estate"],
  },
  {
    slug: "scorpion",
    name: "Scorpion",
    line: "SUV",
    tagline: "SUV & 4×4 Performance",
    description: "Dominates every terrain. From urban highways to mountain passes, Scorpion delivers control without compromise.",
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600&h=450&fit=crop&auto=format",
    badge: "OFF-ROAD READY",
    badgeColor: "#b35a00",
    specs: { speed: "V (260)", wet: "A", noise: "72 dB", season: "All-Season" },
    price: "From €149",
    vehicles: ["SUV", "4×4", "Pickup"],
  },
  {
    slug: "winter",
    name: "Winter",
    line: "Winter",
    tagline: "Cold Weather Mastery",
    description: "Engineered for temperatures below 7°C. Silica-rich compound stays pliable where standard tires harden and fail.",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=450&fit=crop&auto=format",
    badge: "ICE RATED",
    badgeColor: "#1a4a8a",
    specs: { speed: "H (240)", wet: "B", noise: "69 dB", season: "Winter" },
    price: "From €129",
    vehicles: ["Sedan", "SUV", "Estate"],
  },
  {
    slug: "p-zero",
    name: "P Zero Corsa",
    line: "Performance",
    tagline: "Track-Day Specialist",
    description: "The most extreme road-legal Hyperion tire. Designed for track days and high-performance driving events.",
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=600&h=450&fit=crop&auto=format",
    badge: "TRACK SPEC",
    badgeColor: "#e20a17",
    specs: { speed: "Y (300+)", wet: "A", noise: "65 dB", season: "Summer" },
    price: "From €249",
    vehicles: ["Sports Car", "Track Car"],
  },
  {
    slug: "scorpion",
    name: "Scorpion Winter",
    line: "Winter",
    tagline: "SUV Winter Performance",
    description: "Scorpion winter capability combined with SUV load ratings. The definitive winter tire for premium 4×4 vehicles.",
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600&h=450&fit=crop&auto=format",
    badge: "SUV WINTER",
    badgeColor: "#1a4a8a",
    specs: { speed: "H (240)", wet: "B", noise: "71 dB", season: "Winter" },
    price: "From €169",
    vehicles: ["SUV", "4×4"],
  },
];

const lines = ["All", "Performance", "Touring", "SUV", "Winter"];
const seasons = ["All Seasons", "Summer", "All-Season", "Winter"];

export default function Products() {
  const [activeLine, setActiveLine] = useState("All");
  const [activeSeason, setActiveSeason] = useState("All Seasons");
  const [sortBy, setSortBy] = useState("featured");
  const navigate = useNavigate();

  const filtered = allTires.filter((t) => {
    const lineMatch = activeLine === "All" || t.line === activeLine;
    const seasonMatch = activeSeason === "All Seasons" || t.specs.season === activeSeason;
    return lineMatch && seasonMatch;
  });

  return (
    <div>
      {/* Header */}
      <div className="border-b border-border bg-card">
        <div className="px-6 md:px-12 pt-16 pb-12">
          <div className="text-xs text-primary tracking-widest mb-4" style={{ fontFamily: "'DM Mono', monospace" }}>
            HYPERION PRODUCT RANGE
          </div>
          <h1
            className="text-6xl md:text-8xl font-black leading-none tracking-tighter mb-4"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            ALL TIRES.
          </h1>
          <p className="text-muted-foreground font-light max-w-lg">
            Every Hyperion tire is engineered with motorsport DNA. Choose your line, your season, your road.
          </p>
        </div>

        {/* Filters */}
        <div className="px-6 md:px-12 border-t border-border">
          <div className="flex flex-col md:flex-row md:items-center gap-0">
            <div className="flex overflow-x-auto" style={{ scrollbarWidth: "none" }}>
              {lines.map((line) => (
                <button
                  key={line}
                  onClick={() => setActiveLine(line)}
                  className={`flex-shrink-0 px-6 py-4 text-xs font-bold tracking-widest border-r border-border transition-colors ${activeLine === line ? "text-primary bg-background" : "text-muted-foreground hover:text-foreground"}`}
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  {line.toUpperCase()}
                </button>
              ))}
            </div>
            <div className="hidden md:block flex-1" />
            <div className="flex items-center gap-0 border-t md:border-t-0 border-border">
              <SlidersHorizontal size={14} className="text-muted-foreground ml-6 mr-3" />
              {seasons.map((s) => (
                <button
                  key={s}
                  onClick={() => setActiveSeason(s)}
                  className={`px-4 py-4 text-xs font-bold tracking-widest border-l border-border transition-colors ${activeSeason === s ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  {s.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Sort bar */}
      <div className="px-6 md:px-12 py-4 border-b border-border flex items-center justify-between bg-background">
        <div className="text-xs text-muted-foreground" style={{ fontFamily: "'DM Mono', monospace" }}>
          {filtered.length} PRODUCTS
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-muted-foreground" style={{ fontFamily: "'DM Mono', monospace" }}>SORT:</span>
          {["featured", "price", "performance"].map((s) => (
            <button
              key={s}
              onClick={() => setSortBy(s)}
              className={`text-xs font-bold tracking-widest transition-colors ${sortBy === s ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              {s.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-border">
          {filtered.map((tire, i) => (
            <div
              key={i}
              className="border-r border-b border-border group cursor-pointer hover:bg-card transition-colors duration-200"
              style={{ borderRight: (i + 1) % 3 === 0 ? "none" : undefined }}
              onClick={() => navigate(`/products/${tire.slug}`)}
            >
              <div className="relative overflow-hidden aspect-[4/3] bg-secondary">
                <img
                  src={tire.image}
                  alt={tire.name}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
                <div
                  className="absolute top-4 left-4 text-xs font-bold tracking-widest px-2 py-1"
                  style={{ fontFamily: "'DM Mono', monospace", backgroundColor: tire.badgeColor, color: "#fff" }}
                >
                  {tire.badge}
                </div>
                <div className="absolute top-4 right-4 text-xs text-muted-foreground tracking-widest" style={{ fontFamily: "'DM Mono', monospace" }}>
                  {tire.line.toUpperCase()}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-3xl font-black leading-none tracking-tighter mb-1" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  {tire.name}
                </h3>
                <p className="text-xs text-primary tracking-widest mb-3" style={{ fontFamily: "'DM Mono', monospace" }}>
                  {tire.tagline.toUpperCase()}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed font-light mb-5">{tire.description}</p>

                <div className="grid grid-cols-4 gap-0 border border-border mb-5">
                  {[
                    { label: "SPEED", val: tire.specs.speed },
                    { label: "WET", val: tire.specs.wet },
                    { label: "NOISE", val: tire.specs.noise },
                    { label: "SEASON", val: tire.specs.season.slice(0, 3).toUpperCase() },
                  ].map((s, j) => (
                    <div key={j} className={`p-2 text-center ${j < 3 ? "border-r border-border" : ""}`}>
                      <div className="text-xs text-muted-foreground" style={{ fontFamily: "'DM Mono', monospace" }}>{s.label}</div>
                      <div className="text-xs font-bold mt-0.5">{s.val}</div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-primary">{tire.price}</span>
                  <span className="flex items-center gap-1.5 text-xs font-bold tracking-widest text-muted-foreground group-hover:text-foreground transition-colors" style={{ fontFamily: "'DM Mono', monospace" }}>
                    VIEW TIRE <ChevronRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Configurator CTA */}
      <div className="px-6 md:px-12 py-16 border-t border-border bg-card text-center">
        <div className="text-xs text-primary tracking-widest mb-4" style={{ fontFamily: "'DM Mono', monospace" }}>NOT SURE WHICH TIRE?</div>
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
          USE OUR TIRE ADVISOR.
        </h2>
        <p className="text-muted-foreground font-light mb-8 max-w-md mx-auto">
          Answer 4 quick questions about your vehicle and driving style. We{"'"}ll match you with the right Hyperion tire in under 60 seconds.
        </p>
        <button
          onClick={() => navigate("/tire-advisor")}
          className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-4 text-sm font-bold tracking-widest hover:bg-red-700 transition-colors group"
        >
          START TIRE ADVISOR
          <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
