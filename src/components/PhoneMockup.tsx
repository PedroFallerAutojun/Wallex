import { Bell, TrendingUp, TrendingDown, PiggyBank, Target, Lightbulb, ArrowUpRight, ArrowDownRight } from "lucide-react";

const PhoneMockup = () => {
  return (
    <div className="relative mx-auto w-[290px] sm:w-[320px]">
      {/* glow */}
      <div className="absolute -inset-10 bg-gradient-primary opacity-30 blur-3xl rounded-full" aria-hidden />

      <div className="relative rounded-[2.8rem] bg-foreground/95 p-3 shadow-glow animate-float">
        <div className="relative rounded-[2.2rem] bg-gradient-soft overflow-hidden aspect-[9/19]">
          {/* notch */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 h-6 w-24 bg-foreground rounded-full z-20" />

          <div className="p-5 pt-10 flex flex-col gap-3.5 h-full">
            {/* status bar */}
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>9:41</span>
              <Bell className="w-3.5 h-3.5" />
            </div>

            {/* insight header */}
            <div className="rounded-2xl bg-gradient-primary text-primary-foreground p-4 shadow-soft">
              <p className="text-[11px] opacity-80">Monthly Insight</p>
              <p className="text-xl font-bold tracking-tight mt-1">You saved $340</p>
              <div className="flex items-center gap-1 mt-1 text-[11px] opacity-90">
                <ArrowUpRight className="w-3 h-3" /> 18% more than last month
              </div>
            </div>

            {/* spending breakdown */}
            <div className="rounded-2xl bg-card p-3.5 shadow-card">
              <p className="text-[11px] font-semibold text-foreground mb-2">Spending Breakdown</p>
              <div className="flex flex-col gap-2">
                {[
                  { label: "Food & Dining", pct: 42, color: "bg-primary" },
                  { label: "Transport", pct: 28, color: "bg-accent" },
                  { label: "Shopping", pct: 18, color: "bg-muted-foreground" },
                  { label: "Bills", pct: 12, color: "bg-destructive" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2">
                    <div className="w-16">
                      <p className="text-[10px] text-muted-foreground">{item.label}</p>
                    </div>
                    <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden">
                      <div className={`h-full rounded-full ${item.color}`} style={{ width: `${item.pct}%` }} />
                    </div>
                    <span className="text-[10px] font-semibold w-7 text-right">{item.pct}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* insight cards */}
            <div className="grid grid-cols-2 gap-2">
              <div className="rounded-xl bg-card p-3 shadow-card">
                <div className="w-7 h-7 rounded-lg bg-primary/20 flex items-center justify-center mb-2">
                  <TrendingUp className="w-3.5 h-3.5 text-primary" />
                </div>
                <p className="text-[10px] text-muted-foreground">Top category</p>
                <p className="text-xs font-semibold text-foreground">Food</p>
              </div>
              <div className="rounded-xl bg-card p-3 shadow-card">
                <div className="w-7 h-7 rounded-lg bg-accent/20 flex items-center justify-center mb-2">
                  <TrendingDown className="w-3.5 h-3.5 text-accent" />
                </div>
                <p className="text-[10px] text-muted-foreground">Biggest drop</p>
                <p className="text-xs font-semibold text-foreground">Transport</p>
              </div>
            </div>

            {/* smart tip */}
            <div className="rounded-xl bg-accent/10 border border-accent/20 p-3">
              <div className="flex items-start gap-2">
                <Lightbulb className="w-3.5 h-3.5 text-accent mt-0.5 shrink-0" />
                <div>
                  <p className="text-[10px] font-semibold text-foreground">Smart Tip</p>
                  <p className="text-[10px] text-muted-foreground leading-relaxed mt-0.5">
                    You spend $180 on coffee. Brewing at home could save you $120/month.
                  </p>
                </div>
              </div>
            </div>

            {/* goal progress */}
            <div className="rounded-xl bg-card p-3 shadow-card">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-primary/20 flex items-center justify-center">
                    <Target className="w-3 h-3 text-primary" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold text-foreground">Vacation Fund</p>
                    <p className="text-[9px] text-muted-foreground">$2,400 / $5,000</p>
                  </div>
                </div>
                <span className="text-[10px] font-semibold text-primary">48%</span>
              </div>
              <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                <div className="h-full w-[48%] rounded-full bg-gradient-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneMockup;
