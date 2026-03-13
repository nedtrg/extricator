import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import NFTGridSection from "@/components/sections/NFTGridSection";
import TrackRecordSection from "@/components/sections/TrackRecordSection";
import TeamSection from "@/components/sections/TeamSection";
import AlphaSection from "@/components/sections/AlphaSection";

export default function Home() {
  return (
    <main className="relative" style={{ backgroundColor: "#0a0008" }}>
      <Navbar />
      <HeroSection />
      <TrackRecordSection />
      <NFTGridSection />
      <TeamSection />
      <AlphaSection />
      <Footer />
    </main>
  );
}
