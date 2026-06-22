import { useState } from "react";
import { MapPin, Phone, Clock, ChevronRight, Search, Star } from "lucide-react";

const dealers = [
  {
    id: 1,
    name: "Hyperion Milano Centro",
    address: "Via Montenapoleone 12, 20121 Milano",
    phone: "+39 02 7600 1234",
    hours: "Mon–Sat 08:00–18:30",
    distance: "0.8 km",
    rating: 4.9,
    reviews: 312,
    certified: true,
    services: ["Fitting", "Balancing", "Alignment", "Storage"],
    type: "AUTHORIZED CENTRE",
  },
  {
    id: 2,
    name: "Autoservice Brera",
    address: "Corso Garibaldi 88, 20121 Milano",
    phone: "+39 02 6551 9900",
    hours: "Mon–Fri 08:00–19:00 · Sat 08:00–13:00",
    distance: "1.4 km",
    rating: 4.7,
    reviews: 188,
    certified: true,
    services: ["Fitting", "Balancing", "Alignment"],
    type: "CERTIFIED DEALER",
  },
  {
    id: 3,
    name: "Pneumatici Express Navigli",
    address: "Via Savona 54, 20144 Milano",
    phone: "+39 02 8940 2211",
    hours: "Mon–Sat 07:30–20:00",
    distance: "2.1 km",
    rating: 4.6,
    reviews: 97,
    certified: false,
    services: ["Fitting", "Balancing"],
    type: "AUTHORIZED RESELLER",
  },
  {
    id: 4,
    name: "Hyperion Store Roma EUR",
    address: "Viale Europa 24, 00144 Roma",
    phone: "+39 06 5922 3300",
    hours: "Mon–Sat 08:30–19:00",
    distance: "4.5 km",
    rating: 4.8,
    reviews: 241,
    certified: true,
    services: ["Fitting", "Balancing", "Alignment", "Storage", "TPMS"],
    type: "AUTHORIZED CENTRE",
  },
  {
    id: 5,
    name: "Speed & Style Torino",
    address: "Corso Francia 200, 10138 Torino",
    phone: "+39 011 4880 5500",
    hours: "Mon–Fri 08:00–18:30",
    distance: "5.2 km",
    rating: 4.5,
    reviews: 74,
    certified: false,
    services: ["Fitting", "Balancing", "Alignment"],
    type: "AUTHORIZED RESELLER",
  },
  {
    id: 6,
    name: "Hyperion Flagship Firenze",
    address: "Lungarno Corsini 8, 50123 Firenze",
    phone: "+39 055 2340 800",
    hours: "Mon–Sat 08:00–19:30 · Sun 10:00–16:00",
    distance: "6.0 km",
    rating: 5.0,
    reviews: 189,
    certified: true,
    services: ["Fitting", "Balancing", "Alignment", "Storage", "TPMS", "Track Prep"],
    type: "FLAGSHIP CENTRE",
  },
];

const serviceLabels: Record<string, string> = {
  "Fitting": "FITTING",
  "Balancing": "BALANCE",
  "Alignment": "ALIGNMENT",
  "Storage": "STORAGE",
  "TPMS": "TPMS",
  "Track Prep": "TRACK PREP",
};

