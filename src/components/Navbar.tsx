import { Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => (
  <header className="fixed top-0 inset-x-0 z-50">
    <div className="container mx-auto px-6 py-4">
      <nav className="glass rounded-full flex items-center justify-between px-5 py-2.5 shadow-soft">
        <a href="#" className="flex items-center gap-2 font-bold text-foreground">
          <span className="w-8 h-8 rounded-xl bg-gradient-primary flex items-center justify-center shadow-soft">
            <Wallet className="w-4 h-4 text-primary-foreground" />
          </span>
          Wallex
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#features" className="hover:text-foreground transition-colors">Features</a>
          <a href="#how" className="hover:text-foreground transition-colors">How it works</a>
          <a href="#preview" className="hover:text-foreground transition-colors">Preview</a>
        </div>
        <Button size="sm" className="rounded-full bg-gradient-primary hover:opacity-90 border-0">
          Download
        </Button>
      </nav>
    </div>
  </header>
);

export default Navbar;