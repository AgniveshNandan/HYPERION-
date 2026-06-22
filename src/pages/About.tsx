import { useNavigate } from "react-router";
import { ChevronRight } from "lucide-react";

const leadership = [
  { name: "Marco Andreotti", title: "Chief Executive Officer", since: "2018", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&auto=format" },
  { name: "Dr. Elena Ferretti", title: "Chief Technology Officer", since: "2019", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&auto=format" },
  { name: "James Hartwell", title: "VP Motorsport", since: "2015", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&auto=format" },
  { name: "Yuki Tanaka", title: "Chief Design Officer", since: "2021", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&auto=format" },
];

const sustainability = [
  { target: "2030", goal: "100% renewable energy across all 19 production plants", progress: 62 },
  { target: "2035", goal: "Bio-based materials in >60% of tire compounds", progress: 31 },
  { target: "2040", goal: "Carbon-neutral operations across entire supply chain", progress: 18 },
  { target: "2050", goal: "Fully circular tire life cycle — end-of-life recovery and reuse", progress: 8 },
];

const values = [
  { label: "PERFORMANCE", body: "We measure ourselves against the fastest. Every product must perform at the limit before it reaches your car." },
  { label: "PRECISION", body: "Manufacturing tolerances measured in microns. Quality is not a target — it is the minimum standard." },
  { label: "PASSION", body: "Founded by a racing driver. Led by engineers who spend weekends at the circuit. Rubber runs in our blood." },
  { label: "SUSTAINABILITY", body: "The road ahead must still exist for future drivers. We invest more in sustainable materials R&D than any competitor." },
];

export default function About() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Hero */}
      <div className="relative overflow-hidden border-b border-border">
        <img
          src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&h=700&fit=crop&auto=format"
          alt="Hyperion headquarters Milan"
          className="w-full h-80 md:h-[500px] object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-12 pb-14">
          <div className="text-xs text-primary tracking-widest mb-4" style={{ fontFamily: "'DM Mono', monospace" }}>
            MILAN, ITALY — SINCE 1872
          </div>
          <h1
            className="text-7xl md:text-[9rem] font-black leading-none tracking-tighter"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", lineHeight: 0.88 }}
          >
            WHO<br />WE ARE.
          </h1>
        </div>
        <div className="absolute right-0 top-0 h-full w-1 bg-primary opacity-60" />
      </div>

      {/* Manifesto */}
      <div className="px-6 md:px-12 py-20 border-b border-border grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
          <h2
            className="text-5xl md:text-6xl font-black leading-tight tracking-tighter mb-0"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            WE DON{"'"}T BUILD<br />TIRES. WE BUILD<br /><span className="text-primary">CONTROL.</span>
          </h2>
        </div>
        <div>
          <p className="text-lg font-light leading-relaxed text-muted-foreground mb-6">
            In 1872, Giovanni Battista Hyperion opened a small rubber goods workshop in Milan with a single conviction: that the connection between a vehicle and the road is the most critical engineering problem in transportation.
          </p>
          <p className="text-base font-light leading-relaxed text-muted-foreground mb-6">
            More than 150 years later, that conviction drives everything we do. We are the only tire manufacturer in the world whose products have been carried to victory in Formula 1, World Superbike, and World Rally Championship — simultaneously. We are the standard against which others measure.
          </p>
          <p className="text-base font-light leading-relaxed text-muted-foreground">
            Our 37,000 employees across 19 countries share one obsession: the contact patch. The 60cm² of rubber between your wheel and the road surface. We exist to make that patch perform beyond expectation.
          </p>
        </div>
      </div>

      {/* Company stats */}
      <div className="border-b border-border">
        <div className="grid grid-cols-2 md:grid-cols-4 border-b border-border">
          {[
            { value: "1872", label: "FOUNDED" },
            { value: "37,000", label: "EMPLOYEES" },
            { value: "19", label: "COUNTRIES" },
            { value: "€6.5B", label: "ANNUAL REVENUE" },
          ].map((s, i) => (
            <div key={i} className={`px-8 py-10 ${i < 3 ? "border-r border-border" : ""} text-center`}>
              <div className="text-4xl md:text-5xl font-black text-primary mb-2" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{s.value}</div>
              <div className="text-xs text-muted-foreground tracking-widest" style={{ fontFamily: "'DM Mono', monospace" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Values */}
      <div className="px-6 md:px-12 py-20 border-b border-border">
        <div className="text-xs text-primary tracking-widest mb-12" style={{ fontFamily: "'DM Mono', monospace" }}>OUR VALUES</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-border">
          {values.map((v, i) => (
            <div key={i} className={`p-8 md:p-10 ${i % 2 === 0 ? "border-r border-border" : ""} ${i < 2 ? "border-b border-border" : ""} hover:bg-card transition-colors`}>
              <div className="text-xs font-black tracking-widest text-primary mb-4" style={{ fontFamily: "'DM Mono', monospace" }}>{v.label}</div>
              <p className="text-base font-light leading-relaxed text-muted-foreground">{v.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Leadership */}
      <div className="px-6 md:px-12 py-20 border-b border-border bg-card">
        <div className="text-xs text-primary tracking-widest mb-12" style={{ fontFamily: "'DM Mono', monospace" }}>LEADERSHIP</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-border">
          {leadership.map((person, i) => (
            <div key={i} className={`border-b md:border-b-0 ${i < 3 ? "md:border-r" : ""} border-border hover:bg-secondary transition-colors`}>
              <div className="aspect-square overflow-hidden bg-secondary">
                <img src={person.image} alt={person.name} className="w-full h-full object-cover opacity-80 grayscale hover:grayscale-0 transition-all duration-500" />
              </div>
              <div className="p-6">
                <div className="font-black text-lg tracking-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{person.name}</div>
                <div className="text-xs text-primary tracking-widest mt-1" style={{ fontFamily: "'DM Mono', monospace" }}>{person.title.toUpperCase()}</div>
                <div className="text-xs text-muted-foreground mt-2" style={{ fontFamily: "'DM Mono', monospace" }}>SINCE {person.since}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sustainability */}
      <div className="px-6 md:px-12 py-20 border-b border-border">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <div className="text-xs text-primary tracking-widest mb-3" style={{ fontFamily: "'DM Mono', monospace" }}>SUSTAINABILITY</div>
            <h2 className="text-5xl md:text-6xl font-black leading-none tracking-tighter" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              THE ROAD AHEAD<br />MUST EXIST.
            </h2>
          </div>
        </div>
        <div className="flex flex-col gap-0 border border-border">
          {sustainability.map((item, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-[100px_1fr_140px] gap-0 border-b border-border last:border-b-0 items-center">
              <div className="px-6 py-5 border-b md:border-b-0 md:border-r border-border">
                <span className="text-2xl font-black text-primary" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{item.target}</span>
              </div>
              <div className="px-6 py-5 border-b md:border-b-0 md:border-r border-border">
                <p className="text-sm font-light text-muted-foreground">{item.goal}</p>
              </div>
              <div className="px-6 py-5">
                <div className="text-xs text-muted-foreground tracking-widest mb-2" style={{ fontFamily: "'DM Mono', monospace" }}>PROGRESS</div>
                <div className="h-1 bg-secondary relative">
                  <div
                    className="h-full bg-primary transition-all duration-1000"
                    style={{ width: `${item.progress}%` }}
                  />
                </div>
                <div className="text-xs text-primary mt-1.5 font-bold" style={{ fontFamily: "'DM Mono', monospace" }}>{item.progress}%</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Press CTA */}
      <div className="px-6 md:px-12 py-16 bg-card border-t border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="text-xs text-primary tracking-widest mb-2" style={{ fontFamily: "'DM Mono', monospace" }}>PRESS & MEDIA</div>
          <h3 className="text-3xl font-black tracking-tighter" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            MEDIA INQUIRIES & PRESS KIT.
          </h3>
          <p className="text-muted-foreground font-light mt-2 text-sm">
            Press@hyperion-tires.com · +39 02 6551 0000
          </p>
        </div>
        <button
          onClick={() => navigate("/products")}
          className="flex items-center gap-3 bg-primary text-primary-foreground px-10 py-4 text-sm font-bold tracking-widest hover:bg-red-700 transition-colors group flex-shrink-0"
        >
          VIEW PRODUCTS <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