export default function FindDealer() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<number | null>(1);

  const filters = ["All", "Authorized Centre", "Certified Dealer", "Flagship"];

  const filtered = dealers.filter((d) => {
    const matchSearch = d.name.toLowerCase().includes(search.toLowerCase()) ||
      d.address.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === "All" ||
      (filter === "Flagship" && d.type === "FLAGSHIP CENTRE") ||
      (filter === "Authorized Centre" && d.type === "AUTHORIZED CENTRE") ||
      (filter === "Certified Dealer" && d.type === "CERTIFIED DEALER");
    return matchSearch && matchFilter;
  });

  const selectedDealer = dealers.find((d) => d.id === selected);

  return (
    <div>
      {/* Header */}
      <div className="border-b border-border bg-card px-6 md:px-12 pt-12 pb-10">
        <div className="text-xs text-primary tracking-widest mb-4" style={{ fontFamily: "'DM Mono', monospace" }}>
          DEALER NETWORK
        </div>
        <h1
          className="text-6xl md:text-8xl font-black leading-none tracking-tighter mb-2"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          FIND A DEALER.
        </h1>
        <p className="text-muted-foreground font-light mt-3">
          40,000+ authorized Hyperion dealers worldwide. Expert fitment, genuine products, certified installation.
        </p>
      </div>

      {/* Search + filters */}
      <div className="border-b border-border">
        <div className="flex gap-0 border-b border-border">
          <div className="flex-1 flex items-center gap-3 px-6 py-4 border-r border-border">
            <Search size={16} className="text-muted-foreground flex-shrink-0" />
            <input
              type="text"
              placeholder="City, postcode, or dealer name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-transparent text-sm font-medium placeholder:text-muted-foreground/50 outline-none"
            />
          </div>
          <button className="bg-primary text-primary-foreground px-8 py-4 text-xs font-bold tracking-widest hover:bg-red-700 transition-colors flex items-center gap-2">
            <MapPin size={14} /> SEARCH
          </button>
        </div>
        <div className="flex overflow-x-auto" style={{ scrollbarWidth: "none" }}>
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`flex-shrink-0 px-6 py-3 text-xs font-bold tracking-widest border-r border-border transition-colors ${filter === f ? "text-primary bg-card" : "text-muted-foreground hover:text-foreground"}`}
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              {f.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Main layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh]">
        {/* List */}
        <div className="border-r border-border overflow-y-auto max-h-[70vh] lg:max-h-none">
          <div className="px-4 py-3 border-b border-border bg-secondary">
            <span className="text-xs text-muted-foreground tracking-widest" style={{ fontFamily: "'DM Mono', monospace" }}>
              {filtered.length} DEALERS FOUND
            </span>
          </div>
          {filtered.map((dealer) => (
            <div
              key={dealer.id}
              onClick={() => setSelected(dealer.id)}
              className={`px-6 py-5 border-b border-border cursor-pointer transition-colors ${selected === dealer.id ? "bg-card border-l-2 border-l-primary" : "hover:bg-card/50"}`}
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <h3 className="text-sm font-bold">{dealer.name}</h3>
                    {dealer.certified && (
                      <span className="text-xs font-bold tracking-widest px-1.5 py-0.5 bg-primary text-white" style={{ fontFamily: "'DM Mono', monospace" }}>✓</span>
                    )}
                  </div>
                  <div className="text-xs text-muted-foreground" style={{ fontFamily: "'DM Mono', monospace" }}>{dealer.type}</div>
                </div>
                <div className="text-xs text-muted-foreground flex-shrink-0" style={{ fontFamily: "'DM Mono', monospace" }}>{dealer.distance}</div>
              </div>
              <div className="text-xs text-muted-foreground mb-2">{dealer.address}</div>
              <div className="flex items-center gap-3">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={10} className={i < Math.floor(dealer.rating) ? "fill-primary text-primary" : "text-muted-foreground/30"} />
                  ))}
                </div>
                <span className="text-xs text-muted-foreground" style={{ fontFamily: "'DM Mono', monospace" }}>
                  {dealer.rating} ({dealer.reviews})
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Detail panel */}
        <div className="sticky top-16 p-8 md:p-10 overflow-y-auto max-h-[70vh] lg:max-h-none bg-card">
          {selectedDealer ? (
            <div>
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-1">
                  {selectedDealer.certified && (
                    <span className="text-xs font-bold tracking-widest px-2 py-1 bg-primary text-white" style={{ fontFamily: "'DM Mono', monospace" }}>{selectedDealer.type}</span>
                  )}
                </div>
                <h2 className="text-4xl font-black tracking-tighter mt-3" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  {selectedDealer.name}
                </h2>
              </div>

              <div className="flex flex-col gap-4 mb-8">
                <div className="flex items-start gap-3">
                  <MapPin size={14} className="text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{selectedDealer.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={14} className="text-primary flex-shrink-0" />
                  <a href={`tel:${selectedDealer.phone}`} className="text-sm font-bold hover:text-primary transition-colors">{selectedDealer.phone}</a>
                </div>
                <div className="flex items-start gap-3">
                  <Clock size={14} className="text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{selectedDealer.hours}</span>
                </div>
              </div>

              <div className="mb-8">
                <div className="text-xs text-muted-foreground tracking-widest mb-3" style={{ fontFamily: "'DM Mono', monospace" }}>SERVICES</div>
                <div className="flex flex-wrap gap-2">
                  {selectedDealer.services.map((svc) => (
                    <span key={svc} className="text-xs font-bold tracking-widest px-3 py-1.5 border border-border text-muted-foreground" style={{ fontFamily: "'DM Mono', monospace" }}>
                      {serviceLabels[svc] ?? svc.toUpperCase()}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3 mb-8">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} className={i < Math.floor(selectedDealer.rating) ? "fill-primary text-primary" : "text-muted-foreground/30"} />
                  ))}
                </div>
                <span className="font-bold">{selectedDealer.rating}</span>
                <span className="text-xs text-muted-foreground" style={{ fontFamily: "'DM Mono', monospace" }}>({selectedDealer.reviews} REVIEWS)</span>
              </div>

              <div className="flex flex-col gap-3">
                <button className="w-full bg-primary text-primary-foreground py-4 text-xs font-bold tracking-widest hover:bg-red-700 transition-colors flex items-center justify-center gap-2">
                  <ChevronRight size={14} /> BOOK APPOINTMENT
                </button>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(selectedDealer.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full border border-border text-foreground py-4 text-xs font-bold tracking-widest hover:border-foreground transition-colors flex items-center justify-center gap-2"
                >
                  <MapPin size={14} /> GET DIRECTIONS
                </a>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full text-muted-foreground">
              <div className="text-center">
                <MapPin size={32} className="mx-auto mb-3 opacity-30" />
                <p className="text-sm" style={{ fontFamily: "'DM Mono', monospace" }}>SELECT A DEALER</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom strip */}
      <div className="border-t border-border px-6 md:px-12 py-10 bg-secondary flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="text-xs text-primary tracking-widest mb-2" style={{ fontFamily: "'DM Mono', monospace" }}>BECOME A DEALER</div>
          <h3 className="text-3xl font-black tracking-tighter" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            JOIN THE HYPERION NETWORK.
          </h3>
        </div>
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <Phone size={14} className="text-primary" />
          Trade enquiries: <a href="tel:+18001234567" className="text-foreground font-bold hover:text-primary transition-colors">+1 800 123 4567</a>
        </div>
      </div>
    </div>
  );
}
