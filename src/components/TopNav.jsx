import { Bell } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Logo from "./Logo.jsx";

export default function TopNav({ backTo }) {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-30 border-b border-white/5 bg-ink-950/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <button
          type="button"
          onClick={() => navigate(backTo ?? "/dashboard")}
          className="rounded-lg"
          aria-label="Go to dashboard"
        >
          <Logo size={32} />
        </button>

        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label="Notifications"
            className="relative rounded-full border border-white/10 bg-white/[0.03] p-2.5 text-slate-300 transition-colors hover:bg-white/[0.08]"
          >
            <Bell className="h-4.5 w-4.5" />
            <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-cyan-400" />
          </button>
          <button
            type="button"
            aria-label="Profile"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 font-heading text-sm font-semibold text-white shadow-glow"
          >
            RB
          </button>
        </div>
      </div>
    </header>
  );
}
