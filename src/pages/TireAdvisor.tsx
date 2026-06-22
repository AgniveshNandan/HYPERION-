import { useState } from "react";
import { ChevronRight, ChevronLeft, RotateCcw } from "lucide-react";
import { useNavigate } from "react-router";

type Step = {
  id: string;
  question: string;
  sub: string;
  options: { label: string; desc: string; icon: string; value: string }[];
};

const steps: Step[] = [
  {
    id: "vehicle",
    question: "What do you drive?",
    sub: "Select the vehicle category that best describes your car.",
    options: [
      { label: "Sports Car", desc: "Coupe, convertible, supercar", icon: "🏎", value: "sports" },
      { label: "Sedan / Hatchback", desc: "Daily driver, family car", icon: "🚗", value: "sedan" },
      { label: "SUV / 4×4", desc: "Crossover, off-roader, pickup", icon: "🚙", value: "suv" },
      { label: "Estate / Wagon", desc: "Touring, load-carrying", icon: "🚐", value: "estate" },
    ],
  },
  {
    id: "use",
    question: "How do you drive?",
    sub: "Tell us about your typical driving conditions and habits.",
    options: [
      { label: "Daily Commute", desc: "Urban roads, motorways, mixed", icon: "🏙", value: "commute" },
      { label: "Long Distance", desc: "Motorway touring, road trips", icon: "🛣", value: "touring" },
      { label: "Performance", desc: "Spirited driving, track days", icon: "⚡", value: "performance" },
      { label: "Off-Road", desc: "Gravel, mud, mountain terrain", icon: "⛰", value: "offroad" },
    ],
  },
  {
    id: "season",
    question: "What conditions do you face?",
    sub: "Consider your local climate and the seasons you drive through.",
    options: [
      { label: "Summer Only", desc: "Dry & warm, above 7°C year-round", icon: "☀️", value: "summer" },
      { label: "All Year Round", desc: "Mixed seasons, light winter", icon: "🌦", value: "allseason" },
      { label: "Harsh Winters", desc: "Snow, ice, below 7°C regularly", icon: "❄️", value: "winter" },
      { label: "Wet Climate", desc: "Heavy rain, aquaplaning risk", icon: "🌧", value: "wet" },
    ],
  },
  {
    id: "priority",
    question: "What matters most to you?",
    sub: "Pick the single most important factor in your tire choice.",
    options: [
      { label: "Maximum Grip", desc: "Cornering, braking, track performance", icon: "🎯", value: "grip" },
      { label: "Fuel Economy", desc: "Low rolling resistance, cost savings", icon: "💶", value: "economy" },
      { label: "Comfort & Quiet", desc: "Smooth ride, low cabin noise", icon: "🤫", value: "comfort" },
      { label: "Long Tyre Life", desc: "Durable tread, value over time", icon: "📅", value: "longevity" },
    ],
  },
];

type Answers = Record<string, string>;

const recommendations: Record<string, { slug: string; name: string; tagline: string; reason: string; badge: string; badgeColor: string; image: string; price: string }> = {
  "sports-performance-summer-grip": {
    slug: "p-zero", name: "P Zero Corsa", tagline: "Track-Day Specialist",
    reason: "You drive a sports car hard in summer conditions and prioritise grip above all else. P Zero Corsa is the most capable road-legal Hyperion tire — born on the same compound as our F1 program.",
    badge: "PERFECT MATCH", badgeColor: "#e20a17",
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&h=500&fit=crop&auto=format",
    price: "From €249",
  },
  "default-performance": {
    slug: "p-zero", name: "P Zero", tagline: "Ultra High Performance",
    reason: "Your driving profile demands the best dry and wet grip available on the road. P Zero is Hyperion's flagship performance tire — chosen by Ferrari, Lamborghini, and McLaren as factory fitment.",
    badge: "TOP PICK", badgeColor: "#e20a17",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop&auto=format",
    price: "From €189",
  },
  "default-suv": {
    slug: "scorpion", name: "Scorpion", tagline: "SUV & 4×4 Performance",
    reason: "For SUV and 4×4 drivers who face varied terrain, the Scorpion combines motorway refinement with genuine off-road capability — and 3-Peak Mountain Snowflake certification for winter confidence.",
    badge: "TOP PICK", badgeColor: "#b35a00",
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&h=500&fit=crop&auto=format",
    price: "From €149",
  },
  "default-winter": {
    slug: "winter", name: "Winter", tagline: "Cold Weather Mastery",
    reason: "When temperatures drop below 7°C, standard tires harden and grip falls away. Hyperion Winter maintains compound flexibility down to −30°C — with 2,000+ micro-sipes for ice bite.",
    badge: "TOP PICK", badgeColor: "#1a4a8a",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&h=500&fit=crop&auto=format",
    price: "From €129",
  },
  "default-touring": {
    slug: "cinturato", name: "Cinturato", tagline: "All-Season Touring",
    reason: "For drivers who cover big miles and want confidence in every condition, the Cinturato combines an EU A-rated wet grip score with bio-silica fuel economy — fit and genuinely forget.",
    badge: "TOP PICK", badgeColor: "#2a7a3b",
    image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=800&h=500&fit=crop&auto=format",
    price: "From €109",
  },
};

