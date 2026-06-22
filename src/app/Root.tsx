import { useState } from "react";
import { Outlet, NavLink, useNavigate } from "react-router";
import { Menu, X, ChevronDown } from "lucide-react";

const productDropdown = [
  { label: "P Zero", path: "/products/p-zero", tagline: "Ultra High Performance" },
  { label: "Cinturato", path: "/products/cinturato", tagline: "All-Season Touring" },
  { label: "Scorpion", path: "/products/scorpion", tagline: "SUV & 4×4 Performance" },
  { label: "Winter", path: "/products/winter", tagline: "Cold Weather Mastery" },
];

const navLinks = [
  { label: "Products", path: "/products", hasDropdown: true },
  { label: "Technology", path: "/technology" },
  { label: "Racing", path: "/racing" },
  { label: "Find Dealer", path: "/find-dealer" },
  { label: "About", path: "/about" },
];

export default function Root() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground" style={{ fontFamily: "'Barlow', sans-serif" }}>
      {/* ── NAV ── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 h-16 border-b border-border bg-background/95 backdrop-blur-sm"
        onMouseLeave={() => setDropdownOpen(false)}
      >
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate("/")}
            className="text-primary font-black tracking-tighter text-2xl leading-none hover:opacity-80 transition-opacity"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "-0.02em" }}
          >
            HYPERION
          </button>
          <div className="w-px h-5 bg-border hidden md:block" />
          <span className="text-muted-foreground text-xs tracking-widest hidden md:block" style={{ fontFamily: "'DM Mono', monospace" }}>
            SINCE 1872
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div key={link.label} className="relative" onMouseEnter={() => setDropdownOpen(true)}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `flex items-center gap-1 text-sm font-medium tracking-wide transition-colors duration-200 ${
                      isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                    }`
                  }
                >
                  {link.label}
                  <ChevronDown size={12} className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
                </NavLink>

                {dropdownOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-64 z-50">
                    <div className="bg-card border border-border shadow-2xl">
                      {productDropdown.map((item) => (
                        <button
                          key={item.path}
                          onClick={() => { navigate(item.path); setDropdownOpen(false); }}
                          className="w-full text-left px-5 py-4 border-b border-border last:border-b-0 hover:bg-secondary transition-colors group"
                        >
                          <div className="text-sm font-bold tracking-tight group-hover:text-primary transition-colors">
                            {item.label}
                          </div>
                          <div className="text-xs text-muted-foreground mt-0.5" style={{ fontFamily: "'DM Mono', monospace" }}>
                            {item.tagline.toUpperCase()}
                          </div>
                        </button>
                      ))}
                      <button
                        onClick={() => { navigate("/products"); setDropdownOpen(false); }}
                        className="w-full text-left px-5 py-3 bg-secondary hover:bg-muted transition-colors"
                      >
                        <div className="text-xs font-bold tracking-widest text-primary" style={{ fontFamily: "'DM Mono', monospace" }}>
                          VIEW ALL PRODUCTS →
                        </div>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={link.label}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium tracking-wide transition-colors duration-200 ${
                    isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  }`
                }
              >
                {link.label}
              </NavLink>
            )
          )}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/products")}
            className="hidden md:flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 text-xs font-bold tracking-widest hover:bg-red-700 transition-colors duration-200"
          >
            CONFIGURE TIRES
          </button>
          <button className="md:hidden text-foreground" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-background pt-16 px-6 md:hidden overflow-y-auto">
          <div className="flex flex-col gap-0 pt-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `text-2xl font-black tracking-wide border-b border-border py-5 block transition-colors ${
                    isActive ? "text-primary" : "text-foreground"
                  }`
                }
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {link.label.toUpperCase()}
              </NavLink>
            ))}
            <div className="pt-4 border-b border-border pb-5">
              <div className="text-xs text-muted-foreground tracking-widest mb-3" style={{ fontFamily: "'DM Mono', monospace" }}>
                PRODUCT LINES
              </div>
              {productDropdown.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between py-3 border-b border-border/50 last:border-0"
                >
                  <span className="text-sm font-bold">{item.label}</span>
                  <span className="text-xs text-muted-foreground" style={{ fontFamily: "'DM Mono', monospace" }}>
                    {item.tagline.toUpperCase()}
                  </span>
                </NavLink>
              ))}
            </div>
            <button
              onClick={() => { navigate("/products"); setMenuOpen(false); }}
              className="mt-6 bg-primary text-primary-foreground py-4 text-sm font-bold tracking-widest"
            >
              CONFIGURE TIRES
            </button>
          </div>
        </div>
      )}

      <main className="pt-16">
        <Outlet />
      </main>

      {/* ── FOOTER ── */}
      <footer className="border-t border-border bg-card">
        <div className="px-6 md:px-12 py-14">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-14">
            <div>
              <div
                className="text-2xl font-black tracking-tighter text-primary mb-3"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                HYPERION
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed font-light">
                Italian excellence in tire manufacturing since 1872. Pushing the boundaries of performance, safety, and sustainability.
              </p>
            </div>
            {[
              { title: "PRODUCTS", links: [["P Zero", "/products/p-zero"], ["Cinturato", "/products/cinturato"], ["Scorpion", "/products/scorpion"], ["Winter", "/products/winter"]] as [string, string][] },
              { title: "COMPANY", links: [["About Hyperion", "/about"], ["Racing", "/racing"], ["Technology", "/technology"], ["Find Dealer", "/find-dealer"]] as [string, string][] },
              { title: "SUPPORT", links: [["Find a Dealer", "/find-dealer"], ["Contact Us", "/about"], ["Warranty", "/about"], ["Press", "/about"]] as [string, string][] },
            ].map((col) => (
              <div key={col.title}>
                <div className="text-xs font-bold tracking-widest text-muted-foreground mb-5" style={{ fontFamily: "'DM Mono', monospace" }}>
                  {col.title}
                </div>
                <ul className="flex flex-col gap-3">
                  {col.links.map(([label, path]) => (
                    <li key={label}>
                      <button
                        onClick={() => navigate(path)}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors font-light"
                      >
                        {label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-border pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="text-xs text-muted-foreground" style={{ fontFamily: "'DM Mono', monospace" }}>
              © 2024 HYPERION TIRES S.P.A. · MILAN, ITALY
            </div>
            <div className="flex gap-6">
              {["Privacy Policy", "Cookie Policy", "Legal Notes"].map((link) => (
                <button key={link} className="text-xs text-muted-foreground hover:text-foreground transition-colors" style={{ fontFamily: "'DM Mono', monospace" }}>
                  {link}
                </button>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
