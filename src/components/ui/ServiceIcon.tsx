import { Plane, Hotel, Stamp, Map, Globe, Ship, Heart, Users, Sparkles, type LucideProps } from "lucide-react";
import type { ServiceIcon as IconName } from "@/data/services";

const map = { plane: Plane, hotel: Hotel, stamp: Stamp, map: Map, globe: Globe, ship: Ship, heart: Heart, users: Users, sparkles: Sparkles };

export default function ServiceIcon({ name, ...props }: { name: IconName } & LucideProps) {
  const Icon = map[name];
  return <Icon aria-hidden strokeWidth={1.5} {...props} />;
}
