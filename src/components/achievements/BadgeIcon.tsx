import {
  Award,
  Compass,
  Cpu,
  Flame,
  Monitor,
  Rocket,
  Shield,
  Target,
  Trophy,
  Wallet,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  zap: Zap,
  flame: Flame,
  trophy: Trophy,
  target: Target,
  shield: Shield,
  award: Award,
  compass: Compass,
  cpu: Cpu,
  wallet: Wallet,
  monitor: Monitor,
  wrench: Wrench,
  rocket: Rocket,
};

export function BadgeIcon({
  icon,
  className = "h-5 w-5",
}: {
  icon: string;
  className?: string;
}) {
  const Icon = ICON_MAP[icon] ?? Award;
  return <Icon className={className} aria-hidden />;
}
