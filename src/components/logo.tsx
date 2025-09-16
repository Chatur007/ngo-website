import { Briefcase } from "lucide-react";
import Link from "next/link";

export function Logo() {
  return (
    <div className="flex items-center gap-2" aria-label="Skillbridge homepage">
      <Briefcase className="h-7 w-7 text-accent" />
      <span className="text-xl font-bold text-foreground font-headline">
        Skillbridge
      </span>
    </div>
  );
}
