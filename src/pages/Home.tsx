import { useState } from "react";
import { ChevronRight, MapPin, Phone, Search, Star, Shield, Zap, Award } from "lucide-react";
import { useNavigate } from "react-router";

const tireCategories = [
  {
    id: "p-zero",
    slug: "p-zero",
    name: "P Zero",
    tagline: "Ultra High Performance",
    description: "Born on the track. Refined for the road. The tire choice of Formula 1 teams and supercar manufacturers worldwide.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&auto=format",
    specs: { speed: "300+ km/h", wet: "A", noise: "68 dB" },
    badge: "F1 APPROVED",
    color: "#e20a17",
  },
  {
    id: "cinturato",
    slug: "cinturato",
    name: "Cinturato",
    tagline: "All-Season Touring",
    description: "Italian craftsmanship meets everyday performance. Engineered for comfort, economy, and safety across all seasons.",
    image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=800&h=600&fit=crop&auto=format",
    specs: { speed: "240 km/h", wet: "A", noise: "70 dB" },
    badge: "ECO CERTIFIED",
    color: "#2a7a3b",
  },
  {
    id: "scorpion",
    slug: "scorpion",
    name: "Scorpion",
    tagline: "SUV & 4×4 Performance",
    description: "Dominates every terrain. From urban highways to mountain passes, Scorpion delivers control without compromise.",
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&h=600&fit=crop&auto=format",
    specs: { speed: "260 km/h", wet: "A", noise: "72 dB" },
    badge: "OFF-ROAD READY",
    color: "#b35a00",
  },
  {
    id: "winter",
    slug: "winter",
    name: "Winter",
    tagline: "Cold Weather Mastery",
    description: "Engineered for temperatures below 7°C. Silica-rich compound stays pliable where standard tires harden and fail.",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&h=600&fit=crop&auto=format",
    specs: { speed: "240 km/h", wet: "B", noise: "69 dB" },
    badge: "ICE RATED",
    color: "#1a4a8a",
  },
];

const stats = [
  { value: "110+", label: "Years of Innovation" },
  { value: "€6.5B", label: "Annual Revenue" },
  { value: "19", label: "Production Plants" },
  { value: "3,800+", label: "F1 Race Laps Covered" },
];

