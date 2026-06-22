import { useParams, useNavigate } from "react-router";
import { ChevronRight, ChevronLeft, Star, Check, Download } from "lucide-react";
import { useState } from "react";

const tireData: Record<string, {
  name: string; tagline: string; line: string; badge: string; badgeColor: string;
  hero: string; gallery: string[]; price: string;
  description: string; longDesc: string;
  specs: { label: string; value: string }[];
  features: string[];
  sizes: string[];
  vehicles: string[];
  reviews: { name: string; vehicle: string; rating: number; text: string }[];
  relatedSlug: string; relatedName: string;
}> = {
  "p-zero": {
    name: "P Zero",
    tagline: "Ultra High Performance",
    line: "Performance",
    badge: "F1 APPROVED",
    badgeColor: "#e20a17",
    hero: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&h=800&fit=crop&auto=format",
    gallery: [
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=700&h=500&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=700&h=500&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=700&h=500&fit=crop&auto=format",
    ],
    price: "From €189 / tire",
    description: "Born on the track. Refined for the road.",
    longDesc: "The P Zero is Hyperion's flagship ultra-high performance summer tire, developed in direct collaboration with our Formula 1 program. Every compound innovation that wins grands prix filters directly into its construction. The result: a road tire with uncompromised cornering grip, exceptional dry and wet braking, and a level of steering precision that borders on telepathic.",
    specs: [
      { label: "SPEED RATING", value: "Y (300+ km/h)" },
      { label: "LOAD INDEX", value: "95 (690 kg)" },
      { label: "WET GRIP", value: "A" },
      { label: "FUEL EFFICIENCY", value: "C" },
      { label: "ROLLING NOISE", value: "68 dB" },
      { label: "TREAD DEPTH", value: "8.0 mm" },
      { label: "TREAD COMPOUND", value: "Silica-Enhanced HPC" },
      { label: "SEASON", value: "Summer" },
      { label: "RIM DIAMETER", value: "18–22\"" },
      { label: "SECTION WIDTH", value: "195–335 mm" },
      { label: "SIDEWALL", value: "Aramid-reinforced" },
      { label: "RUNFLAT", value: "Available (RFT)" },
    ],
    features: [
      "F1-derived tread compound for maximum lateral grip",
      "Asymmetric pattern with large outer shoulder blocks",
      "Aramid-reinforced sidewall for precision turn-in",
      "Noise-cancelling internal resonator rib",
      "Available in Seal Inside self-sealing variant",
      "OE fitment on Ferrari, Lamborghini, McLaren, BMW M",
    ],
    sizes: ["225/40 R18", "245/40 R18", "245/45 R18", "255/40 R19", "265/35 R20", "275/35 R20", "285/35 R20", "295/35 R21", "305/30 R21"],
    vehicles: ["Ferrari F8 Tributo", "Lamborghini Huracán", "McLaren 720S", "BMW M3/M4", "Porsche 911", "Mercedes-AMG GT"],
    reviews: [
      { name: "Marco Pellegrini", vehicle: "Ferrari F8 Tributo", rating: 5, text: "Unmatched lateral grip. The car communicates everything through the wheel. Worth every euro." },
      { name: "Tom Brading", vehicle: "BMW M4 Competition", rating: 5, text: "Coming from a German rival brand — the difference in wet braking was immediately apparent. 3.8 meters shorter stopping distance in back-to-back tests." },
      { name: "Lena Vogel", vehicle: "Porsche 911 GT3", rating: 5, text: "These are the tires the car was designed around. Track-day performance, daily road manners. Nothing else comes close." },
    ],
    relatedSlug: "scorpion",
    relatedName: "Scorpion",
  },
  "cinturato": {
    name: "Cinturato",
    tagline: "All-Season Touring",
    line: "Touring",
    badge: "ECO CERTIFIED",
    badgeColor: "#2a7a3b",
    hero: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=1400&h=800&fit=crop&auto=format",
    gallery: [
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=700&h=500&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=700&h=500&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=700&h=500&fit=crop&auto=format",
    ],
    price: "From €109 / tire",
    description: "Italian craftsmanship meets everyday performance.",
    longDesc: "The Cinturato defines the touring tire category for discerning drivers who refuse to compromise on safety, comfort, or economy. A bio-based silica compound reduces rolling resistance for tangible fuel savings while maintaining the wet-grip rating that Hyperion is renowned for. The Cinturato is the tire you fit and forget — confident in any condition, quiet over any surface.",
    specs: [
      { label: "SPEED RATING", value: "H (240 km/h)" },
      { label: "LOAD INDEX", value: "91 (615 kg)" },
      { label: "WET GRIP", value: "A" },
      { label: "FUEL EFFICIENCY", value: "A" },
      { label: "ROLLING NOISE", value: "70 dB" },
      { label: "TREAD DEPTH", value: "7.5 mm" },
      { label: "TREAD COMPOUND", value: "Bio-Silica Eco" },
      { label: "SEASON", value: "All-Season" },
      { label: "RIM DIAMETER", value: "15–18\"" },
      { label: "SECTION WIDTH", value: "175–245 mm" },
      { label: "SIDEWALL", value: "Standard touring" },
      { label: "RUNFLAT", value: "Not available" },
    ],
    features: [
      "Bio-based silica compound — 20% lower rolling resistance",
      "All-season M+S marking for year-round confidence",
      "Wide circumferential grooves for rapid water evacuation",
      "Optimized contact patch for even tread wear",
      "Low-noise pitch sequence design",
      "EU label A wet grip, A fuel efficiency",
    ],
    sizes: ["185/60 R15", "195/65 R15", "205/55 R16", "215/55 R17", "225/50 R17", "225/45 R18", "235/45 R18", "245/40 R18"],
    vehicles: ["Volkswagen Golf", "BMW 3 Series", "Mercedes C-Class", "Audi A4", "Toyota Camry", "Honda Accord"],
    reviews: [
      { name: "Sarah Henriksen", vehicle: "Audi A4 Avant", rating: 5, text: "Two years, 28,000 km, still wearing evenly. The fuel savings vs my old tires are real and measurable." },
      { name: "David Park", vehicle: "BMW 320d", rating: 4, text: "Outstanding wet grip for a touring tire. Quiet on motorways. Exactly what I wanted for a company car." },
      { name: "Claire Moreau", vehicle: "VW Golf 8", rating: 5, text: "The ride quality improvement over my old budget tires was night and day. Hyperion has earned a loyal customer." },
    ],
    relatedSlug: "winter",
    relatedName: "Winter",
  },
  "scorpion": {
    name: "Scorpion",
    tagline: "SUV & 4×4 Performance",
    line: "SUV",
    badge: "OFF-ROAD READY",
    badgeColor: "#b35a00",
    hero: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=1400&h=800&fit=crop&auto=format",
    gallery: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&h=500&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=700&h=500&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=700&h=500&fit=crop&auto=format",
    ],
    price: "From €149 / tire",
    description: "Dominates every terrain without compromise.",
    longDesc: "The Scorpion range was engineered for drivers who demand performance across dimensions: motorway, mountain pass, gravel track, and everything between. Reinforced shoulder blocks handle lateral load from heavy SUVs without squirm. A self-cleaning tread pattern evacuates mud and gravel. The high-silica center compound maintains wet-road grip that competes directly with performance car tires.",
    specs: [
      { label: "SPEED RATING", value: "V (260 km/h)" },
      { label: "LOAD INDEX", value: "103 (875 kg)" },
      { label: "WET GRIP", value: "A" },
      { label: "FUEL EFFICIENCY", value: "B" },
      { label: "ROLLING NOISE", value: "72 dB" },
      { label: "TREAD DEPTH", value: "9.5 mm" },
      { label: "TREAD COMPOUND", value: "Dual-zone Silica" },
      { label: "SEASON", value: "All-Season" },
      { label: "RIM DIAMETER", value: "17–22\"" },
      { label: "SECTION WIDTH", value: "215–315 mm" },
      { label: "SIDEWALL", value: "Reinforced XL" },
      { label: "RUNFLAT", value: "Selected sizes" },
    ],
    features: [
      "Dual-zone compound: silica center, aramid-reinforced shoulder",
      "Self-cleaning tread with mud evacuation channels",
      "XL load rating supporting heavy SUV payloads",
      "Reinforced bead area for low-pressure off-road driving",
      "All-season M+S rated with 3-Peak Mountain Snowflake",
      "OE fitment on Range Rover, Porsche Cayenne, BMW X5/X6",
    ],
    sizes: ["235/60 R18", "255/55 R18", "255/50 R19", "265/50 R19", "275/45 R20", "285/45 R20", "295/40 R21", "315/35 R22"],
    vehicles: ["Range Rover Sport", "Porsche Cayenne", "BMW X5/X6", "Mercedes GLE/GLS", "Lamborghini Urus", "Audi Q7/Q8"],
    reviews: [
      { name: "James Whitfield", vehicle: "Range Rover Sport", rating: 5, text: "From gravel tracks in Tuscany to the Autobahn at 220 km/h. The Scorpion handles everything with composure." },
      { name: "Nina Braun", vehicle: "Porsche Cayenne Turbo", rating: 5, text: "Three ski seasons in the Alps. Not once did I feel the car was at its limits. Remarkable winter confidence for a year-round tire." },
      { name: "Rashid Al-Farsi", vehicle: "BMW X6 M", rating: 4, text: "High-speed stability is genuinely impressive. Road noise is slightly higher than a pure road tire but that is the trade-off for the capability." },
    ],
    relatedSlug: "p-zero",
    relatedName: "P Zero",
  },
  "winter": {
    name: "Winter",
    tagline: "Cold Weather Mastery",
    line: "Winter",
    badge: "ICE RATED",
    badgeColor: "#1a4a8a",
    hero: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=1400&h=800&fit=crop&auto=format",
    gallery: [
      "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=700&h=500&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=700&h=500&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=700&h=500&fit=crop&auto=format",
    ],
    price: "From €129 / tire",
    description: "Engineered for temperatures below 7°C.",
    longDesc: "Below 7°C, standard tires begin to harden, losing grip progressively. The Hyperion Winter's silica-rich compound is chemically engineered to remain pliable in freezing conditions, maintaining the contact patch flexibility that grip depends on. Thousands of micro-sipes across the tread surface claw into compacted snow and ice. When the temperature drops, the Winter tire does not.",
    specs: [
      { label: "SPEED RATING", value: "H (240 km/h)" },
      { label: "LOAD INDEX", value: "91 (615 kg)" },
      { label: "WET GRIP", value: "B" },
      { label: "FUEL EFFICIENCY", value: "C" },
      { label: "ROLLING NOISE", value: "69 dB" },
      { label: "TREAD DEPTH", value: "8.5 mm" },
      { label: "TREAD COMPOUND", value: "Arctic Silica" },
      { label: "SEASON", value: "Winter" },
      { label: "RIM DIAMETER", value: "15–19\"" },
      { label: "SECTION WIDTH", value: "175–255 mm" },
      { label: "SIDEWALL", value: "Standard touring" },
      { label: "CERTIFICATION", value: "3PMSF + M+S" },
    ],
    features: [
      "Arctic Silica compound: engineered for −30°C to +7°C",
      "3-Peak Mountain Snowflake certified",
      "2,000+ micro-sipes per tire for ice bite",
      "Wide longitudinal grooves prevent aquaplaning on slush",
      "Directional tread pattern for self-cleaning rotation",
      "Available in passenger, SUV, and van variants",
    ],
    sizes: ["185/65 R15", "195/65 R15", "205/55 R16", "215/55 R17", "225/50 R17", "225/45 R18", "235/45 R18", "255/40 R19"],
    vehicles: ["All passenger cars", "Estate wagons", "Compact SUVs", "Vans (van variant)", "Sedans", "Hatchbacks"],
    reviews: [
      { name: "Erik Lindström", vehicle: "Volvo V90", rating: 5, text: "Swedish winters are unforgiving. These tires have given me complete confidence on ice and compacted snow for three consecutive seasons." },
      { name: "Maria Kovacs", vehicle: "Skoda Octavia", rating: 5, text: "Fitted all four in October and immediately noticed the difference on the first frost. Braking on ice is in a different class." },
      { name: "Pierre Dubois", vehicle: "Renault Megane", rating: 4, text: "Outstanding snow performance. Slightly higher road noise on dry surfaces but completely expected for winter compound." },
    ],
    relatedSlug: "cinturato",
    relatedName: "Cinturato",
  },
};

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState<"overview" | "specs" | "sizes" | "reviews">("overview");

  const tire = tireData[slug ?? ""] ?? tireData["p-zero"];

  const allImages = [tire.hero, ...tire.gallery];

  return (
    <div>
      {/* Breadcrumb */}
      <div className="border-b border-border px-6 md:px-12 py-4 flex items-center gap-2 bg-card">
        <button onClick={() => navigate("/products")} className="text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1" style={{ fontFamily: "'DM Mono', monospace" }}>
          <ChevronLeft size={12} /> ALL PRODUCTS
        </button>
        <span className="text-muted-foreground/40 text-xs">/</span>
        <span className="text-xs text-foreground tracking-widest" style={{ fontFamily: "'DM Mono', monospace" }}>{tire.name.toUpperCase()}</span>
      </div>

      {/* Hero split */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[60vh]">
        {/* Image panel */}
        <div className="relative bg-secondary">
          <div className="relative overflow-hidden aspect-[4/3] lg:aspect-auto lg:h-full min-h-72 bg-secondary">
            <img
              src={allImages[activeImage]}
              alt={tire.name}
              className="w-full h-full object-cover transition-opacity duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            <div
              className="absolute top-6 left-6 text-xs font-bold tracking-widest px-3 py-1.5"
              style={{ fontFamily: "'DM Mono', monospace", backgroundColor: tire.badgeColor, color: "#fff" }}
            >
              {tire.badge}
            </div>
          </div>
          {/* Thumbnail strip */}
          <div className="flex gap-0 border-t border-border">
            {allImages.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(i)}
                className={`flex-1 aspect-video overflow-hidden border-r border-border last:border-r-0 transition-opacity ${activeImage === i ? "opacity-100" : "opacity-40 hover:opacity-70"}`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Info panel */}
        <div className="px-8 md:px-12 py-12 flex flex-col justify-between border-l border-border">
          <div>
            <div className="text-xs text-muted-foreground tracking-widest mb-2" style={{ fontFamily: "'DM Mono', monospace" }}>
              {tire.line.toUpperCase()} LINE
            </div>
            <h1
              className="text-6xl md:text-7xl font-black leading-none tracking-tighter mb-2"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              {tire.name}
            </h1>
            <p className="text-xs text-primary tracking-widest mb-6" style={{ fontFamily: "'DM Mono', monospace" }}>
              {tire.tagline.toUpperCase()}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8 font-light max-w-md">{tire.longDesc}</p>

            {/* Top specs strip */}
            <div className="grid grid-cols-3 border border-border mb-8">
              {[
                { l: "WET GRIP", v: tire.specs.find(s => s.label === "WET GRIP")?.value ?? "—" },
                { l: "SEASON", v: tire.specs.find(s => s.label === "SEASON")?.value ?? "—" },
                { l: "NOISE", v: tire.specs.find(s => s.label === "ROLLING NOISE")?.value ?? "—" },
              ].map((s, i) => (
                <div key={i} className={`p-4 ${i < 2 ? "border-r border-border" : ""}`}>
                  <div className="text-xs text-muted-foreground tracking-widest mb-1" style={{ fontFamily: "'DM Mono', monospace" }}>{s.l}</div>
                  <div className="text-xl font-black" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="text-2xl font-black text-primary mb-6" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              {tire.price}
            </div>
            <div className="flex gap-3 flex-wrap">
              <button className="flex-1 min-w-[160px] bg-primary text-primary-foreground py-4 text-xs font-bold tracking-widest hover:bg-red-700 transition-colors">
                FIND A DEALER
              </button>
              <button className="border border-border text-foreground px-6 py-4 text-xs font-bold tracking-widest hover:border-foreground transition-colors flex items-center gap-2">
                <Download size={12} /> SPEC SHEET
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tab nav */}
      <div className="border-y border-border flex overflow-x-auto" style={{ scrollbarWidth: "none" }}>
        {(["overview", "specs", "sizes", "reviews"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-shrink-0 px-8 py-4 text-xs font-bold tracking-widest border-r border-border transition-colors ${activeTab === tab ? "text-primary bg-card border-b-2 border-b-primary -mb-px" : "text-muted-foreground hover:text-foreground"}`}
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="px-6 md:px-12 py-16">

        {/* Overview */}
        {activeTab === "overview" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="text-xs text-primary tracking-widest mb-6" style={{ fontFamily: "'DM Mono', monospace" }}>KEY FEATURES</div>
              <div className="flex flex-col gap-0 border border-border">
                {tire.features.map((f, i) => (
                  <div key={i} className="flex items-start gap-4 px-6 py-4 border-b border-border last:border-b-0 hover:bg-card transition-colors">
                    <Check size={14} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm font-light leading-relaxed">{f}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="text-xs text-primary tracking-widest mb-6" style={{ fontFamily: "'DM Mono', monospace" }}>OE VEHICLES</div>
              <div className="flex flex-col gap-0 border border-border">
                {tire.vehicles.map((v, i) => (
                  <div key={i} className="flex items-center justify-between px-6 py-4 border-b border-border last:border-b-0 hover:bg-card transition-colors">
                    <span className="text-sm font-medium">{v}</span>
                    <span className="text-xs text-muted-foreground" style={{ fontFamily: "'DM Mono', monospace" }}>OE FITMENT</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Specs */}
        {activeTab === "specs" && (
          <div className="max-w-2xl">
            <div className="text-xs text-primary tracking-widest mb-6" style={{ fontFamily: "'DM Mono', monospace" }}>FULL TECHNICAL SPECIFICATIONS</div>
            <div className="border border-border">
              {tire.specs.map((s, i) => (
                <div key={i} className="flex items-center justify-between px-6 py-4 border-b border-border last:border-b-0 hover:bg-card transition-colors group">
                  <span className="text-xs text-muted-foreground tracking-widest" style={{ fontFamily: "'DM Mono', monospace" }}>{s.label}</span>
                  <span className="text-sm font-bold">{s.value}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Sizes */}
        {activeTab === "sizes" && (
          <div>
            <div className="text-xs text-primary tracking-widest mb-6" style={{ fontFamily: "'DM Mono', monospace" }}>AVAILABLE SIZES</div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0 border border-border">
              {tire.sizes.map((size, i) => (
                <div key={i} className="border-r border-b border-border p-5 hover:bg-card transition-colors cursor-pointer group">
                  <div className="text-lg font-black tracking-tight group-hover:text-primary transition-colors" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{size}</div>
                  <div className="text-xs text-muted-foreground mt-1" style={{ fontFamily: "'DM Mono', monospace" }}>IN STOCK</div>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-4" style={{ fontFamily: "'DM Mono', monospace" }}>
              NOT SEEING YOUR SIZE? CONTACT YOUR LOCAL DEALER — ADDITIONAL SIZES AVAILABLE ON ORDER.
            </p>
          </div>
        )}

        {/* Reviews */}
        {activeTab === "reviews" && (
          <div>
            <div className="text-xs text-primary tracking-widest mb-8" style={{ fontFamily: "'DM Mono', monospace" }}>DRIVER REVIEWS</div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-border">
              {tire.reviews.map((r, i) => (
                <div key={i} className="p-8 border-b md:border-b-0 md:border-r border-border last:border-0 flex flex-col justify-between gap-6">
                  <div>
                    <div className="flex gap-0.5 mb-4">
                      {Array.from({ length: r.rating }).map((_, j) => <Star key={j} size={12} className="fill-primary text-primary" />)}
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground font-light">"{r.text}"</p>
                  </div>
                  <div className="border-t border-border pt-4">
                    <div className="font-bold text-sm">{r.name}</div>
                    <div className="text-xs text-muted-foreground tracking-widest mt-0.5" style={{ fontFamily: "'DM Mono', monospace" }}>{r.vehicle}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Related */}
      <div className="border-t border-border px-6 md:px-12 py-16 bg-card">
        <div className="text-xs text-primary tracking-widest mb-8" style={{ fontFamily: "'DM Mono', monospace" }}>YOU MIGHT ALSO CONSIDER</div>
        <div
          className="flex items-center justify-between border border-border p-8 hover:bg-secondary transition-colors cursor-pointer group"
          onClick={() => navigate(`/products/${tire.relatedSlug}`)}
        >
          <div>
            <div className="text-4xl font-black tracking-tighter" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{tire.relatedName}</div>
            <div className="text-xs text-muted-foreground mt-1" style={{ fontFamily: "'DM Mono', monospace" }}>HYPERION {tire.relatedName.toUpperCase()}</div>
          </div>
          <ChevronRight size={24} className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
        </div>
      </div>
    </div>
  );
}
