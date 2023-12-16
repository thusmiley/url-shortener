import HomeHero from "@/components/HomeHero";
import ShortenerForm from "@/components/ShortenerForm";
import Stats from "@/components/Stats";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HomeHero />
      <ShortenerForm />
      <Stats />
    </main>
  );
}
