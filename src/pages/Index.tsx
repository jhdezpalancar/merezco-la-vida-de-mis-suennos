import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Agitate from "@/components/Agitate";
import Solution from "@/components/Solution";
import Bonuses from "@/components/Bonuses";
import Offer from "@/components/Offer";
import Guarantee from "@/components/Guarantee";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Problem />
      <Agitate />
      <Solution />
      <Bonuses />
      <Offer />
      <Guarantee />
      <FAQ />
      <FinalCTA />
    </main>
  );
};

export default Index;