function getRecommendation(answers: Answers) {
  const { vehicle, use, season, priority } = answers;

  if (vehicle === "sports" && use === "performance" && season === "summer" && priority === "grip") {
    return recommendations["sports-performance-summer-grip"];
  }
  if (vehicle === "suv" || use === "offroad") return recommendations["default-suv"];
  if (season === "winter" || season === "wet") return recommendations["default-winter"];
  if (use === "performance" || priority === "grip") return recommendations["default-performance"];
  if (use === "touring" || priority === "economy" || priority === "longevity") return recommendations["default-touring"];
  return recommendations["default-touring"];
}

const secondaryMap: Record<string, { slug: string; name: string; reason: string }> = {
  "p-zero": { slug: "cinturato", name: "Cinturato", reason: "For a more economical everyday option." },
  "cinturato": { slug: "p-zero", name: "P Zero", reason: "If you want to unlock more performance." },
  "scorpion": { slug: "winter", name: "Winter", reason: "If you face harsh winter conditions too." },
  "winter": { slug: "scorpion", name: "Scorpion", reason: "Year-round all-terrain alternative." },
};

export default function TireAdvisor() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [selected, setSelected] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  const step = steps[currentStep];
  const progress = ((currentStep) / steps.length) * 100;
  const isLast = currentStep === steps.length - 1;

  function handleSelect(value: string) {
    setSelected(value);
  }

  function handleNext() {
    if (!selected) return;
    const newAnswers = { ...answers, [step.id]: selected };
    setAnswers(newAnswers);
    setSelected(null);
    if (isLast) {
      setDone(true);
    } else {
      setCurrentStep((s) => s + 1);
    }
  }

  function handleBack() {
    if (currentStep === 0) return;
    setCurrentStep((s) => s - 1);
    setSelected(answers[steps[currentStep - 1].id] ?? null);
  }

  function handleReset() {
    setCurrentStep(0);
    setAnswers({});
    setSelected(null);
    setDone(false);
  }

  const recommendation = done ? getRecommendation(answers) : null;
  const secondary = recommendation ? secondaryMap[recommendation.slug] : null;

  return (
    <div className="min-h-[calc(100vh-4rem)]" style={{ fontFamily: "'Barlow', sans-serif" }}>
      {/* Header */}
      <div className="border-b border-border bg-card">
        <div className="px-6 md:px-12 py-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <div className="text-xs text-primary tracking-widest mb-3" style={{ fontFamily: "'DM Mono', monospace" }}>
              TIRE ADVISOR
            </div>
            <h1
              className="text-5xl md:text-7xl font-black leading-none tracking-tighter"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              FIND YOUR<br /><span className="text-primary">PERFECT TIRE.</span>
            </h1>
          </div>
          {!done && (
            <div className="flex flex-col gap-1 md:text-right">
              <div className="text-xs text-muted-foreground tracking-widest" style={{ fontFamily: "'DM Mono', monospace" }}>
                STEP {currentStep + 1} OF {steps.length}
              </div>
              <div className="text-xs text-muted-foreground tracking-widest" style={{ fontFamily: "'DM Mono', monospace" }}>
                {Math.round(((currentStep + 1) / steps.length) * 100)}% COMPLETE
              </div>
            </div>
          )}
        </div>

        {/* Progress bar */}
        {!done && (
          <div className="h-0.5 bg-secondary relative">
            <div
              className="h-full bg-primary transition-all duration-500 ease-out"
              style={{ width: `${progress + (100 / steps.length)}%` }}
            />
          </div>
        )}
      </div>

      {/* Step indicators */}
      {!done && (
        <div className="border-b border-border flex overflow-x-auto" style={{ scrollbarWidth: "none" }}>
          {steps.map((s, i) => (
            <div
              key={s.id}
              className={`flex-shrink-0 flex-1 px-6 py-3 border-r border-border last:border-r-0 transition-colors ${
                i < currentStep ? "bg-card" : i === currentStep ? "bg-background" : "bg-secondary/30"
              }`}
            >
              <div className={`text-xs font-bold tracking-widest ${i <= currentStep ? "text-primary" : "text-muted-foreground/40"}`} style={{ fontFamily: "'DM Mono', monospace" }}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className={`text-xs mt-0.5 hidden md:block ${i <= currentStep ? "text-foreground" : "text-muted-foreground/40"}`}>
                {s.id.charAt(0).toUpperCase() + s.id.slice(1)}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ── QUESTION STEP ── */}
      {!done && (
        <div className="px-6 md:px-12 py-16 max-w-5xl mx-auto">
          <div className="mb-12">
            <h2
              className="text-4xl md:text-6xl font-black leading-tight tracking-tighter mb-3"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              {step.question}
            </h2>
            <p className="text-muted-foreground font-light">{step.sub}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-border mb-10">
            {step.options.map((opt, i) => {
              const isSelected = selected === opt.value;
              const col = i % 2;
              const row = Math.floor(i / 2);
              const isLastCol = col === 1;
              const isLastRow = row === Math.floor((step.options.length - 1) / 2);
              return (
                <button
                  key={opt.value}
                  onClick={() => handleSelect(opt.value)}
                  className={`relative text-left p-8 md:p-10 transition-all duration-200 group
                    ${!isLastCol ? "border-r border-border" : ""}
                    ${!isLastRow ? "border-b border-border" : ""}
                    ${isSelected
                      ? "bg-primary/10 border-l-4 border-l-primary"
                      : "hover:bg-card"
                    }`}
                >
                  {isSelected && (
                    <div className="absolute top-4 right-4 w-5 h-5 bg-primary flex items-center justify-center">
                      <div className="w-2 h-2 bg-white" />
                    </div>
                  )}
                  <div className="text-3xl mb-4">{opt.icon}</div>
                  <div
                    className={`text-2xl font-black tracking-tight mb-1 transition-colors ${isSelected ? "text-primary" : "group-hover:text-primary"}`}
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    {opt.label}
                  </div>
                  <div className="text-sm text-muted-foreground font-light">{opt.desc}</div>
                </button>
              );
            })}
          </div>

          <div className="flex items-center justify-between">
            <button
              onClick={handleBack}
              disabled={currentStep === 0}
              className="flex items-center gap-2 text-sm font-bold tracking-widest text-muted-foreground hover:text-foreground transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              <ChevronLeft size={16} /> BACK
            </button>

            <button
              onClick={handleNext}
              disabled={!selected}
              className={`flex items-center gap-3 px-10 py-4 text-sm font-bold tracking-widest transition-all duration-200 group ${
                selected
                  ? "bg-primary text-primary-foreground hover:bg-red-700"
                  : "bg-secondary text-muted-foreground cursor-not-allowed"
              }`}
            >
              {isLast ? "SEE MY RECOMMENDATION" : "NEXT QUESTION"}
              <ChevronRight size={16} className={selected ? "group-hover:translate-x-1 transition-transform" : ""} />
            </button>
          </div>
        </div>
      )}

      {/* ── RESULTS ── */}
      {done && recommendation && (
        <div>
          {/* Hero result */}
          <div className="grid grid-cols-1 lg:grid-cols-2 border-b border-border">
            <div className="relative overflow-hidden min-h-72 bg-secondary">
              <img
                src={recommendation.image}
                alt={recommendation.name}
                className="w-full h-full object-cover opacity-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              <div
                className="absolute top-6 left-6 text-xs font-bold tracking-widest px-3 py-1.5"
                style={{ fontFamily: "'DM Mono', monospace", backgroundColor: recommendation.badgeColor, color: "#fff" }}
              >
                {recommendation.badge}
              </div>
            </div>

            <div className="px-8 md:px-14 py-14 border-l border-border flex flex-col justify-between">
              <div>
                <div className="text-xs text-primary tracking-widest mb-4" style={{ fontFamily: "'DM Mono', monospace" }}>
                  YOUR RECOMMENDATION
                </div>
                <h2
                  className="text-6xl md:text-7xl font-black leading-none tracking-tighter mb-2"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {recommendation.name}
                </h2>
                <p className="text-xs text-primary tracking-widest mb-8" style={{ fontFamily: "'DM Mono', monospace" }}>
                  {recommendation.tagline.toUpperCase()}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed font-light mb-8 max-w-md">
                  {recommendation.reason}
                </p>
                <div className="text-2xl font-black text-primary mb-8" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  {recommendation.price}
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <button
                  onClick={() => navigate(`/products/${recommendation.slug}`)}
                  className="flex items-center justify-center gap-3 bg-primary text-primary-foreground py-4 text-sm font-bold tracking-widest hover:bg-red-700 transition-colors group"
                >
                  VIEW FULL SPECS
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => navigate("/find-dealer")}
                  className="flex items-center justify-center gap-2 border border-border text-foreground py-4 text-sm font-bold tracking-widest hover:border-foreground transition-colors"
                >
                  FIND A DEALER
                </button>
              </div>
            </div>
          </div>

          {/* Your answers summary */}
          <div className="px-6 md:px-12 py-12 border-b border-border bg-card">
            <div className="text-xs text-muted-foreground tracking-widest mb-6" style={{ fontFamily: "'DM Mono', monospace" }}>
              YOUR ANSWERS
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-border">
              {steps.map((s, i) => {
                const answer = answers[s.id];
                const option = s.options.find((o) => o.value === answer);
                return (
                  <div key={s.id} className={`p-5 ${i < 3 ? "border-r border-border" : ""}`}>
                    <div className="text-xs text-muted-foreground tracking-widest mb-2" style={{ fontFamily: "'DM Mono', monospace" }}>
                      {s.id.toUpperCase()}
                    </div>
                    <div className="text-lg mb-1">{option?.icon}</div>
                    <div className="text-sm font-bold">{option?.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Secondary recommendation */}
          {secondary && (
            <div className="px-6 md:px-12 py-12 border-b border-border">
              <div className="text-xs text-muted-foreground tracking-widest mb-6" style={{ fontFamily: "'DM Mono', monospace" }}>
                ALSO CONSIDER
              </div>
              <div
                className="flex items-center justify-between border border-border p-8 hover:bg-card transition-colors cursor-pointer group"
                onClick={() => navigate(`/products/${secondary.slug}`)}
              >
                <div>
                  <h3
                    className="text-3xl font-black tracking-tighter"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    {secondary.name}
                  </h3>
                  <p className="text-sm text-muted-foreground font-light mt-1">{secondary.reason}</p>
                </div>
                <ChevronRight size={20} className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          )}

          {/* Reset / explore */}
          <div className="px-6 md:px-12 py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="text-xs text-muted-foreground tracking-widest mb-2" style={{ fontFamily: "'DM Mono', monospace" }}>
                NOT WHAT YOU EXPECTED?
              </div>
              <p className="text-sm text-muted-foreground font-light">Restart the advisor or browse all tires manually.</p>
            </div>
            <div className="flex gap-3 flex-wrap">
              <button
                onClick={handleReset}
                className="flex items-center gap-2 border border-border text-foreground px-8 py-4 text-xs font-bold tracking-widest hover:border-foreground transition-colors"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                <RotateCcw size={12} /> RESTART ADVISOR
              </button>
              <button
                onClick={() => navigate("/products")}
                className="flex items-center gap-2 bg-secondary text-foreground px-8 py-4 text-xs font-bold tracking-widest hover:bg-card transition-colors"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                BROWSE ALL TIRES <ChevronRight size={12} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
