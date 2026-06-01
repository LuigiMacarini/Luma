import { PersonaCarousel } from "../components/sections/PersonaCarousel";
import { Hero } from "../components/sections/Hero";
import { TrustBar } from "../components/sections/TrustBar";
import { Features } from "../components/sections/Features";
import { DigitalReports } from "../components/sections/DigitalReports";
import { DoctorsNetwork } from "../components/sections/DoctorsNetwork";
import { Awareness } from "../components/sections/Awareness";
import { FinalCTA } from "../components/sections/FinalCTA";

export function HomePage() {
  return (
    <>
      <PersonaCarousel />
      <Hero />
      <TrustBar />
      <Features />
      <DigitalReports />
      <DoctorsNetwork />
      <Awareness />
      <FinalCTA />
    </>
  );
}
