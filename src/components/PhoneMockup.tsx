import { ArrowDownRight, ArrowUpRight, Coffee, ShoppingBag, Car, Bell } from "lucide-react";

const bars = [40, 65, 50, 80, 55, 90, 70];

const PhoneMockup = () => {
  return (
    <div className="relative mx-auto w-[290px] sm:w-[320px]">
      {/* glow */}
      <div className="absolute -inset-10 bg-gradient-primary opacity-30 blur-3xl rounded-full" aria-hidden />

      <div className="relative rounded-[2.8rem] bg-foreground/95 p-3 shadow-glow animate-float">
        <div className="relative rounded-[2.2rem] bg-gradient-soft overflow-hidden aspect-[9/19]">
          {/* notch */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 h-6 w-24 bg-foreground rounded-full z-20" />

          <div className="p-5 pt-10 flex flex-col gap-4 h-full">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>9:41</span>
              <Bell className="w-3.5 h-3.5" />
            </div>

            {/* balance card */}
            <div className="rounded-2xl bg-gradient-primary text-primary-foreground p-4 shadow-soft">
              <p className="text-[11px] opacity-80">Total balance</p>
              <p className="text-2xl font-bold tracking-tight mt-1">$4,820.50</p>
              <div className="flex items-center gap-1 mt-1 text-[11px] opacity-90">
                <ArrowUpRight className="w-3 h-3" /> +12.4% this month
              </div>
            </div>

            {/* chart */}
            <div className="rounded-2xl bg-card p-3 shadow-card">
              <div className="flex items-center justify-between mb-2">
                <p className="text-[11px] font-semibold text-foreground">Spending</p>
                <p className="text-[10px] text-muted-foreground">This week</p>
              </div>
              <div className="flex items-end gap-1.5 h-16">
                {bars.map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-md bg-gradient-primary opacity-80"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>

            {/* transactions */}
            <div className="flex flex-col gap-2">
              {[
                { icon: Coffee, label: "Cafe Mornings", amount: "-$4.80", color: "bg-accent text-accent-foreground" },
                { icon: ShoppingBag, label: "Groceries", amount: "-$32.10", color: "bg-accent text-accent-foreground" },
                { icon: Car, label: "Uber ride", amount: "-$12.40", color: "bg-accent text-accent-foreground" },
              ].map((t, i) => (
                <div key={i} className="flex items-center gap-3 rounded-xl bg-card p-2.5 shadow-card">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${t.color}`}>
                    <t.icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[11px] font-semibold text-foreground">{t.label}</p>
                    <p className="text-[10px] text-muted-foreground">Today</p>
                  </div>
                  <p className="text-[11px] font-semibold text-foreground flex items-center gap-0.5">
                    <ArrowDownRight className="w-3 h-3 text-primary" />
                    {t.amount}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneMockup;