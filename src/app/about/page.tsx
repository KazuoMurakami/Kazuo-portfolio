"use client";
import { HeroAbout } from "./components/hero";
import { usePathname } from "next/navigation";
export default function Page() {
  const path = usePathname();
  console.log(path);
  return (
    <div className="bg-black">
      <HeroAbout />
    </div>
  );
}