const reviews = [
  { name: "Marco Pellegrini", vehicle: "Ferrari F8 Tributo", rating: 5, text: "The P Zero is simply unmatched. Incredible grip through hairpins, and the car communicates everything through the wheel. Worth every euro." },
  { name: "Sarah Henriksen", vehicle: "Porsche Cayenne S", rating: 5, text: "Scorpion All Terrain delivered exactly what it promised. Three ski seasons in the Alps without a single slip. These tires are remarkable." },
  { name: "James Whitfield", vehicle: "BMW M3 Competition", rating: 5, text: "Switched from a competitor brand. The difference in braking response is immediately noticeable. Stopping distances improved by nearly 4 meters." },
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("p-zero");
  const [vehicleType, setVehicleType] = useState("Car");
  const navigate = useNavigate();

  const activeTire = tireCategories.find((t) => t.id === activeCategory)!;

  return (
    <div>
      {/* ── HERO ── */}
      <section className="relative min-h-[calc(100vh-4rem)] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=1600&h=900&fit=crop&auto=format"
            alt="High-performance vehicle on race track"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
        </div>
        <div className="absolute top-0 right-0 w-1 h-full bg-primary z-10 opacity-60" />
        <div className="absolute top-0 right-4 w-px h-full bg-primary z-10 opacity-20" />

        <div className="relative z-10 px-6 md:px-12 pb-20 max-w-5xl">
          <div className="text-xs font-medium tracking-widest text-primary mb-6 mt-8" style={{ fontFamily: "'DM Mono', monospace" }}>
            OFFICIAL MOTORSPORT TIRE SUPPLIER — F1 · WSBK · WRC
          </div>
          <h1
            className="font-black leading-none tracking-tight text-foreground mb-6"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(3.5rem,10vw,9rem)", lineHeight: 0.9 }}
          >
            POWER IS
            <br />NOTHING
            <br /><span className="text-primary">WITHOUT</span>
            <br />CONTROL.
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-md mb-10 leading-relaxed font-light">
            Over 150 years of Italian engineering distilled into every millimeter of rubber. Find your tire — built for the road you drive.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => navigate("/products")}
              className="flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-sm font-bold tracking-widest hover:bg-red-700 transition-colors duration-200 group"
            >
              FIND MY TIRE
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => navigate("/products")}
              className="flex items-center gap-3 border border-border text-foreground px-8 py-4 text-sm font-bold tracking-widest hover:border-foreground transition-colors duration-200"
            >
              VIEW ALL PRODUCTS
            </button>
          </div>
        </div>

        <div className="relative z-10 border-t border-border bg-secondary/50 backdrop-blur-sm">
          <div className="flex overflow-x-auto" style={{ scrollbarWidth: "none" }}>
            {stats.map((s, i) => (
              <div key={i} className="flex-shrink-0 px-10 py-5 border-r border-border flex flex-col gap-0.5">
                <span className="text-2xl font-black text-primary leading-none" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{s.value}</span>
                <span className="text-xs text-muted-foreground tracking-widest" style={{ fontFamily: "'DM Mono', monospace" }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIRE FINDER ── */}
      <section className="border-b border-border bg-secondary">
        <div className="px-6 md:px-12 py-10">
          <div className="text-xs text-muted-foreground tracking-widest mb-6" style={{ fontFamily: "'DM Mono', monospace" }}>TIRE CONFIGURATOR</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-border">
            {["Car", "SUV / 4×4", "Motorcycle", "Truck"].map((type) => (
              <button
                key={type}
                onClick={() => setVehicleType(type)}
                className={`py-4 px-6 text-sm font-bold tracking-widest border-b md:border-b-0 md:border-r border-border last:border-0 transition-colors duration-200 ${vehicleType === type ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground hover:bg-card"}`}
              >
                {type.toUpperCase()}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-t-0 border-border">
            {[
              { placeholder: "WIDTH (e.g. 245)", label: "SECTION WIDTH" },
              { placeholder: "PROFILE (e.g. 45)", label: "ASPECT RATIO" },
              { placeholder: "RIM (e.g. 18)", label: "RIM DIAMETER" },
              { placeholder: "SEASON", label: "SEASON" },
            ].map((field, i) => (
              <div key={i} className="border-b md:border-b-0 md:border-r border-border last:border-0 p-4">
                <label className="block text-xs text-muted-foreground tracking-widest mb-2" style={{ fontFamily: "'DM Mono', monospace" }}>{field.label}</label>
                <input type="text" placeholder={field.placeholder} className="w-full bg-transparent text-foreground text-sm font-medium placeholder:text-muted-foreground/50 outline-none" />
              </div>
            ))}
          </div>
          <button
            onClick={() => navigate("/products")}
            className="w-full md:w-auto flex items-center justify-center gap-3 bg-primary text-primary-foreground px-10 py-4 text-sm font-bold tracking-widest hover:bg-red-700 transition-colors duration-200 group border border-primary"
          >
            <Search size={14} />
            SEARCH TIRES
            <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* ── PRODUCT RANGE ── */}
      <section className="px-6 md:px-12 py-24">
        <div className="flex items-end justify-between mb-16">
          <div>
            <div className="text-xs text-primary tracking-widest mb-3" style={{ fontFamily: "'DM Mono', monospace" }}>OUR RANGE</div>
            <h2 className="text-5xl md:text-7xl font-black leading-none tracking-tighter" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              ENGINEERED<br />FOR EVERY ROAD.
            </h2>
          </div>
          <button onClick={() => navigate("/products")} className="hidden md:flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group">
            View all tires <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="flex gap-0 border-b border-border mb-0 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
          {tireCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex-shrink-0 px-8 py-4 text-xs font-bold tracking-widest border-r border-border transition-all duration-200 ${activeCategory === cat.id ? "text-primary border-b-2 border-b-primary -mb-px bg-card" : "text-muted-foreground hover:text-foreground"}`}
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              {cat.name.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 border border-t-0 border-border">
          <div className="relative overflow-hidden min-h-80 bg-card">
            <img src={activeTire.image} alt={`${activeTire.name} tire`} className="w-full h-full object-cover opacity-80 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-gradient-to-r from-card/30 to-transparent" />
            <div className="absolute top-6 left-6 text-xs font-bold tracking-widest px-3 py-1.5" style={{ fontFamily: "'DM Mono', monospace", backgroundColor: activeTire.color, color: "#fff" }}>
              {activeTire.badge}
            </div>
          </div>
          <div className="p-10 flex flex-col justify-between">
            <div>
              <h3 className="text-6xl font-black leading-none tracking-tighter mb-2" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{activeTire.name}</h3>
              <p className="text-xs tracking-widest text-primary mb-6" style={{ fontFamily: "'DM Mono', monospace" }}>{activeTire.tagline.toUpperCase()}</p>
              <p className="text-muted-foreground leading-relaxed mb-10 max-w-sm">{activeTire.description}</p>
            </div>
            <div>
              <div className="grid grid-cols-3 gap-0 border border-border mb-8">
                {(Object.entries(activeTire.specs) as [string, string][]).map(([key, val], i) => (
                  <div key={key} className={`p-4 ${i < 2 ? "border-r border-border" : ""}`}>
                    <div className="text-xs text-muted-foreground tracking-widest mb-1" style={{ fontFamily: "'DM Mono', monospace" }}>
                      {key === "speed" ? "TOP SPEED" : key === "wet" ? "WET GRIP" : "NOISE"}
                    </div>
                    <div className="text-lg font-black tracking-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{val}</div>
                  </div>
                ))}
              </div>
              <div className="flex gap-4">
                <button onClick={() => navigate(`/products/${activeTire.slug}`)} className="flex-1 bg-primary text-primary-foreground py-4 text-xs font-bold tracking-widest hover:bg-red-700 transition-colors">
                  EXPLORE {activeTire.name.toUpperCase()}
                </button>
                <button onClick={() => navigate(`/products/${activeTire.slug}`)} className="border border-border text-foreground px-6 py-4 text-xs font-bold tracking-widest hover:border-foreground transition-colors">
                  SPECS
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY HYPERION ── */}
      <section className="px-6 md:px-12 py-24 border-t border-border">
        <div className="mb-16">
          <div className="text-xs text-primary tracking-widest mb-3" style={{ fontFamily: "'DM Mono', monospace" }}>THE HYPERION ADVANTAGE</div>
          <h2 className="text-5xl md:text-7xl font-black leading-none tracking-tighter max-w-2xl" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            TRUSTED BY THE<br />WORLD{"'"}S FASTEST.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-border">
          {[
            { icon: <Zap size={20} className="text-primary" />, title: "Motorsport DNA", body: "Every road tire inherits technology from our Formula 1 compound research. 14 consecutive years as exclusive F1 supplier." },
            { icon: <Shield size={20} className="text-primary" />, title: "Precision Engineering", body: "Manufactured to tolerances measured in microns. Each tire is laser-inspected before leaving our plants." },
            { icon: <Award size={20} className="text-primary" />, title: "OE Certification", body: "Factory-fitted to Ferrari, Lamborghini, McLaren, Porsche, BMW M Series, and 300+ other prestigious vehicles." },
            { icon: <Star size={20} className="text-primary" />, title: "150 Years Proven", body: "Founded in Milan in 1872. Our experience spans the entire history of the automobile. Innovation runs deep." },
          ].map((item, i) => (
            <div key={i} className="p-8 border-b md:border-b-0 md:border-r border-border last:border-0 hover:bg-card transition-colors duration-200">
              <div className="mb-5">{item.icon}</div>
              <h3 className="text-xl font-black tracking-wide mb-3" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-light">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── RACING BANNER ── */}
      <section className="relative overflow-hidden border-y border-border cursor-pointer" onClick={() => navigate("/racing")}>
        <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1600&h=600&fit=crop&auto=format" alt="Formula 1 racing" className="w-full h-64 md:h-96 object-cover opacity-30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <div className="text-xs text-primary tracking-widest mb-4" style={{ fontFamily: "'DM Mono', monospace" }}>FORMULA 1 · WORLD SUPERBIKE · WRC · GT WORLD CHALLENGE</div>
          <h2 className="text-5xl md:text-8xl font-black leading-none tracking-normal text-foreground" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            THE RACE IS<br />OUR LAB.
          </h2>
          <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            Explore our racing heritage <ChevronRight size={14} />
          </div>
        </div>
        <div className="absolute left-0 top-0 h-full w-1 bg-primary" />
      </section>

      {/* ── REVIEWS ── */}
      <section className="px-6 md:px-12 py-24 bg-card">
        <div className="mb-14">
          <div className="text-xs text-primary tracking-widest mb-3" style={{ fontFamily: "'DM Mono', monospace" }}>DRIVER REVIEWS</div>
          <h2 className="text-5xl md:text-6xl font-black leading-none tracking-tighter" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>WHAT DRIVERS SAY.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-border">
          {reviews.map((review, i) => (
            <div key={i} className="p-8 border-b md:border-b-0 md:border-r border-border last:border-0 flex flex-col justify-between gap-6">
              <div>
                <div className="flex gap-0.5 mb-5">
                  {Array.from({ length: review.rating }).map((_, j) => <Star key={j} size={12} className="fill-primary text-primary" />)}
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground font-light">"{review.text}"</p>
              </div>
              <div className="border-t border-border pt-5">
                <div className="font-bold text-sm tracking-tight">{review.name}</div>
                <div className="text-xs text-muted-foreground tracking-widest mt-1" style={{ fontFamily: "'DM Mono', monospace" }}>{review.vehicle}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── DEALER CTA ── */}
      <section className="border-t border-border">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="px-6 md:px-12 py-20">
            <div className="text-xs text-primary tracking-widest mb-5" style={{ fontFamily: "'DM Mono', monospace" }}>AUTHORIZED DEALERS</div>
            <h2 className="text-5xl md:text-6xl font-black leading-none tracking-normal mb-6" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              FIND A DEALER<br />NEAR YOU.
            </h2>
            <p className="text-muted-foreground mb-10 leading-relaxed font-light max-w-sm">
              Over 40,000 authorized Hyperion dealers worldwide. Expert fitment, genuine products, and certified installation guaranteed.
            </p>
            <div className="flex gap-0 border border-border mb-6">
              <input type="text" placeholder="Enter city or postcode..." className="flex-1 bg-transparent px-5 py-4 text-sm font-medium placeholder:text-muted-foreground/50 outline-none" />
              <button onClick={() => navigate("/find-dealer")} className="bg-primary text-primary-foreground px-6 py-4 text-xs font-bold tracking-widest hover:bg-red-700 transition-colors flex items-center gap-2">
                <MapPin size={14} />
                SEARCH
              </button>
            </div>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <Phone size={14} className="text-primary" />
              <span>Or call us: </span>
              <a href="tel:+18001234567" className="text-foreground font-bold hover:text-primary transition-colors">+1 800 123 4567</a>
            </div>
          </div>
          <div className="relative min-h-72 lg:min-h-0 overflow-hidden bg-secondary">
            <img src="https://images.unsplash.com/photo-1516542076529-1ea3854896f2?w=800&h=600&fit=crop&auto=format" alt="Tire shop interior" className="w-full h-full object-cover opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-background/30" />
          </div>
        </div>
      </section>
    </div>
  );
}
