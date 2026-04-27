import {
  ArrowRight,
  Apple,
  Wallet,
  PieChart,
  Bell,
  Sparkles,
  Plus,
  TrendingUp,
  Target,
  Star,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import PhoneMockup from "@/components/PhoneMockup";

const features = [
  { icon: Wallet, title: "Track Every Expense", desc: "Easily log and categorize spending in seconds." },
  { icon: PieChart, title: "Visual Insights", desc: "Beautiful charts that reveal where your money goes." },
  { icon: Bell, title: "Smart Notifications", desc: "Stay on top of your budget without thinking about it." },
  { icon: Sparkles, title: "Simple & Fast", desc: "Minimal input, maximum clarity. Designed for daily use." },
];

const steps = [
  { icon: Plus, title: "Add your expenses", desc: "Log spending with a single tap. We auto-categorize the rest." },
  { icon: TrendingUp, title: "Track your spending", desc: "See clear, real-time insights into where your money goes." },
  { icon: Target, title: "Improve your finances", desc: "Set goals, build habits, and watch your savings grow." },
];

const testimonials = [
  { name: "Sofia M.", role: "Designer", quote: "I finally know where my money goes. Wallex made budgeting feel effortless." },
  { name: "Daniel R.", role: "Engineer", quote: "Cleanest finance app I've used. It just feels right — fast, calm, beautiful." },
  { name: "Amara K.", role: "Student", quote: "I saved more in 2 months with Wallex than the entire year before." },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-24 bg-gradient-hero">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs font-medium text-foreground mb-6 shadow-soft">
              <ShieldCheck className="w-3.5 h-3.5 text-primary" />
              Bank-grade privacy. Yours alone.
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
              Take control of your money <span className="text-gradient">effortlessly</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-lg">
              Track your expenses, understand your habits, and make smarter financial decisions — all in one calm, beautiful app.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" className="rounded-full bg-gradient-primary hover:opacity-90 border-0 shadow-soft h-12 px-7 text-base">
                <Apple className="w-5 h-5" /> Download Now
              </Button>
              <Button size="lg" variant="outline" className="rounded-full h-12 px-7 text-base">
                See how it works <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
                <span className="ml-1 font-semibold text-foreground">4.9</span>
              </div>
              <span>Loved by 50,000+ users</span>
            </div>
          </div>
          <div className="relative animate-fade-in" style={{ animationDelay: "0.15s" }}>
            <PhoneMockup />
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Features</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Everything you need. Nothing you don't.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="group rounded-3xl bg-card p-7 shadow-card hover:shadow-soft transition-all hover:-translate-y-1 border border-border/50"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-soft mb-5 group-hover:scale-110 transition-transform">
                  <f.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-lg">{f.title}</h3>
                <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="py-24 bg-gradient-soft">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">How it works</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Three steps to financial clarity</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 relative">
            {steps.map((s, i) => (
              <div key={s.title} className="relative rounded-3xl bg-card p-8 shadow-card border border-border/50">
                <div className="absolute -top-4 -left-2 text-7xl font-bold text-primary/10 select-none">
                  {i + 1}
                </div>
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-accent text-accent-foreground flex items-center justify-center mb-5">
                    <s.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-xl">{s.title}</h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App preview */}
      <section id="preview" className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Inside the app</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Designed to feel calm</h2>
            <p className="mt-4 text-muted-foreground">A glance is all it takes to know exactly where you stand.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {[
              { label: "Dashboard", offset: "md:translate-y-6" },
              { label: "Categories", offset: "" },
              { label: "Insights", offset: "md:translate-y-6" },
            ].map((p) => (
              <div key={p.label} className={`flex flex-col items-center gap-4 ${p.offset}`}>
                <PhoneMockup />
                <span className="text-sm font-medium text-muted-foreground">{p.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-soft">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Join thousands taking control of their finances
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-3xl bg-card p-7 shadow-card border border-border/50">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed">"{t.quote}"</p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-semibold">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-primary p-12 md:p-20 text-center shadow-glow">
            <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-primary-foreground/10 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-primary-foreground/10 blur-3xl" />
            <div className="relative">
              <h2 className="text-4xl md:text-6xl font-bold text-primary-foreground tracking-tight">
                Start managing your money today
              </h2>
              <p className="mt-5 text-lg text-primary-foreground/85 max-w-xl mx-auto">
                Free to download. Calm by design. Built for the way you actually live.
              </p>
              <div className="mt-8 flex justify-center">
                <Button size="lg" className="rounded-full bg-card text-foreground hover:bg-card/90 h-12 px-8 text-base shadow-soft">
                  <Apple className="w-5 h-5" /> Get Wallex
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/60 py-10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2 font-semibold text-foreground">
            <span className="w-7 h-7 rounded-lg bg-gradient-primary flex items-center justify-center">
              <Wallet className="w-3.5 h-3.5 text-primary-foreground" />
            </span>
            Wallex
          </div>
          <p>© 2026 Wallex. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
