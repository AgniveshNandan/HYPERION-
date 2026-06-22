import { useNavigate } from "react-router";
import { ChevronRight } from "lucide-react";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center border-b border-border">
      <div className="text-xs text-primary tracking-widest mb-6" style={{ fontFamily: "'DM Mono', monospace" }}>
        ERROR 404
      </div>
      <h1
        className="text-[clamp(5rem,20vw,14rem)] font-black leading-none tracking-tighter text-foreground/10 mb-0"
        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
      >
        404
      </h1>
      <h2
        className="text-4xl md:text-6xl font-black leading-none tracking-tighter -mt-4 mb-6"
        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
      >
        OFF THE MAP.
      </h2>
      <p className="text-muted-foreground font-light max-w-sm mb-10">
        The page you{"'"}re looking for doesn{"'"}t exist. Even our tires have limits — and apparently, so do URLs.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-sm font-bold tracking-widest hover:bg-red-700 transition-colors group"
        >
          RETURN HOME <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
        <button
          onClick={() => navigate("/products")}
          className="flex items-center gap-3 border border-border text-foreground px-8 py-4 text-sm font-bold tracking-widest hover:border-foreground transition-colors"
        >
          VIEW PRODUCTS
        </button>
      </div>
    </div>
  );
}
